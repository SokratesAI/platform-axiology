// CNCF / architectural-pattern mappings per tradeOff+column.
// One entry per (tradeOffCode, columnIndex). Missing entries surface the
// "no technology here" empty state in the UI — that's a feature, not a bug.

export interface TechItem {
  name: string;
  initials: string;
  kind: 'tech' | 'pattern';
  reason: string;
  url?: string;
  /** simpleicons.org slug for the brand logo, e.g. "kubernetes". */
  iconSlug?: string;
}

export interface PositionMapping {
  techs: readonly TechItem[];
  patterns: readonly TechItem[];
  note?: string;
}

type CncfMap = Record<string, Record<number, PositionMapping>>;

interface TechOpts {
  url?: string;
  iconSlug?: string;
}

function tech(name: string, initials: string, reason: string, opts: TechOpts = {}): TechItem {
  return { name, initials, kind: 'tech', reason, url: opts.url, iconSlug: opts.iconSlug };
}
function pattern(name: string, initials: string, reason: string, opts: TechOpts = {}): TechItem {
  return { name, initials, kind: 'pattern', reason, url: opts.url, iconSlug: opts.iconSlug };
}

// Common item factories (deduplicate URL/slug definitions).
const T = {
  kubernetes: (reason: string) =>
    tech('Kubernetes', 'K8s', reason, { url: 'https://kubernetes.io', iconSlug: 'kubernetes' }),
  crossplane: (reason: string) =>
    tech('Crossplane', 'Cp', reason, { url: 'https://www.crossplane.io' }),
  backstage: (reason: string) =>
    tech('Backstage', 'Bs', reason, { url: 'https://backstage.io', iconSlug: 'backstage' }),
  argocd: (reason: string) =>
    tech('Argo CD', 'Ar', reason, { url: 'https://argo-cd.readthedocs.io', iconSlug: 'argo' }),
  flux: (reason: string) =>
    tech('Flux', 'Fx', reason, { url: 'https://fluxcd.io', iconSlug: 'flux' }),
  opa: (reason: string) =>
    tech('Open Policy Agent', 'OPA', reason, {
      url: 'https://www.openpolicyagent.org',
    }),
  kyverno: (reason: string) =>
    tech('Kyverno', 'Kv', reason, { url: 'https://kyverno.io' }),
  terraform: (reason: string) =>
    tech('Terraform', 'Tf', reason, { url: 'https://www.terraform.io', iconSlug: 'terraform' }),
  pulumi: (reason: string) =>
    tech('Pulumi', 'Pu', reason, { url: 'https://www.pulumi.com', iconSlug: 'pulumi' }),
  helm: (reason: string) =>
    tech('Helm', 'Hl', reason, { url: 'https://helm.sh', iconSlug: 'helm' }),
  grafana: (reason: string) =>
    tech('Grafana', 'Gf', reason, { url: 'https://grafana.com', iconSlug: 'grafana' }),
  prometheus: (reason: string) =>
    tech('Prometheus', 'Pr', reason, { url: 'https://prometheus.io', iconSlug: 'prometheus' }),
  opentelemetry: (reason: string) =>
    tech('OpenTelemetry', 'OT', reason, {
      url: 'https://opentelemetry.io',
      iconSlug: 'opentelemetry',
    }),
  vercel: (reason: string) =>
    tech('Vercel', 'Ve', reason, { url: 'https://vercel.com', iconSlug: 'vercel' }),
  heroku: (reason: string) =>
    tech('Heroku', 'Hk', reason, { url: 'https://www.heroku.com' }),
  render: (reason: string) =>
    tech('Render', 'Rn', reason, { url: 'https://render.com', iconSlug: 'render' }),
  cloudflare: (reason: string) =>
    tech('Cloudflare Workers', 'CF', reason, {
      url: 'https://workers.cloudflare.com',
      iconSlug: 'cloudflare',
    }),
  azure: (name: string, initials: string, reason: string, url: string) =>
    tech(name, initials, reason, { url }),
  aws: (name: string, initials: string, reason: string, url: string) =>
    tech(name, initials, reason, { url }),
  github: (name: string, initials: string, reason: string, url: string) =>
    tech(name, initials, reason, { url, iconSlug: 'githubactions' }),
  git: (reason: string) =>
    tech('Git', 'Gt', reason, { url: 'https://git-scm.com', iconSlug: 'git' }),
  istio: (reason: string) =>
    tech('Istio', 'Is', reason, { url: 'https://istio.io', iconSlug: 'istio' }),
  falco: (reason: string) =>
    tech('Falco', 'Fa', reason, { url: 'https://falco.org' }),
  renovate: (reason: string) =>
    tech('Renovate', 'Rv', reason, { url: 'https://www.mend.io/renovate/' }),
  dependabot: (reason: string) =>
    tech('Dependabot', 'Db', reason, { url: 'https://github.com/dependabot', iconSlug: 'dependabot' }),
  buf: (reason: string) => tech('Buf', 'Bf', reason, { url: 'https://buf.build' }),
  linear: (reason: string) =>
    tech('Linear', 'Ln', reason, { url: 'https://linear.app', iconSlug: 'linear' }),
};

const P = {
  goldenPath: (reason: string) =>
    pattern('Golden Path', 'GP', reason, {
      url: 'https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/',
    }),
  conventionOverConfig: (reason: string) =>
    pattern('Convention over Config', 'CC', reason, {
      url: 'https://en.wikipedia.org/wiki/Convention_over_configuration',
    }),
  platformAsProduct: (reason: string) =>
    pattern('Platform as Product', 'PP', reason, {
      url: 'https://teamtopologies.com/key-concepts/platform-as-product',
    }),
  idp: (reason: string) =>
    pattern('Internal Developer Platform', 'IDP', reason, {
      url: 'https://internaldeveloperplatform.org/',
    }),
  policyAsCode: (reason: string) =>
    pattern('Policy-as-Code', 'PaC', reason, {
      url: 'https://www.openpolicyagent.org/docs/latest/policy-language/',
    }),
  approvalGates: (reason: string) => pattern('Approval Gates', 'AG', reason),
  thinWrapper: (reason: string) => pattern('Thin Wrapper', 'TW', reason),
  strategicBuild: (reason: string) => pattern('Strategic Build', 'SB', reason),
  thinAdoption: (reason: string) => pattern('Thin Adoption', 'TA', reason),
  strategicNIH: (reason: string) => pattern('Strategic NIH', 'NIH', reason),
  configuredAdoption: (reason: string) => pattern('Configured Adoption', 'CA', reason),
  outcomeDeclared: (reason: string) => pattern('Outcome-Declared Infra', 'ODI', reason),
  paas: (reason: string) =>
    pattern('Platform as a Service', 'PaaS', reason, {
      url: 'https://en.wikipedia.org/wiki/Platform_as_a_service',
    }),
  softwareTemplates: (reason: string) =>
    pattern('Software Templates', 'ST', reason, {
      url: 'https://backstage.io/docs/features/software-templates/',
    }),
  progressiveAbstraction: (reason: string) => pattern('Progressive Abstraction', 'PA', reason),
  opinionatedDefaults: (reason: string) => pattern('Opinionated Defaults', 'OD', reason),
  expertIaC: (reason: string) => pattern('Expert IaC', 'IaC', reason),
  rawApis: (reason: string) => pattern('Raw Cloud APIs', 'API', reason),
  pavedRoad: (reason: string) =>
    pattern('Paved Road', 'PR', reason, {
      url: 'https://netflixtechblog.com/the-paved-path-evolution-9c2bbf2b8edd',
    }),
  scorecards: (reason: string) => pattern('Scorecards', 'SC', reason),
  enablingConstraints: (reason: string) => pattern('Enabling Constraints', 'EC', reason),
  policyMesh: (reason: string) => pattern('Policy Mesh', 'PM', reason),
  longCycleDeprecation: (reason: string) => pattern('Long-Cycle Deprecation', 'LCD', reason),
  versionedEvolution: (reason: string) => pattern('Versioned Evolution', 'VE', reason),
  predictableCadence: (reason: string) => pattern('Predictable Cadence', 'PC', reason),
  continuousDelivery: (reason: string) => pattern('Continuous Delivery', 'CD', reason),
  aggressiveIteration: (reason: string) => pattern('Aggressive Iteration', 'AI', reason),
  capacityAllocation: (reason: string) => pattern('Capacity Allocation', 'CA', reason),
  coreWithExtensions: (reason: string) => pattern('Core with Extensions', 'CwE', reason),
  singlePurpose: (reason: string) => pattern('Single-Purpose Platform', 'SPP', reason),
  trustWithVerification: (reason: string) => pattern('Trust with Verification', 'TwV', reason),
  strictEnforcement: (reason: string) => pattern('Strict Enforcement', 'SE', reason),
  debtLedger: (reason: string) => pattern('Debt Ledger', 'DL', reason),
  curatedCurrency: (reason: string) => pattern('Curated Currency', 'CC', reason),
  portableSubstrate: (reason: string) => pattern('Portable Substrate', 'PS', reason),
};

export const CNCF_MAPPINGS: CncfMap = {
  // ---------------- IV-G1: Autonomy ↔ Standardisation ----------------
  'IV-G1': {
    0: { techs: [], patterns: [], note: 'No technology places you here. This is a cultural default — the absence of any platform investment.' },
    1: {
      techs: [
        T.git('Convention through shared repos.'),
        T.github('GitHub Actions', 'GH', 'Light CI conventions.', 'https://github.com/features/actions'),
      ],
      patterns: [P.conventionOverConfig('Standards live as documented norms, not enforcement.')],
      note: 'Standards exist as documentation, not enforcement.',
    },
    2: {
      techs: [
        T.backstage('Templated projects encourage but do not enforce the path.'),
        tech('Cookiecutter', 'Ck', 'Project scaffolding as the suggested starting point.', {
          url: 'https://cookiecutter.readthedocs.io',
        }),
      ],
      patterns: [P.goldenPath('Documented preferred route, deviation permitted.')],
    },
    3: {
      techs: [
        T.backstage('Internal developer portal exposing the golden path.'),
        T.crossplane('Compositions encode the platform contract.'),
        tech('Port', 'Po', 'Catalog + golden paths with deviation process.', {
          url: 'https://www.getport.io',
        }),
      ],
      patterns: [
        P.platformAsProduct('Golden path with a defined deviation process.'),
        P.idp('Standards at the infra layer, autonomy at the product layer.'),
      ],
    },
    4: {
      techs: [
        T.opa('Policy-as-code: deviation requires explicit exception.'),
        T.kyverno('Kubernetes-native admission policy enforcement.'),
        tech('Checkov', 'Ch', 'Shift-left compliance scanning.', { url: 'https://www.checkov.io' }),
      ],
      patterns: [P.policyAsCode('Standards enforced by code, not committee.')],
    },
    5: {
      techs: [
        T.opa('Mandatory admission policies.'),
        T.kyverno('Block-by-default admission.'),
        T.azure('Azure Policy', 'AP', 'Org-wide mandatory controls.', 'https://learn.microsoft.com/en-us/azure/governance/policy/'),
        T.istio('Service-mesh-enforced contracts.'),
      ],
      patterns: [P.approvalGates('Mandate-driven adoption via review steps.')],
    },
    6: { techs: [], patterns: [], note: 'No technology helps here. This is a governance state, not a tool state.' },
  },

  // ---------------- I-G1: Build ↔ Adopt ----------------
  'I-G1': {
    0: { techs: [], patterns: [], note: 'Building everything is a cultural pattern, not a tool choice.' },
    1: {
      techs: [
        tech('Cluster API', 'CA', 'Build a custom internal provisioner above primitives.', {
          url: 'https://cluster-api.sigs.k8s.io',
          iconSlug: 'kubernetes',
        }),
      ],
      patterns: [P.strategicNIH('Build where genuine internal advantage exists.')],
    },
    2: {
      techs: [
        T.crossplane('Adopt the engine, wrap with internal Compositions.'),
        T.backstage('Adopt the portal, customise with internal plugins.'),
      ],
      patterns: [P.thinWrapper('External tools adopted with stable internal interface.')],
    },
    3: {
      techs: [
        T.crossplane('Adopt the engine; build only the composition layer.'),
        T.azure('Azure Service Operator', 'ASO', 'Adopt for cloud reconciliation, wrap thinly.', 'https://azure.github.io/azure-service-operator/'),
        T.flux('Adopt the reconciliation loop.'),
        T.argocd('Adopt the GitOps controller.'),
      ],
      patterns: [P.strategicBuild('Build only where there is genuine internal advantage.')],
    },
    4: {
      techs: [
        T.terraform('Adopt-as-is; minimal wrapping.'),
        T.helm('Configure upstream charts directly.'),
      ],
      patterns: [P.thinAdoption('External tools used without significant internal abstraction.')],
    },
    5: {
      techs: [
        T.vercel('Configured-as-a-service.'),
        T.render('Direct adoption of a managed runtime.'),
      ],
      patterns: [P.configuredAdoption('External tools and config — no internal abstraction.')],
    },
    6: { techs: [], patterns: [], note: 'Pure SaaS configuration. Tooling does not help with the governance risk.' },
  },

  // ---------------- III-G1: Abstraction Depth ----------------
  'III-G1': {
    0: {
      techs: [T.cloudflare('Outcome-level deployment; runtime decides everything.')],
      patterns: [P.outcomeDeclared('Consumer declares intent; platform implements.')],
    },
    1: {
      techs: [
        T.heroku('Domain primitives only; cloud hidden.'),
        T.render('AppService-style abstraction.'),
      ],
      patterns: [P.paas('Business primitives, no cloud concepts surfaced.')],
    },
    2: {
      techs: [
        T.backstage('Domain resource + curated parameters.'),
        tech('Port', 'Po', 'Domain catalog with technical configuration.', { url: 'https://www.getport.io' }),
      ],
      patterns: [P.softwareTemplates('Domain language with technical knobs.')],
    },
    3: {
      techs: [
        T.kubernetes('Operators expose domain CRDs; raw access remains available.'),
        T.crossplane('XRDs at the top; managed resources underneath.'),
      ],
      patterns: [
        P.progressiveAbstraction('Three tiers: simple → advanced → raw. Self-service at every layer.'),
      ],
    },
    4: {
      techs: [T.helm('Opinionated charts; values.yaml exposes every knob.')],
      patterns: [P.opinionatedDefaults('Defaults baked in; full override surface available.')],
    },
    5: {
      techs: [
        T.terraform('Full provider surface, plan/apply workflow.'),
        T.pulumi('IaC for infrastructure-native engineers.'),
      ],
      patterns: [P.expertIaC('Raw infra plus tooling and docs.')],
    },
    6: {
      techs: [
        T.azure('Azure ARM', 'ARM', 'Direct vendor APIs, no abstraction.', 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/'),
        T.aws('AWS SDK', 'AWS', 'Vendor-level primitives.', 'https://aws.amazon.com/tools/'),
      ],
      patterns: [P.rawApis('Direct cloud surface, maximum control, maximum cognitive load.')],
    },
  },

  // ---------------- VI-G2: Enabling ↔ Governing ----------------
  'VI-G2': {
    0: { techs: [], patterns: [], note: 'No enforcement, no rails — a cultural default, not a tool.' },
    1: {
      techs: [T.backstage('Self-service catalogs and templates with no hard gates.')],
      patterns: [P.pavedRoad('Make the right thing the easy thing.')],
    },
    2: {
      techs: [
        T.backstage('IDP with optional scorecards.'),
        tech('Port', 'Po', 'Catalog + scorecard signals.', { url: 'https://www.getport.io' }),
      ],
      patterns: [P.scorecards('Visibility-led nudges, no hard blocks.')],
    },
    3: {
      techs: [
        T.backstage('Golden paths plus selective enforcement.'),
        T.opa('Narrow admission policies on the riskiest changes.'),
        T.kyverno('Validating admission webhooks.'),
      ],
      patterns: [P.enablingConstraints('Minimum guardrails; everything else self-serve.')],
    },
    4: {
      techs: [
        T.opa('Broad admission policy enforcement.'),
        T.kyverno('Kubernetes-wide enforcement.'),
        T.falco('Runtime policy enforcement.'),
      ],
      patterns: [P.policyMesh('Enforce everywhere.')],
    },
    5: {
      techs: [T.azure('Azure Policy', 'AP', 'Org-mandated enforcement at the cloud layer.', 'https://learn.microsoft.com/en-us/azure/governance/policy/')],
      patterns: [P.approvalGates('Significant changes require platform review.')],
    },
    6: { techs: [], patterns: [], note: 'Full gatekeeping is a process state, not a tool state.' },
  },

  // ---------------- V-G1: Stability ↔ Velocity ----------------
  'V-G1': {
    0: { techs: [], patterns: [], note: 'Frozen platforms are governance states; no tool freezes for you.' },
    1: {
      techs: [T.kubernetes('Long-window deprecation as a first-class API contract.')],
      patterns: [P.longCycleDeprecation('Deprecation windows in years, with conversion tooling.')],
    },
    2: {
      techs: [
        T.kubernetes('CRD versioning (v1alpha1 → v1beta1 → v1) with conversion webhooks.'),
        T.buf('Protobuf version compatibility checking.'),
      ],
      patterns: [P.versionedEvolution('Explicit, multi-version coexistence.')],
    },
    3: {
      techs: [
        T.argocd('Sync waves and adoption tracking before deprecation.'),
        T.flux('Reconciliation with progressive rollout.'),
      ],
      patterns: [P.predictableCadence('90-day deprecation, migration tooling provided, adoption tracked.')],
    },
    4: {
      techs: [
        tech('Argo Rollouts', 'AR', 'Continuous delivery with progressive rollout.', {
          url: 'https://argo-rollouts.readthedocs.io',
          iconSlug: 'argo',
        }),
        tech('Flagger', 'Fl', 'Progressive delivery on service mesh.', {
          url: 'https://flagger.app',
        }),
      ],
      patterns: [P.continuousDelivery('Self-migrate windows shrink to 30–60 days.')],
    },
    5: {
      techs: [T.flux('Daily reconciliation; consumers absorb churn.')],
      patterns: [P.aggressiveIteration('Fast learning; high consumer burden.')],
    },
    6: { techs: [], patterns: [], note: 'Continuous churn without versioning is a process failure, not a tool.' },
  },

  // ---------------- II-G1: Reactive ↔ Proactive ----------------
  'II-G1': {
    3: {
      techs: [
        T.linear('Ticket queue management with capacity protection.'),
        T.prometheus('Observability surfaces toil before it becomes a ticket.'),
        T.grafana('Dashboards make proactive work visible.'),
      ],
      patterns: [P.capacityAllocation('Explicit reactive vs. proactive budget protected at planning.')],
      note: 'The technology helps observe and plan; the allocation decision is organisational.',
    },
  },

  // ---------------- I-L1: Capability Breadth ↔ Capability Depth ----------------
  'I-L1': {
    3: {
      techs: [
        T.kubernetes('Generalist substrate; specialist Operators per workload.'),
        T.crossplane('Specialist composition extensions.'),
      ],
      patterns: [P.coreWithExtensions('Generalist core; specialist extensions per primary workload.')],
    },
    6: {
      techs: [
        tech('Kubeflow', 'Kf', 'ML-specialist platform.', { url: 'https://www.kubeflow.org' }),
        tech('Databricks', 'Db', 'Data-specialist platform.', {
          url: 'https://www.databricks.com',
          iconSlug: 'databricks',
        }),
      ],
      patterns: [P.singlePurpose('Excellent for one workload type; nothing else.')],
    },
  },

  // ---------------- IV-G2: Trust-Building ↔ Enforcement ----------------
  'IV-G2': {
    3: {
      techs: [
        T.opa('Enforcement where it matters; visibility elsewhere.'),
        T.backstage('Trust through visibility and self-service.'),
      ],
      patterns: [P.trustWithVerification('Enforce minimum, trust beyond.')],
    },
    5: {
      techs: [
        T.kyverno('Hard admission control.'),
        T.falco('Runtime enforcement.'),
      ],
      patterns: [P.strictEnforcement('Every action checked.')],
    },
  },

  // ---------------- V-G2: Investment Now ↔ Accumulate Debt ----------------
  'V-G2': {
    3: {
      techs: [
        T.kubernetes('Use v1alpha1 to signal provisional schema explicitly.'),
        T.backstage('TechDocs as the debt ledger.'),
      ],
      patterns: [P.debtLedger('Track debt explicitly; schedule repayment.')],
    },
  },

  // ---------------- VII-L1: Ecosystem Currency ↔ Stability of Dependencies ----------------
  'VII-L1': {
    3: {
      techs: [
        T.renovate('Automated dependency updates with batching.'),
        T.dependabot('Continuous dependency PRs.'),
      ],
      patterns: [P.curatedCurrency('Track ecosystem, validate before adoption.')],
    },
  },

  // ---------------- VII-G2: Ecosystem Dependency ↔ Strategic Independence ----------------
  'VII-G2': {
    3: {
      techs: [
        T.crossplane('Abstraction layer over cloud providers.'),
        T.opentelemetry('Vendor-neutral observability.'),
      ],
      patterns: [P.portableSubstrate('Standardise on open interfaces; swap providers without migration.')],
    },
  },
};

export function getCncfMapping(
  tradeOffCode: string,
  columnIndex: number,
): PositionMapping | null {
  return CNCF_MAPPINGS[tradeOffCode]?.[columnIndex] ?? null;
}

export function hasCncfMapping(tradeOffCode: string): boolean {
  return tradeOffCode in CNCF_MAPPINGS;
}
