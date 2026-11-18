import { memo, useEffect, useRef, useState } from 'react';
import { CATEGORIES } from '../data/tradeOffs';
import type { Assessment } from '../storage/assessments';
import { categoryAccent } from '../data/theme';

export interface CompareDataset {
  id: string;
  name: string;
  currentColour: string;
  targetColour: string;
  assessments: Map<string, Assessment>;
  showCurrent: boolean;
  showTarget: boolean;
}

export interface CompareRoadmapGraphProps {
  datasets: readonly CompareDataset[];
  focusedDatasetId?: string | null;
  onRowClick?: (code: string | null) => void;
}

const PADDING_X = 12;
const COL_COUNT = 7;
const ROW_H = 34;
const HEADER_TOP_GAP = 18;
const HEADER_BOTTOM_GAP = 8;
const CATEGORY_BOTTOM_GAP = 16;
const TOP_LABEL_H = 34;
const NEUTRAL_DOT = '#e5e7eb';
const DEFAULT_WIDTH = 560;

interface Geom {
  width: number;
  axisLabelW: number;
  dotsStart: number;
  dotsEnd: number;
  colSpacing: number;
}

function geomFor(width: number): Geom {
  const axisLabelW = Math.min(140, Math.max(70, Math.round(width * 0.26)));
  const dotsStart = axisLabelW + 10;
  const dotsEnd = width - PADDING_X;
  const colSpacing = (dotsEnd - dotsStart) / (COL_COUNT - 1);
  return { width, axisLabelW, dotsStart, dotsEnd, colSpacing };
}

function colX(g: Geom, col: number): number {
  return g.dotsStart + col * g.colSpacing;
}

interface RowLayout {
  tradeOffCode: string;
  axis: string;
  y: number;
}

interface CategoryLayout {
  romanId: string;
  title: string;
  accentHex: string;
  startY: number;
  rows: RowLayout[];
}

function buildLayout(datasets: readonly CompareDataset[]): {
  categories: CategoryLayout[];
  rows: RowLayout[];
  height: number;
} {
  const isMarked = (code: string): boolean =>
    datasets.some(d => {
      const a = d.assessments.get(code);
      return a != null && (a.currentColumn != null || a.targetColumn != null);
    });

  const categories: CategoryLayout[] = [];
  const rows: RowLayout[] = [];
  let y = TOP_LABEL_H + HEADER_TOP_GAP;

  for (const cat of CATEGORIES) {
    const marked = cat.tradeOffs.filter(t => isMarked(t.code));
    if (marked.length === 0) continue;
    const startY = y;
    y += HEADER_BOTTOM_GAP;
    const catRows: RowLayout[] = marked.map(t => ({ tradeOffCode: t.code, axis: t.axis, y: 0 }));
    for (const row of catRows) {
      row.y = y;
      rows.push(row);
      y += ROW_H;
    }
    categories.push({
      romanId: cat.romanId,
      title: cat.title,
      accentHex: categoryAccent(cat.romanId).fromHex,
      startY,
      rows: catRows,
    });
    y += CATEGORY_BOTTOM_GAP;
  }

  return { categories, rows, height: Math.max(y, TOP_LABEL_H + HEADER_TOP_GAP + 60) };
}

const COL_LABELS_SHORT = ['Far', 'Mod', 'Mild', '●', 'Mild', 'Mod', 'Far'];
const COL_LABEL_TONE = ['rose', 'rose', 'rose', 'amber', 'sky', 'sky', 'sky'] as const;
const TONE_HEX: Record<(typeof COL_LABEL_TONE)[number], string> = {
  rose: '#be185d',
  amber: '#b45309',
  sky: '#0369a1',
};

interface HoveredNode {
  x: number;
  y: number;
  names: string[];
}

function namesAt(
  datasets: readonly CompareDataset[],
  rowCode: string,
  col: number,
  kind: 'current' | 'target',
): string[] {
  const out: string[] = [];
  for (const d of datasets) {
    const a = d.assessments.get(rowCode);
    if (!a) continue;
    if (kind === 'current' && d.showCurrent && a.currentColumn === col) out.push(d.name);
    if (kind === 'target' && d.showTarget && a.targetColumn === col) out.push(d.name);
  }
  return out;
}

export const CompareRoadmapGraph = memo(function CompareRoadmapGraph({
  datasets,
  focusedDatasetId,
  onRowClick,
}: CompareRoadmapGraphProps) {
  const { categories, rows, height } = buildLayout(datasets);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<HoveredNode | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState<number>(DEFAULT_WIDTH);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w && w > 100) setMeasuredWidth(Math.round(w));
    };
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const geom = geomFor(measuredWidth);

  const activeRow = selectedRow ?? hoveredRow;

  if (rows.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-neutral-300 bg-neutral-50/60 p-8 text-center text-sm text-neutral-600">
        No marked trade-offs across the uploaded roadmaps yet. Upload at least one roadmap JSON to
        draw the map.
      </div>
    );
  }

  const buildPath = (pts: { y: number; col: number }[]): string =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${colX(geom, p.col).toFixed(2)},${p.y.toFixed(2)}`).join(' ');

  const hasFocusedDataset = focusedDatasetId != null;

  const handleRowClick = (code: string) => {
    const next = selectedRow === code ? null : code;
    setSelectedRow(next);
    onRowClick?.(next);
  };

  return (
    <div ref={wrapRef} className="w-full">
    <svg
      viewBox={`0 0 ${geom.width} ${height}`}
      role="img"
      aria-label="Compare direction map — multiple roadmaps overlaid"
      className="block w-full"
    >
      {/* Column header labels */}
      <text x={geom.dotsStart} y={12} fontSize="11" fontWeight="600" fill="#be185d" textAnchor="middle">EXCESS</text>
      <text x={colX(geom, 3)} y={12} fontSize="11" fontWeight="600" fill="#b45309" textAnchor="middle">MEAN</text>
      <text x={colX(geom, 6)} y={12} fontSize="11" fontWeight="600" fill="#0369a1" textAnchor="middle">DEFICIENCY</text>

      {COL_LABELS_SHORT.map((label, c) => (
        <text key={c} x={colX(geom, c)} y={26} fontSize="10" fill={TONE_HEX[COL_LABEL_TONE[c]]} textAnchor="middle">
          {label}
        </text>
      ))}

      {/* Vertical grid lines */}
      {Array.from({ length: COL_COUNT }, (_, c) => (
        <line
          key={c}
          x1={colX(geom, c)} y1={TOP_LABEL_H}
          x2={colX(geom, c)} y2={height - 4}
          stroke={c === 3 ? '#fde68a' : '#f3f4f6'}
          strokeWidth={c === 3 ? 1.5 : 1}
        />
      ))}

      {/* Row hover highlight band */}
      {rows.map(row => (
        <rect
          key={`band-${row.tradeOffCode}`}
          x={0} y={row.y - ROW_H / 2 + 2}
          width={geom.width} height={ROW_H - 2}
          fill={activeRow === row.tradeOffCode ? '#f8fafc' : 'transparent'}
          rx={3}
          style={{ cursor: 'pointer' }}
          onClick={() => handleRowClick(row.tradeOffCode)}
          onMouseEnter={() => setHoveredRow(row.tradeOffCode)}
          onMouseLeave={() => setHoveredRow(null)}
        />
      ))}

      {/* Category headers */}
      {categories.map(cat => (
        <text
          key={cat.romanId}
          x={0} y={cat.startY}
          fontSize="11" fontWeight="700" letterSpacing="0.08em"
          fill={cat.accentHex}
        >
          {cat.title.toUpperCase()}
        </text>
      ))}

      {/* Axis labels — left column */}
      {rows.map(row => {
        const isActive = activeRow === row.tradeOffCode;
        const maxChars = Math.max(8, Math.floor(geom.axisLabelW / 6.5));
        const label = row.axis.length > maxChars ? row.axis.slice(0, maxChars - 1) + '…' : row.axis;
        return (
          <g
            key={`label-${row.tradeOffCode}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleRowClick(row.tradeOffCode)}
            onMouseEnter={() => setHoveredRow(row.tradeOffCode)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <title>{row.axis}</title>
            <text
              x={geom.axisLabelW}
              y={row.y + 4}
              fontSize="11"
              textAnchor="end"
              fill={isActive ? '#171717' : '#9ca3af'}
              fontWeight={isActive ? '600' : '400'}
            >
              {label}
            </text>
            {selectedRow === row.tradeOffCode && (
              <circle cx={geom.axisLabelW + 5} cy={row.y + 1} r={2.5} fill="#4f46e5" />
            )}
          </g>
        );
      })}

      {/* Neutral row dots */}
      {rows.map(row => (
        <g key={`bg-${row.tradeOffCode}`} pointerEvents="none">
          {Array.from({ length: COL_COUNT }, (_, c) => (
            <circle key={c} cx={colX(geom, c)} cy={row.y} r={2} fill={NEUTRAL_DOT} />
          ))}
        </g>
      ))}

      {/* Per-dataset lines + dots */}
      {datasets.map(ds => {
        const isFaded = hasFocusedDataset && focusedDatasetId !== ds.id;
        const opacity = isFaded ? 0.12 : 1;

        const currentPts: { y: number; col: number; code: string }[] = [];
        const targetPts: { y: number; col: number; code: string }[] = [];
        for (const row of rows) {
          const a = ds.assessments.get(row.tradeOffCode);
          if (ds.showCurrent && a?.currentColumn != null) currentPts.push({ y: row.y, col: a.currentColumn, code: row.tradeOffCode });
          if (ds.showTarget && a?.targetColumn != null) targetPts.push({ y: row.y, col: a.targetColumn, code: row.tradeOffCode });
        }

        return (
          <g key={ds.id} style={{ opacity }}>
            {targetPts.length > 1 && (
              <path
                d={buildPath(targetPts)}
                stroke={ds.targetColour}
                strokeWidth={1.5}
                strokeLinecap="round" strokeLinejoin="round"
                fill="none" opacity={0.85}
                strokeDasharray="4 3"
                pointerEvents="none"
              />
            )}
            {currentPts.length > 1 && (
              <path
                d={buildPath(currentPts)}
                stroke={ds.currentColour}
                strokeWidth={1.75}
                strokeLinecap="round" strokeLinejoin="round"
                fill="none" opacity={0.95}
                pointerEvents="none"
              />
            )}
            {currentPts.map(p => {
              const isRowActive = activeRow === p.code;
              return (
                <circle
                  key={`c-${ds.id}-${p.code}`}
                  cx={colX(geom, p.col)} cy={p.y}
                  r={isRowActive ? 5.5 : 4}
                  fill={ds.currentColour}
                  stroke="white"
                  strokeWidth={isRowActive ? 2 : 1.25}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() =>
                    setHoveredNode({
                      x: colX(geom, p.col),
                      y: p.y,
                      names: namesAt(datasets, p.code, p.col, 'current'),
                    })
                  }
                  onMouseLeave={() => setHoveredNode(null)}
                />
              );
            })}
            {targetPts.map(p => {
              const isRowActive = activeRow === p.code;
              return (
                <circle
                  key={`t-${ds.id}-${p.code}`}
                  cx={colX(geom, p.col)} cy={p.y}
                  r={isRowActive ? 6 : 4.5}
                  fill="white"
                  stroke={ds.targetColour}
                  strokeWidth={isRowActive ? 2.5 : 1.75}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() =>
                    setHoveredNode({
                      x: colX(geom, p.col),
                      y: p.y,
                      names: namesAt(datasets, p.code, p.col, 'target'),
                    })
                  }
                  onMouseLeave={() => setHoveredNode(null)}
                />
              );
            })}
          </g>
        );
      })}

      {/* Node hover tooltip — stacked names when multiple roadmaps share a position */}
      {hoveredNode && hoveredNode.names.length > 0 && (() => {
        const lineH = 14;
        const padX = 7;
        const padY = 5;
        const charW = 6;
        const longest = hoveredNode.names.reduce((m, n) => Math.max(m, n.length), 0);
        const boxW = Math.min(180, Math.max(48, longest * charW + padX * 2));
        const boxH = hoveredNode.names.length * lineH + padY * 2;
        const offsetY = 10;
        let boxX = hoveredNode.x - boxW / 2;
        let boxY = hoveredNode.y + offsetY;
        if (boxX < 2) boxX = 2;
        if (boxX + boxW > geom.width - 2) boxX = geom.width - 2 - boxW;
        if (boxY + boxH > height - 2) boxY = hoveredNode.y - offsetY - boxH;
        return (
          <g pointerEvents="none">
            <rect
              x={boxX}
              y={boxY}
              width={boxW}
              height={boxH}
              rx={4}
              fill="#171717"
              fillOpacity={0.92}
            />
            {hoveredNode.names.map((name, i) => (
              <text
                key={i}
                x={boxX + padX}
                y={boxY + padY + (i + 1) * lineH - 3}
                fontSize="11"
                fill="white"
              >
                {name.length > 28 ? name.slice(0, 27) + '…' : name}
              </text>
            ))}
          </g>
        );
      })()}

    </svg>
    </div>
  );
});

