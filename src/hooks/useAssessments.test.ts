import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAssessments } from './useAssessments';
import { clearAll } from '../storage/assessments';

describe('useAssessments', () => {
  beforeEach(() => {
    localStorage.clear();
    clearAll();
  });

  it('exposes an empty map when nothing is stored', () => {
    const { result } = renderHook(() => useAssessments());
    expect(result.current.assessments).toBeInstanceOf(Map);
    expect(result.current.assessments.size).toBe(0);
  });

  it('reflects setCurrent in the map', () => {
    const { result } = renderHook(() => useAssessments());
    act(() => {
      result.current.setCurrent('I-L1', 5);
    });
    expect(result.current.assessments.get('I-L1')?.currentColumn).toBe(5);
  });

  it('keeps target when current changes (and vice versa)', () => {
    const { result } = renderHook(() => useAssessments());
    act(() => {
      result.current.setCurrent('II-G1', 4);
    });
    act(() => {
      result.current.setTarget('II-G1', 3);
    });
    expect(result.current.assessments.get('II-G1')?.currentColumn).toBe(4);
    expect(result.current.assessments.get('II-G1')?.targetColumn).toBe(3);
  });

  it('exports a JSON blob and re-imports it', () => {
    const { result } = renderHook(() => useAssessments());
    act(() => {
      result.current.setCurrent('IV-G1', 5);
      result.current.setTarget('IV-G1', 3);
    });
    const json = result.current.exportJSON();

    act(() => {
      result.current.clear();
    });
    expect(result.current.assessments.size).toBe(0);

    let importResult: ReturnType<typeof result.current.importJSON> = { ok: false };
    act(() => {
      importResult = result.current.importJSON(json);
    });
    expect(importResult.ok).toBe(true);
    expect(result.current.assessments.get('IV-G1')?.currentColumn).toBe(5);
    expect(result.current.assessments.get('IV-G1')?.targetColumn).toBe(3);
  });

  it('rejects invalid JSON on import', () => {
    const { result } = renderHook(() => useAssessments());
    const bad = result.current.importJSON('not json');
    expect(bad.ok).toBe(false);
  });

  it('clear() empties the store', () => {
    const { result } = renderHook(() => useAssessments());
    act(() => {
      result.current.setCurrent('V-G1', 2);
    });
    expect(result.current.assessments.size).toBe(1);
    act(() => {
      result.current.clear();
    });
    expect(result.current.assessments.size).toBe(0);
  });
});
