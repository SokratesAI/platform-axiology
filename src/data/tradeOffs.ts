// AUTO-GENERATED from axiology/TradeOffs/*.md by scripts/build-trade-offs.mjs.
// Do not edit by hand. Re-run `node scripts/build-trade-offs.mjs` after changing the markdown.

export const COLUMN_LABELS = [
  'Far Excess',
  'Moderate Excess',
  'Mild Excess',
  'The Mean',
  'Mild Deficiency',
  'Moderate Deficiency',
  'Far Deficiency',
] as const;

export const VIRTUE_INDEX = 3;

export type ColumnIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TradeOffType = 'L' | 'G';

export interface TradeOffColumn {
  positionName: string;
  description: string;
  howArrive: string;
  internalNarrative: string;
  whatItProduces: string;
  whenCorrect: string;
  failureSignal: string;
  theCorrective: string;
}

export interface TradeOff {
  code: string;
  axis: string;
  type: TradeOffType;
  summary: string;
  columns: readonly TradeOffColumn[];
}

export interface Category {
  romanId: string;
  title: string;
  theme: string;
  definition: string;
  tradeOffs: readonly TradeOff[];
}

export const CATEGORIES: readonly Category[] = [
  {
    "romanId": "I",
    "title": "Composition & Substance",
    "theme": "",
    "definition": "What is the platform made of? Every decision about the components, technologies, capabilities, and knowledge that constitute the platform.",
    "tradeOffs": [
      {
        "code": "I-L1",
        "axis": "Capability Breadth ↔ Capability Depth",
        "type": "L",
        "summary": "Legitimate tension — serving more teams (breadth) versus serving specific teams with excellence (depth)",
        "columns": [
          {
            "positionName": "Universal Coverage",
            "description": "Platform serves every conceivable workload type equally. No team excluded, none prioritised, none served with genuine excellence.",
            "howArrive": "Organisation grows without anyone ever making an explicit prioritisation decision. Every team's needs are accommodated reactively. The platform becomes everything to everyone through accumulated small yeses.",
            "internalNarrative": "\"We are inclusive. We serve everyone. No team is left behind.\" The team feels broad-minded and fair.",
            "whatItProduces": "No workload is excellently served. Lowest common denominator everywhere. Platform team spread too thin to achieve depth anywhere. High political peace, low technical value.",
            "whenCorrect": "Never a deliberate choice. Always an accumulated outcome.",
            "failureSignal": "Widespread undocumented customisation. Every team feels the platform is \"almost right.\" Platform team cannot improve anything deeply because they are maintaining everything shallowly. Onboarding takes weeks regardless of workload type.",
            "theCorrective": "Name your top three workload types publicly. Make the priority hierarchy explicit before the next planning cycle. You cannot improve everything — choose what to improve."
          },
          {
            "positionName": "Broad Generalist",
            "description": "Wide range of workloads served. No explicit priority hierarchy. Some workloads implicitly better served than others.",
            "howArrive": "Platform team avoids the political difficulty of naming priorities. \"We serve all teams\" is easier to say than \"we serve these teams better than those.\"",
            "internalNarrative": "\"We are versatile. We can handle diverse needs.\" The team feels capable and responsive.",
            "whatItProduces": "Broad applicability. Few teams need to go elsewhere. But non-primary workload teams discover second-class status during incidents, not onboarding.",
            "whenCorrect": "Very large enterprises with genuinely equal workload diversity where prioritisation would cause significant political damage.",
            "failureSignal": "Non-primary workload teams discover their status during incidents, not during onboarding. Silent resentment accumulates. Platform team surprised by complaints from teams they thought they served.",
            "theCorrective": "Surface the implicit hierarchy. The hidden priority is already operating. Making it explicit reduces resentment and enables honest investment planning."
          },
          {
            "positionName": "Generalist with Priorities",
            "description": "Wide coverage with a loose but acknowledged priority hierarchy. Primary workloads receive more investment. Secondary workloads explicitly acknowledged as lower priority.",
            "howArrive": "Platform has named priorities informally but never written them down or governed them. The hierarchy exists in the platform team's heads but nowhere else.",
            "internalNarrative": "\"We know what matters most but we still try to serve everyone reasonably.\" The team feels responsible.",
            "whatItProduces": "Wide applicability with honest expectations. Teams know what is primary. Investment decisions create recurring tension with secondary workload teams.",
            "whenCorrect": "Large organisations with diverse but unequal workload distribution beginning to acknowledge the hierarchy.",
            "failureSignal": "Investment decisions for secondary workloads create recurring conflict. Teams game the priority system by framing secondary needs as primary.",
            "theCorrective": "Invest in extension governance before adding another capability. Run one deprecation cycle to prove the pruning process works before expanding scope."
          },
          {
            "positionName": "Core with Tiered Extensions",
            "description": "Generalist substrate with well-governed specialist extensions per primary workload type. Priority hierarchy explicit, documented, and reviewed. Secondary workloads have a defined path to extension.",
            "howArrive": "Platform team made explicit prioritisation decisions, communicated them, and built governance to maintain them. Extensions are approved, not accumulated.",
            "internalNarrative": "\"We are excellent where we focus and honest about what we don't do.\" The team feels confident and clear.",
            "whatItProduces": "Excellent primary workload service. Good secondary service. Consistent governance across extensions. Clear expectations for all consumers.",
            "whenCorrect": "Most organisations with dedicated platform teams. The default for organisations serving multiple workload types at meaningful scale.",
            "failureSignal": "Extensions growing inconsistent. Governance overhead increasing without proportional investment. Consumer confusion about which extension to use for which workload.",
            "theCorrective": "—"
          },
          {
            "positionName": "Opinionated Generalist",
            "description": "Platform optimised for 2–3 primary workload types. Others supported only where they fit the primary model without significant adaptation.",
            "howArrive": "Organisation's workload mix shifted toward a dominant type and the platform followed, explicitly narrowing scope with leadership agreement.",
            "internalNarrative": "\"We have made hard choices to be excellent for our primary consumers.\" The team feels focused.",
            "whatItProduces": "Very good primary workload service. Focused investment produces quality. Teams with non-primary workloads must find alternatives, which creates friction.",
            "whenCorrect": "ML-heavy, data-first, or other organisations where one workload type represents 80%+ of actual work.",
            "failureSignal": "Legitimate workload types refused. Shadow platforms emerging for excluded workload types. Political pressure to expand scope growing.",
            "theCorrective": "Define the support path for excluded workload types explicitly. The boundary should be a handoff, not a wall."
          },
          {
            "positionName": "Primary Workload Focus",
            "description": "Platform clearly optimised for one primary workload. Others are second-class and must adapt significantly or seek alternatives.",
            "howArrive": "Business need concentrates heavily on one workload type. Platform team makes explicit decision to optimise for it and communicates the consequences to other teams.",
            "internalNarrative": "\"We are the best at what we do for our core users.\" The team feels expert and proud.",
            "whatItProduces": "Best-in-class for primary workload. Non-primary workload teams explicitly excluded. Organisational fragmentation possible as excluded teams build alternatives.",
            "whenCorrect": "Organisations with a single clearly dominant workload type that has been explicitly named and agreed.",
            "failureSignal": "Non-primary workload teams beginning parallel infrastructure. Organisational overhead of fragmentation becoming visible in costs and coordination.",
            "theCorrective": "Check whether excluded workloads represent a growing share of organisational work. The business may be moving toward the workloads you optimised against."
          },
          {
            "positionName": "Single Purpose",
            "description": "Platform serves exactly one workload type with full excellence. All others unsupported by design.",
            "howArrive": "Platform built from inception for one specific workload. Scope deliberately constrained to achieve excellence in that domain.",
            "internalNarrative": "\"We do one thing and we do it perfectly.\" The team feels specialised and highly competent.",
            "whatItProduces": "Perfect for the intended workload. No compromise. Maximum depth and expertise in one domain. Parallel platform infrastructure required for everything else.",
            "whenCorrect": "Platforms built for a single product or purpose. Kubeflow, Databricks. Appropriate when one workload is the entire organisation's reason for the platform.",
            "failureSignal": "Multiple parallel platforms proliferating. Total platform overhead exceeding the benefit of specialisation. Coordination cost between parallel platforms significant.",
            "theCorrective": "Check whether the rest of the organisation has built shadow infrastructure. If so, the single-purpose decision has already been overridden by organisational reality."
          }
        ]
      },
      {
        "code": "I-L2",
        "axis": "Ecosystem Alignment ↔ Internal Coherence",
        "type": "L",
        "summary": "Legitimate tension — tracking the best available external tools (alignment) versus ensuring all tools share common patterns and interfaces (coherence)",
        "columns": [
          {
            "positionName": "Ecosystem Maximalism",
            "description": "Platform adopts every excellent new tool as it emerges. No stability window. Constant evaluation and replacement cycles. Consumers encounter different patterns across capabilities.",
            "howArrive": "No coherence governance exists. Platform team members each adopt tools they find compelling. Nobody owns the integration pattern.",
            "internalNarrative": "\"We use the best tool for each job. We are cutting-edge.\" The team feels technically sophisticated and current.",
            "whatItProduces": "Maximum capability currency but incoherent consumer experience. Onboarding permanently difficult as every capability has different mental models. Platform team spends significant time on integration.",
            "whenCorrect": "Never a deliberate choice.",
            "failureSignal": "Consumer onboarding taking weeks. Every capability requiring separate mental model. Senior engineers spending time translating between platform components. Support tickets consistently about \"which way do I do X in this part of the platform.\"",
            "theCorrective": "Stop all adoptions. Mandate a coherence review for every existing tool. Unify integration patterns before adopting anything new."
          },
          {
            "positionName": "Active Tracking",
            "description": "Platform tracks ecosystem actively and adopts tools at defined maturity thresholds. Some internal inconsistency accepted as the cost of currency.",
            "howArrive": "Platform team values capability highly and treats coherence as secondary. Each adoption is individually justified without considering the accumulating inconsistency.",
            "internalNarrative": "\"We stay current while being selective.\" The team feels informed and capable.",
            "whatItProduces": "Good capability currency with some consumer-visible inconsistency. Integration overhead high. Platform team managing complexity at the seams.",
            "whenCorrect": "Large platform teams with strong ecosystem awareness and active integration capacity where consumer base tolerates some inconsistency.",
            "failureSignal": "Consumer confusion about which integration pattern applies. Platform team unable to provide consistent operational guidance across capabilities.",
            "theCorrective": "Invest in the integration abstraction layer before the next adoption. Currency without coherence is confusion. The abstraction layer is what makes adoption safe."
          },
          {
            "positionName": "Curated Adoption",
            "description": "Platform adopts tools deliberately with a defined evaluation process. Coherence preferred but overridden for significant capability gains. New tools wrapped to maintain surface consistency.",
            "howArrive": "Platform adopted several tools quickly, then noticed the coherence problem and instituted a process to slow down without fully stopping.",
            "internalNarrative": "\"We adopt carefully and wrap well.\" The team feels disciplined.",
            "whatItProduces": "Good balance of capability and coherence. Some inconsistency at extension boundaries. Adoption decisions occasionally slow.",
            "whenCorrect": "Organisations transitioning from isolation toward ecosystem alignment. Good intermediate position.",
            "failureSignal": "Coherence exceptions accumulating faster than resolved. The \"principled\" adoption process becoming a rubber stamp.",
            "theCorrective": "Make the coherence requirement explicit and measurable. Run one coherence audit before the next adoption decision."
          },
          {
            "positionName": "Principled Integration",
            "description": "Platform adopts tools meeting both capability and coherence requirements. All adoptions wrapped with internal abstractions that enforce consistent patterns. Inconsistency at integration layer hidden from consumers.",
            "howArrive": "Platform team explicitly designed the integration layer and maintains it as a first-class concern alongside capability decisions.",
            "internalNarrative": "\"We are coherent and current. Consumers experience consistency.\" The team feels architecturally mature.",
            "whatItProduces": "Consumers experience a coherent platform regardless of underlying tool diversity. Platform team carries integration complexity internally. Best balance of capability and experience.",
            "whenCorrect": "Most mature internal platforms with dedicated integration governance. The default for organisations with dedicated platform teams.",
            "failureSignal": "Integration layer becoming leaky. External tool changes surfacing to consumers despite the wrapper. Platform team maintenance burden growing without proportional consumer benefit.",
            "theCorrective": "—"
          },
          {
            "positionName": "Coherence-First",
            "description": "New tools adopted only when existing tools cannot address a genuine need. Capability gaps accepted to preserve consistency. Internal tooling extended rather than replaced.",
            "howArrive": "After experiencing coherence problems, platform team overcorrected and instituted strong preference for extending existing tools.",
            "internalNarrative": "\"We value consistency over novelty.\" The team feels principled and stable.",
            "whatItProduces": "Strong coherence. Low cognitive load for consumers. Capability gaps accumulate as ecosystem advances. Platform increasingly less competitive.",
            "whenCorrect": "Infrastructure-native organisations that value consistency and predictability above capability currency.",
            "failureSignal": "Product teams building workarounds for capability gaps. Shadow tools appearing for needs the platform acknowledges but refuses to address.",
            "theCorrective": "Audit capability gaps against what product teams are building outside the platform. If the gap is large, coherence is being purchased at too high a price."
          },
          {
            "positionName": "Frozen Architecture",
            "description": "Platform rarely adopts new tools. Internal tooling extended even when ecosystem alternatives are superior. Coherence maintained at cost of capability currency.",
            "howArrive": "Organisation went through a painful period of tool churn and adopted a conservative policy. Policy has persisted past the point where it was appropriate.",
            "internalNarrative": "\"We know our tools deeply and extend them well.\" The team feels expert in their own ecosystem.",
            "whatItProduces": "Very high coherence. Platform predictable and teachable. Ecosystem has moved significantly ahead. Platform team building what the ecosystem solves better. Maintenance burden growing.",
            "whenCorrect": "Legacy enterprise platform teams without active investment in modernisation. Appropriate temporarily after a period of excessive tool churn.",
            "failureSignal": "Platform team building complex internal solutions for problems the ecosystem solved years ago. Engineers joining and surprised by the internal tooling landscape.",
            "theCorrective": "Identify the three capabilities where the ecosystem has moved furthest ahead. Evaluate adoption in those areas before extending internal tools further."
          },
          {
            "positionName": "Total Isolation",
            "description": "Platform uses only internally built or historically adopted tools. No engagement with external ecosystem. Complete isolation.",
            "howArrive": "Organisation had a bad experience with external tool dependencies and concluded that self-sufficiency was the solution.",
            "internalNarrative": "\"We control our own destiny.\" The team feels independent and self-sufficient.",
            "whatItProduces": "Complete predictability and control. No external dependencies to manage. Security vulnerabilities accumulate in unmaintained internal tools. Platform falls increasingly behind.",
            "whenCorrect": "Organisations with specific data sovereignty requirements or genuine competitive necessity for full internal control. Very rare.",
            "failureSignal": "Security incidents from unpatched internal tools. Engineers refusing to join because the stack is not transferable to their career.",
            "theCorrective": "Assess security posture of internal tooling. Identify the three most critical vulnerabilities. The security argument is usually the forcing function for opening to ecosystem adoption."
          }
        ]
      },
      {
        "code": "I-L3",
        "axis": "Minimalism ↔ Completeness",
        "type": "L",
        "summary": "Legitimate tension — a minimal platform is easier to maintain; a complete platform can serve all realistic consumer needs",
        "columns": [
          {
            "positionName": "Kernel Only",
            "description": "Platform provides only the absolute minimum: a runtime and a deployment mechanism. Nothing else. All other needs are product team responsibility.",
            "howArrive": "Platform team starts from first principles, deliberately minimal, as a principled choice. Rare. Usually maintained only in organisations where product teams are highly capable.",
            "internalNarrative": "\"We are lean and focused. We do a few things excellently.\" The team feels disciplined and quality-driven.",
            "whatItProduces": "Extreme simplicity and low maintenance burden. Platform team can deeply understand every component. Product teams must build significant capability themselves. Platform seen as unhelpful by teams with complex needs.",
            "whenCorrect": "Organisations that want product teams to own their infrastructure fully. Very high product team maturity required. Rare long-term position.",
            "failureSignal": "Widespread shadow infrastructure. Onboarding to the organisation requires building a personal platform from scratch. Platform seen as irrelevant to real work.",
            "theCorrective": "Identify the three capabilities with highest consumer impact if added. Add those before worrying about minimalism. One capability added well is better than maintaining purity."
          },
          {
            "positionName": "Principled Minimalism",
            "description": "Platform provides only capabilities with proven, broad demand. Every addition requires demonstrated need from multiple teams. Removal is easier than addition.",
            "howArrive": "Platform team explicitly adopted minimalism as a policy after experiencing the maintenance burden of an overextended platform.",
            "internalNarrative": "\"We are thoughtful about what we add. We protect our focus.\" The team feels principled.",
            "whatItProduces": "High clarity about what the platform is and is not. Platform team focused on high-value capabilities. Consumer expectations well-managed. Some teams frustrated by the slow addition process.",
            "whenCorrect": "Small platform teams with limited capacity and high consumer engineering maturity. Good position for resource-constrained teams.",
            "failureSignal": "Consumer requests for additions accumulating without approval. Teams building capabilities just outside the platform's scope rather than requesting inclusion.",
            "theCorrective": "Establish an extension mechanism before consumer frustration with gaps reaches political pressure. Better to add one extension well than ten reactively."
          },
          {
            "positionName": "Lean with Extensions",
            "description": "Platform provides core capabilities plus well-governed extensions. Addition requires demonstrated need. Extensions subject to deprecation when demand falls.",
            "howArrive": "Platform expanded from minimal, then instituted a governance process that slowed but did not stop addition. Some pruning happens but rarely.",
            "internalNarrative": "\"We try to say yes where we can while staying manageable.\" The team feels accommodating and responsible.",
            "whatItProduces": "Good balance of utility and manageability. Most consumer needs met. Some capability gaps. Platform team can still reason about the whole system.",
            "whenCorrect": "Growing organisations establishing platform discipline. Good intermediate position while governance processes mature.",
            "failureSignal": "Deprecation process rarely or never used. Extensions accumulating without review. Platform growing slightly each cycle without corresponding quality investment.",
            "theCorrective": "Run one deprecation cycle before adding anything new. Prove the pruning process works. A platform that can remove things can grow sustainably."
          },
          {
            "positionName": "Curated Completeness",
            "description": "Platform provides all capabilities with demonstrated broad demand, governed to prevent redundancy and inconsistency. Periodic pruning removes capabilities below the demand threshold.",
            "howArrive": "Platform team maintains explicit demand thresholds and runs regular capability reviews. Addition and removal are both governed through the same process.",
            "internalNarrative": "\"We serve demonstrated need and remove what isn't needed. We are the right size.\" The team feels appropriately scoped.",
            "whatItProduces": "Consumers rarely need to go outside the platform for standard needs. Platform team understands the whole system. Maintenance burden proportional to demonstrated value. Pruning politically difficult but manageable.",
            "whenCorrect": "Most mature internal platforms with dedicated governance processes. The default for platforms with dedicated teams.",
            "failureSignal": "Pruning decisions creating political conflict. Platform team avoiding pruning because of conflict cost. Capability accumulation beginning to outpace governance.",
            "theCorrective": "—"
          },
          {
            "positionName": "Practical Completeness",
            "description": "Platform provides capabilities for all realistic consumer needs including some with moderate demand. Threshold for addition is lower, threshold for removal higher.",
            "howArrive": "Platform team says yes more than no to reasonable requests without running formal pruning cycles. Capabilities accumulate slowly.",
            "internalNarrative": "\"We cover most needs. We are helpful.\" The team feels generous and consumer-focused.",
            "whatItProduces": "Maintenance burden growing. Platform team spread across more capabilities. Depth suffering as breadth increases. Pruning conversations increasingly difficult.",
            "whenCorrect": "Organisations with large platform teams and consumer bases that value breadth of coverage.",
            "failureSignal": "Maintenance burden visible in platform team velocity. New capabilities slow to ship because existing ones demand attention.",
            "theCorrective": "Audit capability utilisation. Capabilities used by fewer than two teams are candidates for deprecation. Start the political process of pruning now before the maintenance burden becomes a crisis."
          },
          {
            "positionName": "Feature Rich",
            "description": "Platform provides a wide range of capabilities including some with limited demand. Consumer convenience heavily weighted. Removal rarely happens.",
            "howArrive": "Platform team has never run a pruning cycle. Every reasonable request over several years has been accommodated.",
            "internalNarrative": "\"We have a lot of capabilities. We can handle most things.\" The team feels broad and capable.",
            "whatItProduces": "Platform team maintaining capabilities few teams use. Maintenance burden high relative to value delivered. Understanding of the whole system degrading.",
            "whenCorrect": "Platforms that accumulated features over many years without governance. Stable but declining quality.",
            "failureSignal": "Platform team spending more time maintaining low-use capabilities than building high-value ones. Senior engineers frustrated by maintenance of things nobody uses.",
            "theCorrective": "Conduct an honest maintenance burden audit. If more than 30% of platform team capacity serves capabilities used by fewer than three teams, the platform has drifted too far."
          },
          {
            "positionName": "Everything Platform",
            "description": "Platform attempts to provide every conceivable capability. No request is out of scope.",
            "howArrive": "Platform team has never said no to any request from any team. Years of reactive accommodation.",
            "internalNarrative": "\"We can handle anything. No request goes unmet.\" The team feels maximally helpful and inclusive.",
            "whatItProduces": "Platform team overwhelmed. No capability maintained well. Consumer satisfaction eventually collapses as quality falls across the board.",
            "whenCorrect": "Never appropriate. Always an outcome, never a choice.",
            "failureSignal": "Platform team has no capacity for anything new. Consumer satisfaction collapsing across the board as quality fails everywhere simultaneously.",
            "theCorrective": "Stop all additions immediately. Run a full deprecation programme before accepting any new requests. This is a platform in crisis — breadth is consuming all quality."
          }
        ]
      },
      {
        "code": "I-L4",
        "axis": "Competitive Differentiation ↔ Ecosystem Adoption",
        "type": "L",
        "summary": "Legitimate tension — internal build creates capabilities the ecosystem cannot provide; adoption tracks ecosystem progress without maintenance burden",
        "columns": [
          {
            "positionName": "Build Everything",
            "description": "All capabilities built internally. No external tools trusted. Every component owned and maintained by the platform team.",
            "howArrive": "Platform team accumulated internal tooling over years without an explicit decision to build everything. Each individual build decision was justified. The total is never assessed.",
            "internalNarrative": "\"We understand our system completely. We control our own destiny.\" The team feels expert and independent.",
            "whatItProduces": "Full control. Deep internal expertise. Enormous ongoing maintenance burden. Capabilities lag behind ecosystem. Recruiting is harder because the stack is unusual.",
            "whenCorrect": "Never a deliberate choice. Accumulates over time without strategy. Rarely appropriate even for organisations with genuine engineering strength.",
            "failureSignal": "Platform team spending most time maintaining tools the ecosystem has already solved. Capabilities consistently falling behind. Engineers unable to work on the things that differentiate the organisation.",
            "theCorrective": "Identify the three capabilities where the ecosystem has decisively solved the problem better than internal tooling. Adopt them with thin abstraction. The maintenance saving almost always exceeds the adoption cost."
          },
          {
            "positionName": "Strategic NIH",
            "description": "External tools adopted only when building would take significantly longer. Strong internal preference. All adoptions behind thick abstraction layers.",
            "howArrive": "Platform team has strong internal engineering pride and genuine capability. Internal preference is cultural and has never been explicitly questioned.",
            "internalNarrative": "\"We build where it matters. Our core capabilities are ours.\" The team feels strategically capable.",
            "whatItProduces": "Strong internal expertise in chosen areas. Some ecosystem capabilities not achievable. Consumer experience limited where internal tools are inferior to ecosystem alternatives.",
            "whenCorrect": "Organisations with proven infrastructure expertise where specific capabilities are genuine competitive advantages (Cloudflare, Stripe for specific capabilities).",
            "failureSignal": "Consumer experience significantly worse than ecosystem alternatives for internally-built capabilities. Teams building shadow solutions using ecosystem tools directly.",
            "theCorrective": "Identify the abstraction currently hiding the most significant capability gap. Thin it. Add the missing ecosystem capability behind the now-thinner abstraction."
          },
          {
            "positionName": "Wrapped Adoption",
            "description": "External tools adopted with thick internal wrappers adding significant behaviour. Internal behaviour controlled. Some vendor protection.",
            "howArrive": "Platform tried to adopt but found external tools insufficient and added wrappers. Wrappers grew thicker as gaps appeared.",
            "internalNarrative": "\"We use the best tools but maintain control of the interface.\" The team feels pragmatic.",
            "whatItProduces": "External tools tracked by ecosystem. Internal behaviour controlled. Wrappers can become leaky over time. Higher abstraction maintenance cost.",
            "whenCorrect": "Organisations where external tools are close but not quite right and the delta justifies the wrapper cost.",
            "failureSignal": "Wrappers growing thick and complex. Upgrading external tools requires significant wrapper rework. Abstraction not absorbing external changes — leaking through instead.",
            "theCorrective": "Audit wrapper thickness. Where wrappers have grown thick, ask whether the added behaviour belongs upstream or in a different layer. Thin the wrapper; move the behaviour."
          },
          {
            "positionName": "Strategic Build",
            "description": "Build only where genuine competitive advantage or internal requirement exists. Adopt with a thin internal abstraction layer. Clear decision criteria applied to each capability individually.",
            "howArrive": "Platform team applied explicit build/adopt criteria to each capability and maintained the criteria over time.",
            "internalNarrative": "\"We build our advantage and adopt everything else. We are focused.\" The team feels strategically clear.",
            "whatItProduces": "Platform capabilities track ecosystem evolution. Internal abstraction protects consumers from external changes. Maintenance load focused on differentiated problems. Dependency risk explicitly managed.",
            "whenCorrect": "Most organisations. The recommended default for platforms with dedicated teams.",
            "failureSignal": "Wrapper becoming leaky. External interface changes surfacing to consumers. Platform team maintenance burden growing without proportional consumer benefit.",
            "theCorrective": "—"
          },
          {
            "positionName": "Thin Adoption",
            "description": "Adopt external tools with minimal abstraction. Wrapper exists for interface stability only. No significant internal behaviour added.",
            "howArrive": "Platform team adopted external tools quickly and de-prioritised abstraction layer investment. Speed was the goal.",
            "internalNarrative": "\"We use the ecosystem efficiently. Low overhead.\" The team feels lean and practical.",
            "whatItProduces": "Minimal platform team overhead. Capabilities track ecosystem directly. External breaking changes surface directly to consumers when they occur.",
            "whenCorrect": "Small platform teams with high trust in upstream maintainers and high consumer engineering maturity.",
            "failureSignal": "External deprecation becoming a consumer emergency with no warning. Platform team learning about breaking changes at the same time as consumers.",
            "theCorrective": "Identify the highest-risk external dependency. Add one abstraction layer specifically for it. The investment is proportional to the replacement risk."
          },
          {
            "positionName": "Configured Adoption",
            "description": "Adopt external tools and configure them for internal use. No wrapper. Direct coupling to external interfaces.",
            "howArrive": "Platform team adopted external tools directly for speed, intending to add wrappers later. Later never came.",
            "internalNarrative": "\"We get value quickly and avoid unnecessary build.\" The team feels efficient.",
            "whatItProduces": "Fast to implement initially. External breaking changes affect all consumers simultaneously with no platform team control.",
            "whenCorrect": "Very small teams without platform functions. Organisations at pre-platform stage.",
            "failureSignal": "External provider changes affecting all teams simultaneously. Platform team has no leverage and no buffer.",
            "theCorrective": "Pick the external tool most likely to create a crisis if it changes. Add a thin abstraction for that tool before the crisis. One crisis justified by no abstraction is usually sufficient motivation."
          },
          {
            "positionName": "Full Adoption",
            "description": "Adopt all external tools directly. No abstraction. No internal layer. No internal build at all.",
            "howArrive": "Platform team made no build investments whatsoever. All capabilities are external tool configurations.",
            "internalNarrative": "\"The ecosystem solves everything. We configure rather than build.\" The team feels agile and modern.",
            "whatItProduces": "Zero maintenance overhead initially. No abstraction. Single external decision (pricing, EOL, API change) becomes an organisational crisis with no buffer.",
            "whenCorrect": "Consumer SaaS products using fully managed services where infrastructure is not the value. Rarely appropriate internally.",
            "failureSignal": "Single external decision (licensing change, deprecation, acquisition) forcing complete organisational crisis with no platform team ability to manage transition.",
            "theCorrective": "Identify the single external decision that would most severely disrupt the organisation. If the probability of that decision is non-trivial, begin abstraction investment immediately."
          }
        ]
      },
      {
        "code": "I-G1",
        "axis": "Build ↔ Adopt",
        "type": "G",
        "summary": "Genuine tension — both maintenance cost structures are real and cannot be eliminated simultaneously",
        "columns": [
          {
            "positionName": "Build Everything",
            "description": "All platform capabilities built internally. No external dependencies accepted.",
            "howArrive": "Each build decision made individually and justified. The total maintenance commitment is never assessed as a portfolio. The organisation builds itself into full internal ownership gradually.",
            "internalNarrative": "\"We own our platform. We understand it completely. We are not dependent on anyone.\"",
            "whatItProduces": "Maximum control. Enormous, self-sustaining maintenance burden. Capabilities lag ecosystem. Recruiting difficulty. Every external API change requires internal rebuild.",
            "whenCorrect": "Almost never. Accumulates without strategy.",
            "failureSignal": "Maintenance burden consuming most of platform team capacity. Ecosystem moving decisively ahead of internal tools. Engineers building workarounds using ecosystem tools the platform doesn't support.",
            "theCorrective": "Assess your three highest-maintenance internal tools against ecosystem alternatives. If the ecosystem alternative is better and switching cost is manageable, adopt."
          },
          {
            "positionName": "Strategic Build",
            "description": "Build wherever internal expertise creates genuine advantage. Adopt with strong abstraction everywhere else.",
            "howArrive": "Platform team made explicit build/adopt decisions and maintained a record of them. Genuine capability assessment drove build decisions.",
            "internalNarrative": "\"We build where we have the edge and adopt where others are better.\"",
            "whatItProduces": "Strong differentiated capabilities. Ecosystem adoption where appropriate. Abstraction layer requires maintenance. Dependency risk managed.",
            "whenCorrect": "Organisations with proven infrastructure expertise and genuine differentiated capability needs.",
            "failureSignal": "Build decisions made without assessing whether advantage is genuine. Internal tools being maintained past the point where they create advantage.",
            "theCorrective": "Schedule an annual portfolio review. For each built capability, ask: does the advantage still exist? For each adopted capability, ask: is the abstraction still adequate?"
          },
          {
            "positionName": "Selective Build",
            "description": "Build for differentiated capabilities. Adopt the rest with moderate abstraction. Criteria applied but loosely.",
            "howArrive": "Platform team has loose criteria but applies them inconsistently. Some builds justified, others accumulated.",
            "internalNarrative": "\"We try to build where it matters.\"",
            "whatItProduces": "Mixed portfolio. Some strong internal capabilities, some well-abstracted external tools, some poorly calibrated decisions.",
            "whenCorrect": "Organisations applying build/adopt thinking but without formal portfolio management.",
            "failureSignal": "Build/adopt criteria not applied consistently. Some capabilities built for poor reasons, others adopted without adequate abstraction.",
            "theCorrective": "Establish explicit criteria for build/adopt decisions. Apply them to the next three decisions before applying them retroactively."
          },
          {
            "positionName": "Principled Portfolio",
            "description": "Explicit portfolio decision for each capability: build where competitive advantage exists, adopt with calibrated abstraction elsewhere. Portfolio reviewed annually.",
            "howArrive": "Platform team maintains an explicit capability portfolio, revisits build/adopt decisions periodically, and tracks the maintenance cost of each decision.",
            "internalNarrative": "\"We are explicit about which costs we accept for each capability.\"",
            "whatItProduces": "Clear ownership of maintenance cost for each capability. Differentiated capabilities where genuine advantage exists. Ecosystem efficiency where it does not. Portfolio cost visible and manageable.",
            "whenCorrect": "Most mature organisations. The recommended default.",
            "failureSignal": "Portfolio not being reviewed. Build decisions made years ago still carried without reassessment. Abstraction layers not being maintained alongside capabilities.",
            "theCorrective": "—"
          },
          {
            "positionName": "Selective Adopt",
            "description": "Adopt almost everything. Build only for capabilities the ecosystem genuinely cannot provide.",
            "howArrive": "Platform team defaulted to adoption, building only when blocked. Abstraction layer exists but is thin.",
            "internalNarrative": "\"We trust the ecosystem. We focus on what's ours.\"",
            "whatItProduces": "Low maintenance burden for adopted capabilities. High risk of external disruption surfacing directly to consumers. Build capabilities may be small in number but are deeply owned.",
            "whenCorrect": "Organisations prioritising ecosystem currency and consumer speed with high trust in upstream stability.",
            "failureSignal": "External disruptions surfacing as consumer incidents. Platform team learning about breaking changes at the same time as consumers.",
            "theCorrective": "Assess the three highest-risk external dependencies. Add abstraction proportional to replacement risk."
          },
          {
            "positionName": "Abstracted Adopt",
            "description": "Adopt everything with thin abstraction. Internal build reserved for the absolute minimum.",
            "howArrive": "Platform team explicitly chose to minimise build investment. Abstraction exists primarily for interface stability.",
            "internalNarrative": "\"We stay lean. The ecosystem does the heavy lifting.\"",
            "whatItProduces": "Very low maintenance burden. Strong ecosystem currency. External disruptions have no buffer. Consumers exposed to upstream changes.",
            "whenCorrect": "Very small teams where build investment is genuinely not viable.",
            "failureSignal": "External provider changes requiring emergency platform response with no buffer.",
            "theCorrective": "Identify the external dependency most likely to create a crisis. Build minimal abstraction for that one dependency."
          },
          {
            "positionName": "Adopt Everything",
            "description": "Adopt all external tools directly. No internal build at all. No abstraction.",
            "howArrive": "Platform team made no build investments. All capabilities are external tool configurations. No abstraction.",
            "internalNarrative": "\"We focus on consumer value, not infrastructure. The ecosystem handles everything else.\"",
            "whatItProduces": "Zero maintenance burden initially. Complete external dependency. Any external decision (pricing, deprecation, acquisition) produces an organisational crisis.",
            "whenCorrect": "Consumer SaaS products where infrastructure is not a differentiator. Rarely appropriate internally.",
            "failureSignal": "Single vendor decision creating organisational crisis. Platform team has no leverage and no transition time.",
            "theCorrective": "Identify the single external decision that would most severely disrupt the platform. Assess whether the probability of that decision is non-trivial. If so, begin abstraction investment."
          }
        ]
      },
      {
        "code": "I-G2",
        "axis": "Knowledge Transferability ↔ Technical Excellence",
        "type": "G",
        "summary": "Genuine tension — maximum excellence and maximum transferability require different things from the same engineering process",
        "columns": [
          {
            "positionName": "Fully Transferable",
            "description": "All components designed for maximum transferability. Simplicity prioritised over optimisation. Any team member can operate anything within one week of joining.",
            "howArrive": "Organisation prioritised resilience over excellence from inception. Typically follows a painful experience with knowledge loss.",
            "internalNarrative": "\"Anyone can operate anything. We are resilient.\" The team feels safe and sustainable.",
            "whatItProduces": "Any team member can operate any system. Very high bus factor. Onboarding fast. Some technical optimisations not achievable within transferability constraints. Platform may underperform technically.",
            "whenCorrect": "Organisations with very high team turnover where continuity is existential.",
            "failureSignal": "Platform underperforming its technical potential. Engineers frustrated by simplicity constraints preventing correct solutions. Technical debt accumulated to maintain transferability.",
            "theCorrective": "Identify three capabilities where transferability constraints are preventing correct technical solutions. Relax those constraints specifically and accept the transfer investment required."
          },
          {
            "positionName": "Documentation-First",
            "description": "Technical excellence with comprehensive documentation as a delivery requirement. Documentation is part of the capability, not an afterthought.",
            "howArrive": "Platform team adopted a documentation requirement as a response to knowledge loss. Requirement enforced as a delivery gate.",
            "internalNarrative": "\"We document everything. Knowledge is shared.\" The team feels responsible and organised.",
            "whatItProduces": "High technical quality. Comprehensive documentation. Strong resilience. Some delivery overhead from documentation requirement. Some optimisations deferred because documentation complexity is too high.",
            "whenCorrect": "Organisations with strong platform discipline and explicit knowledge management culture.",
            "failureSignal": "Documentation requirement delaying delivery. Some capabilities shipped without documentation because of deadline pressure. The gate is then never retroactively met.",
            "theCorrective": "Audit documentation against operational reality. Documentation that exists but cannot be followed in an incident is not documentation — it is false confidence."
          },
          {
            "positionName": "Documented Excellence",
            "description": "Technical excellence prioritised. Documentation produced systematically after implementation. Knowledge transfer through documentation and structured pairing.",
            "howArrive": "Platform team values quality highly and produces documentation but treats it as secondary to delivery. Documentation quality varies with time pressure.",
            "internalNarrative": "\"We build excellent things and document the important parts.\" The team feels quality-driven.",
            "whatItProduces": "Good technical quality. Documentation covers most operational needs. Some systems only operable by their creators. Transfer gaps discovered under pressure — incidents, departures.",
            "whenCorrect": "Growing platform teams building knowledge management practices.",
            "failureSignal": "Certain systems only operable by their creators. Incidents revealing knowledge gaps. Departures causing disproportionate disruption for their seniority level.",
            "theCorrective": "Measure bus factor explicitly. If any system has bus factor of one, that is the priority for transfer investment regardless of other work."
          },
          {
            "positionName": "Excellent with Transfer Investment",
            "description": "Platform components built to the highest achievable technical standard with deliberate transfer investment alongside delivery. Runbooks executable. Architecture decisions recorded. Pairing standard practice. Bus factor tracked.",
            "howArrive": "Platform team explicitly tracks bus factor, enforces pairing, and treats transfer investment as equivalent in importance to delivery. Transfer is built into the definition of done.",
            "internalNarrative": "\"We build excellently and transfer deliberately. Neither is compromised.\" The team feels mature.",
            "whatItProduces": "Platform technically excellent and operationally resilient. Excellence not compromised by transfer investment. Bus factor adequate for all critical components.",
            "whenCorrect": "Most mature platform teams. The default for any team larger than three engineers.",
            "failureSignal": "Transfer investment deprioritised under pressure. Runbooks becoming stale. Pairing replaced by asynchronous documentation nobody reads. Bus factor slipping below threshold without being reported.",
            "theCorrective": "—"
          },
          {
            "positionName": "Excellence-First",
            "description": "Technical excellence primary. Documentation produced when requested or when a gap is discovered through an incident. Pairing occasional.",
            "howArrive": "Platform team is expert-heavy and has always relied on experts knowing things. Documentation was never a cultural value.",
            "internalNarrative": "\"We are excellent. The experts know what they're doing.\" The team feels capable and confident.",
            "whatItProduces": "Highest achievable technical quality. Documentation sparse. Bus factor low and trending lower as team changes. Knowledge concentration increasing.",
            "whenCorrect": "Small expert teams where departure risk is genuinely low and consciously accepted.",
            "failureSignal": "Incidents revealing knowledge gaps. Platform team has informal knowledge hierarchies not acknowledged. Departures causing moderate disruption.",
            "theCorrective": "Track bus factor and set a minimum threshold (2 for all critical systems). When threshold is breached, transfer investment is mandatory regardless of other priorities."
          },
          {
            "positionName": "Expert System",
            "description": "Technically excellent platform built by recognised experts. Documentation minimal and informal. Knowledge held in specific individuals. Bus factor low.",
            "howArrive": "Platform team is small and expert. Transfer was not a priority because departures seemed unlikely. Now the team is one departure from crisis.",
            "internalNarrative": "\"We are very good at what we do. People can ask us when they need to.\" The team feels expert and relied-upon.",
            "whatItProduces": "Extremely high technical excellence. Bus factor critically low. One departure away from operational crisis in that engineer's domain. Onboarding very slow.",
            "whenCorrect": "Very small teams where members have been together since inception and departure is acknowledged as a risk.",
            "failureSignal": "One engineer departure causing operational disruption disproportionate to their seniority. Platform team cannot respond to incidents in that engineer's domain without their involvement.",
            "theCorrective": "Plan for the departure of the most irreplaceable engineer now. Write the runbook before they leave. The exercise will reveal how much knowledge is recoverable and how much is not."
          },
          {
            "positionName": "Tacit Only",
            "description": "Platform technically excellent in ways only its creators understand. No documentation. No runbooks. No transfer mechanism of any kind.",
            "howArrive": "One or a few people built the platform. Nobody else was involved. Documentation was never started.",
            "internalNarrative": "\"We built this and we understand it.\" The team feels indispensable — which it is, and that is the problem.",
            "whatItProduces": "Theoretical maximum of technical excellence. Platform entirely dependent on its creators. Any departure is a crisis. System cannot outlast its builders.",
            "whenCorrect": "Solo engineers. A team of one cannot transfer to anyone. This is the logical endpoint of building without considering who comes next.",
            "failureSignal": "Engineer departure causing service degradation or platform capability loss that cannot be recovered without rebuilding from scratch.",
            "theCorrective": "Stop all new development. Invest entirely in transfer until bus factor reaches 2 for all critical systems. The platform is one departure from a crisis that cannot be recovered without rebuilding."
          }
        ]
      }
    ]
  },
  {
    "romanId": "II",
    "title": "Process & Production",
    "theme": "",
    "definition": "How does the platform team work and keep the system running? Every decision about how work moves through the platform team, how the platform is maintained, how decisions are made internally, and how capacity is allocated.",
    "tradeOffs": [
      {
        "code": "II-L1",
        "axis": "Responsiveness ↔ Intentionality",
        "type": "L",
        "summary": "Legitimate tension — addressing consumer needs quickly versus directing work deliberately and strategically",
        "columns": [
          {
            "positionName": "Pure Helpdesk",
            "description": "Platform team addresses only what consumers request in the order requests arrive. No capacity exists for anything else. The roadmap is the ticket queue.",
            "howArrive": "Platform team never had a mandate to say no. Every request was a reasonable request. The queue grew faster than it was cleared. Nobody ever declared the team a helpdesk — it became one.",
            "internalNarrative": "\"We are helpful. We respond to what our consumers need. We care.\" The team feels generous and consumer-focused. The toil is invisible as a problem — it feels like purpose.",
            "whatItProduces": "No systemic improvement. Architecture incoherent — accumulated requests rather than deliberate design. Platform always solving yesterday's problem. Team has no agency over its own direction. Toil accumulates invisibly until attrition makes it visible.",
            "whenCorrect": "Never a sustainable operating mode. Acceptable only during a genuine crisis response lasting weeks, not quarters.",
            "failureSignal": "Sprint indistinguishable from previous sprint's incident queue. No improvement visible quarter over quarter. Attrition beginning as engineers lose sense of agency.",
            "theCorrective": "Identify the three systemic improvements that would most reduce reactive demand. Protect four hours per week per engineer for those specifically. The improvement in reactive throughput will justify the investment within two quarters."
          },
          {
            "positionName": "Demand-Led",
            "description": "85–90% reactive. Small proactive allocation nominally exists but is sacrificed to reactive demand at first sign of pressure. No structural protection mechanism.",
            "howArrive": "Platform team has weak nominal proactive allocation that gets traded away every sprint. Leadership never enforced the protection. The team learned that proactive time is the buffer for reactive overflow.",
            "internalNarrative": "\"We are responsive and we invest in improvement when we can.\" The team feels pragmatic and hardworking.",
            "whatItProduces": "High consumer satisfaction. Demand signal clear and direct. Some space for systemic improvement that rarely materialises. Team morale declining slowly as known problems are deferred indefinitely.",
            "whenCorrect": "Most platform teams in practice. Appropriate when leadership has not yet committed to proactive protection and consumer trust is still being established.",
            "failureSignal": "Proactive time disappears every quarter. Team can describe the systemic problems they cannot fix. \"We'll get to it next quarter\" said of problems that have been on the parking lot for over a year.",
            "theCorrective": "Make proactive capacity visible to leadership as a reported metric. When it is sacrificed, report that sacrifice explicitly. Invisible sacrifice enables invisible continuation."
          },
          {
            "positionName": "Responsive Default",
            "description": "70–80% reactive. Proactive capacity nominally protected. In practice, protection is social rather than structural — it disappears when challenged.",
            "howArrive": "Team made a commitment to proactive work but never made it structural. It exists as a intention rather than a constraint. Reactive demand erodes it silently.",
            "internalNarrative": "\"We balance immediate needs with longer-term thinking.\" The team feels responsible. In reality the balance is not structural — it is aspirational.",
            "whatItProduces": "Responsive to consumers. Nominally some investment in systemic improvement. In practice the proactive time disappears without being reported, making the sacrifice invisible to leadership.",
            "whenCorrect": "Teams with partial leadership commitment to proactive work. Appropriate while building the case for structural protection.",
            "failureSignal": "Proactive work exists in the sprint plan but not in the sprint review. Leadership unaware that proactive allocation has been eroded. Nobody reported the sacrifice.",
            "theCorrective": "Establish structural protection — a leadership commitment that is operationally enforced, not just stated. \"We protect proactive time\" must mean something specific when tested at sprint planning."
          },
          {
            "positionName": "Balanced Portfolio",
            "description": "Explicit split: 60–70% reactive, 30–40% proactive. Proactive capacity structurally protected by leadership commitment. Reduction in proactive capacity is a reportable event, not a silent sacrifice.",
            "howArrive": "Platform team negotiated explicit protection of proactive capacity with leadership. Both parties understand what it means when proactive time is sacrificed and report it as such.",
            "internalNarrative": "\"We serve consumers and we improve the platform. Both are real commitments.\" The team feels clear and sustainable.",
            "whatItProduces": "Consumer needs met in the short term. Systemic quality improving over time. Platform team workload sustainable. Trust maintained through consistent delivery. Both reactive and proactive work are visible commitments.",
            "whenCorrect": "Most mature platform teams. The default for organisations where the platform has established consumer trust and leadership backing.",
            "failureSignal": "Proactive capacity trend downward over rolling quarters without leadership visibility. Proactive work time reported as delivered but not actually being protected when challenged.",
            "theCorrective": "—"
          },
          {
            "positionName": "Proactive Default",
            "description": "50–60% reactive. Significant proactive investment. Some consumer demand addressed with longer lead times than consumers expect.",
            "howArrive": "Platform team has enough consumer trust and consumer maturity to manage demand explicitly. Some requests are deferred without losing consumer confidence.",
            "internalNarrative": "\"We invest in the platform's future. We manage demand because unconstrained demand is unsustainable.\" The team feels principled.",
            "whatItProduces": "Strong systemic improvement. Platform gets ahead of problems. Technical debt addressed on schedule. Some consumers frustrated by slower response to requests.",
            "whenCorrect": "Platforms with very capable, self-sufficient consumer bases who address most reactive needs independently.",
            "failureSignal": "Teams filing workaround requests because their requests aren't addressed in expected timeframes. Bypass rate increasing. Consumer satisfaction declining without clear cause.",
            "theCorrective": "Increase consumer feedback collection frequency. If proactive work is genuinely not matching consumer needs, the feedback will surface that. If it is matching, the data justifies the allocation."
          },
          {
            "positionName": "Vision-Led",
            "description": "20–40% reactive. Platform team primarily executes their own strategic roadmap with limited responsiveness to current consumer demand.",
            "howArrive": "Platform team has strong internal conviction about strategic direction and a consumer base mature enough to self-serve most reactive needs.",
            "internalNarrative": "\"We know where the platform needs to go. We are building it deliberately.\" The team feels strategic and capable.",
            "whatItProduces": "Consumer trust eroding as requests go unaddressed. Platform team may build excellent capabilities that consumers did not ask for and do not adopt.",
            "whenCorrect": "Platforms serving consumers with very high infrastructure maturity. Rare.",
            "failureSignal": "Adoption metrics declining. Teams building shadow solutions. Platform team's work going unused because it doesn't match real consumer needs.",
            "theCorrective": "Embed in one product team for one month. Not to do their work — to understand what they actually need from the platform. The gap between what is being built and what is needed becomes concrete and actionable."
          },
          {
            "positionName": "Pure Vision",
            "description": "0–10% reactive. Platform team builds according to multi-year vision. Current consumer needs largely unmet. Consumers expected to adapt to what the platform produces.",
            "howArrive": "Platform team was never close to consumers. Started with a vision and never built the feedback loops to correct it.",
            "internalNarrative": "\"We are building the platform it needs to be. Consumers will see the value when it arrives.\" The team feels visionary.",
            "whatItProduces": "Consumer adoption collapses. Teams build their own solutions. Platform team architecturally sophisticated and practically irrelevant.",
            "whenCorrect": "Never appropriate as an ongoing operating mode.",
            "failureSignal": "Platform team presenting architectural progress to an audience that has stopped listening. Consumer satisfaction at its lowest. Platform relevance actively questioned in budget conversations.",
            "theCorrective": "Run a consumer needs survey before the next planning cycle. If more than 50% of teams report their most important platform need is unmet, the reactive/proactive balance is wrong regardless of architectural quality."
          }
        ]
      },
      {
        "code": "II-L2",
        "axis": "Throughput ↔ Quality",
        "type": "L",
        "summary": "Legitimate tension — shipping more capabilities faster versus ensuring each meets a defined standard before release",
        "columns": [
          {
            "positionName": "Ship Everything",
            "description": "Everything ships as soon as it is functionally possible. No quality gates. No review. No debt acknowledgement. Definition of done is \"it runs.\"",
            "howArrive": "Platform team under intense delivery pressure with no quality enforcement. Every sprint the bar was slightly lower. Nobody decided to abandon quality — it eroded gradually under pressure.",
            "internalNarrative": "\"We ship fast. We are responsive. We will fix issues when they appear.\" The team feels productive and agile. Quality debt is invisible as debt — it feels like future work.",
            "whatItProduces": "High throughput initially. Quality collapses over time. Consumer trust erodes. Debt accumulates invisibly and compounds. Incident rate increasing.",
            "whenCorrect": "Only in the earliest stage of a platform with no established consumers. Never sustainable.",
            "failureSignal": "Consumers stop trusting the platform. Adoption declining despite high throughput because what ships does not work reliably. Incident rate growing. Engineers spending more time on fixes than on new capabilities.",
            "theCorrective": "Define three quality criteria all new capabilities must meet. Apply them to the next three capabilities only. Measure whether consumer trust improves — it will. Build from three criteria."
          },
          {
            "positionName": "Fast Iteration",
            "description": "Ship quickly with lightweight quality gates. Quality issues addressed reactively. Debt acknowledged informally but not tracked or scheduled.",
            "howArrive": "Platform team moves fast and treats quality as a reactive concern. Iterations are quick. Quality issues surface and are fixed. The accumulation of reactive quality work is not noticed until it dominates the sprint.",
            "internalNarrative": "\"We move quickly and iterate. Speed is how we learn.\" The team feels dynamic.",
            "whatItProduces": "High throughput. Fast feedback. Quality issues visible quickly. Reactive quality work growing as percentage of capacity. Platform team increasingly busy fixing things rather than building things.",
            "whenCorrect": "Small platforms with small, technically capable consumer bases where quick iteration is the primary value and consumers can absorb quality variation.",
            "failureSignal": "Post-release quality issues becoming consumer incidents. Reactive quality work growing as percentage of capacity. Engineers starting to feel the work is low quality but the sprint velocity is high.",
            "theCorrective": "Establish a debt ledger and commit to spending 20% of capacity on debt reduction. The quality improvement reduces reactive incidents within two quarters, freeing the capacity invested."
          },
          {
            "positionName": "Quality-Aware Speed",
            "description": "Ship at speed with explicit quality standards. Standards enforced but streamlined. Debt tracked and prioritised but not always addressed before shipping.",
            "howArrive": "Platform team instituted quality standards in response to incidents but kept them lightweight enough not to slow delivery significantly. Standards enforced inconsistently under pressure.",
            "internalNarrative": "\"We are fast and careful.\" The team feels balanced. In reality the balance may be tilting toward speed without the team noticing.",
            "whatItProduces": "Good throughput. Most quality met. Some capabilities shipped with known limitations consumers discover in production. Debt acknowledged but growing.",
            "whenCorrect": "Growing platforms transitioning from startup mode to sustainable quality practices.",
            "failureSignal": "Consumer complaints about limitations discovered in production. Debt backlog growing faster than it is addressed. Gap between acknowledged debt and addressed debt widening.",
            "theCorrective": "Implement quality gates in CI/CD to enforce standards automatically. Manual quality review is always sacrificed under pressure. Automation makes quality structural, not optional."
          },
          {
            "positionName": "Deliberate Delivery",
            "description": "Explicit quality standards applied consistently. Shipping speed is a constraint, not the objective. Debt tracked, acknowledged at point of incurrence, and addressed on a defined schedule.",
            "howArrive": "Platform team defined quality standards, built them into the delivery process, and enforced them consistently. Debt is tracked and reported.",
            "internalNarrative": "\"We ship good things on a sustainable cadence. Both matter.\" The team feels professional.",
            "whatItProduces": "Consumers receive capabilities that meet defined standards reliably. Debt managed, not accumulated. Platform trustworthy and predictable. Throughput sustainable.",
            "whenCorrect": "Most mature platform teams. The default for organisations where the platform is a product serving multiple consumer teams.",
            "failureSignal": "Quality standard application becoming inconsistent under pressure. Debt acknowledgement happening but repayment schedule not honoured. Standards present on paper but not in practice.",
            "theCorrective": "—"
          },
          {
            "positionName": "Speed-Aware Quality",
            "description": "Quality standards thorough. Shipping speed a secondary consideration. Some capabilities delayed for quality review. Debt addressed before new capabilities ship.",
            "howArrive": "Platform team experienced quality failures that caused consumer incidents and responded by raising standards. Standards now higher than needed for the risk level.",
            "internalNarrative": "\"We do not ship things that are not ready.\" The team feels rigorous.",
            "whatItProduces": "High reliability. Consumers depend on what ships. Delivery pace slower than consumers expect. Some consumer needs met with significant delay.",
            "whenCorrect": "Platforms serving highly regulated environments where quality failures have severe consequences.",
            "failureSignal": "Consumer requests taking significantly longer than expected with no visible quality improvement to justify the wait. Teams building workarounds rather than waiting for the platform.",
            "theCorrective": "Identify two quality criteria applied comprehensively but producing few defect catches. Consider relaxing those criteria and redirecting time to capabilities consumers are waiting for."
          },
          {
            "positionName": "Quality-First",
            "description": "Quality standards comprehensive and rigorously enforced. Capabilities ship only when all standards are met. Speed is not a platform value.",
            "howArrive": "Platform team in a regulated or high-consequence environment where quality failure has severe consequences. Standards calibrated to the risk.",
            "internalNarrative": "\"Quality is not negotiable.\" The team feels principled and reliable.",
            "whatItProduces": "Very high reliability. Almost no post-release quality failures. Throughput very low. Consumer backlog growing.",
            "whenCorrect": "Banking, healthcare, nuclear — environments where quality failure is not merely inconvenient but causes harm.",
            "failureSignal": "Platform team spending more time on quality assurance for existing capabilities than on new capabilities. Consumer backlog growing. Consumers beginning to question whether the platform can meet their pace.",
            "theCorrective": "Identify the two capabilities most urgently needed by consumers. Ship them with the minimum quality standard that makes them safe and useful. Perfect is the enemy of shipped in a context where consumers cannot wait."
          },
          {
            "positionName": "Ship Nothing Imperfect",
            "description": "Nothing ships unless it is perfect. Every capability must meet every quality criterion before any consumer sees it.",
            "howArrive": "Platform team in a context where any defect is unacceptable. Typically aerospace, medical devices, financial clearing.",
            "internalNarrative": "\"We ship only what is perfect.\" The team feels uncompromising.",
            "whatItProduces": "Theoretical maximum reliability. Platform ships nothing for extended periods. Consumers build everything themselves because waiting is not viable.",
            "whenCorrect": "Aerospace, medical devices, financial clearing infrastructure. Appropriate only where a single defect causes catastrophic harm.",
            "failureSignal": "No new capabilities shipped in the last quarter. Consumers have entirely given up requesting new capabilities. Platform team achieving quality for things nobody needs delivered at this pace.",
            "theCorrective": "If this is the right position for your context, communicate the delivery pace to consumers explicitly. Unexplained slowness creates more distrust than explained slowness. If it is not the right position, identify one criterion that can be relaxed without meaningful safety consequence."
          }
        ]
      },
      {
        "code": "II-L3",
        "axis": "Transparency ↔ Cognitive Load on Stakeholders",
        "type": "L",
        "summary": "Legitimate tension — making all platform work visible versus presenting information at a level stakeholders can act on",
        "columns": [
          {
            "positionName": "Full Exposure",
            "description": "All platform work exposed to all stakeholders at all times. Every ticket, commit, decision, and trade-off visible to everyone. Nothing filtered or summarised.",
            "howArrive": "Platform team believed radical transparency was a value. All information was shared as generated. Nobody designed for the audience — information was broadcast.",
            "internalNarrative": "\"We are open and honest. Everyone can see everything we do.\" The team feels transparent and trustworthy.",
            "whatItProduces": "Maximum theoretical accountability. Information that cannot be processed cannot change decisions. High communication overhead for the platform team. Signal lost in noise. Stakeholders overwhelmed and disengaged.",
            "whenCorrect": "Open-source projects with full public accountability requirements. Almost never appropriate internally.",
            "failureSignal": "Leadership contacting platform team for explanations of communications they received but could not interpret. Stakeholders feel informed but unable to act on any of it. Engagement declining despite volume of communication.",
            "theCorrective": "Identify your three most important stakeholder groups. Design one communication artefact for each. Eliminate all other communication. Volume reduction is the first step."
          },
          {
            "positionName": "Technical Transparency",
            "description": "Detailed technical work made visible. Summaries exist but detailed layer always accessible. Stakeholders who want detail can always get it.",
            "howArrive": "Platform team is technically oriented and shares at the level of detail they themselves find useful. The technical detail is shared in good faith but is not calibrated to non-technical audiences.",
            "internalNarrative": "\"We share what we know. Technical people can follow our work.\" The team feels open.",
            "whatItProduces": "Technical stakeholders fully informed. Non-technical stakeholders confused and disengaged. Accountability high for technical decisions. Leadership cannot extract decision-relevant information from the volume.",
            "whenCorrect": "Technically homogeneous organisations where all stakeholders are engineers who can process technical information.",
            "failureSignal": "Non-technical leadership stopped reading the updates. Engineers find the communications useful. Everyone else does not. Communication effectiveness unmeasured.",
            "theCorrective": "Conduct one stakeholder survey asking \"does communication you receive enable your decisions?\" Use the answers to calibrate. The survey itself communicates that you care about usefulness, not just volume."
          },
          {
            "positionName": "Structured Transparency",
            "description": "Platform work structured for different audiences. Technical detail available on request. Regular communications calibrated to each audience type but calibration imperfect.",
            "howArrive": "Platform team made an attempt at audience calibration but did not maintain it. Different audiences receive the same communication with minor variations.",
            "internalNarrative": "\"We communicate regularly.\" The team feels responsible. The calibration problem is not visible from inside.",
            "whatItProduces": "Different stakeholder groups receive approximately appropriate information. Accountability maintained without overwhelming most groups. Wrong calibration for specific audiences not caught until it causes a problem.",
            "whenCorrect": "Organisations with mixed stakeholder populations beginning to invest in communication calibration.",
            "failureSignal": "Same communication sent to all audiences with minor variations. Some audiences overwhelmed, some underinformed. Feedback from stakeholders consistently negative but inconsistent in direction.",
            "theCorrective": "Establish a formal audience for each communication type. Verify once per quarter that the audience is receiving and acting on the communication."
          },
          {
            "positionName": "Role-Calibrated Transparency",
            "description": "Each stakeholder receives information at the level of detail that enables their decisions. Executives see outcomes and trends. Product teams see capabilities and timelines. Engineers see technical detail. All layers accessible.",
            "howArrive": "Platform team invested in audience analysis and designed separate communication artefacts for each stakeholder group. The investment is maintained through periodic calibration reviews.",
            "internalNarrative": "\"Each stakeholder gets what they need to make good decisions.\" The team feels thoughtful and deliberate.",
            "whatItProduces": "Stakeholders make better decisions because they have the right information at the right level. Trust built through consistent, calibrated communication. Decision quality across all groups improves over time.",
            "whenCorrect": "Most mature platform teams. The default for organisations with diverse stakeholder populations.",
            "failureSignal": "Stakeholder communication not updated when platform priorities change. Stakeholders discovering changes through effects rather than communication. Calibration drifting without review.",
            "theCorrective": "—"
          },
          {
            "positionName": "Summary Reporting",
            "description": "Stakeholders receive regular summaries. Technical detail not actively shared but available on request. Most stakeholders receive only the summary layer without knowing more exists.",
            "howArrive": "Platform team runs out of communication capacity and defaults to summary reports sent broadly. What is in the summary is not designed for any specific decision.",
            "internalNarrative": "\"We keep people informed at a high level.\" The team feels adequate. The detail gap is not visible.",
            "whatItProduces": "Communication overhead low. Platform team spends minimal time on reporting. Stakeholders who need more detail cannot access it easily. Trust can erode if stakeholders feel information is being managed.",
            "whenCorrect": "Small platform teams with limited communication capacity operating in high-trust environments where relationships substitute for formal communication.",
            "failureSignal": "Product teams asking for information that should have been communicated proactively. Leadership asking questions whose answers exist in reports they were not sent. Demand for more information growing.",
            "theCorrective": "Identify the stakeholder group most likely to make a bad decision due to information deficit. Address that specific gap before the next planning cycle."
          },
          {
            "positionName": "Executive Summary Only",
            "description": "Platform communicates to leadership through a single executive summary channel. No structured communication to product teams.",
            "howArrive": "Platform team communicates upward only — to the leadership that funds them. Product team communication was never prioritised.",
            "internalNarrative": "\"Leadership knows what matters. That is enough.\" The team feels efficient.",
            "whatItProduces": "Product teams uninformed about platform capabilities and timelines. Adoption suffers because teams do not know what is available. Leadership informed. Everyone else not.",
            "whenCorrect": "Very small organisations where everyone knows everything informally. Rarely appropriate at any significant scale.",
            "failureSignal": "Product teams unaware of platform capabilities that would address their needs. Shadow solutions built for problems the platform already solves. Consumer awareness of platform capabilities very low.",
            "theCorrective": "Schedule one product team touchpoint per month. Ask what they wish they had known about the platform in the last month. The answers define the communication gap."
          },
          {
            "positionName": "Black Box",
            "description": "Platform team operates without external communication. Stakeholders discover platform work through its effects, not through any communication.",
            "howArrive": "Platform team never established external communication. Work happens, effects appear. Communication was never seen as part of the platform team's role.",
            "internalNarrative": "\"Our work speaks for itself.\" The team feels focused on delivery. Communication is seen as overhead, not value.",
            "whatItProduces": "Stakeholders have no visibility into platform work. Trust cannot be built. Accountability cannot be maintained. Stakeholders resort to rumour and assumption to fill the information gap.",
            "whenCorrect": "Never appropriate. Platforms that do not communicate cannot build trust. Trust is required for voluntary adoption.",
            "failureSignal": "Leadership cannot answer basic questions about what the platform team does. Budget conversations difficult because no track record of value communication exists. Platform relevance questioned without evidence to counter it.",
            "theCorrective": "Start with one communication artefact: a monthly one-page platform update. Send it to all stakeholders. This is the minimum viable transparency. Build from there once the habit is established."
          }
        ]
      },
      {
        "code": "II-L4",
        "axis": "Resilience ↔ Specialisation",
        "type": "L",
        "summary": "Legitimate tension — spreading knowledge for robustness versus concentrating knowledge for depth and quality",
        "columns": [
          {
            "positionName": "Full Rotation",
            "description": "All team members rotate through all components on a fixed schedule. No engineer specialises in anything. Everyone can do everything at a basic level.",
            "howArrive": "Team adopted rotation as a policy after experiencing knowledge loss. Rotation is the overcorrection. It addresses bus factor but creates quality problems.",
            "internalNarrative": "\"Anyone can operate anything. We are resilient.\" The team feels safe and sustainable. The quality cost is often invisible.",
            "whatItProduces": "Maximum resilience. No single point of failure. Any team member can handle any incident. Onboarding fast. Deep optimisation impossible. Some components underperform their technical potential because expertise cannot accumulate.",
            "whenCorrect": "Very small teams where rotation is the only viable knowledge distribution mechanism. Rare.",
            "failureSignal": "Engineers frustrated by constant context switching. Deep problems going unsolved because nobody knows any component well enough to resolve them. Quality issues in complex components.",
            "theCorrective": "Identify three components where depth is most needed. Assign primary owners. Allow genuine specialisation in those three. The quality improvement will demonstrate the value of some specialisation without abandoning resilience."
          },
          {
            "positionName": "Structured Generalisation",
            "description": "Strong generalisation norm. Specialisation discouraged. Engineers expected to contribute across all components. Pairing and rotation mandatory and enforced.",
            "howArrive": "Team adopted a strong generalisation culture deliberately. Specialisation is culturally discouraged. The quality trade-off is accepted as the cost of resilience.",
            "internalNarrative": "\"We share knowledge. Nobody is indispensable.\" The team feels responsible and collaborative.",
            "whatItProduces": "Very high resilience. Very low bus factor risk. Some depth sacrifice accepted. Quality in complex components limited by the generalisation requirement.",
            "whenCorrect": "Organisations with strong generalisation culture and sufficient team size to absorb the quality trade-off.",
            "failureSignal": "Senior engineers resisting generalisation because they see quality suffering. Specialisation re-emerging informally despite the norm against it.",
            "theCorrective": "Identify the component where a departure would cause most disruption. Invest in cross-training for that component immediately. Work from most critical to least critical."
          },
          {
            "positionName": "Broad Ownership",
            "description": "Broad ownership encouraged. Engineers have primary components but are expected to contribute meaningfully to others. Knowledge transfer is an explicit team practice.",
            "howArrive": "Team encourages breadth but allows natural specialisation to emerge. The result is moderate specialisation with some transfer investment.",
            "internalNarrative": "\"We know what matters most and we try to spread that knowledge.\" The team feels balanced.",
            "whatItProduces": "Good resilience. Most components have multiple knowledgeable engineers. Some components still at bus factor 1 in transition.",
            "whenCorrect": "Growing platform teams building deliberate knowledge distribution practices.",
            "failureSignal": "Bus factor remaining at 1 for components \"in transition\" that have been in transition for more than two quarters. Transfer investment deferred indefinitely.",
            "theCorrective": "Set a bus factor minimum of 2 and enforce it. When a component is at bus factor 1, the primary owner's next task is cross-training — not feature work."
          },
          {
            "positionName": "Deliberate Redundancy",
            "description": "All engineers have primary ownership areas and secondary areas where they are operationally competent. Bus factor ≥ 2 for all critical components enforced as a team standard. Tracked explicitly.",
            "howArrive": "Team explicitly tracks bus factor, enforces pairing for all critical components, and treats transfer as part of the definition of done. Management attends to bus factor as a metric.",
            "internalNarrative": "\"We are excellent where we focus and resilient across all components.\" The team feels mature.",
            "whatItProduces": "High technical quality in primary areas. Operational resilience across all components. Departures cause disruption but not crisis. Bus factor risk actively managed and visible.",
            "whenCorrect": "Most mature platform teams. The default for any team larger than three engineers.",
            "failureSignal": "Bus factor tracking showing some components at 1. Transfer investment not happening because it is always deprioritised against delivery. The tracking exists but the enforcement does not.",
            "theCorrective": "—"
          },
          {
            "positionName": "Soft Specialisation",
            "description": "Engineers have clear primary components and loose secondary awareness. Bus factor tracked but not enforced. Knowledge transfer happens when convenient.",
            "howArrive": "Team is expert-heavy and has never formalised knowledge distribution. Specialisation emerged naturally and was never challenged.",
            "internalNarrative": "\"The experts know their domains. People ask when they need to.\" The team feels capable and efficient.",
            "whatItProduces": "Technical excellence in primary areas. Good resilience for most components. Bus factor risk accumulating in some components without being tracked.",
            "whenCorrect": "Small expert teams where the departure risk is acknowledged and consciously accepted.",
            "failureSignal": "Incidents in secondary coverage areas taking significantly longer to resolve than incidents in primary areas. Engineers embarrassed to be paged for components they are secondary coverage for.",
            "theCorrective": "Track bus factor explicitly and make it visible to leadership. When components reach bus factor 1, report it. Visibility alone creates accountability for cross-training investment."
          },
          {
            "positionName": "Domain Ownership",
            "description": "Each engineer owns specific domains deeply. Cross-domain contribution rare. Pairing occasional and informal. Bus factor not tracked.",
            "howArrive": "Team is small and expert. Each engineer built their component. The domain ownership feels natural — it is aligned with authorship.",
            "internalNarrative": "\"Each of us owns our part deeply. We are experts.\" The team feels skilled and proud.",
            "whatItProduces": "Deep technical expertise. One departure causing operational crisis in that engineer's domain. Recovery requires either rebuilding knowledge or rebuilding the system.",
            "whenCorrect": "Very small organisations where team members have been together since inception and departure is low-probability by mutual agreement.",
            "failureSignal": "One engineer departure causing a visible operational gap. Recovery taking weeks. Post-incident review identifying knowledge concentration as a contributing factor.",
            "theCorrective": "The departure scenario should be planned for now. Write a runbook for what happens if the most specialised engineer leaves. The exercise reveals how much knowledge is recoverable and how much is not."
          },
          {
            "positionName": "Exclusive Expertise",
            "description": "Each component owned exclusively by one engineer. No other team member can operate it independently. Bus factor = 1 for all components.",
            "howArrive": "One or two people built everything. There is no other team member to transfer to. This is the structural endpoint of small expert teams.",
            "internalNarrative": "\"I built this. I understand it.\" The individual feels expert and valued. The team does not exist as a resilience unit — it is a collection of sole owners.",
            "whatItProduces": "Maximum technical excellence in each domain. Platform entirely dependent on its original engineers. Any departure is a crisis. The platform cannot outlast its builders.",
            "whenCorrect": "Solo engineers. A team of one cannot transfer knowledge to anyone. This is a structural condition, not a choice.",
            "failureSignal": "Engineer departure causing component inoperability. Recovery requires rebuilding from scratch. Platform capability permanently lost until rebuild is complete.",
            "theCorrective": "Stop all new development. Invest entirely in documentation and cross-training until bus factor reaches 2 for all critical components. This is a platform in existential fragility — one departure from crisis."
          }
        ]
      },
      {
        "code": "II-G1",
        "axis": "Reactive ↔ Proactive",
        "type": "G",
        "summary": "Genuine tension — reactive demand is structurally self-renewing; proactive value is structurally invisible; both are permanent features of the system",
        "columns": [
          {
            "positionName": "Pure Reactive",
            "description": "100% reactive. No protected proactive capacity. Platform team addresses requests in order of arrival. Roadmap is the ticket queue.",
            "howArrive": "Platform team never had the organisational standing to say no. Every request was a reasonable request individually. The team became a helpdesk through accumulated yeses.",
            "internalNarrative": "\"We are helpful. We respond to what our consumers need.\" The team feels generous. The toil feels like purpose. The systemic decay is invisible.",
            "whatItProduces": "No systemic improvement. Toil accumulates. Architecture incoherent. Team agency absent. Toil-attrition loop begins running. The team becomes progressively less capable of doing the proactive work it never had time for.",
            "whenCorrect": "Never a sustainable operating mode. Acceptable only during a genuine crisis response lasting weeks, not quarters.",
            "failureSignal": "Team attrition. Engineers citing loss of agency as reason for leaving. Known systemic problems described by the team but never addressed. Sprint retrospectives consistently identifying the same blockers.",
            "theCorrective": "Begin with one protected hour per week per engineer for proactive work. Increase by one hour per quarter. Report the allocation and any sacrifice of it to leadership. The visibility creates accountability that absence of reporting does not."
          },
          {
            "positionName": "Reactive Dominant",
            "description": "85–95% reactive. Proactive work happens when reactive demand permits. No structural protection. Proactive time is a residual.",
            "howArrive": "Proactive time was protected nominally but eroded steadily. Leadership never enforced the protection. The team learned that reactive demand always wins when it competes with proactive intention.",
            "internalNarrative": "\"We respond quickly and invest when we can.\" The team feels hardworking and pragmatic.",
            "whatItProduces": "High consumer satisfaction. Systemic improvement perpetually deferred. Team morale declining slowly as known problems accumulate on a parking lot nobody visits.",
            "whenCorrect": "Most platform teams in practice. Appropriate when leadership has not yet committed to proactive protection.",
            "failureSignal": "Proactive time allocation showing downward trend quarter over quarter. Known problems accumulating on a parking lot list that is never actioned. \"We'll get to it\" said of problems years old.",
            "theCorrective": "Make the proactive capacity sacrifice visible. Report it to leadership as a number. \"We planned 30% proactive capacity this quarter. We delivered 5%.\" The visibility creates accountability."
          },
          {
            "positionName": "Reactive Leaning",
            "description": "70–85% reactive. Proactive work exists but competes with reactive demand without structural protection. Leadership has stated but not enforced the split.",
            "howArrive": "Team stated a reactive/proactive split but never made it structural. The split lives in a planning document, not in an operational agreement with leadership.",
            "internalNarrative": "\"We balance immediate needs with longer-term thinking.\" The team feels responsible. The erosion of proactive time is not visible because it was never structural.",
            "whatItProduces": "Good consumer satisfaction. Some systemic improvement. Proactive time invisible as a metric — neither its existence nor its sacrifice is tracked.",
            "whenCorrect": "Appropriate while building the case for structural protection. Not appropriate once the case has been made.",
            "failureSignal": "Proactive work not visible in sprint reporting. Leadership cannot answer \"what proactive investment is the platform making this quarter?\" The investment exists in intention, not in measurement.",
            "theCorrective": "Find the leadership sponsor who will enforce the proactive protection. Without enforcement, the stated protection is a fiction. The sponsor commitment is the structural mechanism needed."
          },
          {
            "positionName": "Structured Balance",
            "description": "60–70% reactive, 30–40% proactive. Structural protection exists. Proactive capacity is not available for reactive demand without explicit leadership decision. Reduction in proactive capacity is a reportable event.",
            "howArrive": "Team negotiated structural protection with leadership. Both parties understand what \"proactive capacity reduction\" means operationally and both are committed to reporting it when it happens.",
            "internalNarrative": "\"We serve consumers and we improve the platform. Both are real and both are protected.\" The team feels sustainable and clear.",
            "whatItProduces": "Consumer needs met. Systemic quality improving. Team workload sustainable. Both reactive and proactive work are visible, tracked, and reported. Trust maintained through consistent delivery.",
            "whenCorrect": "Most mature platform teams. The default for organisations where leadership understands platform health as a business requirement.",
            "failureSignal": "Proactive capacity trend downward. Structural protection being overridden repeatedly. Leadership protection nominal — stated but not enforced when tested.",
            "theCorrective": "—"
          },
          {
            "positionName": "Proactive Leaning",
            "description": "50–60% reactive. Proactive investment protected structurally. Consumer request queue managed with explicit triage. Some consumer requests addressed with longer lead times than consumers expect.",
            "howArrive": "Team built sufficient consumer trust to manage demand explicitly. Triage is accepted by consumers because the relationship supports it.",
            "internalNarrative": "\"We invest in the future and manage demand deliberately.\" The team feels principled and strategic.",
            "whatItProduces": "Strong systemic improvement. Platform getting ahead of problems. Some consumers frustrated by slower response. Consumer trust must be maintained through explicit triage communication.",
            "whenCorrect": "Platforms with very capable, self-sufficient consumer bases who can self-serve most reactive needs.",
            "failureSignal": "Consumer satisfaction declining without clear cause. Triage decisions not communicated — consumers discover they are deprioritised by waiting, not by explicit communication.",
            "theCorrective": "Establish a consumer request triage process. When a request is not addressed within a defined window, the consumer receives a specific explanation and timeline. Silence is worse than a long timeline communicated clearly."
          },
          {
            "positionName": "Proactive Dominant",
            "description": "20–40% reactive. Proactive roadmap drives the majority of work. Consumer requests triaged against strategic roadmap and addressed when they align.",
            "howArrive": "Platform team has strong internal strategic clarity and consumers mature enough to self-serve most reactive needs.",
            "internalNarrative": "\"We know where we are going. We manage demand against that direction.\" The team feels strategically capable.",
            "whatItProduces": "Rapid strategic evolution. Consumer trust eroding without careful triage communication. Platform team may build excellent things nobody asked for.",
            "whenCorrect": "Platforms serving consumers with very high infrastructure maturity and strong self-service capability.",
            "failureSignal": "Bypass rate increasing. Consumer teams building shadow solutions. Platform team meeting notes containing items repeatedly marked \"not aligned with roadmap.\"",
            "theCorrective": "Run a quarterly consumer survey. If more than 30% of consumers report that their most important unmet need is a reactive request, the proactive/reactive balance may need adjustment."
          },
          {
            "positionName": "Pure Proactive",
            "description": "0–10% reactive. Team builds according to strategic vision. Consumer requests acknowledged but not prioritised. Consumers expected to adapt.",
            "howArrive": "Team was never close to consumers. Built from a vision without feedback loops to correct course.",
            "internalNarrative": "\"We are building the platform it needs to be. Consumers will benefit when it arrives.\" The team feels visionary.",
            "whatItProduces": "Consumer adoption collapsing. Teams building shadow solutions. Platform team producing architectural quality for nobody.",
            "whenCorrect": "Never appropriate as an ongoing operating mode.",
            "failureSignal": "Platform team measures showing excellent strategic progress. Consumer satisfaction surveys showing platform relevance declining. The work is good. Nobody is using it.",
            "theCorrective": "This position is not viable as an ongoing operating mode. Move toward Proactive Dominant immediately. Any consumer engagement at all improves the position."
          }
        ]
      },
      {
        "code": "II-G2",
        "axis": "Sustainability ↔ Responsiveness",
        "type": "G",
        "summary": "Genuine tension — infinite consumer demand met by finite platform team capacity produces burnout; limiting demand produces consumer dissatisfaction; both consequences are genuine and structural",
        "columns": [
          {
            "positionName": "Full Throttle",
            "description": "Platform team addresses every consumer request as quickly as possible. No capacity management. No prioritisation. No boundaries on demand. On-call burden unmanaged.",
            "howArrive": "Platform team never had the organisational standing to say no. Saying yes to every request felt like good service. The burnout accumulated gradually, not suddenly. Attrition began before the team recognised the pattern.",
            "internalNarrative": "\"We are there when our consumers need us. We care.\" The team feels generous and indispensable. The burnout is felt as dedication. It feels like the right cost to pay.",
            "whatItProduces": "Maximum short-term responsiveness. Toil-attrition loop running. Team burns out progressively. Attrition concentrates remaining toil on fewer people. Death spiral if not addressed. Each departure makes the remaining team's situation worse.",
            "whenCorrect": "Never sustainable. Acceptable only during a short-term crisis where the team consciously accepts the burnout cost for a defined period.",
            "failureSignal": "Team attrition. Engineers citing overwork as reason for leaving. On-call incidents increasing despite the team working more hours. Each departure makes the remaining situation worse. The loop is visible in attrition data before it is visible in operational data.",
            "theCorrective": "Cap on-call burden immediately. Let some incidents have longer response times. The operational impact of capping is lower than the attrition impact of not capping. Address the ticket queue second. Do not attempt to address everything — triage."
          },
          {
            "positionName": "High Responsiveness",
            "description": "Platform team addresses almost all requests quickly. Light prioritisation. Triage exists but the bar for rejection is very high. On-call burden high but not tracked.",
            "howArrive": "Platform team is highly committed and consumer-focused. The commitment is genuine. The cost of the commitment is distributed across team members and invisible until it becomes attrition.",
            "internalNarrative": "\"We are very responsive. Our consumers can count on us.\" The team feels capable and reliable. On-call burden is visible but framed as the cost of good service.",
            "whatItProduces": "High consumer satisfaction. On-call burden high. Toil accumulating. Team health declining but not yet critical. Attrition risk growing.",
            "whenCorrect": "Platform teams in growth organisations where demand is outpacing capacity growth and the solution is growing the team, not managing demand.",
            "failureSignal": "Engineers taking unplanned leave. On-call rotation shrinking as people opt out. Reactive demand growing faster than team capacity. Reported well-being declining.",
            "theCorrective": "Measure on-call burden hours per engineer per month. If it exceeds a defined threshold (typically 8–10 hours per month for effective on-call), it is causing burnout. Cap it with leadership agreement. Report the cap."
          },
          {
            "positionName": "Sustainable Responsiveness",
            "description": "Platform team addresses most requests with explicit SLAs and triage. High-priority requests addressed quickly. Lower-priority requests managed. On-call burden actively monitored.",
            "howArrive": "Platform team made attempts to manage demand but without structural mechanisms. SLAs exist on paper. On-call burden is noticed but not capped.",
            "internalNarrative": "\"We respond well and we are managing our capacity.\" The team feels balanced. Some tension between the SLAs and actual capacity is present but not acknowledged.",
            "whatItProduces": "Good consumer satisfaction. SLAs mostly met. Some consumer requests take longer than expected. Team health manageable. On-call burden monitored.",
            "whenCorrect": "Transitioning teams moving from Full Throttle toward sustainable operations while the demand management mechanisms are being built.",
            "failureSignal": "SLAs being missed under demand spikes. Platform team working evenings and weekends to meet commitments made without capacity check. On-call burden creeping above the threshold that was set.",
            "theCorrective": "Make SLAs explicit and public. When SLAs are missed, report why. The visibility creates accountability for capacity management decisions that absence of reporting does not."
          },
          {
            "positionName": "Managed Demand",
            "description": "Explicit demand management. Clear SLAs by request type. Consumer requests triaged against capacity. Platform team working hours sustainable. On-call burden tracked and capped. Escalation paths for overflow.",
            "howArrive": "Platform team negotiated explicit demand management with leadership. SLAs are defined and published. On-call burden has a defined cap. Escalation paths exist. The system is governed.",
            "internalNarrative": "\"We serve consumers sustainably. Both the consumers and the team can depend on us.\" The team feels professionally managed.",
            "whatItProduces": "Consumer needs met sustainably. Platform team healthy over time. Trust maintained through consistent delivery within stated SLAs. Toil-attrition loop not running. Some consumers frustrated by response times.",
            "whenCorrect": "Most mature platform teams in organisations where sustainability is understood as a platform health requirement. The default.",
            "failureSignal": "SLA miss rate increasing. On-call burden trend upward. Platform team not recovering between demand spikes. Team reporting sustainable but trajectory trending unsustainable.",
            "theCorrective": "—"
          },
          {
            "positionName": "Selective Responsiveness",
            "description": "Platform team manages demand actively. Some requests declined or significantly delayed. Consumer expectations managed explicitly. Platform team capacity protected at the cost of some consumer request delays.",
            "howArrive": "Platform team has enough organisational standing to manage demand explicitly. Consumer base mature enough to accept triage without losing confidence.",
            "internalNarrative": "\"We protect our capacity to serve consumers well over time.\" The team feels principled and strategic.",
            "whatItProduces": "Consumer satisfaction somewhat lower. Some requests declined or delayed. Consumer trust maintained through explicit triage communication and alternative provision.",
            "whenCorrect": "Platform teams with very capable, self-sufficient consumers who rarely exceed the platform's defined scope.",
            "failureSignal": "Consumer satisfaction survey showing significant dissatisfaction with responsiveness without a corresponding improvement in platform quality. Consumers frustrated by triage decisions not communicated clearly.",
            "theCorrective": "Survey consumers on their experience with declined or delayed requests. If consumers have found alternative solutions, the platform's scope definition may be too narrow. The consumer behaviour reveals the gap."
          },
          {
            "positionName": "Demand Rationing",
            "description": "Platform team manages demand strictly. Requests outside defined scope declined. Capacity protected significantly at the cost of consumer satisfaction.",
            "howArrive": "Platform team has strong scope definition and enough organisational standing to enforce it.",
            "internalNarrative": "\"We are very clear about what we do and do not do.\" The team feels focused.",
            "whatItProduces": "Significant consumer dissatisfaction with requests outside defined scope. Some teams building shadow solutions for needs the platform declines to address.",
            "whenCorrect": "Platforms serving very well-defined, stable consumer needs with little variation.",
            "failureSignal": "Shadow platform solutions appearing for needs the platform declines. Consumers working around scope limitations rather than requesting scope expansion. Political pressure to expand scope growing.",
            "theCorrective": "Identify the two categories of declined requests that generate the most consumer friction. Evaluate whether adding those categories to scope, even at lower priority, would reduce friction enough to justify the capacity cost."
          },
          {
            "positionName": "Complete Boundary",
            "description": "Platform team works defined hours on defined scope. All out-of-scope requests declined regardless of urgency. No exceptions. Complete boundary.",
            "howArrive": "Platform team built with strict scope from inception. Consumers understood the scope before they adopted the platform.",
            "internalNarrative": "\"We do our defined work excellently. Requests outside scope are outside scope.\" The team feels disciplined.",
            "whatItProduces": "Consumer needs outside scope entirely unmet. Platform seen as unhelpful for anything outside its defined scope. Adoption limited to the defined scope only.",
            "whenCorrect": "External SaaS products with very clear scope boundaries. Rarely appropriate for internal platforms.",
            "failureSignal": "Consumers entirely self-sufficient because they learned the platform will not help them with anything outside defined scope. Platform adoption limited. Political pressure to dissolve or redefine the platform.",
            "theCorrective": "If consumer needs outside scope are significant and growing, this position is creating organisational dysfunction that will eventually force a scope change. Consider whether expanding scope by one category is preferable to continued political pressure."
          }
        ]
      }
    ]
  },
  {
    "romanId": "III",
    "title": "Structure & Boundary",
    "theme": "",
    "definition": "What shape does the platform take, and where does it end? Every decision about the platform's internal architecture, its interfaces, and the definition of where platform responsibility ends.",
    "tradeOffs": [
      {
        "code": "III-L1",
        "axis": "Simplicity ↔ Expressiveness",
        "type": "L",
        "summary": "Legitimate tension — a simple interface is easy to learn and hard to misuse; an expressive interface can represent all realistic consumer needs",
        "columns": [
          {
            "positionName": "Minimal API",
            "description": "Interface has the absolute minimum concepts. One way to do everything. No options. No extensions. If a need cannot be expressed in the minimal API, it cannot be met by the platform.",
            "howArrive": "Platform team designed for a single, well-understood use case. The interface was built to express that case and nothing more. As use cases diversified, the minimal API was not extended — workarounds accumulated instead.",
            "internalNarrative": "\"We keep it simple. Simple is correct.\" The team feels principled and disciplined. The blocked consumers are seen as edge cases, not as signal.",
            "whatItProduces": "Impossible to misuse. Zero learning curve for the core path. Extremely easy to reason about. Consumers with needs outside the minimal API are entirely blocked with no recourse. Platform seen as limited and unhelpful for anything non-standard.",
            "whenCorrect": "Internal tools for single, well-understood use cases where all consumers are identical. Very rare for general internal platforms.",
            "failureSignal": "Consumers regularly requesting capabilities that cannot be expressed in the minimal API. Workarounds appearing for standard use cases because the API cannot express them.",
            "theCorrective": "Identify the three most common consumer workarounds. Each workaround defines a capability the minimal API should add. Add those three before worrying about minimalism."
          },
          {
            "positionName": "Opinionated Simplicity",
            "description": "Interface simple with deliberate opinions. Some options exist but choices constrained to prevent misuse. Complexity accessible only through a defined escape hatch requiring justification.",
            "howArrive": "Platform team has strong opinions about the right way to do things and built those opinions into the interface. Simplicity is a value and a design principle. The escape hatch was added reluctantly.",
            "internalNarrative": "\"We guide users toward the right approach. Simplicity is a feature.\" The team feels thoughtful and opinionated.",
            "whatItProduces": "Very low misuse risk. Low learning curve. Clear guidance. Escape hatch creates friction for legitimate advanced cases. Most consumers find most things easy and some things impossible.",
            "whenCorrect": "Very opinionated platforms for standard workloads. Heroku, Vercel. Appropriate when consumer needs are genuinely homogeneous.",
            "failureSignal": "Escape hatch used by almost all consumers because the opinionated path is too restrictive. The hatch is the path.",
            "theCorrective": "Measure how often the escape hatch is used. If used by more than 30% of consumers, the core API is too opinionated. The hatch is telling you where the opinions are wrong."
          },
          {
            "positionName": "Simple with Extensions",
            "description": "Simple default path. Extension mechanism exists for advanced needs. Extensions are first-class but require more knowledge. Core API remains simple. Extensions not prominent in standard documentation.",
            "howArrive": "Platform team built a simple core and added extensions as consumer needs evolved. Each extension was individually justified. The extension mechanism may not have been designed upfront.",
            "internalNarrative": "\"We have a simple path and we can handle advanced cases.\" The team feels accommodating.",
            "whatItProduces": "Low learning curve for common cases. Full power available when needed. Extension mechanism may be hard to find or use. Some consumers encounter extension before they are ready for it.",
            "whenCorrect": "Growing platforms with a defined core and emerging advanced use cases. Good intermediate position.",
            "failureSignal": "Extensions being used for standard cases because the core API is too limited. Extension becoming the de facto default path rather than the exception path.",
            "theCorrective": "Audit whether extensions are being used for standard cases. If they are, those standard cases belong in the core API. Move them up rather than down."
          },
          {
            "positionName": "Progressive Complexity",
            "description": "Simple interface for the common case. Progressive complexity available for advanced cases. Expert access available for edge cases. Three coherent layers: simple, intermediate, expert — each accessible from the previous without platform team involvement.",
            "howArrive": "Platform team designed all three layers intentionally and maintains them as first-class concerns. Progressive disclosure is an explicit design principle, not an afterthought.",
            "internalNarrative": "\"Any consumer can use us at the right level for their need.\" The team feels well-designed and inclusive.",
            "whatItProduces": "Common cases are fast. Advanced cases are possible. Expert cases are accessible. No consumer permanently blocked by interface limitations. Requires significant design investment and maintenance.",
            "whenCorrect": "Most mature internal platforms serving diverse consumers with a mix of expertise levels. The default.",
            "failureSignal": "Interface layers incoherent. Moving from simple to intermediate is jarring. Consumers stuck between layers. Platform team involvement required to navigate layer transitions.",
            "theCorrective": "—"
          },
          {
            "positionName": "Guided Expressiveness",
            "description": "Expressive interface for most needs. Simple path exists but is not prominent. Most consumers encounter moderate complexity on first use. Documentation required for standard cases.",
            "howArrive": "Platform team has primarily expert consumers and designed for them. Simplicity was not a priority. Non-expert consumers are expected to invest in learning or ask for help.",
            "internalNarrative": "\"Our consumers know what they're doing. We give them what they need.\" The team feels capable.",
            "whatItProduces": "Newcomers encounter significant complexity on first use. Learning curve high. Platform seen as difficult by non-expert consumers. Support burden for newcomers high.",
            "whenCorrect": "Platforms primarily serving expert teams with mature infrastructure knowledge. SRE-built platforms used by SREs.",
            "failureSignal": "Onboarding documentation growing in length. First-use support tickets increasing. Senior consumer satisfaction high, junior consumer satisfaction low and declining.",
            "theCorrective": "Measure time-to-first-successful-deployment for new consumers. If it exceeds one day, the interface complexity is too high for the organisation's engineering mix."
          },
          {
            "positionName": "Expert Interface",
            "description": "Expert-oriented interface. All options exposed. Expressive for those who know the system. High learning curve for newcomers. Onboarding support required for most consumers.",
            "howArrive": "Platform team's consumers have always been infrastructure engineers. The interface mirrors the underlying system because that is what consumers expect and need.",
            "internalNarrative": "\"Our consumers are experts. We treat them like experts.\" The team feels respectful of consumer capability.",
            "whatItProduces": "Platform accessible only to experts. Junior developers cannot self-serve. Support queue dominated by newcomer questions. Adoption limited to expert teams.",
            "whenCorrect": "Developer tools for infrastructure engineers. Kubernetes itself at the raw API level.",
            "failureSignal": "Platform support queue dominated by newcomer questions. Platform adoption limited to teams with expert engineers. Junior developers unable to contribute infrastructure work.",
            "theCorrective": "Shadow a junior engineer on their first day. Every moment of confusion is an interface design failure. Spend two weeks addressing those specific failures."
          },
          {
            "positionName": "Raw Substrate",
            "description": "Raw API. All underlying system capabilities exposed directly. Maximum expressiveness. No simplification, no opinions, no guidance of any kind.",
            "howArrive": "Platform team built a thin authentication layer over the cloud provider API. No design investment in the interface layer.",
            "internalNarrative": "\"We provide the substrate. Consumers build what they need.\" The team feels minimal and efficient.",
            "whatItProduces": "No simplification. Platform entirely inaccessible to non-experts. High error rate from misuse.",
            "whenCorrect": "Direct cloud provider APIs. AWS SDK, Azure Resource Manager. The starting point before any platform investment.",
            "failureSignal": "Error rate from misuse high. Incidents caused by incorrect direct API usage. Platform team spending time cleaning up misuse rather than building capabilities.",
            "theCorrective": "Identify the three most common misuse patterns in incidents. Each is an interface design flaw that should be prevented at the API layer — not at the training layer."
          }
        ]
      },
      {
        "code": "III-L2",
        "axis": "Stability ↔ Evolvability",
        "type": "L",
        "summary": "Legitimate tension — stable interfaces guarantee consumers that their investments are protected; evolvable structures can be improved as understanding grows",
        "columns": [
          {
            "positionName": "Frozen Interface",
            "description": "Interfaces never change. Design mistakes are permanent. Deprecated behaviour is supported indefinitely regardless of cost.",
            "howArrive": "Platform team committed to stability as a primary value. Every request to change an interface is weighed against the commitment. Mistakes accumulate because correcting them would require breaking changes.",
            "internalNarrative": "\"We are stable. Our consumers can depend on us.\" The team feels reliable. The inability to fix mistakes is not framed as a problem — it is framed as the cost of commitment.",
            "whatItProduces": "Complete consumer stability. Zero unplanned migration work. Design mistakes becoming permanent. Security vulnerabilities accumulating in deprecated code. Platform team unable to correct known problems. Technical debt compounding structurally.",
            "whenCorrect": "Almost never. Only when consumer teams have genuinely zero capacity for migration work, which is an organisational problem rather than a platform design position.",
            "failureSignal": "Platform team identifying design mistakes they cannot fix. Security vulnerabilities in interfaces they cannot update without breaking consumers. Consumer experience degrading because the interface cannot evolve to meet changing needs.",
            "theCorrective": "Identify the three design mistakes causing the most consumer pain. Build a migration path for each. The migration does not need to happen immediately — but the path needs to exist and needs to be communicated."
          },
          {
            "positionName": "Long-Cycle Stability",
            "description": "Interfaces change very rarely. Deprecation windows measured in years. Old versions supported until adoption reaches near-zero without time pressure.",
            "howArrive": "Platform team has a very large or very critical consumer base where migrations are genuinely expensive. The stability commitment was made consciously and is maintained consciously.",
            "internalNarrative": "\"We are very stable. We are very trustworthy.\" The team feels highly professional. The slow evolution is accepted as the cost of trust.",
            "whatItProduces": "Very high consumer stability. Migrations predictable and rare. Trust very high. Platform evolves very slowly. Design mistakes take years to fix. Technical debt accumulates at the interface level.",
            "whenCorrect": "Kubernetes API versioning model. APIs with very large or very critical consumer bases where migrations are genuinely expensive.",
            "failureSignal": "Platform team demoralised by inability to fix known design mistakes within any reasonable timeframe. \"We'll fix it in the next major version\" said of problems years old. Major version never comes.",
            "theCorrective": "Define maximum deprecation windows. \"Indefinite support\" is a commitment that will eventually become unsustainable. Set the ceiling and communicate it before it is tested."
          },
          {
            "positionName": "Versioned Stability",
            "description": "Interfaces versioned explicitly. Breaking changes require major version increment. Deprecation windows defined and honoured. Multiple versions co-exist for the defined window.",
            "howArrive": "Platform team adopted explicit versioning and defined deprecation windows in response to consumer complaints about unexpected changes. Tooling investment varies.",
            "internalNarrative": "\"We version our changes and give notice. We are responsible.\" The team feels disciplined.",
            "whatItProduces": "Good stability. Consumers can plan migrations. Interface changes manageable. Significant platform investment in migration tooling and version co-existence.",
            "whenCorrect": "Mature platforms with significant consumer footprints and investment in migration infrastructure.",
            "failureSignal": "Migration tooling promised but not built. Deprecation windows announced but not enforced. Consumers missing sunsets because support was insufficient for the migration complexity.",
            "theCorrective": "Enforce sunset dates that were announced. A sunset date that passes without enforcement teaches consumers that notice periods are optional and future notices can be ignored."
          },
          {
            "positionName": "Managed Evolution",
            "description": "Explicit versioning with defined deprecation windows and migration tooling. Breaking changes announced with substantial notice. Migration supported by platform team. Sunset dates set and enforced with support.",
            "howArrive": "Platform team designed for evolvability from the start. Versioning is structural. Migration tooling is built alongside breaking changes, not after. Deprecation windows are calendar commitments.",
            "internalNarrative": "\"We evolve thoughtfully and support consumers through changes.\" The team feels mature and professional.",
            "whatItProduces": "Consumer change cadence predictable. Platform can improve and correct design mistakes. Migrations are supported. Trust maintained through consistency.",
            "whenCorrect": "Most mature internal platforms. The default for organisations where platform changes affect multiple product teams.",
            "failureSignal": "Consumers missing sunset dates despite notice. Migration support insufficient for migration complexity. Sunset enforcement causing consumer disruption despite announced windows.",
            "theCorrective": "—"
          },
          {
            "positionName": "Versioned Evolution",
            "description": "Versions exist. Breaking changes announced with moderate notice. Migration documentation provided. Some migration support from platform team. Sunset dates set and enforced.",
            "howArrive": "Platform team is small with a small consumer base. Changes are announced and consumers self-migrate. Migration tooling exists but is minimal.",
            "internalNarrative": "\"We give notice and document. Consumers can manage.\" The team feels adequate.",
            "whatItProduces": "Consumer migration burden moderate. Platform can iterate meaningfully. Consumer planning somewhat harder than at higher stability positions. Some consumers miss notice and are surprised by sunsets.",
            "whenCorrect": "Smaller platforms with smaller consumer bases and higher engineering maturity.",
            "failureSignal": "Consumers discovering breaking changes without adequate notice. Sunset dates enforced before consumers are ready and without sufficient support.",
            "theCorrective": "Build a consumer notification system tracking which consumers are using deprecated interfaces. Silence from consumers does not mean migration has happened. It often means they haven't noticed yet."
          },
          {
            "positionName": "Rapid Iteration",
            "description": "Interfaces evolve quickly. Versioning exists. Breaking changes frequent. Consumers expected to track changes and migrate. Notice periods short.",
            "howArrive": "Platform team is in early stage with few established consumers. Iteration speed is the primary value. Breaking changes are frequent and consumers accepted this when they adopted early.",
            "internalNarrative": "\"We iterate quickly. Early consumers knew the pace.\" The team feels dynamic.",
            "whatItProduces": "High consumer migration burden. Consumers spending significant time tracking and responding to platform changes. Trust eroding.",
            "whenCorrect": "Early-stage platforms with small consumer bases before significant adoption. Should not persist beyond early stage.",
            "failureSignal": "Consumers spending more time on platform migrations than on their own feature development. Platform seen as a source of unplanned work. Adoption of new capabilities declining.",
            "theCorrective": "Invest in automated migration tooling before the next breaking change. The manual migration cost is accumulating consumer resentment that will eventually surface as adoption resistance."
          },
          {
            "positionName": "Continuous Breaking Change",
            "description": "Interfaces change continuously. No versioning. No deprecation periods. Consumers expected to update constantly or break silently.",
            "howArrive": "Platform team has no versioning discipline. Changes are made when needed. Consumers break and the platform team tells them to update.",
            "internalNarrative": "\"We change when we need to. Consumers need to keep up.\" The team feels efficient. The consumer burden is not felt by the team.",
            "whatItProduces": "Consumer systems breaking frequently. Platform adoption risk high. Consumer trust collapses. Consumers refusing to adopt new platform capabilities because migration cost is unpredictable.",
            "whenCorrect": "Never appropriate once established consumers exist.",
            "failureSignal": "Consumer adoption collapsing. Teams refusing to adopt platform capabilities because migration cost is unpredictable. New capabilities ignored because adopting them means accepting continuous migration burden.",
            "theCorrective": "Make a public stability commitment. One quarter of stable interfaces. Honour it. Use the trust built to negotiate the evolution cadence needed."
          }
        ]
      },
      {
        "code": "III-L3",
        "axis": "Tight Coupling ↔ Loose Coupling",
        "type": "L",
        "summary": "Legitimate tension — tightly coupled components produce a coherent integrated experience; loosely coupled components can be changed independently with smaller blast radii",
        "columns": [
          {
            "positionName": "Monolithic Integration",
            "description": "All platform components share state, data, and operational context directly. One component's failure cascades to all. Changes require coordinated deployment of all components.",
            "howArrive": "Platform built quickly by a small team sharing everything for speed. The coupling was never addressed. As the system grew, the coupling became structural debt.",
            "internalNarrative": "\"We are integrated. The experience is seamless.\" The team feels coherent and user-friendly. The blast radius is not considered a design problem — it is considered an operational reality.",
            "whatItProduces": "Tightest possible consumer experience. No integration gaps. Single component failure causes platform-wide outage. Changes require coordinated deployment. Blast radius is the entire platform.",
            "whenCorrect": "Very early platforms. Single-team platforms built for speed. Only appropriate before consumer base is established.",
            "failureSignal": "Single component failure causing platform-wide outage. Platform unavailable for maintenance of any single component. Post-incident reviews consistently identifying blast radius as wider than expected.",
            "theCorrective": "Identify the three most common failure propagation paths. Each is a coupling that should be converted to an explicit interface. Start with the coupling whose blast radius is largest."
          },
          {
            "positionName": "Integrated System",
            "description": "Components highly integrated. Shared state common. Failure isolation limited. Coordinated deployment frequent but not always required. Strong coherent consumer experience.",
            "howArrive": "Platform built with coherence as the primary design value. Integration is a feature. The failure isolation cost was accepted as the price of a good consumer experience.",
            "internalNarrative": "\"We are a unified platform. Everything works together.\" The team feels comprehensive.",
            "whatItProduces": "Strong coherent consumer experience. Some failure propagation. Some coordinated deployment required. Good performance.",
            "whenCorrect": "Platforms with strong operational coherence requirements and low change frequency. Appropriate where consumer experience is primary and change rate is low.",
            "failureSignal": "Component failures propagating unexpectedly. Coordinated deployment requirements slowing change velocity. Change deployment requiring coordination of multiple teams.",
            "theCorrective": "Instrument failure propagation. When a component fails, measure what else degrades. Each degradation is a coupling to address."
          },
          {
            "positionName": "Coherent Modules",
            "description": "Components integrated through defined interfaces. Some shared state. Failure isolation partial. Most changes deployable independently but some require coordination.",
            "howArrive": "Platform started tightly coupled and began modularising. The modularisation is partial — some components have been extracted, others remain coupled.",
            "internalNarrative": "\"We are modular. We are mostly independent.\" The team feels architected. The residual coupling is acknowledged but not fully resolved.",
            "whatItProduces": "Good coherence. Reasonable failure isolation. Most changes independent. Residual coupling creates hidden failure paths.",
            "whenCorrect": "Growing platforms with partial modularisation. Good intermediate position.",
            "failureSignal": "Hidden coupling discovered during incidents. Changes believed independent causing unexpected failures. Post-incident reviews revealing implicit dependencies.",
            "theCorrective": "Audit shared state. For each piece of shared state, ask whether it could be replaced by an explicit API call without significant performance cost. Most shared state can be."
          },
          {
            "positionName": "Bounded Contexts",
            "description": "Components communicate through explicit, versioned contracts. Minimal shared state. Failure isolation strong. Most changes independently deployable. Consumer experience coherent through deliberate interface design not shared state.",
            "howArrive": "Platform designed with explicit bounded contexts from the start. Contracts are designed, not discovered. Failure isolation is a design requirement, not an emergent property.",
            "internalNarrative": "\"Our components are independent but the experience is coherent. We achieved both.\" The team feels architecturally mature.",
            "whatItProduces": "Strong failure isolation. Independent deployability. Coherent consumer experience through design rather than shared state. Requires significant upfront design investment and ongoing contract maintenance.",
            "whenCorrect": "Most mature internal platforms. The default for platforms needing both operational coherence and sustainable change pace.",
            "failureSignal": "Contract versioning not maintained. Implicit dependencies discovered during incidents. Consumer experience coherence degrading as components diverge without coordination.",
            "theCorrective": "—"
          },
          {
            "positionName": "Loosely Integrated",
            "description": "Components communicate through loose mechanisms. Shared state minimal. Failure isolation strong. Independent deployment standard. Consumer experience coherent but requires more navigation.",
            "howArrive": "Platform explicitly designed for high change frequency. Loose coupling is a change velocity feature. Consumer experience coherence is achieved through deliberate interface design.",
            "internalNarrative": "\"We are loosely coupled. Changes are safe. We achieve coherence through design.\" The team feels resilient.",
            "whatItProduces": "Very strong failure isolation. Changes truly independent. Consumer experience less coherent. Consumers must navigate across more loosely integrated components.",
            "whenCorrect": "Platforms with high change frequency and mature consumers capable of navigating component boundaries.",
            "failureSignal": "Consumer satisfaction declining despite component quality remaining high. Consumers spending time integrating components rather than using them. Integration work appearing in consumer sprint reviews.",
            "theCorrective": "Measure consumer integration time for common multi-component workflows. If integration time exceeds a defined threshold, provide native integration for those workflows specifically."
          },
          {
            "positionName": "Federated Components",
            "description": "Components nearly independent. Communication through events or APIs only. No shared state. Complete failure isolation. Consumer experience requires integration effort from consumers.",
            "howArrive": "Platform team explicitly chose independence as the architectural value. Consumers are expected to integrate. Fragmentation of consumer experience is the accepted cost.",
            "internalNarrative": "\"Each component is independent and excellent.\" The team feels highly capable at the component level. Consumer integration burden is seen as consumer responsibility.",
            "whatItProduces": "Complete independence. No coupling to manage. Consumer integration burden high. Platform experience fragmented.",
            "whenCorrect": "Microservice-oriented platforms with very high change frequency and technically mature consumer bases.",
            "failureSignal": "Consumer complaints about platform fragmentation. Teams building their own integration layers over the platform. Platform team unable to provide consistent operational support across components.",
            "theCorrective": "Identify the two workflows most commonly requiring consumers to integrate components themselves. Provide native integration for those workflows. Platform coherence can be layered on top of independent components."
          },
          {
            "positionName": "Complete Independence",
            "description": "Components completely independent. No shared state. No coordinated deployment. No integration guarantees. Consumer must integrate across all components themselves.",
            "howArrive": "Platform team built components at different times with no coordination. Independence is structural accident, not design choice.",
            "internalNarrative": "\"Each component stands alone.\" The team feels component-focused. The platform is not experienced as a platform — it is experienced as a collection of tools.",
            "whatItProduces": "Platform is a collection of components, not a platform. Consumer must build the integration experience themselves. Platform team cannot provide integrated operations.",
            "whenCorrect": "Not a platform in the internal developer platform sense. A component library or toolkit. Appropriate only where \"platform\" is explicitly defined as a component collection.",
            "failureSignal": "Consumers no longer experience the platform as a platform. They experience it as a collection of tools they must integrate themselves. Platform team unable to give a coherent on-call response.",
            "theCorrective": "Define what \"platform\" means for this system. A collection of independent components is not a platform — it is a component library. Decide whether to build a platform integration layer or explicitly redefine the offering as a component library."
          }
        ]
      },
      {
        "code": "III-L4",
        "axis": "Clarity of Ownership ↔ Collaborative Fluidity",
        "type": "L",
        "summary": "Legitimate tension — clear platform boundaries make accountability unambiguous; collaborative fluidity enables effective work across boundaries when real problems require it",
        "columns": [
          {
            "positionName": "Hard Walls",
            "description": "Every capability assigned exclusively to either platform team or product team. No cross-boundary work permitted under any circumstances. Escalation required for any boundary-crossing activity.",
            "howArrive": "Regulated environment with strict segregation of duties requirements. Or: following a major incident where unclear ownership was identified as a root cause, and the corrective was to make boundaries as explicit as possible.",
            "internalNarrative": "\"Accountability is clear. Everyone knows what they own.\" The team feels organised and compliant. Cross-boundary problems create frustration that is framed as the cost of clarity.",
            "whatItProduces": "Complete ownership clarity. Zero ambiguity. Every capability has exactly one owner. Accountability clear at all times. Cross-boundary problems slow to address. Escalation overhead significant. Incidents at boundaries delayed.",
            "whenCorrect": "Regulated environments with strict segregation of duties. After a major incident where boundary ambiguity was the root cause. Temporary overcorrection while better mechanisms are designed.",
            "failureSignal": "Significant delays in addressing cross-boundary problems. Teams waiting for escalation for problems that should be solvable collaboratively. Post-incident reviews identifying escalation lag as a contributing factor.",
            "theCorrective": "Identify the three problems in the last quarter that were delayed by boundary walls. Each defines a case for adding a collaboration path. Add the paths before the next incident."
          },
          {
            "positionName": "Documented Boundaries",
            "description": "Boundaries documented explicitly. Cross-boundary work requires formal process. Collaboration paths defined but used infrequently and formally. Approval required.",
            "howArrive": "Organisation has strong compliance requirements and needs to demonstrate clear ownership for audit purposes. Boundaries are documented for auditability, not for operational convenience.",
            "internalNarrative": "\"Ownership is explicit. We can demonstrate it.\" The team feels auditable and responsible.",
            "whatItProduces": "High ownership clarity. Low ambiguity. Cross-boundary collaboration possible but through a clear process that may be slow for urgent problems.",
            "whenCorrect": "Organisations with strong compliance requirements and clear audit requirements.",
            "failureSignal": "Cross-boundary incidents taking significantly longer than within-boundary incidents. Formal process creating friction for urgent collaborative needs.",
            "theCorrective": "Simplify the cross-boundary collaboration process. If it requires more than two steps, it is too heavy for the urgency of the problems it is meant to address."
          },
          {
            "positionName": "Clear Ownership",
            "description": "Clear ownership for all capabilities. Cross-boundary collaboration enabled through defined mechanisms. Ownership does not change during collaboration.",
            "howArrive": "Organisation developed ownership clarity over time through explicit assignment. Collaboration paths were added when gaps were discovered.",
            "internalNarrative": "\"We know what we own and we can work together when needed.\" The team feels balanced.",
            "whatItProduces": "Good clarity. Collaboration enabled without ownership ambiguity. Most situations have clear ownership. Infrequent ambiguity at boundaries causes confusion.",
            "whenCorrect": "Mature organisations with defined ownership frameworks and active governance.",
            "failureSignal": "Boundary ambiguity causing duplication or gaps. Two teams both working on the same problem, or neither working on it, because the boundary was unclear.",
            "theCorrective": "Run quarterly boundary reviews. Ask which capabilities have ambiguous ownership. Assign ownership for all ambiguous cases before the next quarter."
          },
          {
            "positionName": "Defined with Collaboration Paths",
            "description": "Explicit ownership for all capabilities. Defined collaboration paths for cross-boundary problems. Cross-boundary work does not change ownership. Collaboration is fluid within the boundary framework.",
            "howArrive": "Platform team invested in both ownership definition and collaboration path design simultaneously. Both are maintained as first-class concerns.",
            "internalNarrative": "\"We are accountable and we collaborate effectively. Both are possible.\" The team feels mature.",
            "whatItProduces": "Clear accountability in normal operation. Effective collaboration during cross-boundary problems. Incidents have clear owners. Boundary-crossing is structured, not blocked. Some governance overhead.",
            "whenCorrect": "Most mature platform teams. The default for organisations where cross-boundary collaboration is necessary but accountability is important.",
            "failureSignal": "Collaboration paths not used because teams route around them. Informal workarounds replacing the defined collaboration mechanism. Boundary framework becoming theoretical.",
            "theCorrective": "—"
          },
          {
            "positionName": "Fluid Ownership",
            "description": "Ownership documented but not strictly enforced. Teams collaborate across boundaries freely. Boundary adjustments happen informally based on where expertise is.",
            "howArrive": "High-trust organisation where informal ownership is well-understood and formal definition was not seen as necessary until incidents started revealing gaps.",
            "internalNarrative": "\"We work where the work is. Ownership is flexible.\" The team feels collaborative and practical.",
            "whatItProduces": "Accountability ambiguity at boundaries. Incidents sometimes unclear who is responsible. Some capabilities have no clear owner. Collaboration very fluid but accountability problems accumulate.",
            "whenCorrect": "High-trust, high-collaboration cultures with mature teams and low incident rate.",
            "failureSignal": "Incidents producing ownership disputes. Post-incident reviews consistently identifying unclear ownership as a contributing factor.",
            "theCorrective": "After each incident, explicitly document ownership for any capability where it was unclear. If the same capability appears in multiple incident reports with unclear ownership, assign it immediately."
          },
          {
            "positionName": "Shared Responsibility",
            "description": "Shared ownership for many capabilities. Boundary definition maintained at category level only. Teams self-organise around problems. Individual accountability unclear.",
            "howArrive": "Very small team where everyone knows everything and formal ownership would be overhead without benefit. Appropriate only at very small scale.",
            "internalNarrative": "\"We all own everything together.\" The team feels like a cohesive unit. Individual accountability is invisible — it is the team's accountability.",
            "whatItProduces": "Accountability significantly ambiguous. Incidents at boundaries produce conflict about ownership. Teams sometimes do less because they assume another team is responsible.",
            "whenCorrect": "Very small teams where everyone knows everything and formal ownership is genuinely unnecessary overhead.",
            "failureSignal": "Post-incident reviews consistently identifying ownership ambiguity as a root cause. Teams unsure whether a problem is theirs. \"We thought you had it\" appearing in retrospectives.",
            "theCorrective": "Establish a minimum ownership model at the category level. Even \"platform team owns provisioning, product team owns configuration\" is better than no ownership model."
          },
          {
            "positionName": "No Boundaries",
            "description": "No explicit ownership. All teams responsible for everything. Problems owned by whoever picks them up. Accountability impossible to assign.",
            "howArrive": "Organisation never invested in ownership definition. Work is picked up based on availability. Nobody chose this — it is the absence of investment in ownership.",
            "internalNarrative": "\"Whoever picks it up owns it.\" The team feels agile and unbureaucratic. The accountability gap is not experienced as a problem until an incident reveals it.",
            "whatItProduces": "Complete accountability vacuum. Nothing has a clear owner. Incidents produce blame conflict. Some capabilities have no effective owner.",
            "whenCorrect": "Never a chosen position. Always the absence of investment in ownership.",
            "failureSignal": "Complete ownership vacuum for important capabilities. Problems falling through. \"That's not our problem\" said by every team. Incidents unresolved because ownership never assigned.",
            "theCorrective": "Define ownership for the five capabilities most likely to be involved in the next serious incident. Do this before the incident, not after it."
          }
        ]
      },
      {
        "code": "III-G1",
        "axis": "Abstraction Depth",
        "type": "G",
        "summary": "Genuine tension — every point on the abstraction spectrum simultaneously creates value and closes off access; the choice of what to hide determines what consumers gain and what they lose",
        "columns": [
          {
            "positionName": "Business Outcomes",
            "description": "Platform accepts business intent. \"I need payment processing\" — platform implements everything. No infrastructure concepts exposed to consumers whatsoever.",
            "howArrive": "Platform team designed explicitly for consumers with zero infrastructure knowledge. Abstraction is the primary product. Gradually, edge cases appear that the abstraction cannot serve.",
            "internalNarrative": "\"We handle everything. Consumers focus on business.\" The team feels maximally helpful. Debugging complexity is experienced as platform team's problem to solve, not a design flaw.",
            "whatItProduces": "Zero infrastructure cognitive load. Platform team absorbs all infrastructure complexity. Consumers entirely blocked when their need falls outside the abstraction. Debugging requires platform team involvement for all non-trivial problems. Complete platform team dependency.",
            "whenCorrect": "Fully managed PaaS products. Appropriate for organisations where infrastructure knowledge is not a hiring requirement and platform team has sufficient capacity to absorb all edge cases.",
            "failureSignal": "Consumers regularly requesting capabilities the abstraction cannot serve. Platform team building increasingly specific implementations for increasingly specific requests. Edge case volume growing faster than the abstraction can absorb.",
            "theCorrective": "Identify the three most common cases where consumers need platform team involvement to debug or extend. Each defines a primitive to add to the layer below Business Outcomes. Add the primitive before adding more abstraction."
          },
          {
            "positionName": "Business Primitives",
            "description": "Platform accepts domain-level resources: `Database`, `Queue`, `AppService`. No cloud provider concepts visible. Implementation entirely hidden. Consumer works in business terms only.",
            "howArrive": "Platform team built an internal developer platform explicitly to reduce cognitive load. Domain primitives were designed carefully. Edge case handling was deferred.",
            "internalNarrative": "\"Consumers work in business terms. We handle infrastructure.\" The team feels appropriately abstracted.",
            "whatItProduces": "Very low infrastructure cognitive load. Consumers blocked for legitimate needs outside the primitives. Debugging platform behaviour requires platform team involvement. Platform team is a required participant in any non-standard situation.",
            "whenCorrect": "Heroku, Render, Railway. Internal platforms for organisations where all product teams have zero infrastructure knowledge and that is a deliberate hiring choice.",
            "failureSignal": "Consumers building workarounds in the application layer for things the platform primitives cannot express. Platform team aware of the workarounds but unable to serve the need within the current abstraction model.",
            "theCorrective": "Audit the platform primitives against actual consumer workarounds. Every workaround is a missing or inadequate primitive. Address the three most common workarounds."
          },
          {
            "positionName": "Domain Language",
            "description": "Platform accepts domain resources with some configuration options. Consumers express what they need in business terms with some technical parameters that require some infrastructure understanding.",
            "howArrive": "Platform team iterated from a domain language base, adding configuration options as consumers requested them. The options accumulated without a clear design philosophy.",
            "internalNarrative": "\"We speak business language with some technical flexibility.\" The team feels pragmatic.",
            "whatItProduces": "Low cognitive load for standard cases. Some consumer control over important parameters. Parameter space must be carefully designed — too many defeats simplicity, too few blocks legitimate cases.",
            "whenCorrect": "Modern internal developer platforms for product-focused engineering organisations with mixed expertise.",
            "failureSignal": "Parameter proliferation. Consumers requesting more parameters because the existing set cannot express their legitimate needs. Parameter count growing without a corresponding design review.",
            "theCorrective": "Review the parameter set annually. Parameters unused by more than 20% of consumers are candidates for removal. Parameters frequently requested but absent are candidates for inclusion."
          },
          {
            "positionName": "Progressive Abstraction",
            "description": "Three-layer access: simple domain resources for standard cases, technical configuration for advanced cases, raw infrastructure access for edge cases. Each layer accessible from the previous without platform team involvement.",
            "howArrive": "Platform team designed all three layers intentionally as the abstraction architecture. Progressive disclosure is a first-class design principle, not a retrofitted feature.",
            "internalNarrative": "\"Any consumer can access what they need at the right depth.\" The team feels well-designed.",
            "whatItProduces": "Cognitive load proportional to need. Common cases fast and simple. Advanced cases possible without platform team involvement. Edge cases accessible. Requires significant upfront design investment and ongoing maintenance.",
            "whenCorrect": "Most mature internal platforms serving both expert and non-expert consumers. The default.",
            "failureSignal": "Escape hatch from simple layer to advanced layer not working smoothly. Consumers stuck between layers. Platform team involvement required to navigate layer transitions that should be self-service.",
            "theCorrective": "—"
          },
          {
            "positionName": "Opinionated Defaults",
            "description": "Platform provides opinionated templates and defaults. Consumers override parameters from a well-defined set. Raw access available but not prominent in documentation.",
            "howArrive": "Platform team had expert consumers originally and added simplification features when less-expert consumers joined. The simplification was additive, not redesigned.",
            "internalNarrative": "\"We guide consumers toward good defaults and let them configure what matters.\" The team feels practical.",
            "whatItProduces": "Consumer self-service for most needs. Platform team not required for most situations. Consumers without infrastructure knowledge require significant onboarding. Support burden for newcomers high.",
            "whenCorrect": "DevOps-mature organisations where all product engineers have meaningful infrastructure knowledge.",
            "failureSignal": "Consumers bypassing opinionated defaults because defaults don't match their actual needs. Default usage rate declining. Consumers treating defaults as obstacles rather than guidance.",
            "theCorrective": "Shadow a consumer using opinionated defaults for the first time. Every moment they consult documentation or ask a colleague is a default that should be reconsidered."
          },
          {
            "positionName": "Expert-Friendly",
            "description": "Platform provides raw infrastructure access with strong tooling and documentation. Consumers must understand infrastructure concepts to use it effectively.",
            "howArrive": "Platform team's consumers have always been infrastructure engineers. The interface mirrors the underlying system because that is what consumers find natural and useful.",
            "internalNarrative": "\"Our consumers are experts. We respect their capability.\" The team feels appropriate to its audience.",
            "whatItProduces": "Expert consumers fully productive. Junior engineers blocked. Support queue dominated by newcomer questions. Adoption limited to teams with expert engineers.",
            "whenCorrect": "SRE teams. Infrastructure engineering teams using platforms primarily for themselves.",
            "failureSignal": "Support queue dominated by newcomer questions that documentation should answer but does not. Onboarding taking days rather than hours for consumers without infrastructure background.",
            "theCorrective": "Run a two-day onboarding experiment. Give a junior engineer the platform documentation and ask them to provision a standard set of resources. Every failure is an interface design problem to address."
          },
          {
            "positionName": "Raw Infrastructure",
            "description": "Platform is the cloud provider API with authentication. Consumers work directly with ARM, Kubernetes manifests, or cloud APIs with no platform abstraction at all.",
            "howArrive": "Platform team built a thin authentication and access control layer over the cloud provider API. No design investment in abstraction.",
            "internalNarrative": "\"We provide the substrate. Consumers have full control.\" The team feels minimal and powerful.",
            "whatItProduces": "No simplification. High error rate from misuse. Platform team spending time cleaning up incorrect direct usage.",
            "whenCorrect": "Direct cloud provider access. The state before any platform engineering investment.",
            "failureSignal": "Incident rate from incorrect direct usage increasing. Platform team spending time cleaning up misuse rather than building capabilities. Incidents caused by consumers misusing the raw API accumulating.",
            "theCorrective": "Select the three most common use cases. Build a simplified interface specifically for those three cases. The simplified interface does not replace the raw access — it adds a simpler path alongside it."
          }
        ]
      },
      {
        "code": "III-G2",
        "axis": "Platform Boundary Definition",
        "type": "G",
        "summary": "Genuine tension — the boundary must be drawn before all situations are known; wherever it is drawn it will be wrong in some cases; both too-wide and too-narrow scope have genuine costs",
        "columns": [
          {
            "positionName": "Full Stack Platform",
            "description": "Platform owns everything from business logic templates to network infrastructure. No capability is outside platform scope if a consumer needs it. Scope is unlimited and expanding.",
            "howArrive": "Platform team said yes to every reasonable consumer request. Each individual addition was justified. The total scope was never assessed. The platform became a full-stack solution through accumulated accommodation.",
            "internalNarrative": "\"We handle everything. No consumer is left without support.\" The team feels maximally helpful. The unsustainability is not visible because every addition feels justified individually.",
            "whatItProduces": "Consumers have minimal infrastructure responsibility. Platform team scope unsustainable. Quality in all areas suffers because depth is impossible across unlimited scope. Everything is someone else's problem unless it is the platform's problem.",
            "whenCorrect": "Never a deliberately chosen sustainable position. Always accumulated through reactive accommodation.",
            "failureSignal": "Platform team unable to maintain quality across full scope. Capabilities at the scope edges poorly maintained. Consumer satisfaction varying significantly across platform capabilities depending on which are core and which are boundary.",
            "theCorrective": "Conduct a platform scope audit. For each capability the platform team maintains, ask: \"what would happen if we stopped maintaining this?\" Capabilities where another team would maintain it well are candidates for offboarding."
          },
          {
            "positionName": "Platform Plus",
            "description": "Platform owns a wide range of capabilities including some close to application concerns. Scope is broad and expanding in response to consumer requests. No formal scope review process.",
            "howArrive": "Scope has been expanding reactively for several years. Each addition was individually approved. No scope review has ever been run. The breadth is now beyond the team's sustainable capacity.",
            "internalNarrative": "\"We cover most things. We are comprehensive.\" The team feels capable and broad. The scope creep is not framed as creep — it is framed as responsiveness.",
            "whatItProduces": "Wide coverage of consumer needs. Platform team maintaining capabilities outside their area of expertise. Boundary capabilities at lower quality than core capabilities. Scope creep makes sustainable operation difficult.",
            "whenCorrect": "Platform teams responding to consumer pressure without scope governance. Common intermediate position.",
            "failureSignal": "Boundary capabilities maintained at lower quality than core capabilities. Consumer satisfaction lower for boundary capabilities. Scope review never having been run despite growing breadth.",
            "theCorrective": "Establish a formal scope review process. Every new capability added to scope requires an explicit decision, not informal accumulation. Run the first review before adding the next capability."
          },
          {
            "positionName": "Wide Platform",
            "description": "Platform owns all shared infrastructure concerns and some application-layer concerns where standardisation produces clear organisational value. Scope governed but loosely.",
            "howArrive": "Platform team has attempted scope governance but without strict enforcement. Some capabilities at the boundary are \"in scope\" informally without explicit decision.",
            "internalNarrative": "\"We cover what matters. We are reasonably scoped.\" The team feels balanced. The boundary ambiguity is felt but not resolved.",
            "whatItProduces": "Broad enough to cover most consumer needs. Some boundary ambiguity at the application/platform interface. Recurring boundary disputes for capabilities near the edge.",
            "whenCorrect": "Growing platform teams with broadening scope beginning to apply governance.",
            "failureSignal": "Boundary disputes recurring for the same capabilities across multiple quarters. Recurring disputes signal that the boundary should be explicitly decided rather than repeatedly negotiated.",
            "theCorrective": "List the capabilities at the boundary. For each one, make an explicit decision: in scope or out of scope. Eliminate the middle category. The decision process is more important than the specific decisions."
          },
          {
            "positionName": "Principled Platform",
            "description": "Platform owns all shared infrastructure concerns with explicit, documented scope. Capabilities at the boundary are explicitly assigned through a defined process. Scope is decided, not assumed.",
            "howArrive": "Platform team maintains an explicit scope document, runs periodic scope reviews, and has a defined process for scope additions and removals. Scope decisions are made, not accumulated.",
            "internalNarrative": "\"We own what we own. We assist with everything else. Our scope is clear.\" The team feels principled and sustainable.",
            "whatItProduces": "All capabilities have defined ownership. Boundary disputes resolved through a defined process. Consumers know what to expect. Platform team scope sustainable. Clear handoff for everything outside scope.",
            "whenCorrect": "Most mature internal platforms. The default.",
            "failureSignal": "Scope decision process slow or infrequently used. Capabilities remaining in scope ambiguity because the process is not accessible or not being used.",
            "theCorrective": "—"
          },
          {
            "positionName": "Core Platform",
            "description": "Platform owns core infrastructure concerns. Application-layer concerns explicitly outside scope. Platform team assists but does not own boundary capabilities. Clear handoff documentation.",
            "howArrive": "Platform team drew a deliberate scope line and communicated it. Some consumers are frustrated by the line but the team has held it.",
            "internalNarrative": "\"We focus on the infrastructure core. Product teams own the rest.\" The team feels focused.",
            "whatItProduces": "Consumers encounter the platform boundary for needs that are reasonable to expect the platform to address. Gaps create consumer frustration that must be managed through clear communication.",
            "whenCorrect": "Organisations where product teams have strong infrastructure maturity and the platform team is appropriately sized for core scope.",
            "failureSignal": "Consumers filing support requests for capabilities explicitly outside platform scope. Requests refused without alternative provision or handoff documentation. Consumer frustration growing.",
            "theCorrective": "Survey consumers on the capabilities they most wish the platform provided. If the same capability appears frequently, evaluate whether adding it to scope is sustainable. Sustainability is the constraint."
          },
          {
            "positionName": "Substrate Only",
            "description": "Platform owns only the substrate: provisioning, networking, identity. All higher-layer concerns are product team responsibility.",
            "howArrive": "Platform team explicitly designed for a substrate scope. Higher-layer concerns were intentionally excluded from scope at platform design time.",
            "internalNarrative": "\"We provide the substrate. Everything above it is product teams' domain.\" The team feels appropriately minimal.",
            "whatItProduces": "Consumers encounter the platform boundary frequently. Product teams must own infrastructure capabilities they may not be best positioned to own. Infrastructure incidents in non-platform-scoped areas.",
            "whenCorrect": "Thin platform layers over cloud providers. Appropriate for small organisations with high engineering maturity and limited platform team resources.",
            "failureSignal": "Significant consumer infrastructure incidents in areas outside platform scope. Product teams struggling with infrastructure they are not best positioned to own alone. Incidents in network and security increasingly common.",
            "theCorrective": "For each capability outside platform scope, provide a clear handoff resource — documentation, tooling, or a defined escalation path. The boundary should be a handoff, not a wall."
          },
          {
            "positionName": "Minimal Platform",
            "description": "Platform owns only the deployment mechanism. Everything else is product team responsibility including networking, identity, observability, and security.",
            "howArrive": "Platform team was given a minimal mandate. The mandate reflects resource constraints rather than a deliberate design philosophy.",
            "internalNarrative": "\"We deploy. Everything else is outside our mandate.\" The team feels constrained. The constraint may be appropriate or may be a resource limitation disguised as a philosophy.",
            "whatItProduces": "Product teams own infrastructure capabilities that produce significant cognitive load and safety risk. Infrastructure incidents in product team-owned network, identity, and security capabilities.",
            "whenCorrect": "Almost never appropriate as a deliberate design choice. Appropriate temporarily when resources are severely constrained.",
            "failureSignal": "Infrastructure incidents caused by product teams operating networking, identity, or security capabilities without sufficient expertise. Risk increasing as organisational scale grows.",
            "theCorrective": "Assess safety risk for capabilities outside scope. Capabilities most likely to cause serious incidents if managed without platform support need minimum viable support even if formally outside scope. Safety overrides scope."
          }
        ]
      }
    ]
  },
  {
    "romanId": "IV",
    "title": "Relational & Social",
    "theme": "Who are the platform's relationships with, and what do they owe each other?",
    "definition": "Who does the platform serve and what do those relationships require? Every decision about how the platform team interacts with consumers, sponsors, peers, and the wider organisation — and what obligations flow in each direction.",
    "tradeOffs": [
      {
        "code": "IV-L1",
        "axis": "Consistency ↔ Fairness",
        "type": "L",
        "summary": "Legitimate tension — applying the same rules to all consumers versus adapting to legitimate differences between consumer teams",
        "columns": [
          {
            "positionName": "Universal Rules",
            "description": "Identical rules applied to all consumers in all contexts. No exceptions. No context considered regardless of how different the situations are.",
            "howArrive": "Regulated environment requiring demonstrable consistency. Or: after a fairness complaint that was resolved by removing all exceptions to prove the process is identical for everyone.",
            "internalNarrative": "\"We treat everyone the same. We are fair and objective.\" The team feels principled. Consumers disadvantaged by their context are seen as exceptions, not as signals.",
            "whatItProduces": "Complete consistency. Auditable. No special pleading. Consumers disadvantaged by rules designed for a different context feel the rules are unfair without any recourse. Systemic disadvantage for specific team types accumulates invisibly.",
            "whenCorrect": "Regulated environments with strict consistency requirements where any exception must be legally defensible.",
            "failureSignal": "Same consumer types repeatedly disadvantaged by the same rules. Systemic disadvantage not being corrected because the process produces consistent disadvantage.",
            "theCorrective": "Identify the consumer type most systematically disadvantaged. Ask whether the rule was designed with that consumer type in mind. If not, create an exception category for it — not an ad hoc exception."
          },
          {
            "positionName": "Policy-Led",
            "description": "Rules applied consistently with a defined exception process. Exceptions require significant justification. Consistency is the default and exception is costly.",
            "howArrive": "Platform team adopted consistency as a primary governance value after experiencing complaints about favouritism or inconsistency in the exception process.",
            "internalNarrative": "\"We are consistent with appropriate exceptions. We are auditable.\" The team feels responsible.",
            "whatItProduces": "High consistency. Low ambiguity. Exception process provides safety valve for genuine edge cases. Exception queue may be slow.",
            "whenCorrect": "Policy-driven organisations with strong governance cultures and compliance requirements.",
            "failureSignal": "Exception queue becoming a bottleneck. Legitimate exceptions delayed weeks. Consumers working around the process.",
            "theCorrective": "Measure exception queue wait time. If exceptions take more than one week to resolve, the process is too heavy for the volume of legitimate contextual differences."
          },
          {
            "positionName": "Consistent Default",
            "description": "Rules consistent with documented exception categories. Some contexts explicitly accommodated within the framework. Exceptions granted within defined boundaries.",
            "howArrive": "Platform team developed a principled consistency approach with documented exceptions after experiencing both pure consistency (perceived unfair) and full contextualisation (perceived inconsistent).",
            "internalNarrative": "\"We are consistent with some flexibility for real differences.\" The team feels balanced.",
            "whatItProduces": "Good consistency. Legitimate contextual differences accommodated. Some consumers still disadvantaged where their context doesn't match exception categories.",
            "whenCorrect": "Mature organisations with defined contextual categories.",
            "failureSignal": "Exception categories not covering some recurring legitimate context. Same exception type requested repeatedly — signal to change the rule, not repeat the exception.",
            "theCorrective": "Review exceptions from the last two quarters. Recurring exception types are rules that should be changed, not exceptions that should be repeated indefinitely."
          },
          {
            "positionName": "Principled Consistency",
            "description": "Rules consistently applied. Documented context categories that modify application. All exceptions visible and governed. Pattern of exceptions reviewed to improve rules.",
            "howArrive": "Platform team invested in both consistent application and exception governance simultaneously. Reviews are conducted to learn from exception patterns.",
            "internalNarrative": "\"We apply consistent rules and we learn from exceptions.\" The team feels mature.",
            "whatItProduces": "Consistent enough to be fair to most consumers. Flexible enough to accommodate legitimate contextual differences. Exceptions visible and governed. Rules improve through exception learning.",
            "whenCorrect": "Most mature internal platforms. The default.",
            "failureSignal": "Exception review not happening. Exception patterns accumulating without rule evolution. The framework exists but doesn't learn.",
            "theCorrective": "—"
          },
          {
            "positionName": "Context-Aware",
            "description": "Rules applied with significant context sensitivity. Context categories broad. Exceptions common and lightweight to grant.",
            "howArrive": "Platform team has been responsive to contextual concerns from consumers. Context sensitivity has grown over time as each contextual request has been accommodated.",
            "internalNarrative": "\"We are responsive to context. We are fair to each team's situation.\" The team feels empathetic.",
            "whatItProduces": "Most contextual differences accommodated. Consumer experience feels fair to most teams. Rules becoming less predictable.",
            "whenCorrect": "High-trust organisations with diverse consumer bases and well-functioning exception governance.",
            "failureSignal": "Consumers uncertain what rules apply to them. Inconsistency visible across consumers for similar situations without clear context explanation.",
            "theCorrective": "Document the implicit context factors currently modifying rule application. Making them explicit converts invisible inconsistency into visible policy."
          },
          {
            "positionName": "Adaptive Policy",
            "description": "Rules serve as guidelines. Context almost always determines application. Exceptions are the norm.",
            "howArrive": "Platform team has become so responsive to context that rules have become guidelines. Each consumer negotiates their own application.",
            "internalNarrative": "\"Rules are starting points. We govern by context.\" The team feels flexible and consumer-focused.",
            "whatItProduces": "Rules losing consistency value. Consumers uncertain what rules actually apply to them. Audit becomes difficult.",
            "whenCorrect": "Very small organisations with high trust and low consumer count where context is always visible.",
            "failureSignal": "Rules meaningless because application entirely context-dependent. Consumers learn to frame requests as context cases. Consistency audit impossible.",
            "theCorrective": "Identify two rules that currently have consistent application. Protect those as the non-negotiable minimum. Build a governance framework from those two rules outward."
          },
          {
            "positionName": "Full Contextualisation",
            "description": "Each consumer governed according to their individual context. No consistency across consumers whatsoever.",
            "howArrive": "Platform team has no governance process. Every consumer interaction is bespoke. Consistency was never established.",
            "internalNarrative": "\"Every team is different. We work with each team as they are.\" The team feels highly responsive.",
            "whatItProduces": "Complete unpredictability. No consumer knows what rules will apply. Auditing impossible. Perceived fairness highest individually, lowest systemically.",
            "whenCorrect": "Never appropriate for any organisation needing auditability or systemic fairness.",
            "failureSignal": "Auditors unable to identify what rules apply. Compliance impossible to demonstrate. Systemic fairness entirely absent.",
            "theCorrective": "Define three rules that apply to all consumers regardless of context. Audit is impossible without at least a minimum universal floor. Build from there."
          }
        ]
      },
      {
        "code": "IV-L2",
        "axis": "Influence ↔ Independence",
        "type": "L",
        "summary": "Legitimate tension — deep engagement with product teams builds adoption and understanding; operating at arm's length protects the platform team from being absorbed into product work",
        "columns": [
          {
            "positionName": "Embedded Partnership",
            "description": "Platform engineers embedded in product teams. Platform team deeply involved in product decisions. Platform direction shaped by constant product team context. Boundary between platform and product work blurred.",
            "howArrive": "Platform team embedded in product teams to build understanding. Embedding was never unwound. Platform engineers are now partly product engineers.",
            "internalNarrative": "\"We understand our consumers deeply. We are close to the work.\" The team feels embedded and valuable. Platform work is increasingly invisible because product work is more visible.",
            "whatItProduces": "Deep understanding of consumer needs. Platform highly relevant. Platform team boundary blurs with product team. Platform concerns deprioritised. Platform engineers developing product skills.",
            "whenCorrect": "Very early platforms building deep consumer understanding. Short-term position while understanding is established.",
            "failureSignal": "Platform engineers spending more time on product decisions than platform decisions. Platform roadmap driven entirely by individual team requests without organisational view. Platform skills atrophying.",
            "theCorrective": "Define which product decisions the platform team should and should not influence. Create a clear boundary and enforce it. Re-establish platform team identity as distinct from product team membership."
          },
          {
            "positionName": "Active Advocacy",
            "description": "Platform team runs regular enablement, office hours, advocacy sessions. Proactive outreach. High engagement. Strong consumer relationships.",
            "howArrive": "Platform team has strong advocacy culture. Engagement is a value. The overhead of engagement is not tracked.",
            "internalNarrative": "\"We are present. We support our consumers actively.\" The team feels engaged and helpful.",
            "whatItProduces": "Strong adoption. Platform team well-informed. High consumer satisfaction. Engagement overhead significant. Platform team capacity consumed by consumer relationships.",
            "whenCorrect": "Growing platforms building adoption and consumer relationships.",
            "failureSignal": "Platform team capacity consumed by engagement work with no proportional improvement in platform direction or quality.",
            "theCorrective": "Calculate engagement overhead as percentage of platform team capacity. If it exceeds 20%, reduce engagement frequency without eliminating it."
          },
          {
            "positionName": "Engaged Support",
            "description": "Platform team responsive and available. Regular check-ins. Consumer feedback actively solicited. Proactive communication but not embedded.",
            "howArrive": "Platform team is responsive and consumer-focused but has not designed a formal engagement structure. Engagement happens organically.",
            "internalNarrative": "\"We are available and responsive.\" The team feels consumer-focused.",
            "whatItProduces": "Good consumer satisfaction. Platform team informed. Some consumer needs not surfaced without active solicitation.",
            "whenCorrect": "Platforms transitioning to sustainable engagement models.",
            "failureSignal": "Consumer feedback sparse despite solicitation. Engagement producing reports, not action. Consumer needs arriving as surprises.",
            "theCorrective": "Establish quarterly consumer surveys as minimum viable structured engagement. One quarterly survey per year is better than organic engagement that produces no systematic data."
          },
          {
            "positionName": "Deliberate Engagement",
            "description": "Structured engagement: regular consumer surveys, quarterly reviews, defined channels for feedback and requests. Platform team present when needed, independent when not. Both are genuine commitments.",
            "howArrive": "Platform team designed engagement as a structured practice with defined frequency, methods, and review cycles. Engagement is a product team investment, not an informal activity.",
            "internalNarrative": "\"We engage deliberately and learn from what we hear.\" The team feels structured and informed.",
            "whatItProduces": "Platform team informed without consuming all capacity in engagement. Consumer needs understood. Independence maintained. Platform evolves based on data, not assumption.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Structured engagement not producing actionable insights. Survey results not changing platform decisions. Engagement becoming performative.",
            "theCorrective": "—"
          },
          {
            "positionName": "Available Support",
            "description": "Platform team available but engagement consumer-initiated. Support reactive. Consumer feedback collected periodically but not actively solicited.",
            "howArrive": "Platform team has limited capacity and prioritises delivery over engagement. Engagement happens reactively when consumers reach out.",
            "internalNarrative": "\"We are here when needed.\" The team feels appropriate. The gap in proactive engagement is not visible from inside.",
            "whatItProduces": "Consumer needs may not surface until urgent. Platform may build capabilities nobody needs while consumers build workarounds for needs not communicated.",
            "whenCorrect": "Established platforms with mature consumer bases that self-serve effectively.",
            "failureSignal": "Consumer requests arriving as urgent rather than anticipated. Platform team frequently surprised by consumer needs. Shadow solutions appearing.",
            "theCorrective": "Schedule one consumer team visit per month minimum. Passive availability is not engagement. Proactive presence is the minimum investment in understanding real consumer needs."
          },
          {
            "positionName": "On-Demand Only",
            "description": "Platform team engages with consumers only when directly requested. No proactive engagement. Primarily transactional.",
            "howArrive": "Platform team has very high delivery focus. Engagement is seen as overhead. Consumer experience is tracked through usage metrics, not conversation.",
            "internalNarrative": "\"We focus on the platform. Consumers engage when they need us.\" The team feels delivery-focused.",
            "whatItProduces": "Consumer needs largely unknown. Platform evolves on assumptions. Consumer satisfaction unmeasured. Some consumer needs met accidentally.",
            "whenCorrect": "Small platforms with well-defined scope and stable consumer bases who are themselves platform-engineering mature.",
            "failureSignal": "Consumer satisfaction unmeasured. Platform team unable to demonstrate consumer value in budget conversations. Adoption stagnating.",
            "theCorrective": "Establish one proactive communication channel — a monthly platform update. Measure whether consumers read it. The reading rate reveals whether the channel matches consumer need."
          },
          {
            "positionName": "Complete Autonomy",
            "description": "Platform team operates entirely independently. Consumers expected to engage with the platform on its own terms without platform team involvement in their work.",
            "howArrive": "Platform team was built to be self-directed. Consumer engagement was never considered part of the role.",
            "internalNarrative": "\"Our work speaks for itself.\" The team feels independent. Consumer feedback is not sought and so is not received.",
            "whatItProduces": "Platform team building for assumed needs. Consumer adoption driven by mandate, not value. Consumer trust not built.",
            "whenCorrect": "Never a sustainable position for a platform that depends on voluntary adoption.",
            "failureSignal": "Consumer adoption driven entirely by mandate. Platform NPS unmeasured because engagement mechanism does not exist. Budget conversations relying on mandate, not value demonstration.",
            "theCorrective": "Start with the consumer team most likely to be positively disposed toward the platform. Build one engagement success. Use it to demonstrate the value of engagement to the rest of the platform team."
          }
        ]
      },
      {
        "code": "IV-L3",
        "axis": "Psychological Safety ↔ Accountability",
        "type": "L",
        "summary": "Legitimate tension — safety enables problem surfacing; accountability enables standards maintenance; strict accountability suppresses reporting; no accountability allows standards drift",
        "columns": [
          {
            "positionName": "Blameless Culture",
            "description": "No consequences for any action. All outcomes treated as system failures, never individual failures. Standards not enforced. Every violation is a learning opportunity.",
            "howArrive": "Platform team adopted blameless postmortem culture and extended it beyond incidents to all standards violations. The extension removed accountability from areas where it was appropriate.",
            "internalNarrative": "\"We learn from everything. Nobody is blamed.\" The team feels psychologically safe and generous. Standards drift is not visible because each violation is handled individually as a learning event.",
            "whatItProduces": "Maximum problem surfacing. All concerns raised. Standards drift over time. Consumer behaviour becoming unpredictable. Platform quality degrading as standards become aspirational.",
            "whenCorrect": "High-reliability organisations in early safety culture building. Temporary position while trust is established.",
            "failureSignal": "Standards violations recurring from the same consumers because there is no consequence to change behaviour. Standards becoming theoretical rather than actual. Quality declining across observable metrics.",
            "theCorrective": "Identify three standards that are currently aspirational but should be enforced. Enforce them structurally with policy-as-code where possible. The trust cost of structural enforcement is lower than the standards decay cost."
          },
          {
            "positionName": "Learning-First",
            "description": "Learning prioritised. Consequences very rare and only for repeated, deliberate violation after multiple educational responses. Standards enforced through conversation, not process.",
            "howArrive": "Platform team values learning highly. The preference for education over consequence has never been challenged because violations rarely recur — until they do.",
            "internalNarrative": "\"We educate before we enforce.\" The team feels fair and developmental.",
            "whatItProduces": "Very high problem surfacing. Learning culture strong. Standards degrading slowly. Violations accumulate from consumers who have learned consequences are not structural.",
            "whenCorrect": "SRE-culture organisations with mature blameless postmortem practices and strong social norms.",
            "failureSignal": "Recurring violations from consumers who have learned the response is educational and have modelled how to respond to it. Same violations reappearing after the educational conversation.",
            "theCorrective": "Define one standard that will always be enforced structurally regardless of relationship. Make it the safety-critical standard. Establish the expectation that structural enforcement exists."
          },
          {
            "positionName": "Safe with Standards",
            "description": "Safety prioritised. Standards enforced through process, not punishment. Consequences reserved for deliberate and repeated violations only.",
            "howArrive": "Platform team operates in a high-trust environment. Safety is genuine and standards are generally met voluntarily. Consequences are rare because violations are rare.",
            "internalNarrative": "\"We are safe and we have standards.\" The team feels balanced.",
            "whatItProduces": "Good problem surfacing. Most concerns raised. Standards mostly maintained. Some recurring violations from consumers who have modelled the educational response.",
            "whenCorrect": "Growing organisations building psychological safety culture with genuine voluntary standards compliance.",
            "failureSignal": "Recurring violations from consumers who have experienced the learning response and model it as sufficient. The cycle of \"violation → conversation → reoccurrence\" establishing itself.",
            "theCorrective": "Standardise the enforcement response. Inconsistent enforcement — better treatment for teams with closer platform relationships — destroys trust faster than no enforcement at all."
          },
          {
            "positionName": "Accountable Safety",
            "description": "Problems surface safely. Standards enforced consistently. Consequences proportional and educational rather than punitive. First occurrences treated as learning; repeated occurrences trigger consequences.",
            "howArrive": "Platform team calibrated the balance explicitly. \"First occurrence: conversation. Repeated occurrence: consequence\" is a stated and applied policy.",
            "internalNarrative": "\"We surface problems and we hold standards. Both are real.\" The team feels professionally mature.",
            "whatItProduces": "Problems surface reliably. Standards maintained through consistent enforcement. Trust maintained through proportional response. Both values genuinely served.",
            "whenCorrect": "Most mature platform teams. The default.",
            "failureSignal": "Calibration becoming inconsistent. Different responses to similar situations creating perception of unfairness. Inconsistency eroding the trust that proportionality was meant to build.",
            "theCorrective": "—"
          },
          {
            "positionName": "Standards-First",
            "description": "Standards consistently enforced. Consequences follow violations. Education provided alongside consequences. Safety maintained through proportionality and transparency.",
            "howArrive": "Platform team is in a regulated or high-stakes environment. Consequences follow standards violations because the standards exist for safety or compliance reasons.",
            "internalNarrative": "\"Standards matter. Consequences are proportional.\" The team feels principled and reliable.",
            "whatItProduces": "Standards reliably maintained. Consumer behaviour predictable. Some consumers hesitate to raise concerns because consequences are visible. Some self-censorship accumulating.",
            "whenCorrect": "Compliance-driven organisations where standards violations have regulatory consequences and consequences are legally mandated.",
            "failureSignal": "Consumers consulting colleagues before raising concerns to assess whether it is safe. Self-censorship emerging in specific domains where consequences are frequent.",
            "theCorrective": "Measure consumer willingness to raise concerns through one specific survey question per quarter. If the score is declining, the enforcement-to-trust ratio needs recalibration."
          },
          {
            "positionName": "Consequence-Led",
            "description": "Consequences follow violations consistently and visibly. Education provided but consequences not deferred. Safety maintained through consistency and fairness.",
            "howArrive": "Platform team experienced a significant incident caused by a standards violation and responded by making consequences more immediate and visible.",
            "internalNarrative": "\"We enforce because it matters.\" The team feels rigorous.",
            "whatItProduces": "Some consumer concerns hidden because reporting them may trigger consequences. Standards very reliably maintained. Consumer behaviour highly predictable.",
            "whenCorrect": "Regulated industries with mandatory consequence structures.",
            "failureSignal": "Concerns raised privately to individuals rather than through official channels because official channels trigger consequences. Shadow reporting replacing official reporting.",
            "theCorrective": "Identify the most common bypass behaviour. Ask whether the bypassed standard is producing the consumer behaviour it was designed to prevent. If not, the standard may be poorly designed."
          },
          {
            "positionName": "Punitive",
            "description": "Violations punished regardless of context, intent, learning, or history.",
            "howArrive": "Platform team is in an environment where standards violations have caused harm. Punishment feels proportional from inside.",
            "internalNarrative": "\"Violations are not tolerated.\" The team feels strict. Suppression of reporting is not visible from inside.",
            "whatItProduces": "Complete problem suppression. All concerns hidden. Platform team has no view of real consumer experience. Standards enforced in visible behaviour but not in underlying practice.",
            "whenCorrect": "Never an appropriate position. Punitive cultures suppress the information needed to improve.",
            "failureSignal": "No concerns raised through official channels. Platform team discovers all problems through incidents. Every piece of consumer experience data is missing because the channel to receive it has been shut by fear.",
            "theCorrective": "Identify two cases where enforcement was correct but consumer relationship was damaged. Ask what explanation would have preserved more trust. Apply that explanation to future enforcement."
          }
        ]
      },
      {
        "code": "IV-L4",
        "axis": "Partnership ↔ Separation of Concerns",
        "type": "L",
        "summary": "Legitimate tension — close partnership produces deep understanding of real needs; it also blurs the boundary between platform and product responsibility",
        "columns": [
          {
            "positionName": "Co-Development",
            "description": "Platform team and product team co-develop capabilities. Shared backlog, shared standups, shared accountability. Roles indistinguishable in practice.",
            "howArrive": "Platform engineers embedded in product teams to build understanding. Embedding was never unwound. The collaboration gradually became co-ownership.",
            "internalNarrative": "\"We understand our consumers completely. We are part of their work.\" The team feels deeply connected. Platform identity is partially lost to product identity.",
            "whatItProduces": "Maximum context. Platform perfectly matched to real needs. Platform team boundary blurred. Platform concerns deprioritised. Platform engineers developing product skills. Platform quality declining.",
            "whenCorrect": "Very small teams in early stage where co-development is the fastest path to understanding. Short-term position only.",
            "failureSignal": "Platform engineers spending most of their time on product work. Platform roadmap driven entirely by individual product team requests. Platform skills atrophying. Platform quality declining.",
            "theCorrective": "Establish role clarity in every collaboration. Define which decisions belong to each team before collaborating on them. Re-establish platform team identity."
          },
          {
            "positionName": "Close Partnership",
            "description": "Platform team deeply involved in product team planning and delivery. Frequent collaboration on shared problems. Informal boundary maintained imperfectly.",
            "howArrive": "Strong organisational culture of collaboration. Platform team and product teams work closely on everything. The boundary has never been explicitly maintained.",
            "internalNarrative": "\"We work closely with our consumers. We build together.\" The team feels collaborative.",
            "whatItProduces": "Very deep context. Platform highly relevant. Boundary frequently unclear. Platform team occasionally pulled into product decisions beyond platform scope.",
            "whenCorrect": "Organisations with strong collaboration culture and explicit role management.",
            "failureSignal": "Platform engineers acting as product engineers informally. Platform team skills developing toward product engineering. Incidents revealing platform capability gaps that accumulated while the team was focused on product concerns.",
            "theCorrective": "Require platform engineers to document the distinction between their platform work and product work in every sprint. Visibility creates accountability."
          },
          {
            "positionName": "Collaborative Engagement",
            "description": "Regular collaboration on platform capabilities. Platform team understands product team context deeply. Boundaries maintained but permeable. Cross-boundary work common.",
            "howArrive": "Regular collaboration has deepened over time. Some boundary management exists but is imperfect.",
            "internalNarrative": "\"We collaborate where it helps.\" The team feels pragmatic.",
            "whatItProduces": "Good context. Platform relevance high. Some boundary blurring. Platform team occasionally pulled into product concerns.",
            "whenCorrect": "Mature organisations with strong collaboration culture.",
            "failureSignal": "Platform engineers pulled into product incidents without clear platform relevance. Boundary erosion gradual and invisible.",
            "theCorrective": "Audit cross-team work from the last quarter. Identify which platform engineer time went to product concerns. Establish a maximum percentage."
          },
          {
            "positionName": "Structured Partnership",
            "description": "Structured collaboration on platform capabilities. Product team input shapes platform roadmap. Roles clearly maintained during collaboration. Collaboration happens at defined touchpoints.",
            "howArrive": "Platform team designed collaboration structure explicitly. Defined touchpoints, defined roles, defined limits. Collaboration is a managed practice, not an organic one.",
            "internalNarrative": "\"We collaborate on what matters and maintain clear roles.\" The team feels mature and boundaried.",
            "whatItProduces": "Platform informed by real context without absorbing product concerns. Consumer needs understood without boundary confusion. Role clarity maintained. Collaboration produces platform improvement.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Structured collaboration devolving into informal relationship. Role boundaries blurring. The collaboration structure becoming a formality rather than a practice.",
            "theCorrective": "—"
          },
          {
            "positionName": "Service Relationship",
            "description": "Platform team responsive to product team requests. Some collaboration on interface design. Primarily service relationship. Consumer context understood at the request level.",
            "howArrive": "Platform team is delivery-focused. Collaboration happens when consumer requests require it. Relationship is professional and functional.",
            "internalNarrative": "\"We serve our consumers well.\" The team feels professional and appropriate.",
            "whatItProduces": "Product team needs less well understood. Some platform capabilities missing because need was never surfaced. Consumer context understood at request level, not at need level.",
            "whenCorrect": "Platforms with stable, well-defined consumer needs that change slowly.",
            "failureSignal": "Consumer needs arriving as surprises. Platform team unable to anticipate. Shadow solutions appearing for needs the platform did not know about.",
            "theCorrective": "Schedule one product team context session per quarter. Ask \"what would you build if the platform supported it but currently does not?\" The answers define the context gap."
          },
          {
            "positionName": "Provider Relationship",
            "description": "Platform team provides capabilities. Product teams consume them. Interaction primarily transactional: request, delivery, confirmation. Limited relationship beyond task completion.",
            "howArrive": "Platform team and product teams have always operated with clear separation. Interaction is professional and task-focused.",
            "internalNarrative": "\"We provide and they consume.\" The team feels focused and efficient.",
            "whatItProduces": "Platform evolves on assumptions about consumer needs. Consumer satisfaction lower. Some consumer needs met accidentally.",
            "whenCorrect": "Large organisations with clear separation of infrastructure and product engineering disciplines.",
            "failureSignal": "Consumer satisfaction declining without platform team awareness until visible in adoption metrics. By the time it is visible in metrics, it has been declining for quarters.",
            "theCorrective": "Conduct annual consumer needs research. One day of research costs less than one quarter of misaligned platform development."
          },
          {
            "positionName": "Transactional",
            "description": "Platform team and product team interact only through formal request and delivery processes. No collaboration beyond scope-defined interactions.",
            "howArrive": "Platform team built with strict role separation. No mechanism for collaboration exists beyond formal channels.",
            "internalNarrative": "\"We build, they use.\" The team feels delivery-focused. Consumer understanding is entirely absent.",
            "whatItProduces": "Platform entirely disconnected from consumer reality. Platform evolves on complete assumption. Consumer satisfaction cannot be measured because no relationship exists to surface it.",
            "whenCorrect": "Never appropriate for a platform that depends on voluntary adoption.",
            "failureSignal": "Consumer needs entirely unknown. Platform capabilities mismatched to reality in ways nobody has communicated because no relationship exists to surface the mismatch.",
            "theCorrective": "The platform is building for a model of consumer needs that may be years old. Invest in one significant consumer research effort before the next planning cycle."
          }
        ]
      },
      {
        "code": "IV-G1",
        "axis": "Autonomy ↔ Standardisation",
        "type": "G",
        "summary": "Genuine tension — full autonomy means no standardisation; full standardisation means no autonomy; the insight that good standards enable autonomy relocates but does not dissolve the tension",
        "columns": [
          {
            "positionName": "Total Autonomy",
            "description": "Every team decides everything. No shared tooling, conventions, or constraints of any kind. Platform is a substrate, not a standard.",
            "howArrive": "Organisation grew without anyone making an explicit standardisation decision. Each team built their own solutions. The diversity was never consolidated.",
            "internalNarrative": "\"Teams know what they need. We trust them.\" The team feels respectful of autonomy. The security fragmentation and knowledge silos are not visible as consequences of the team's position.",
            "whatItProduces": "Maximum team speed on individual problems. No shared knowledge. Security varies wildly. Nobody can help anyone else. Every team reinvents the same solutions. Compliance is impossible.",
            "whenCorrect": "Pre-PMF startups. Post-acquisition orgs before integration. Single-digit team count.",
            "failureSignal": "Security incident from inconsistency. Teams unable to help each other. Onboarding takes weeks because every team has its own way. Compliance impossible to demonstrate.",
            "theCorrective": "A security incident is usually the forcing function. Identify the security risk from maximum autonomy. Implement the minimum standard addressing that risk. Nothing more."
          },
          {
            "positionName": "Cultural Norms",
            "description": "Shared standards exist as cultural expectations. No enforcement. Compliance social, not architectural. Standards live in documentation and tribal knowledge.",
            "howArrive": "Organisation has strong engineering culture with genuine shared values. Standards emerged organically. Cultural norms work while the culture is strong and consistent.",
            "internalNarrative": "\"We share values. Teams follow good practice because they understand why.\" The team feels trusting and culturally mature. Standards decay is invisible because violations are not tracked.",
            "whatItProduces": "Low overhead. Works in high-trust cultures. Decays over time as teams change. Creates invisible compliance debt. New hires learn different norms from different teams.",
            "whenCorrect": "Strong-culture scale-ups (Basecamp era).",
            "failureSignal": "Standards drift. New hires learn different norms from different team members. Compliance theatre growing. Same problems solved differently across teams.",
            "theCorrective": "Make one standard architectural. Encode one convention in tooling so it is enforced without culture. See whether the sky falls. It will not. Then encode one more."
          },
          {
            "positionName": "Golden Path (Optional)",
            "description": "Clear golden paths exist. Teams strongly encouraged to use them but can deviate freely with no formal process. Deviation is invisible.",
            "howArrive": "Platform team created golden paths hoping teams would follow them. Adoption was encouraged but not tracked. Deviations are invisible.",
            "internalNarrative": "\"We have paths. Teams mostly follow them.\" The team feels practical. Invisible deviations accumulate without the team knowing.",
            "whatItProduces": "Teams feel ownership. Successful deviations generate learning for the standard — when captured. Inconsistency grows over time. Security minimums may not be maintained.",
            "whenCorrect": "Growing organisations establishing first standards with early governance.",
            "failureSignal": "Security exceptions accumulate. Inconsistency acknowledged but not addressed. Deviations invisible — nobody knows how many there are or whether they are creating risk.",
            "theCorrective": "Implement a one-click golden path for the most common use case. Measure adoption. If adoption increases, the path was not attractive enough before — not that teams didn't want it."
          },
          {
            "positionName": "Structured Freedom",
            "description": "Standards at infrastructure layer. Product layer autonomous. Deviation through defined process. Deviations visible, trackable, and reviewed. Successful deviations folded back into standards.",
            "howArrive": "Platform team made explicit standardisation decisions, communicated them, built paths that earn adherence, and established a deviation process that produces learning.",
            "internalNarrative": "\"Teams are free within standards. Both are real.\" The team feels architecturally mature and politically sophisticated.",
            "whatItProduces": "Cognitive load reduced without sacrificing genuine autonomy. Deviations visible and trackable. Standards improve through deviation learning. Requires investment in path attractiveness and deviation review.",
            "whenCorrect": "Most organisations at 10–100 product engineers. The default for most mature platform teams.",
            "failureSignal": "Low golden path adoption. Teams deviate but don't feed back. Deviation review queue growing without resolution. Standards not improving despite deviation evidence.",
            "theCorrective": "—"
          },
          {
            "positionName": "Golden Path (Recommended)",
            "description": "Golden paths are the default and deviation requires justification. Justification lightweight but required and recorded. Deviation tracked and reviewed.",
            "howArrive": "Platform team experienced security or compliance failures from fragmentation and responded by raising the standard for deviation.",
            "internalNarrative": "\"Teams use our paths because they understand they should. We require justification for deviation.\" The team feels appropriately firm.",
            "whatItProduces": "High consistency. Easy cross-team collaboration. Security baseline guaranteed. Innovation slowed. Legitimate needs outside the standard face friction.",
            "whenCorrect": "Banks, healthcare tech, compliance-heavy SaaS.",
            "failureSignal": "Legitimate innovation blocked. Exception queue growing. Approved exceptions not incorporated into standard, requiring consumers to re-request.",
            "theCorrective": "Measure exception queue wait time. If exceptions take more than three days, the process is too heavy. Approved exceptions should be incorporated into the standard before the next release."
          },
          {
            "positionName": "Mandated Standards",
            "description": "All significant decisions require platform approval. Deviation requires exception process with senior sign-off. Mandate is the primary adoption mechanism.",
            "howArrive": "Organisation experienced incidents or compliance failures from inconsistency. The response was to mandate rather than to build better paths.",
            "internalNarrative": "\"We approve changes. We maintain consistency.\" The team feels in control. Teams are complying but not necessarily engaging.",
            "whatItProduces": "Platform team becomes a bottleneck. Best engineers disengage. Shadow IT emerges. Compliance achieved in form but not always in practice.",
            "whenCorrect": "Financial infrastructure, defence contractors. Heavily regulated environments where deviation has legal consequence.",
            "failureSignal": "Mandate producing malicious compliance. Engineers routing around platform. Shadow IT growing. Compliance achieved on paper but not in practice.",
            "theCorrective": "Allow one exception per team per quarter without justification. Measure whether the exceptions reveal legitimate standard gaps. They will. Use that data to improve the standard rather than defend it."
          },
          {
            "positionName": "Total Standardisation",
            "description": "No team decides anything. All infrastructure centrally designed and deployed. No deviation permitted. Platform controls everything.",
            "howArrive": "Organisation decided that human variation in infrastructure decisions was not acceptable. All decisions centralised.",
            "internalNarrative": "\"We decide. Teams implement.\" The team feels in control. Engineers are executing instructions, not making professional decisions.",
            "whatItProduces": "Platform is a straitjacket. Innovation impossible. Best engineers leave or do not join. The organisation trades talent for consistency.",
            "whenCorrect": "Theoretical extreme.",
            "failureSignal": "Engineers leave. Best talent refuses to join. Delivery stops. The organisation is compliant and incapable.",
            "theCorrective": "Pick the capability where autonomy would produce the most value. Allow it. Measure whether the sky falls. It will not. Build the case for incremental autonomy from that success."
          }
        ]
      },
      {
        "code": "IV-G2",
        "axis": "Trust-Building ↔ Enforcement",
        "type": "G",
        "summary": "Genuine tension — every enforcement action spends trust; every non-enforcement teaches that standards are optional; both costs are genuine and permanent",
        "columns": [
          {
            "positionName": "Trust Only",
            "description": "No enforcement. Platform team builds trust entirely through value delivery. Standards are aspirational. Violations addressed only through conversation.",
            "howArrive": "Platform team built on relationship and trust. Enforcement was never considered compatible with the relationship model. Standards decay accumulated as the implicit cost of the relationship model.",
            "internalNarrative": "\"We build on trust. Our relationship is our enforcement.\" The team feels caring and collaborative. Standards decay is not visible — each conversation feels productive even when it doesn't change behaviour.",
            "whatItProduces": "Maximum trust. Consumers feel completely supported. Standards drift over time. Consumer behaviour becomes unpredictable. Platform quality degrades. Mandate eventually required to maintain any standard.",
            "whenCorrect": "Early platforms building initial trust. Never sustainable long-term.",
            "failureSignal": "Standards violations accumulating faster than relationship conversations can address them. Same violation recurring across multiple consumers without structural consequence. Standards becoming invisible to new consumers.",
            "theCorrective": "Identify three standards currently aspirational. Enforce them structurally with policy-as-code where possible. Explain the enforcement explicitly. The trust cost is lower than the standards decay cost."
          },
          {
            "positionName": "Trust-First",
            "description": "Trust primary. Enforcement rare. Standards violations addressed through relationship conversations. Structural enforcement only for safety-critical cases explicitly.",
            "howArrive": "Platform team strongly values the consumer relationship and uses enforcement reluctantly. Each violation is handled individually through conversation. Recurring violations are not recognised as pattern.",
            "internalNarrative": "\"We talk first. We enforce only when necessary.\" The team feels fair and developmental. Recurring violations are not recognised as a pattern because each is handled individually.",
            "whatItProduces": "Very high trust. Strong consumer relationship. Standards degrading slowly. Violations accumulate from consumers who have learned that consequences are conversations they can manage.",
            "whenCorrect": "High-trust cultures with strong informal social norms where standards compliance is genuinely voluntary.",
            "failureSignal": "Recurring violations from the same consumers who have learned the consequences are relationship conversations they can manage. Pattern not recognised because each violation is handled individually.",
            "theCorrective": "Define one standard that will always be enforced structurally regardless of relationship. Make it the safety-critical standard. Establish that structural enforcement exists as a category."
          },
          {
            "positionName": "Trust with Standards",
            "description": "Trust primary. Standards enforced through lightweight mechanisms. Violations addressed through dialogue before structural enforcement. Structural enforcement follows repeated violations.",
            "howArrive": "Platform team has lightweight enforcement mechanisms and uses them when conversations don't produce change. The threshold for structural enforcement is high but exists.",
            "internalNarrative": "\"We build trust and we maintain standards.\" The team feels balanced.",
            "whatItProduces": "Good trust. Most standards maintained. Some recurring violations from consumers who have modelled the educational response as sufficient.",
            "whenCorrect": "Growing platforms with mixed trust and enforcement needs.",
            "failureSignal": "Recurring violations from consumers who have experienced the learning response and model it as a safe response to any violation. The threshold for structural enforcement is not reached because each violation is the first occurrence from that consumer.",
            "theCorrective": "Standardise the enforcement response. Inconsistent enforcement — different treatment based on relationship quality — destroys trust faster than no enforcement."
          },
          {
            "positionName": "Trusted Enforcement",
            "description": "Trust built through consistent value delivery. Standards enforced consistently and transparently. Enforcement decisions explained and connected to values. First violations addressed with dialogue; repeated violations with structural consequence.",
            "howArrive": "Platform team designed the enforcement model explicitly. \"First occurrence: dialogue. Repeated occurrence: consequence\" is a stated policy applied consistently.",
            "internalNarrative": "\"We enforce because we care about the platform and about the relationship. Both are real.\" The team feels professionally mature.",
            "whatItProduces": "Trust and enforcement both functional. Standards maintained. Consumer relationship preserved. Enforcement decisions understood and accepted because they are explained and consistent.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Calibration becoming inconsistent. Different responses to similar situations creating perception of unfairness. The trust that proportionality was meant to build is being eroded by inconsistency instead.",
            "theCorrective": "—"
          },
          {
            "positionName": "Standards with Relationship",
            "description": "Standards enforced consistently. Trust maintained through transparency and proportionality. Dialogue accompanies enforcement. Relationship preserved through explanation.",
            "howArrive": "Platform team is in a context where standards have legal or safety consequence. Consequences are appropriate to the risk.",
            "internalNarrative": "\"Standards matter. We explain consequences and then apply them.\" The team feels principled.",
            "whatItProduces": "Standards reliably maintained. Consumer behaviour predictable. Some consumers hesitating to raise concerns because consequences are visible. Self-censorship beginning to accumulate.",
            "whenCorrect": "Compliance-heavy environments where standards enforcement has regulatory consequences.",
            "failureSignal": "Consumers consulting colleagues before raising concerns to assess whether it is safe to report. Self-censorship becoming visible in reduced feedback volume.",
            "theCorrective": "Measure consumer willingness to raise concerns. If declining, the enforcement-to-trust ratio needs recalibration. The measurement is itself a signal that you value the relationship alongside the standards."
          },
          {
            "positionName": "Consistent Enforcement",
            "description": "Standards enforced rigorously. Violations addressed quickly and visibly. Trust maintained through consistency and fairness, not through leniency.",
            "howArrive": "Platform team had experiences where trust-first enforcement failed — standards were violated repeatedly without consequence until a significant incident. The response was to enforce more rigorously.",
            "internalNarrative": "\"Standards exist for a reason. We enforce them.\" The team feels rigorous and reliable.",
            "whatItProduces": "Trust declining. Consumers compliant but not engaged. Shadow IT growing as consumers work around standards they comply with formally.",
            "whenCorrect": "Regulated industries with mandatory consequence structures. Some post-incident responses.",
            "failureSignal": "Concerns raised privately to individuals rather than through official channels. Shadow reporting replacing official reporting. Official channels avoided.",
            "theCorrective": "Identify the most common bypass behaviour. Ask whether the bypassed standard is achieving its stated purpose. If not, the standard may be poorly designed. Fixing the standard is more effective than intensifying enforcement."
          },
          {
            "positionName": "Enforcement Only",
            "description": "Standards enforced maximally. Trust not considered a factor in enforcement decisions.",
            "howArrive": "Platform team is in a context where violations have caused harm. Punishment feels proportional.",
            "internalNarrative": "\"Standards are non-negotiable.\" The team feels uncompromising. The trust cost is not experienced.",
            "whatItProduces": "Complete trust collapse. Consumers compliant and resentful. Bypass behaviours growing despite enforcement. Information entirely suppressed.",
            "whenCorrect": "Never appropriate. Enforcement without trust produces formal compliance and informal bypass.",
            "failureSignal": "Bypass growing despite enforcement. Enforcement producing resentment without compliance improvement. Information completely absent.",
            "theCorrective": "Identify two enforcement decisions where the consumer relationship was damaged despite the decision being correct. Ask what explanation would have preserved more trust. Apply that explanation systematically to future enforcement."
          }
        ]
      }
    ]
  },
  {
    "romanId": "V",
    "title": "Temporal & Change",
    "theme": "How does the platform handle time — evolution, debt, growth, decay?",
    "definition": "How does the platform move through time? Every decision about the pace of change, the accumulation and repayment of technical debt, the management of growth, and how the platform evolves without breaking what already depends on it.",
    "tradeOffs": [
      {
        "code": "V-L1",
        "axis": "Speed of Evolution ↔ Predictability of Change",
        "type": "L",
        "summary": "Legitimate tension — rapid evolution produces improvements quickly; predictable change enables consumer planning",
        "columns": [
          {
            "positionName": "Continuous Evolution",
            "description": "Platform evolves continuously. No defined release cycles. Changes deploy as ready. Consumer notification minimal or absent.",
            "howArrive": "Platform team values iteration speed highly. Changes deploy as they are ready. Consumer notification was an afterthought. Nobody chose this — it was the natural state of a delivery-focused team without release discipline.",
            "internalNarrative": "\"We ship when it's ready. Speed is quality.\" The team feels productive. Consumer migration burden is not experienced by the team — it is experienced by consumers.",
            "whatItProduces": "Platform always at best current state. Maximum capability currency. Consumer migration burden maximum. Trust in platform stability very low.",
            "whenCorrect": "Early platforms with no established consumers. Never appropriate once consumer base exists.",
            "failureSignal": "Consumers spending significant time on platform migrations. Adoption declining due to migration cost unpredictability. Consumer planning breaking down.",
            "theCorrective": "Define a release cadence. Any cadence. The definition of a cycle is the first step toward predictability. One release per quarter is a starting point."
          },
          {
            "positionName": "Fast Cycle",
            "description": "Frequent changes with short notice periods. Consumers expected to track changes actively. Change rate high.",
            "howArrive": "Platform team iterates quickly and notifies consumers through standard channels. The notification is genuine but the cycle is fast.",
            "internalNarrative": "\"We move quickly and we communicate.\" The team feels dynamic.",
            "whatItProduces": "Good currency. Security good. Capability competitive. Significant consumer migration burden. Consumer planning difficult.",
            "whenCorrect": "Small platforms with small, technically capable consumer bases who accept migration as part of the deal.",
            "failureSignal": "Consumer planning breaking down. Teams unable to commit to roadmaps because platform change timing uncertain.",
            "theCorrective": "Extend notice periods by one release cycle. Measure whether consumer migration burden decreases. It will."
          },
          {
            "positionName": "Agile Evolution",
            "description": "Regular releases with defined notice periods. Changes communicated in advance. Versioning maintained. Cadence clear but rapid.",
            "howArrive": "Platform team adopted a release cadence in response to consumer complaints about unpredictability. The cadence exists but is faster than consumers would prefer.",
            "internalNarrative": "\"We release regularly and give notice.\" The team feels responsible.",
            "whatItProduces": "Good improvement pace. Consumers informed. Migration manageable. Some migration overhead.",
            "whenCorrect": "Growing platforms transitioning to managed evolution.",
            "failureSignal": "Notice periods too short for complex migrations. Consumers requesting extensions. Migrations incomplete when sunset dates arrive.",
            "theCorrective": "Build one migration tool for the next planned breaking change. Measure whether migration burden decreases. Let the learning inform tooling investment for subsequent changes."
          },
          {
            "positionName": "Managed Evolution",
            "description": "Defined release cadence. Substantial advance notice for all changes. Breaking changes require long deprecation windows. Migration tooling provided. Cadence predictable.",
            "howArrive": "Platform team designed release cadence and deprecation windows explicitly. Migration tooling is built as part of breaking changes. The cadence is a commitment to consumers, not just an internal practice.",
            "internalNarrative": "\"We evolve thoughtfully and support consumers through changes.\" The team feels mature.",
            "whatItProduces": "Platform improves meaningfully. Consumers can plan around platform changes. Migration burden manageable. Migration supported. Trust maintained through predictability.",
            "whenCorrect": "Most mature internal platforms. The default.",
            "failureSignal": "Release cadence slipping. Notice periods not honoured. Migration tooling promised but not delivered. Trust eroding.",
            "theCorrective": "—"
          },
          {
            "positionName": "Stable Cadence",
            "description": "Quarterly releases. Long notice periods. Breaking changes very infrequent and supported heavily.",
            "howArrive": "Platform team has a very large or critical consumer base. The stability commitment was made consciously and is maintained consciously.",
            "internalNarrative": "\"We are very stable. Consumers can depend on us.\" The team feels reliable.",
            "whatItProduces": "Very predictable. Consumer planning easy. Very low unplanned migration burden. Platform evolves slowly. Mistakes persist longer.",
            "whenCorrect": "Large-scale platforms with very large, diverse consumer bases (Kubernetes API model).",
            "failureSignal": "Ecosystem significantly ahead of platform. Security vulnerabilities in deprecated capabilities. Platform team unable to address significant design mistakes within any reasonable timeframe.",
            "theCorrective": "Identify the three design mistakes causing the most consumer pain. Calculate the cost of carrying them for another year. If the cost exceeds the migration burden with support, make the breaking change now."
          },
          {
            "positionName": "Slow Cycle",
            "description": "Bi-annual or annual releases. Very long notice periods. Breaking changes extremely rare and avoided where possible.",
            "howArrive": "Platform team experienced a period of too-frequent changes and overcorrected. The slow cycle is the correction.",
            "internalNarrative": "\"We are conservative. We don't break things.\" The team feels careful.",
            "whatItProduces": "Extremely predictable. Nearly zero unplanned migration burden. Very slow improvement. Significant technical debt accumulation possible.",
            "whenCorrect": "Legacy enterprise platforms with very high migration costs and very large consumer bases.",
            "failureSignal": "Platform team demoralised by inability to fix known design mistakes. Technical debt compounding. Ecosystem has moved decisively ahead.",
            "theCorrective": "Establish a maximum deprecation window. \"Indefinite support\" is a commitment that becomes unmaintainable. Define the ceiling and communicate it before it is tested."
          },
          {
            "positionName": "Frozen",
            "description": "Platform never changes. All capabilities fixed. No evolution possible. Bugs and security vulnerabilities persist.",
            "howArrive": "Platform team committed to stability as the primary value. Mistakes accumulate because correcting them requires changes.",
            "internalNarrative": "\"We are stable. We protect what works.\" The team feels reliable. The accumulation of design mistakes is not experienced as a problem.",
            "whatItProduces": "Complete predictability. Zero migration burden. Design mistakes permanent. Security vulnerabilities accumulate. Platform falls behind ecosystem.",
            "whenCorrect": "Never appropriate long-term.",
            "failureSignal": "Security critical vulnerabilities accumulating. Platform increasingly insecure. Ecosystem has moved so far ahead that platform is considered legacy by consumers.",
            "theCorrective": "Security is the forcing function. Identify security vulnerabilities in the frozen platform. Security fixes are the starting point for building evolution capacity."
          }
        ]
      },
      {
        "code": "V-L2",
        "axis": "Debt Management ↔ Feature Delivery",
        "type": "L",
        "summary": "Legitimate tension — addressing technical debt requires capacity; feature delivery requires capacity; both compete for the same resource; debt not addressed compounds",
        "columns": [
          {
            "positionName": "Design First",
            "description": "No capability ships until design is fully correct. Zero debt tolerance.",
            "howArrive": "Platform team adopted a quality-first culture. Debt tolerance is genuinely zero. The delivery slowness is accepted as the cost of correctness.",
            "internalNarrative": "\"We do not ship debt. We ship quality.\" The team feels principled and rigorous. Consumer waiting time is framed as the cost of doing things right.",
            "whatItProduces": "Very stable interfaces. Low long-term migration burden. Long time-to-value. Risk of over-engineering. Consumer needs unmet while design is perfected. Some consumers building their own solutions because waiting is not viable.",
            "whenCorrect": "Legacy architecture-first teams. Appropriate only for platforms with very long intended lifetime and very high migration cost per consumer.",
            "failureSignal": "Platform never ships. Design discussions perpetual. Consumers build everything themselves. Engineers demoralised by inability to deliver.",
            "theCorrective": "Ship one capability. Any capability. Mark it provisional. The learning from real usage is worth more than another architecture review. Perfect design for imagined usage is less valuable than imperfect design for real usage."
          },
          {
            "positionName": "Architecture-Led",
            "description": "Strong architecture investment before shipping. Very low debt tolerance. Proof of concept phase before committing to design.",
            "howArrive": "Platform team has strong architecture pride and genuine capability. Architecture review is thorough. The cost to consumers waiting for capabilities is not visible to the team.",
            "internalNarrative": "\"We design well and ship confidently.\" The team feels architecturally mature.",
            "whatItProduces": "High architectural quality. Low long-term maintenance burden. Consumer requests delayed months while architecture is validated. Workarounds appearing.",
            "whenCorrect": "Large-scale infrastructure organisations building for enormous scale from day one.",
            "failureSignal": "Consumer requests delayed months. Workarounds appearing in production for capabilities consumers cannot wait for. Architecture review becoming a bottleneck that the team defends rather than questions.",
            "theCorrective": "Set a maximum architecture review time. If review exceeds the maximum, ship with provisional status. Real usage will inform the design better than extended review."
          },
          {
            "positionName": "Debt-Aware Delivery",
            "description": "Design carefully, ship when good enough. Explicit technical debt backlog maintained. Debt acknowledged at point of incurrence. Repayment scheduled.",
            "howArrive": "Platform team tracks debt and intends to repay it. Repayment capacity is not protected. Debt tracking exists but repayment schedule is aspirational.",
            "internalNarrative": "\"We ship good things and we track our compromises.\" The team feels responsible.",
            "whatItProduces": "Good shipping speed with reasonable quality. Debt visible. Debt repayment precarious — sacrificed under pressure without being reported.",
            "whenCorrect": "Growing organisations with partial leadership commitment to debt management.",
            "failureSignal": "Debt repayment not happening. Ledger growing without corresponding repayment. Repayment always the next thing that will happen after the current delivery is done.",
            "theCorrective": "Protect debt repayment capacity structurally. State it as a percentage in sprint planning. Report when it is sacrificed. Visibility creates accountability that aspiration does not."
          },
          {
            "positionName": "Iterative with Ledger",
            "description": "Ship to learn. Maintain explicit debt ledger with repayment schedule. Protect 20% of capacity for debt repayment. Consumers informed what is provisional versus stable.",
            "howArrive": "Platform team maintains an explicit debt ledger, reviews it quarterly, and protects repayment capacity structurally. Leadership is aware of both the debt and the repayment schedule.",
            "internalNarrative": "\"We ship to learn and we manage what we owe.\" The team feels professionally managed and honest.",
            "whatItProduces": "Fast learning from real usage. Debt managed consciously. Design shaped by reality. Repayment capacity protected. Platform quality improving over time without major migration events.",
            "whenCorrect": "Teams with genuine leadership mandate and structural protection of repayment capacity. The default.",
            "failureSignal": "Repayment capacity raided regularly. Ledger exists but entries age without resolution. Leadership protection nominal rather than structural. The ledger is honest; the repayment is not.",
            "theCorrective": "—"
          },
          {
            "positionName": "Acknowledged Debt",
            "description": "Ship to learn. Debt acknowledged. Repayment best-effort rather than scheduled. Debt tracked but repayment not protected from reactive demand.",
            "howArrive": "Platform team acknowledges debt informally. Repayment happens when a debt item causes enough pain to justify the investment. The threshold is pain, not schedule.",
            "internalNarrative": "\"We acknowledge debt. We'll address it when we can.\" The team feels pragmatic. The accumulation is not experienced as compounding.",
            "whatItProduces": "Fast to ship. Real usage shapes design. Debt accumulating. Repayment triggered by pain rather than schedule. Pain threshold may be higher than the optimal repayment point.",
            "whenCorrect": "Early-stage platforms with few consumers and high engineering capacity for reactive debt management.",
            "failureSignal": "Debt repayment triggered by incidents rather than schedule. Platform team surprised by consequences of debt they acknowledged but did not address.",
            "theCorrective": "Convert \"best effort\" to a schedule. \"We will address this debt in Q3\" is a schedule. \"We will address this debt when we can\" is not. The schedule is the accountability mechanism."
          },
          {
            "positionName": "Untracked Debt",
            "description": "Ship to learn. Debt acknowledged informally at team level. No tracking. Repayment when urgency forces it.",
            "howArrive": "Platform team ships quickly. Debt is mentioned in retrospectives but never formally tracked. Nobody owns the debt.",
            "internalNarrative": "\"We move fast. We'll clean it up.\" The team feels productive. The debt is invisible because it is not tracked.",
            "whatItProduces": "Very fast to ship. Debt accumulating invisibly. Compounding silently. Discovered at incidents. Platform team surprised by consequences of debt they knew existed.",
            "whenCorrect": "Very early stage with no established consumers. Platform in proof-of-concept phase.",
            "failureSignal": "Incidents occurring from debt that was known but not tracked. Post-incident reviews identifying known design limitations as root causes. \"We knew this was a problem\" said after incidents that the known problem caused.",
            "theCorrective": "Start the debt ledger now. List every known design limitation. Estimate the consumer cost of each. The act of listing creates awareness that drives repayment."
          },
          {
            "positionName": "Ship and Forget",
            "description": "Ship and move on. No debt acknowledgement, no tracking, no repayment commitment. All decisions permanent by default.",
            "howArrive": "Platform team has never had a debt management practice. Delivery is the metric. Debt is invisible because it has never been measured.",
            "internalNarrative": "\"We ship. We learn.\" The team feels agile. Debt does not exist as a concept in the team's operating model.",
            "whatItProduces": "Maximum shipping speed. Debt accumulates across all consumers. Migration cost eventually exceeds platform value. Replacement chosen over evolution.",
            "whenCorrect": "Never. Even early-stage platforms should track debt.",
            "failureSignal": "Platform cannot evolve. Every change breaks something. Migration cost calculation triggers replacement decision rather than evolution investment.",
            "theCorrective": "Calculate the migration cost for the three areas of highest debt. If the cost of migrating now is less than carrying the debt for one year, begin migration now. The calculation almost always favours earlier migration."
          }
        ]
      },
      {
        "code": "V-L3",
        "axis": "Organisational Memory ↔ Fresh Thinking",
        "type": "L",
        "summary": "Legitimate tension — retaining memory prevents repeating mistakes; but memory can prevent questioning assumptions embedded in undocumented precedent",
        "columns": [
          {
            "positionName": "History as Law",
            "description": "Past decisions treated as laws. No approach previously tried and abandoned will be reconsidered. Historical constraints permanent even when context has changed completely.",
            "howArrive": "Organisation with long history of platform decisions. Memory is strong because documentation is strong and tenure is long. History became authoritative without anyone choosing to make it so.",
            "internalNarrative": "\"We have learned from the past. We don't repeat our mistakes.\" The team feels wise. Historical constraints preventing good current solutions are framed as wisdom rather than limitation.",
            "whatItProduces": "Historical mistakes never repeated. Deep institutional knowledge. Historical constraints preventing good current solutions. Team unable to adapt to significantly changed context.",
            "whenCorrect": "Organisations with very long institutional memory and strong documentation culture. Appropriate when history is very rich and well-documented.",
            "failureSignal": "New team members proposing approaches that were tried and abandoned, being told \"we tried that\" with no documentation of why it failed. Same \"we tried that\" stopping conversations without adding the information needed to evaluate whether circumstances have changed.",
            "theCorrective": "Audit historical constraints currently applied. For each one, ask whether the context that justified it still exists. Where context has changed, challenge the constraint explicitly."
          },
          {
            "positionName": "Memory-First",
            "description": "Past decisions heavily weighted. Proposals must demonstrate why the historical approach is insufficient before alternatives are considered. History is the default frame.",
            "howArrive": "Platform team experienced a period of repeated mistakes and responded by valuing institutional memory highly. Memory-first is a corrective that has been held longer than the original problem warranted.",
            "internalNarrative": "\"We consult history before making decisions.\" The team feels considered and careful.",
            "whatItProduces": "Strong protection against known failure modes. New approaches slow to adopt even when context has changed fundamentally.",
            "whenCorrect": "Very large, long-lived organisations with extensive historical record and high cost of repeating historical mistakes.",
            "failureSignal": "Context has changed significantly but historical approaches still treated as binding. Team cannot adapt to new circumstances because history is too constraining.",
            "theCorrective": "Establish a context-change trigger for historical review. When team structure, technology landscape, or strategy changes significantly, decisions in that domain become eligible for reconsideration."
          },
          {
            "positionName": "Memory-Informed",
            "description": "Past decisions documented and consulted. New proposals engage with history. Historical approaches questioned only if context has changed significantly.",
            "howArrive": "Platform team maintains an ADR (Architecture Decision Record) practice. New proposals are expected to reference relevant ADRs. The practice is genuine but not always followed.",
            "internalNarrative": "\"We know what we have tried and we engage with it.\" The team feels informed.",
            "whatItProduces": "Good protection against repeating most mistakes. Some historical mistakes repeated because memory is not systematically consulted.",
            "whenCorrect": "Growing organisations with an ADR practice and mixed tenure.",
            "failureSignal": "Same proposal appearing in multiple planning cycles without recognition that it has been discussed before. Team unsure if it has been tried before.",
            "theCorrective": "Implement ADRs. Require that new proposals reference any ADR covering the same domain. Make the engagement with history structural, not optional."
          },
          {
            "positionName": "Informed Freshness",
            "description": "Historical decisions documented. New proposals engage with the record. Historical constraints challenged when context has changed substantially. Past learning applied without being treated as binding.",
            "howArrive": "Platform team maintains ADRs, reviews them periodically, and has a defined process for challenging historical decisions when context changes. Memory is a tool, not an authority.",
            "internalNarrative": "\"We learn from history without being bound by it.\" The team feels mature and adaptive.",
            "whatItProduces": "Past learning applied. Fresh approaches enabled when justified by context change. Design space not artificially constrained by outdated history.",
            "whenCorrect": "Most mature platform teams. The default.",
            "failureSignal": "Historical documentation incomplete. Key decisions undocumented. New members cannot access institutional memory. Memory held in individuals who may leave.",
            "theCorrective": "—"
          },
          {
            "positionName": "Fresh with History",
            "description": "Historical decisions available but not systematically consulted. Some institutional memory. New proposals less frequently engage with history.",
            "howArrive": "Platform team has significant turnover. Memory exists in long-tenured individuals but is not documented. New hires rarely consult history because they don't know it exists.",
            "internalNarrative": "\"We make good decisions on the merits.\" The team feels fresh and merit-focused. Historical mistakes are not visible because history is not consulted.",
            "whatItProduces": "Some historical mistakes repeated because history not systematically consulted.",
            "whenCorrect": "Growing teams with limited documentation investment and mixed tenure.",
            "failureSignal": "Same failure mode recurring that was solved previously by a team member who has since left.",
            "theCorrective": "Run a historical review for the three most important platform decisions in the next planning cycle. Ask whether the context has changed enough to warrant a fresh approach."
          },
          {
            "positionName": "Fresh-First",
            "description": "Historical decisions largely unknown to current team. Each proposal treated primarily on current merits. History consulted when specifically prompted.",
            "howArrive": "Most team members are new. The team is in an early phase where history is short and memory is mainly in a few individuals who rarely articulate it.",
            "internalNarrative": "\"We design from first principles.\" The team feels intellectually rigorous.",
            "whatItProduces": "Significant historical mistakes repeated. Team discovers known failure modes without the knowledge that they are known.",
            "whenCorrect": "Small teams where most members are new. Early-stage platforms.",
            "failureSignal": "Significant time invested in an approach that was abandoned previously for documented reasons nobody knew.",
            "theCorrective": "Interview departing team members specifically about decisions they made that are not documented. Their knowledge walks out with them unless captured before departure."
          },
          {
            "positionName": "Tabula Rasa",
            "description": "No institutional memory. All decisions made without reference to history. Previous attempts unknown. Every problem encountered as if for the first time.",
            "howArrive": "Platform was rebuilt or is new. No history exists. All decisions are made without reference to what was tried before.",
            "internalNarrative": "\"Everything is an open question.\" The team feels free. The same mistakes are encountered without recognition.",
            "whatItProduces": "All historical mistakes eventually repeated. Every failure mode discovered again.",
            "whenCorrect": "New teams. Teams after significant attrition. Teams that have not invested in any knowledge management.",
            "failureSignal": "Systematic repetition of historical mistakes. Same failure modes encountered repeatedly as if for the first time.",
            "theCorrective": "Establish ADRs immediately. The next significant mistake that repeats a historical failure is the cost of not having institutional memory."
          }
        ]
      },
      {
        "code": "V-L4",
        "axis": "Forward Compatibility ↔ Current Optimisation",
        "type": "L",
        "summary": "Legitimate tension — designing for forward compatibility keeps future options open at the cost of current suboptimality; optimising for current needs produces better immediate results at the cost of future flexibility",
        "columns": [
          {
            "positionName": "Future-Only Design",
            "description": "All decisions optimise for anticipated future state. Current needs secondary. Maximum optionality preserved regardless of current cost.",
            "howArrive": "Platform team building for a very large scale target from inception. Future-only design is intentional given the scale ambition.",
            "internalNarrative": "\"We are building for the long term.\" The team feels strategic. Over-engineering for current consumers is framed as investment in the future.",
            "whatItProduces": "Maximum future optionality. Zero rebuild cost for anticipated futures. Current consumers poorly served. Design complexity high for current needs. Some current use cases sacrificed for future use cases that may never materialise.",
            "whenCorrect": "Infrastructure with very high rebuild costs and very long intended lifetimes. Rare.",
            "failureSignal": "Platform over-engineered. Current consumers struggling with complexity designed for future consumers. Design discussions dominated by speculative requirements that cannot be validated.",
            "theCorrective": "Define three specific anticipated futures with specific probability assessments. Design only for those. Everything else is present-only. \"All possible futures\" is not a design requirement — it is design paralysis."
          },
          {
            "positionName": "Architecture for Scale",
            "description": "Strong investment in future-proofing. Current needs met but future flexibility explicitly considered in all design decisions. Extension points built proactively.",
            "howArrive": "Platform team experienced a painful rebuild caused by insufficient forward planning. The overcorrection is building for all possible futures.",
            "internalNarrative": "\"We plan for scale and flexibility.\" The team feels architecturally mature.",
            "whatItProduces": "Very high optionality. Most futures achievable. Some current optimisation sacrificed. Design complexity higher than needed for current consumers.",
            "whenCorrect": "Large-scale infrastructure organisations with 5-year technology roadmaps and high rebuild costs.",
            "failureSignal": "Design debates dominated by speculative future requirements nobody can validate. Current consumer needs taking second place to unvalidated futures.",
            "theCorrective": "Require anticipated futures to be validated by leadership before designing for them. Unvalidated futures should not drive design. The validation requirement constrains over-engineering."
          },
          {
            "positionName": "Future-Aware Design",
            "description": "Future considered in all major decisions. Extension points built where near-certain futures identified. Current needs primary but optionality maintained where cost is low.",
            "howArrive": "Platform team has a formal process for considering future implications in major decisions. The process is well-established.",
            "internalNarrative": "\"We build for where we are going, not just where we are.\" The team feels forward-thinking.",
            "whatItProduces": "Good optionality for near-certain futures. Current consumers well-served. Some futures requiring rebuild that were foreseeable but not designed for.",
            "whenCorrect": "Mature organisations with good strategic planning practices and moderate rebuild costs.",
            "failureSignal": "Foreseeable organisational evolution requiring rebuild that should have been anticipated. \"We knew this was coming but didn't design for it.\"",
            "theCorrective": "Define the horizon explicitly. \"We design for futures we are confident will occur within 18 months\" is a horizon. It constrains without eliminating forward thinking."
          },
          {
            "positionName": "Balanced Horizon",
            "description": "Current needs primary. Future optionality maintained where extension cost is low. Explicit decisions about which futures are worth designing for. Platform horizon defined and reviewed.",
            "howArrive": "Platform team defines an explicit planning horizon, designs for futures within it, and explicitly does not design for futures outside it. The horizon is reviewed periodically.",
            "internalNarrative": "\"We serve current consumers well and plan for likely futures.\" The team feels balanced.",
            "whatItProduces": "Current consumers optimally served within the horizon constraint. Near-certain futures achievable without rebuild. Explicit about what is and is not designed for.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Horizon definition contested. Debates about whether a given future is within or outside the horizon consuming more time than the design itself.",
            "theCorrective": "—"
          },
          {
            "positionName": "Current-Aware Future",
            "description": "Current needs primary. Future considered informally. Extension points added only for near-certain futures.",
            "howArrive": "Platform team operates in a high-uncertainty environment. Near-term planning is reliable; longer-term planning is not.",
            "internalNarrative": "\"We focus on what we know. We adapt as we learn.\" The team feels practical.",
            "whatItProduces": "Current consumers very well served. Near-term evolution achievable. Unanticipated futures require rebuild.",
            "whenCorrect": "Organisations with high strategic uncertainty and short planning horizons where the future is genuinely unknowable.",
            "failureSignal": "Unanticipated but foreseeable futures requiring rebuild. \"We should have designed for this — it was obvious.\"",
            "theCorrective": "Identify the two futures most likely to require rebuild if they occur. Assess whether designing for them now is cheaper than rebuilding later. It often is."
          },
          {
            "positionName": "Current-First",
            "description": "Current needs entirely primary. Future considered only when immediately relevant. Very near horizon.",
            "howArrive": "Platform team has short planning cycles. Current needs are well-understood. Future needs are uncertain.",
            "internalNarrative": "\"We solve today's problems today.\" The team feels focused and efficient.",
            "whatItProduces": "Most evolution requires rebuild. Platform lifetime shorter than investment suggests. Frequent rebuilding.",
            "whenCorrect": "Start-ups or early-stage platforms where intentionally short lifetime is a conscious choice.",
            "failureSignal": "Frequent rebuilds. Platform team spending significant time rebuilding what should have been evolvable. Investment not being leveraged.",
            "theCorrective": "Calculate the rebuild cost of the last three platform rebuilds. The pattern will reveal whether current-horizon design is cost-effective over a 3–5 year period. It almost never is."
          },
          {
            "positionName": "Current-Only Design",
            "description": "Current needs only. No future consideration. Every decision optimises entirely for the present.",
            "howArrive": "Platform team is in early stage. The platform is intentionally temporary or intentionally narrow.",
            "internalNarrative": "\"We build for now. We'll rebuild when things change.\" The team feels agile.",
            "whatItProduces": "All evolution requires rebuild. Constant rebuilding. Platform investment never leveraged beyond one to two years.",
            "whenCorrect": "Prototypes. Proof-of-concept platforms. Platforms explicitly intended to be temporary.",
            "failureSignal": "Constant full rebuilds. Platform investment never leveraged beyond the current period.",
            "theCorrective": "The platform's effective lifetime is the time until the next rebuild. Calculate the cost-per-year of that lifetime. If higher than a future-aware design would cost, the present-only approach is false economy."
          }
        ]
      },
      {
        "code": "V-G1",
        "axis": "Stability ↔ Velocity",
        "type": "G",
        "summary": "Genuine tension — the platform team controls the change rate; product teams absorb the change cost; this misalignment of incentives is permanent and cannot be resolved through goodwill alone",
        "columns": [
          {
            "positionName": "Frozen",
            "description": "Platform never breaks anything. Also never meaningfully improves. Old versions maintained indefinitely. Mistakes are permanent.",
            "howArrive": "Platform team committed to stability as the primary value. Each request to change is weighed against the commitment. Over time, mistakes accumulate because correcting them would require changes.",
            "internalNarrative": "\"We are stable. Our consumers can depend on us.\" The team feels reliable. The inability to fix mistakes is framed as the cost of commitment.",
            "whatItProduces": "Zero unplanned migration work. Maximum consumer stability. Design mistakes permanent. Security vulnerabilities accumulate. Technical debt compounds at the interface level. Platform team morale declines.",
            "whenCorrect": "Almost never. Only when consumer teams have genuinely zero capacity for migration work.",
            "failureSignal": "Platform team identifying design mistakes they cannot fix. Security vulnerabilities in interfaces they cannot update. Consumer experience degrading because the interface cannot evolve.",
            "theCorrective": "Security is the forcing function. Identify security vulnerabilities in the frozen platform. Security fixes require evolution. Build evolution capacity from security fixes."
          },
          {
            "positionName": "Long-Cycle Stability",
            "description": "Breaking changes extremely rare. Deprecation windows measured in years. Old versions supported until adoption near-zero without time pressure.",
            "howArrive": "Platform team has a very large or very critical consumer base where migrations are genuinely expensive. The stability commitment was made consciously.",
            "internalNarrative": "\"We are very stable. We are trustworthy.\" The team feels highly professional.",
            "whatItProduces": "Very high consumer stability. Migrations predictable and rare. Trust very high. Platform evolves very slowly. Design mistakes take years to fix. Technical debt accumulates.",
            "whenCorrect": "Kubernetes API versioning model. APIs with very large or very critical consumer bases.",
            "failureSignal": "Platform team demoralised by inability to fix known design mistakes. \"We'll fix it in the next major version\" said of problems years old. The major version never arrives.",
            "theCorrective": "Define maximum deprecation windows. \"Indefinite support\" is not a policy — it becomes an unsustainable commitment. Set the ceiling and communicate it before it is tested."
          },
          {
            "positionName": "Versioned Stability",
            "description": "Breaking changes versioned explicitly. Deprecation windows 6–12 months. Migration tooling provided. Consumer-owned migration with platform documentation.",
            "howArrive": "Platform team adopted explicit versioning in response to consumer complaints about unexpected breaking changes. Tooling investment is partial.",
            "internalNarrative": "\"We version our changes and give notice. We are responsible.\" The team feels disciplined.",
            "whatItProduces": "Good stability. Migrations plannable. Migration tooling partial — consumers do significant migration work independently.",
            "whenCorrect": "Mature platforms with significant consumer footprints and partial migration investment.",
            "failureSignal": "Migration tooling promised but not built. Notice periods not honoured. Consumers missing sunsets because support was insufficient.",
            "theCorrective": "Build migration tooling for the next breaking change before announcing the change. Tooling converts migration from a consumer burden to a consumer choice."
          },
          {
            "positionName": "Managed Evolution",
            "description": "Breaking changes announced 90+ days in advance. Migration tooling provided and maintained by platform team. Old versions supported for defined period. Sunset dates enforced with full consumer support.",
            "howArrive": "Platform team designed for evolvability from the start. Versioning is structural. Migration tooling is built alongside breaking changes. Deprecation windows are calendar commitments honoured operationally.",
            "internalNarrative": "\"We evolve thoughtfully and support consumers through changes.\" The team feels mature.",
            "whatItProduces": "Consumer change cadence predictable. Platform can improve and correct design mistakes. Migrations are supported. Trust maintained through consistency. Migration burden shared between platform and consumers.",
            "whenCorrect": "Most mature internal platforms. The default.",
            "failureSignal": "Consumers missing sunset dates despite notice. Migration support insufficient for complexity. Sunset enforcement causing disruption despite announced windows.",
            "theCorrective": "—"
          },
          {
            "positionName": "Continuous Delivery",
            "description": "Breaking changes announced 30–60 days in advance. Documentation provided. Teams expected to self-migrate with support available on request.",
            "howArrive": "Platform team in early stage with small, technically capable consumer base. Iteration speed was the primary value. Migration is frequent and consumers accepted this when they adopted early.",
            "internalNarrative": "\"We iterate and we notify. Early consumers knew the pace.\" The team feels dynamic.",
            "whatItProduces": "Consumer migration burden moderate. Platform can iterate meaningfully. Consumer planning harder. Some consumers miss notice.",
            "whenCorrect": "Small platforms with high-maturity consumers who accept migration as part of the deal.",
            "failureSignal": "Consumers discovering breaking changes without adequate notice. Sunset dates enforced before consumers are ready with insufficient support.",
            "theCorrective": "Extend notice periods by one release cycle. Measure whether consumer migration burden decreases. It will."
          },
          {
            "positionName": "Aggressive Iteration",
            "description": "Breaking changes with minimal notice. Rapid iteration. Teams expected to keep up with the change pace.",
            "howArrive": "Platform team values design quality and iterates fast to correct design mistakes. Breaking changes frequent because design understanding is still developing.",
            "internalNarrative": "\"We fix design mistakes fast. Consumers keep up.\" The team feels quality-focused. The consumer burden is experienced by consumers, not the team.",
            "whatItProduces": "High consumer migration burden. Consumers spending significant time tracking and responding to platform changes. Trust eroding.",
            "whenCorrect": "Early-stage platforms with few established consumers. Should not persist beyond early stage.",
            "failureSignal": "Consumers spending more time on platform migrations than on product features. Platform seen as a source of constant unplanned work. New capability adoption declining.",
            "theCorrective": "Invest in automated migration tooling. The manual migration cost is accumulating consumer resentment. One well-tooled migration rebuilds more trust than three poorly-supported ones."
          },
          {
            "positionName": "Perpetual Churn",
            "description": "Platform ships continuously with no versioning. Teams must update constantly or break silently.",
            "howArrive": "Platform team has no release or versioning discipline. Changes are made when needed.",
            "internalNarrative": "\"We ship continuously. Consumers update continuously.\" The team feels maximally agile.",
            "whatItProduces": "Consumer systems breaking frequently. Platform adoption risk high. Consumer trust collapses. New capabilities avoided because migration cost is unpredictable.",
            "whenCorrect": "Never appropriate once established consumers exist.",
            "failureSignal": "Consumer adoption collapsing. Teams refusing new platform capabilities. Migration cost unpredictable. Platform effectively frozen by consumer refusal to adopt.",
            "theCorrective": "Make a public stability commitment. One quarter of no breaking changes. Honour it. Use the trust built to negotiate the evolution cadence needed. The commitment must be public to be meaningful."
          }
        ]
      },
      {
        "code": "V-G2",
        "axis": "Investment Now ↔ Accumulate Debt",
        "type": "G",
        "summary": "Genuine tension — platform debt compounds across all consumers simultaneously; the incentive structure always favours shipping now because present beneficiaries are visible and future payers are not",
        "columns": [
          {
            "positionName": "Design-First Paralysis",
            "description": "No capability ships until design is fully correct and all debt is resolved. Zero debt tolerance. Review cycles indefinite.",
            "howArrive": "Platform team adopted zero debt tolerance after experiencing the cost of significant platform debt. The corrective has been applied more broadly than the original problem warranted.",
            "internalNarrative": "\"We do not ship debt.\" The team feels principled and rigorous. Consumer waiting time is the cost of doing things right.",
            "whatItProduces": "Very stable interfaces. Low long-term migration burden. Long time-to-value. Risk of over-engineering. Consumer needs unmet. Some consumers building their own solutions.",
            "whenCorrect": "Platforms with very long intended lifetime and very high migration cost per consumer. Very rare.",
            "failureSignal": "Platform never ships. Design discussions perpetual. Consumers build everything themselves. Engineers demoralised.",
            "theCorrective": "Ship one capability. Mark it provisional. The learning from real usage is worth more than another architecture review."
          },
          {
            "positionName": "Architecture-Led",
            "description": "Strong architecture investment before shipping. Very low debt tolerance. Proof-of-concept required before committing to design. Review thorough.",
            "howArrive": "Platform team has strong architecture pride and genuine capability. Architecture review is thorough. The cost to consumers waiting for capabilities is not experienced by the team.",
            "internalNarrative": "\"We design well and ship confidently.\" The team feels architecturally mature.",
            "whatItProduces": "High architectural quality. Low long-term maintenance burden. Consumer requests delayed significantly. Workarounds appearing in production for capabilities consumers cannot wait for.",
            "whenCorrect": "Large-scale infrastructure organisations building for enormous scale from day one.",
            "failureSignal": "Consumer requests delayed months. Workarounds appearing. Architecture review becoming a bottleneck the team defends rather than questions.",
            "theCorrective": "Set a maximum design review time. If review exceeds the maximum, ship with provisional status. Real usage informs design better than extended review."
          },
          {
            "positionName": "Debt-Aware Design",
            "description": "Design carefully. Ship when good enough. Debt tracked explicitly from point of incurrence. Repayment scheduled and reported but not structurally protected.",
            "howArrive": "Platform team tracks debt and intends to repay it. Repayment capacity is not protected. The intention is genuine but the protection mechanism is not structural.",
            "internalNarrative": "\"We ship good things and we track our compromises.\" The team feels responsible.",
            "whatItProduces": "Good shipping speed with reasonable quality. Debt visible. Debt repayment sacrificed under pressure without being reported.",
            "whenCorrect": "Growing organisations with partial leadership commitment to debt management.",
            "failureSignal": "Debt repayment not happening. Ledger growing. Repayment always deferred to after the current delivery.",
            "theCorrective": "Protect debt repayment capacity structurally. State it as a percentage in sprint planning. Report when it is sacrificed. Visibility creates accountability."
          },
          {
            "positionName": "Iterative with Ledger",
            "description": "Ship to learn. Maintain explicit debt ledger with repayment schedule. Protect 20% of capacity for debt repayment structurally. Consumers informed what is provisional versus stable.",
            "howArrive": "Platform team maintains an explicit debt ledger, reviews it quarterly, protects repayment capacity structurally, and communicates debt status to consumers. Leadership is aware and committed.",
            "internalNarrative": "\"We ship to learn and we manage what we owe.\" The team feels professionally managed and honest.",
            "whatItProduces": "Fast learning from real usage. Debt managed consciously. Design shaped by reality. Repayment capacity protected. Platform quality improving over time without major migration events.",
            "whenCorrect": "Teams with genuine leadership mandate and structural protection of repayment capacity. The default.",
            "failureSignal": "Repayment capacity raided regularly. Ledger exists but entries age without resolution. Leadership protection nominal rather than structural.",
            "theCorrective": "—"
          },
          {
            "positionName": "Acknowledged Debt",
            "description": "Ship to learn. Acknowledge debt. Repayment best-effort not scheduled. Debt tracked but repayment not protected from reactive demand.",
            "howArrive": "Platform team acknowledges debt informally. Repayment happens when a debt item causes enough pain to justify investment. The threshold is pain rather than schedule.",
            "internalNarrative": "\"We acknowledge debt. We'll address it when we can.\" The team feels pragmatic.",
            "whatItProduces": "Fast to ship. Debt accumulating. Repayment triggered by pain rather than schedule. Pain threshold may be higher than the optimal repayment point.",
            "whenCorrect": "Early-stage platforms with few consumers and high engineering capacity for reactive debt management.",
            "failureSignal": "Debt repayment triggered by incidents. Platform team surprised by consequences of debt they acknowledged but did not address.",
            "theCorrective": "Convert \"best effort\" to a schedule. \"We will address this debt in Q3\" is a schedule. \"We will address it when we can\" is not. The schedule is the accountability mechanism."
          },
          {
            "positionName": "Untracked Debt",
            "description": "Ship to learn. Debt acknowledged informally at team level. No formal tracking. Repayment when urgency forces it.",
            "howArrive": "Platform team ships quickly. Debt is mentioned in retrospectives but never formally tracked or owned. Nobody is responsible for the debt.",
            "internalNarrative": "\"We move fast. We'll clean it up.\" The team feels productive. Debt is invisible because it is not tracked.",
            "whatItProduces": "Very fast to ship. Debt accumulating invisibly. Compounding silently. Discovered at incidents. Platform team surprised by consequences of debt they knew existed.",
            "whenCorrect": "Very early stage with no established consumers.",
            "failureSignal": "Incidents from debt that was known but not tracked. \"We knew this was a problem\" said after incidents it caused.",
            "theCorrective": "Start the debt ledger now. List every known design limitation. Estimate the consumer cost of each. The act of listing creates awareness."
          },
          {
            "positionName": "Ship and Forget",
            "description": "Ship and move on. No debt acknowledgement, no tracking, no repayment commitment. All decisions permanent by default.",
            "howArrive": "Platform team has never had a debt management practice. Delivery is the only metric. Debt is invisible because it has never been measured.",
            "internalNarrative": "\"We ship. We learn.\" The team feels agile. Debt does not exist as a concept in the operating model.",
            "whatItProduces": "Maximum shipping speed. Debt accumulates across all consumers simultaneously. Migration cost eventually exceeds platform value. Replacement chosen over evolution.",
            "whenCorrect": "Never. Even early-stage platforms should track debt.",
            "failureSignal": "Platform cannot evolve. Every change breaks something. Migration cost calculation triggers replacement decision.",
            "theCorrective": "Calculate the migration cost for the three areas of highest debt. If the cost of migrating now is less than carrying the debt for one year, migrate now."
          }
        ]
      }
    ]
  },
  {
    "romanId": "VI",
    "title": "Purpose & Identity",
    "theme": "What is the platform for, and what does it believe?",
    "definition": "What is the platform's reason for existing, and what values guide it? Every decision about the platform's mission, the principles it will not compromise, and the identity it projects to the rest of the organisation.",
    "tradeOffs": [
      {
        "code": "VI-L1",
        "axis": "Developer Productivity ↔ Organisational Coherence",
        "type": "L",
        "summary": "Legitimate tension — maximising developer productivity sometimes means allowing team-optimal choices that fragment the organisation; maximising coherence means some teams accept sub-optimal solutions for collective function",
        "columns": [
          {
            "positionName": "Team Optimisation",
            "description": "Each team optimises independently. No organisational coherence considerations. Platform is a substrate only.",
            "howArrive": "Organisation grew without anyone making a standardisation decision. Each team optimised independently. The fragmentation was never consolidated.",
            "internalNarrative": "\"Teams know what they need. We trust them.\" The team feels respectful of team autonomy. Security fragmentation and knowledge silos are not visible as consequences of the position.",
            "whatItProduces": "Maximum individual team speed. No shared knowledge. Security varies wildly. Cross-team collaboration impossible. Compliance impossible to demonstrate. Every team reinvents solutions the others have already built.",
            "whenCorrect": "Startups. Early-stage organisations. Single-digit team count. Pre-compliance requirements.",
            "failureSignal": "Security incidents from inconsistency. Teams unable to help each other. Onboarding takes weeks because every team has its own way. Compliance impossible to demonstrate to auditors.",
            "theCorrective": "Identify the single most important cross-team coordination requirement. Implement the minimum standard addressing it. Build from one standard to two. Not more yet."
          },
          {
            "positionName": "Productivity-First",
            "description": "Productivity primary. Coherence considered only where the productivity cost of fragmentation becomes visible and significant.",
            "howArrive": "Platform team values delivery speed highly. Coherence is a secondary concern addressed when fragmentation becomes visibly costly.",
            "internalNarrative": "\"We enable teams to be productive. Coherence follows from good practice.\" The team feels delivery-focused.",
            "whatItProduces": "High individual team productivity. Some fragmentation visible. Coordination cost growing. Cross-team collaboration sometimes difficult.",
            "whenCorrect": "High-growth organisations prioritising speed. Appropriate while establishing what the organisation actually needs for coherence.",
            "failureSignal": "Cross-team collaboration consistently difficult due to tool fragmentation. Same problems solved differently across teams. Coordination cost becoming a visible operational cost.",
            "theCorrective": "Calculate the cross-team coordination cost of the current fragmentation. Present the number to leadership. The number is the case for minimum coherence investment."
          },
          {
            "positionName": "Productivity with Guardrails",
            "description": "Productivity primary with guardrails preventing the most damaging fragmentation. Teams free within guardrails.",
            "howArrive": "Platform team implemented guardrails after experiencing fragmentation costs. Guardrails target the most damaging fragmentation while leaving most choices to teams.",
            "internalNarrative": "\"We enable productivity and prevent real fragmentation.\" The team feels balanced.",
            "whatItProduces": "Good productivity. Most teams unconstrained. Serious fragmentation prevented. Some teams frustrated by guardrails preventing genuinely better approaches.",
            "whenCorrect": "Organisations building first coherence standards. Good intermediate position.",
            "failureSignal": "Guardrails frequently challenged. Teams regularly requesting exceptions to the guardrails. Exception volume suggesting guardrails are too broad for the benefit they provide.",
            "theCorrective": "Identify the guardrail most frequently challenged. Ask whether it is achieving its coherence purpose. If not, remove it. Guardrails earn their existence by preventing real costs."
          },
          {
            "positionName": "Aligned Productivity",
            "description": "Productivity optimised within an organisational coherence framework. Framework is the minimum necessary to maintain organisational function. Teams free within the framework.",
            "howArrive": "Platform team made explicit framework decisions and maintained them with governance. Framework is the minimum — anything beyond minimum has been removed.",
            "internalNarrative": "\"Teams are productive and the organisation is coherent. Both are real.\" The team feels architecturally mature and politically sophisticated.",
            "whatItProduces": "Both values served. Teams productive. Organisation coherent. Framework is the minimum necessary — not more. Political peace maintained through framework legitimacy.",
            "whenCorrect": "Most mature organisations. The default for most platform teams.",
            "failureSignal": "Framework contested as too broad. Significant political effort required to maintain framework minimum. Challenges to specific framework elements are valid and should be taken seriously.",
            "theCorrective": "—"
          },
          {
            "positionName": "Coherence-Aware Productivity",
            "description": "Coherence framework broad. Team productivity decisions made within the framework. Most decisions shaped by coherence requirements.",
            "howArrive": "Platform team or organisation has had significant compliance or coordination failures from fragmentation. The coherence framework grew in response.",
            "internalNarrative": "\"Coherence enables long-term productivity. Short-term constraints are worth it.\" The team feels principled.",
            "whatItProduces": "Good coherence. Cross-team collaboration straightforward. Organisation functions at scale. Some teams using sub-optimal tools for their use case.",
            "whenCorrect": "Large enterprises with strong coordination requirements. Appropriate where coordination failure has caused significant organisational harm.",
            "failureSignal": "Teams building significant workarounds within the coherence framework. Productivity impairment measurable in engineering surveys. Best engineers citing constraint as a reason for leaving.",
            "theCorrective": "Survey teams on their productivity impairment. Identify the two coherence requirements with the highest productivity cost. Evaluate whether the coherence benefit justifies the cost."
          },
          {
            "positionName": "Coherence-First",
            "description": "Coherence primary. Productivity improvements requiring deviation from the coherence framework are declined.",
            "howArrive": "Organisation experienced severe coordination or security failures. Coherence was elevated to primary value in response. The response has been maintained longer than the original problem warranted.",
            "internalNarrative": "\"Coherence is how we scale. Individual productivity is secondary.\" The team feels organisationally minded.",
            "whatItProduces": "Very high coherence. Organisation highly coordinated. Cross-team operations seamless. Some teams significantly impeded. Best engineers may leave due to autonomy constraints.",
            "whenCorrect": "Regulated industries with mandatory standardisation requirements. Post-incident correctives.",
            "failureSignal": "Significant attrition from engineers who value autonomy. Hiring difficulty in competitive engineering market. Productivity measurably impaired by coherence requirements.",
            "theCorrective": "Identify one domain where team autonomy would produce significantly higher productivity without meaningful coherence cost. Allow it. Use the success to build the case for selective relaxation."
          },
          {
            "positionName": "Organisation Optimisation",
            "description": "Organisational coherence optimised completely. Individual team productivity a secondary consideration throughout.",
            "howArrive": "Central organisation function decided that infrastructure decisions should not vary across teams. Centralisation was a deliberate governance choice.",
            "internalNarrative": "\"We optimise for the organisation. Teams implement.\" The team feels in control of organisational outcomes.",
            "whatItProduces": "Maximum organisational coordination. Identical tools and patterns everywhere. Individual team productivity significantly impaired. Talent acquisition and retention difficult.",
            "whenCorrect": "Very large, highly regulated organisations approaching this but rarely reaching it. Government systems.",
            "failureSignal": "Complete attrition of engineers who require any professional autonomy. Talent acquisition impossible in a competitive engineering market. Delivery stops.",
            "theCorrective": "Calculate attrition cost from engineers citing autonomy constraints as reason for leaving. If cost exceeds coherence benefit, the framework is too broad."
          }
        ]
      },
      {
        "code": "VI-L2",
        "axis": "Innovation Enablement ↔ Reliability",
        "type": "L",
        "summary": "Legitimate tension — enabling innovation requires accepting higher risk; maintaining reliability requires predictability and stability; a platform cannot simultaneously maximise both",
        "columns": [
          {
            "positionName": "Experiment-First",
            "description": "All teams can experiment freely with any technology in any environment. No reliability requirements on experimental work anywhere.",
            "howArrive": "Platform team values learning speed highly. Every team can experiment everywhere. The production reliability cost of this approach is accepted.",
            "internalNarrative": "\"We learn fast. Failures are feedback.\" The team feels innovative and experimental. Production reliability incidents are framed as learning opportunities.",
            "whatItProduces": "Maximum learning speed. Failures frequent and small. Production reliability unpredictable. Consumer trust in production stability low.",
            "whenCorrect": "Research and development environments. Never appropriate for production platforms.",
            "failureSignal": "Production incidents from uncontrolled experiments. Consumer trust in production stability declining. Consumers unable to plan around platform reliability.",
            "theCorrective": "Define one production reliability SLA. Enforce it. Everything outside that SLA is an experiment environment. The SLA is the boundary between production and experiment."
          },
          {
            "positionName": "Innovation-Led",
            "description": "Innovation strongly encouraged. Reliability requirements applied only to production-critical workloads. Experimentation pathways broad.",
            "howArrive": "Platform team has innovation as a stated value. Reliability requirements are applied to production but experimentation pathways are deliberately broad.",
            "internalNarrative": "\"We innovate with appropriate guardrails.\" The team feels balanced.",
            "whatItProduces": "High innovation. Good learning rate. Production incidents from experiments that escaped their intended blast radius.",
            "whenCorrect": "Innovation-first organisations in early growth stages where speed of learning is the primary competitive advantage.",
            "failureSignal": "Production incidents from experiments that exceeded their intended boundaries. Consumer trust eroding from reliability problems caused by innovation.",
            "theCorrective": "Define blast radius limits for production experiments. Any experiment that could violate them must be run outside production. The limits are the enabling constraint."
          },
          {
            "positionName": "Safe Experimentation",
            "description": "Experimentation enabled through defined channels: feature flags, canary deployments, sandbox environments. Reliability maintained in production.",
            "howArrive": "Platform team built experimentation infrastructure (feature flags, canary, sandbox) specifically to enable innovation without production risk.",
            "internalNarrative": "\"We have safe paths for experimentation.\" The team feels structured and responsible.",
            "whatItProduces": "Good innovation. Production reliability maintained. Some experiments impossible within defined channels. The most important experiments are often the most boundary-pushing.",
            "whenCorrect": "Growing organisations building experimentation infrastructure.",
            "failureSignal": "Most valuable experiments being proposed outside defined channels because the channels are too narrow for meaningful innovation. The channels exist but are bypassed.",
            "theCorrective": "Measure whether defined experiment channels are actually being used. If not, they are not enabling innovation — they are theatre. Ask why they are being bypassed."
          },
          {
            "positionName": "Reliable Innovation",
            "description": "Structured experimentation with defined blast radius limits. Innovation paths available. Reliability SLAs maintained. Experiments isolated from production impact by design.",
            "howArrive": "Platform team designed innovation and reliability as complementary values with a defined blast radius model. Experimentation is structured, not free-form.",
            "internalNarrative": "\"We innovate safely. Both values are real.\" The team feels architecturally mature.",
            "whatItProduces": "Both values served. Teams innovate within reliability-maintaining structures. Learning rate good. Production reliability maintained. Blast radius model requires investment and maintenance.",
            "whenCorrect": "Most mature platforms with defined experimentation capabilities. The default.",
            "failureSignal": "Blast radius limits preventing genuinely valuable experiments. Experiment channels becoming bureaucratic. Innovation happening outside the platform to avoid the bureaucracy.",
            "theCorrective": "—"
          },
          {
            "positionName": "Conservative Innovation",
            "description": "Innovation enabled but conservative. Experimentation paths exist but are narrow. Reliability considerations weigh heavily on all decisions.",
            "howArrive": "Platform team experienced innovation-caused incidents. Experimentation channels were narrowed in response. The narrowing was appropriate but has been maintained past its usefulness.",
            "internalNarrative": "\"We innovate carefully. Reliability is too important to risk.\" The team feels responsible.",
            "whatItProduces": "Good reliability. Some innovation. Platform evolving more slowly than consumer needs. Some valuable experiments not possible.",
            "whenCorrect": "Organisations with high reliability requirements and moderate innovation pressure.",
            "failureSignal": "Teams frustrated by innovation constraints. Working around experimentation channels. Consumer needs evolving faster than the platform allows them to explore solutions.",
            "theCorrective": "Identify the most valuable experiment currently blocked by reliability requirements. Ask whether the reliability requirement that blocks it is actually protecting something real. If not, relax it."
          },
          {
            "positionName": "Reliability-First",
            "description": "Reliability primary. Innovation occurs only where reliability can be fully maintained throughout the innovation process.",
            "howArrive": "Platform team or organisation experienced a significant reliability incident caused by an experiment. Reliability was elevated to primary value in response.",
            "internalNarrative": "\"We maintain what works. Reliability is everything.\" The team feels rigorous.",
            "whatItProduces": "Very high reliability. Excellent production stability. Very slow innovation. Design mistakes persist. Ecosystem currency declining.",
            "whenCorrect": "Banking, healthcare, nuclear — where reliability failure causes harm.",
            "failureSignal": "Consumer needs evolving past platform capability. Gap between what consumers need to explore and what the platform allows growing steadily.",
            "theCorrective": "Define the minimum viable experimentation path. Even one controlled experiment path is better than none."
          },
          {
            "positionName": "Frozen Reliability",
            "description": "Complete stability. No experimentation. All capabilities stable and unchanged. New capabilities do not exist.",
            "howArrive": "Organisation decided that any change is a reliability risk. Stability became the only value.",
            "internalNarrative": "\"We do not change what works.\" The team feels protective.",
            "whatItProduces": "Absolute reliability for existing capabilities. No new capabilities ever. Platform decays relative to consumer needs over time.",
            "whenCorrect": "Theoretical. Any platform serving evolving consumer needs cannot remain completely frozen.",
            "failureSignal": "Platform irrelevant to consumer innovation. Teams build innovation infrastructure entirely outside the platform.",
            "theCorrective": "Identify one consumer need the platform cannot meet because it cannot evolve. The cost of not meeting that need is the cost of frozen reliability. Make that cost visible."
          }
        ]
      },
      {
        "code": "VI-L3",
        "axis": "Developer Autonomy ↔ Operational Consistency (intrinsic)",
        "type": "L",
        "summary": "Legitimate tension — at the deepest level, this is a conflict between two intrinsic goods: the belief that developers have a right to make decisions about their own systems, and the belief that a coherent infrastructure has inherent value",
        "columns": [
          {
            "positionName": "Absolute Autonomy",
            "description": "Autonomy as absolute value. Any constraint on developer choice is wrong in principle regardless of consequence.",
            "howArrive": "Platform team or engineering culture holds developer autonomy as a philosophical commitment, not merely an instrumental preference.",
            "internalNarrative": "\"Developers know what they need. Constraints are disrespectful.\" The team feels philosophically principled.",
            "whatItProduces": "Complete respect for developer judgment. Fragmentation inevitable. Some constraints are necessary for any collective to function. Safety constraints not implemented.",
            "whenCorrect": "Philosophical position. No functioning platform operates at this extreme sustainably.",
            "failureSignal": "Safety constraints not implemented because autonomy value prevents them. Fragmentation causing harm that the team frames as the cost of autonomy.",
            "theCorrective": "Identify the single constraint whose absence is causing the most harm. Implement it. One constraint does not end autonomy. The argument that it does is not principled — it is rhetorical."
          },
          {
            "positionName": "Strong Autonomy",
            "description": "Autonomy strongly valued. Constraints accepted only when they prevent serious and demonstrable harm.",
            "howArrive": "Engineering culture strongly values developer judgment and has never been tested by significant autonomy-caused harm.",
            "internalNarrative": "\"We trust developer judgment. Constraints require exceptional justification.\" The team feels respectful of engineering expertise.",
            "whatItProduces": "Strong developer satisfaction. High autonomy. Some necessary constraints not implemented because the autonomy value prevents them.",
            "whenCorrect": "Strong engineering culture organisations with high trust and low safety risk.",
            "failureSignal": "Safety-necessary constraints taking years to implement because autonomy value resists them. The resistance frames safety constraints as attacks on developer dignity.",
            "theCorrective": "Identify the safety-necessary constraint currently blocked by the autonomy value. Ask whether the autonomy value is genuinely at stake or being used rhetorically to resist a constraint that would cause no actual harm to developer autonomy."
          },
          {
            "positionName": "Autonomy with Principles",
            "description": "Autonomy as primary value with principled exceptions. Exceptions justified from first principles each time.",
            "howArrive": "Engineering culture values autonomy but has a principled framework for exceptions. The framework exists and is used.",
            "internalNarrative": "\"We respect autonomy and we have principles that bound it.\" The team feels balanced.",
            "whatItProduces": "Good developer satisfaction. Few constraints. Principled argument required for every constraint — governance overhead high.",
            "whenCorrect": "Organisations with mature principled governance and low compliance requirements.",
            "failureSignal": "Constraint implementation debates consuming significant governance time. Same arguments recurring because the framework has not produced a stable resolution.",
            "theCorrective": "Create a principled framework for constraint evaluation. The framework reduces governance overhead by eliminating ad hoc argument. Constraints either meet the framework criteria or they do not."
          },
          {
            "positionName": "Principled Balance",
            "description": "Both values respected. Neither is absolute. Balance determined by principled argument. Both developer judgment and organisational coherence are treated as genuine goods.",
            "howArrive": "Platform team has a genuine philosophical engagement with both values. The balance point is determined through principled argument, not political negotiation.",
            "internalNarrative": "\"We hold both values seriously. Neither is simply preferred over the other.\" The team feels philosophically mature.",
            "whatItProduces": "Both values genuinely honoured. Neither reduced to the other. Governance requires ongoing principled engagement.",
            "whenCorrect": "Rare in practice. Requires genuine philosophical engagement with both values.",
            "failureSignal": "Balance becoming political negotiation rather than principled argument. The principled engagement is being replaced by lobbying.",
            "theCorrective": "—"
          },
          {
            "positionName": "Principled Consistency",
            "description": "Consistency as primary value with principled exceptions. Autonomy respected where it does not compromise consistency.",
            "howArrive": "Platform team or organisation holds operational consistency as a deep value, justified on coordination or compliance grounds.",
            "internalNarrative": "\"Consistency is how we coordinate at scale. Autonomy is respected within it.\" The team feels organisationally minded.",
            "whatItProduces": "Strong consistency. Organisation coherent. Some valuable developer choices prevented by consistency requirements. Developer satisfaction somewhat lower.",
            "whenCorrect": "Large organisations with significant compliance requirements where consistency has legal consequence.",
            "failureSignal": "Developer complaints about constraints that cannot be justified on consistency grounds. Autonomy requests refused without principled justification — only appeals to consistency.",
            "theCorrective": "Identify constraints that cannot be justified on consistency grounds. Ask whether they are justified on other grounds (safety, compliance). If not, remove them. The concession reduces pressure on domains where consistency genuinely matters."
          },
          {
            "positionName": "Strong Consistency",
            "description": "Consistency strongly valued. Autonomy accepted only in domains where consistency has no demonstrable value.",
            "howArrive": "Organisation experienced significant harm from inconsistency. Consistency was elevated to primary value in response.",
            "internalNarrative": "\"Consistency is not negotiable. Autonomy is a secondary concern.\" The team feels firm.",
            "whatItProduces": "Very strong consistency. Some developers leave due to autonomy constraints. Hiring difficulty in competitive engineering markets.",
            "whenCorrect": "Regulated industries with mandatory consistency requirements.",
            "failureSignal": "Attrition from engineers who value any degree of professional autonomy. Hiring difficulty in competitive engineering markets. Innovation rate declining.",
            "theCorrective": "Identify the domains where consistency has no demonstrable value. Allow full autonomy in those domains explicitly. The concession is a signal that autonomy is respected where it can be."
          },
          {
            "positionName": "Absolute Consistency",
            "description": "Consistency as absolute value. Any exercise of autonomy that produces inconsistency is wrong in principle regardless of consequence.",
            "howArrive": "Organisation holds consistency as an absolute value derived from a governance philosophy, regulatory requirement, or philosophical commitment.",
            "internalNarrative": "\"Consistency is the value. Autonomy is a category error at the organisational level.\" The team feels philosophically committed.",
            "whatItProduces": "Developer autonomy entirely absent. Significant attrition. Engineering talent that requires professional autonomy to function effectively cannot thrive. Innovation impossible.",
            "whenCorrect": "Never appropriate. Absolute consistency cannot coexist with employing professional engineers in any meaningful sense.",
            "failureSignal": "Organisation cannot attract or retain engineers who require any degree of professional autonomy. Delivery stops as attrition exceeds hiring.",
            "theCorrective": "This position is not compatible with employing professional engineers over the long term. Identify the single domain where autonomy can be extended without meaningful consistency cost. Start there."
          }
        ]
      },
      {
        "code": "VI-L4",
        "axis": "Cost Efficiency ↔ Quality of Service",
        "type": "L",
        "summary": "Legitimate tension — cost efficiency argues for the minimum necessary; quality of service argues for the headroom and polish that make the platform genuinely excellent",
        "columns": [
          {
            "positionName": "Minimum Viable",
            "description": "Minimum infrastructure to meet stated SLAs. No redundancy beyond requirements. No polish. No headroom. Infrastructure sized exactly for current stated need.",
            "howArrive": "Platform team under significant cost pressure. Every infrastructure investment requires justification against the minimum viable threshold.",
            "internalNarrative": "\"We are responsible stewards of infrastructure cost.\" The team feels financially responsible. Quality gaps are framed as trade-offs, not failures.",
            "whatItProduces": "Minimum cost. Maximum resource efficiency. Platform quality insufficient for consumer needs. Consumer confidence low. Incidents from quality gaps.",
            "whenCorrect": "Cost-constrained platforms with very tight infrastructure budgets and mature consumer expectations.",
            "failureSignal": "Consumer incidents from platform quality gaps. Reliability SLAs missed. Consumer confidence declining. Finance-driven decisions producing operational consequences.",
            "theCorrective": "Identify the three quality investments that would most reduce consumer incidents. Make them. The incident cost almost always exceeds the investment cost."
          },
          {
            "positionName": "Cost-Conscious",
            "description": "Cost primary. Quality investments require ROI justification. Infrastructure sized for current load with minimal headroom.",
            "howArrive": "Platform team has strong cost accountability culture. ROI justification is required for all quality investments. The requirement is genuine and enforced.",
            "internalNarrative": "\"We invest in quality where it pays.\" The team feels pragmatic.",
            "whatItProduces": "Good cost efficiency. Most quality investments justified. Some reliability gaps where investment ROI could not be demonstrated.",
            "whenCorrect": "Cost-conscious organisations with strong ROI culture and financially accountable engineering.",
            "failureSignal": "Reliability incidents from quality gaps that ROI justification prevented from being addressed. \"We couldn't justify the investment\" said after an incident the investment would have prevented.",
            "theCorrective": "Establish quality baselines for each capability. Investment below baseline is not a quality investment — it is minimum viable. Investment above baseline requires ROI justification."
          },
          {
            "positionName": "Efficient Quality",
            "description": "Cost considered in all quality decisions. Quality investments justified by impact. Some headroom maintained. Redundancy where cost-justified.",
            "howArrive": "Platform team has a quality-investment framework that considers cost. Most investments are justified. Some quality gaps where the investment could not be justified.",
            "internalNarrative": "\"We are efficient and we maintain quality.\" The team feels balanced.",
            "whatItProduces": "Good balance. Most consumer-relevant quality maintained. Some quality gaps where investment cost could not be justified.",
            "whenCorrect": "Growing organisations developing quality investment frameworks.",
            "failureSignal": "Quality gaps discovered through incidents rather than proactive investment. The incident cost exceeds the quality investment cost.",
            "theCorrective": "Audit quality investments against consumer incident history. Investments that would have prevented incidents are justified regardless of up-front ROI calculation."
          },
          {
            "positionName": "Value Optimisation",
            "description": "Quality justified by consumer value. Cost justified by quality delivered. Investments made where quality produces measurable consumer benefit. Neither maximised at the other's expense. Investment justified explicitly.",
            "howArrive": "Platform team measures consumer value of quality investments explicitly. Investment decisions are data-driven. Neither cost efficiency nor quality is primary — consumer value is primary.",
            "internalNarrative": "\"We invest in quality that consumers value.\" The team feels consumer-focused.",
            "whatItProduces": "Consumer value maximised per unit cost. Both quality and cost accountability maintained. Investment decisions explicitly justified by consumer value.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Quality investment ROI measurement becoming bureaucratic. Delays necessary investments while measurement processes complete.",
            "theCorrective": "—"
          },
          {
            "positionName": "Quality-Aware",
            "description": "Quality primary for all consumer-visible capabilities. Cost considered in implementation details but not in consumer-visible quality decisions.",
            "howArrive": "Platform team experienced quality failures that were more expensive than quality investments would have been. Quality was elevated in response.",
            "internalNarrative": "\"Quality is how we serve our consumers.\" The team feels consumer-committed.",
            "whatItProduces": "High consumer quality. Consumers very satisfied. Cost efficiency declining. Some investments not producing proportional consumer benefit.",
            "whenCorrect": "Organisations where platform quality failures have high consumer impact.",
            "failureSignal": "Platform cost growing. Budget conversations increasingly difficult. Some quality investments not producing proportional consumer benefit.",
            "theCorrective": "Calculate platform cost as percentage of total engineering cost. If below 15%, cost efficiency concern may be misplaced. The platform is probably not overspending."
          },
          {
            "positionName": "Quality-First",
            "description": "Quality primary across all platform capabilities. Cost a secondary consideration in all decisions.",
            "howArrive": "Platform team is in a context where quality failure has severe consequences. Quality-first is appropriate to the risk.",
            "internalNarrative": "\"Quality is our primary value.\" The team feels principled and reliable.",
            "whatItProduces": "Very high consumer quality. Reliability excellent. Cost significantly higher. Difficult to justify in budget conversations.",
            "whenCorrect": "Platforms serving consumers where quality failures have severe or regulated consequences.",
            "failureSignal": "Platform cost significantly higher than alternatives. Finance questioning platform budget. Marginal investments producing no consumer benefit visible in retrospective analysis.",
            "theCorrective": "Identify two quality investments that are not producing proportional consumer benefit. Redirect that investment to consumer-value-producing capabilities."
          },
          {
            "positionName": "Maximum Quality",
            "description": "Maximum quality regardless of cost. Every redundancy, headroom, and polish investment made regardless of whether it produces consumer benefit.",
            "howArrive": "Platform team has significant budget and no cost constraints. Quality is the only relevant metric.",
            "internalNarrative": "\"We invest in quality because we can.\" The team feels unconstrained. Marginal quality investments producing no consumer benefit are made because they can be.",
            "whatItProduces": "Theoretical maximum reliability. Very high cost. Marginal quality investments producing no consumer benefit. Over-engineering visible.",
            "whenCorrect": "Never appropriate. Marginal quality investments produce no consumer benefit and waste resources.",
            "failureSignal": "Over-engineering visible in areas where consumers are not benefiting from quality investment. Resources misallocated away from genuine consumer value.",
            "theCorrective": "Identify quality investments where marginal improvement produces no measurable consumer benefit. Stop making them. Redirect the investment to capabilities consumers are waiting for."
          }
        ]
      },
      {
        "code": "VI-G1",
        "axis": "Platform as Product ↔ Platform as Infrastructure",
        "type": "G",
        "summary": "Genuine tension — product self-concept and infrastructure self-concept produce different decisions in every trade-off and require different hiring profiles; neither can be fully primary simultaneously",
        "columns": [
          {
            "positionName": "Pure Product",
            "description": "Platform optimises entirely for developer experience and adoption. Reliability secondary. Consumer satisfaction is the only metric.",
            "howArrive": "Platform team experienced very low adoption and responded by elevating consumer experience to primary metric. The corrective was appropriate but may have been applied too broadly.",
            "internalNarrative": "\"Our consumers love using us. Experience is everything.\" The team feels consumer-focused. Reliability incidents are experienced as embarrassing exceptions.",
            "whatItProduces": "Very high adoption. Teams love using it. Reliability degrading as experience is prioritised. Over-investment in UX at cost of correctness.",
            "whenCorrect": "Rare overcorrection after discovering very low adoption. Short-term corrective position.",
            "failureSignal": "Reliability incidents increasing. Platform beloved but broken. Consumers notice that what they love using does not actually work reliably when it matters.",
            "theCorrective": "Implement one reliability SLA. Measure uptime. Report it alongside NPS. Balance is established by measuring both, not by choosing one."
          },
          {
            "positionName": "Experience-Led",
            "description": "Strong product mindset. Developer experience is a primary design constraint alongside reliability. NPS and adoption as important as uptime.",
            "howArrive": "Platform team consciously adopted product thinking and invested in product management skills. Developer experience is explicitly primary alongside reliability.",
            "internalNarrative": "\"We build great products that developers want to use.\" The team feels product-oriented and consumer-focused.",
            "whatItProduces": "High adoption. Good balance. Reliability maintained. Requires product management skills that most infrastructure teams do not have. Harder to staff.",
            "whenCorrect": "High-growth tech companies competing for engineering talent where developer experience is a competitive differentiator.",
            "failureSignal": "Engineering quality degrading. Reliability incidents increasing despite consumer satisfaction remaining high. Reliability and experience beginning to diverge.",
            "theCorrective": "Hire one infrastructure engineer who prioritises reliability. The team needs the counterweight. Balance requires both perspectives on the team."
          },
          {
            "positionName": "Product-Informed",
            "description": "Infrastructure first but developer experience is an explicit secondary investment. UX reviewed in design decisions. Reliability maintained as foundation.",
            "howArrive": "Platform team added UX investment after discovering low adoption. UX is now considered in design decisions.",
            "internalNarrative": "\"We build reliable infrastructure with good UX.\" The team feels balanced.",
            "whatItProduces": "Infrastructure quality high. Some UX investment. Teams feel heard when they report experience problems. Proactive UX investment absent.",
            "whenCorrect": "DevOps-transitioning platform teams making genuine progress toward product mindset.",
            "failureSignal": "UX problems persisting. Onboarding slow. New engineers unable to self-serve. First-use support tickets increasing.",
            "theCorrective": "Make time-to-first-deployment a primary metric. Measure it. Any value above one business day is a product design failure."
          },
          {
            "positionName": "Product-Minded Infrastructure",
            "description": "Reliability and correctness as foundation. Adoption, onboarding, error message quality, and documentation as first-class concerns. Both uptime and NPS measured and reported.",
            "howArrive": "Platform team designed for both reliability and consumer experience from the start. Both are primary — one provides the foundation, the other provides the reason to use it.",
            "internalNarrative": "\"We are reliable and we are usable. Both are real platform qualities.\" The team feels professionally mature.",
            "whatItProduces": "Highest long-term value. Reliability guaranteed. Adoption voluntary and growing. Cognitive load reduction measurable. Both stakeholders (reliability engineers and product managers) need to be present on the team.",
            "whenCorrect": "Most mature internal platforms. The default. Industry direction 2025–2026.",
            "failureSignal": "Adoption not measured. NPS not tracked. Platform team does not know if consumers are satisfied. Platform team unable to demonstrate value beyond uptime.",
            "theCorrective": "—"
          },
          {
            "positionName": "Infrastructure with UX",
            "description": "Infrastructure and reliability primary. Developer experience improved reactively when problems are reported. UX investment reactive rather than proactive.",
            "howArrive": "Platform team is infrastructure-oriented but has been exposed to consumer experience concerns through adoption data. Reactive UX investment happens when problems are reported.",
            "internalNarrative": "\"We build reliable infrastructure. We improve usability when problems are reported.\" The team feels appropriately scoped.",
            "whatItProduces": "Infrastructure quality high. Reliability excellent. UX problems persist until reported. Adoption depends on mandate or habit, not experience. Consumer onboarding slow.",
            "whenCorrect": "Infrastructure-native organisations where all product engineers have strong infrastructure knowledge.",
            "failureSignal": "Adoption stagnant. Teams use platform because they must, not because it helps. Consumer satisfaction low and unmeasured. Mandate is the only adoption mechanism.",
            "theCorrective": "Measure time-to-first-deployment for a new team member. Shadow one junior engineer on day one. Every confusion is a product design failure."
          },
          {
            "positionName": "Reliability-First",
            "description": "Infrastructure only. Uptime and correctness are the only metrics. Documentation minimal. Adoption is someone else's responsibility.",
            "howArrive": "Platform team consists of infrastructure engineers who have always measured reliability and uptime. Consumer experience was not in scope when the team was formed.",
            "internalNarrative": "\"We build infrastructure. It works. That is our value.\" The team feels technically rigorous. Consumer experience is not considered part of the value delivered.",
            "whatItProduces": "Low adoption unless mandated. Poor onboarding. Consumers feel the platform was built for the platform team, not for them. Consumer satisfaction low if measured.",
            "whenCorrect": "Traditional ops teams given platform responsibilities without changing their operating model.",
            "failureSignal": "Zero voluntary adoption. Mandate required for any use. Bypass growing. Consumers actively seeking alternatives.",
            "theCorrective": "Run one consumer satisfaction survey. The score is the evidence needed to justify product mindset investment. The data is more compelling than the argument."
          },
          {
            "positionName": "Pure Utility",
            "description": "Raw capability provision. No consideration of how it is used. Consumers expected to adapt to the platform. Consumer experience not measured or considered.",
            "howArrive": "Platform team built a purely functional system. No consideration of how consumers would use it. Consumer experience was not part of the design brief.",
            "internalNarrative": "\"We provide the substrate. Consumers build their experience on top of it.\" The team feels minimal. Consumer experience is entirely the consumer's responsibility.",
            "whatItProduces": "Zero voluntary adoption. Platform exists because mandated. Consumers leave the organisation or find workarounds when they can.",
            "whenCorrect": "Legacy enterprise tooling. Government systems where consumer experience is not a design requirement.",
            "failureSignal": "No voluntary adoption. Platform budget questioned in every budget cycle. Platform team unable to demonstrate value. Dissolution or significant restructuring likely.",
            "theCorrective": "The platform is not being used voluntarily. Calculate the cost of maintaining something nobody chooses. The case for product mindset investment will write itself from that calculation."
          }
        ]
      },
      {
        "code": "VI-G2",
        "axis": "Enabling ↔ Governing",
        "type": "G",
        "summary": "Genuine tension — enabling mechanisms reduce friction; governing mechanisms create friction; both cannot simultaneously be maximised; the choice of primary orientation determines the platform's design, metrics, and consumer relationship",
        "columns": [
          {
            "positionName": "Pure Enablement",
            "description": "Platform enables everything. No constraints enforced. Security and compliance entirely consumer responsibility. No guardrails of any kind.",
            "howArrive": "Platform team values developer speed absolutely. Security and compliance are not considered platform concerns.",
            "internalNarrative": "\"We enable developers. We trust them completely.\" The team feels respectful and enabling. Security incidents are framed as developer responsibility.",
            "whatItProduces": "Maximum team speed. Zero friction. Safety incidents guaranteed over time. Compliance impossible. Consumer teams own all consequences.",
            "whenCorrect": "Seed-stage startups where speed is existential. Never sustainable.",
            "failureSignal": "Safety incidents. Compliance audit failure. Consumer incidents from unconstrained choices. Platform team asked to take responsibility for outcomes they were not involved in creating.",
            "theCorrective": "Implement one safety guardrail as policy-as-code. Measure whether it triggers on legitimate work. If not, add a second. If it does trigger on legitimate work, recalibrate first. The guardrail should be invisible in normal operation."
          },
          {
            "positionName": "Enablement-First",
            "description": "Enablement primary. Constraints enforced only for safety-critical cases. Policy-as-code for minimum security baseline only. Everything else unconstrained.",
            "howArrive": "Platform team has strong engineering culture and trusts developers to make good decisions. Constraints are minimised on principle.",
            "internalNarrative": "\"We enable with minimal constraints. Developers are professionals.\" The team feels trusting.",
            "whatItProduces": "Very high team speed. Minimal friction. Some safety gaps. Compliance inconsistent.",
            "whenCorrect": "High-trust engineering cultures with mature security practices and low compliance requirements.",
            "failureSignal": "Safety incidents from cases just outside the minimum guardrails. Compliance gaps discovered in audit. Compliance function adding requirements because the platform is not enforcing them.",
            "theCorrective": "Identify the safety gaps in the current minimum baseline. Add one guardrail for each gap. Keep the policy set minimal and precise. Each addition should be justified by a specific risk."
          },
          {
            "positionName": "Enabling with Guardrails",
            "description": "Enablement primary with automated guardrails at risk boundaries. Guardrails invisible in normal operation. Standard work unaffected. Guardrails trigger only at genuine risk.",
            "howArrive": "Platform team implemented guardrails specifically to remove the need for approval processes. Guardrails are the replacement for gatekeeping.",
            "internalNarrative": "\"We enable and we prevent genuine risk.\" The team feels balanced and well-designed.",
            "whatItProduces": "Good team speed. Safety minimums enforced automatically. Normal work unaffected. Some legitimate work triggers guardrails.",
            "whenCorrect": "Scale-ups with strong engineering culture and moderate compliance requirements.",
            "failureSignal": "Guardrails triggering on legitimate standard work. Platform team receiving complaints about blocked legitimate work. Guardrail design requiring recalibration.",
            "theCorrective": "Measure guardrail trigger rate on legitimate work. If more than 5% of triggers are on legitimate work, the guardrails are too broad. Recalibrate before adding more."
          },
          {
            "positionName": "Guardrails",
            "description": "Automated guardrails enforce security and compliance minimums. Everything within boundaries is unconstrained. Guardrails only trigger on genuine risk. Policy-as-code. Standard work frictionless.",
            "howArrive": "Platform team designed guardrails explicitly to enable frictionless standard work while preventing genuine risk. Policy-as-code investment was significant and intentional.",
            "internalNarrative": "\"Standard work is frictionless. Genuine risk is prevented. Both are real.\" The team feels architecturally mature.",
            "whatItProduces": "Security and compliance guaranteed without visible friction in normal work. Team velocity unaffected for standard work. Guardrails only at genuine risk boundaries. Investment in guardrail design and maintenance required.",
            "whenCorrect": "Netflix, Stripe, mature internal platforms. The default.",
            "failureSignal": "Guardrails triggering on work that should be frictionless. Platform team receiving override requests for legitimate work. Guardrails too broad or too narrow.",
            "theCorrective": "—"
          },
          {
            "positionName": "Policy Enforcement",
            "description": "Automated enforcement of a broader policy set. Some legitimate work triggers policy review. Overhead introduced for standard cases.",
            "howArrive": "Platform team or compliance function added broader policy enforcement after experiencing compliance gaps. Each policy addition was individually justified. The total overhead was not assessed.",
            "internalNarrative": "\"We enforce because it matters. Standards have consequences.\" The team feels principled and rigorous.",
            "whatItProduces": "Some legitimate work triggers policy review. Overhead introduced. Speed declining.",
            "whenCorrect": "Banks, healthcare tech, regulated SaaS with significant compliance requirements.",
            "failureSignal": "Delivery slowing measurably due to policy overhead. Teams routing around platform for speed. Shadow infrastructure appearing to avoid policy friction.",
            "theCorrective": "Audit policy triggers from the last quarter. Triggers on legitimate work are policy design failures. Fix the policy, not the work. The fix is to make the policy more precise, not to add exceptions."
          },
          {
            "positionName": "Approval Gates",
            "description": "Significant changes require platform team review before execution. Approval process is the norm.",
            "howArrive": "Platform team experienced a significant security or compliance incident and responded by adding approval requirements. The approval gates were appropriate initially but have been maintained past their usefulness.",
            "internalNarrative": "\"We review because we are responsible for what ships.\" The team feels in control and accountable.",
            "whatItProduces": "Platform team becomes bottleneck. Engineers feel untrusted. Delivery slowing. Shadow IT risk increasing. Quality in the approval process declining as volume increases.",
            "whenCorrect": "Financial infrastructure post-incident. Government systems with mandatory review requirements.",
            "failureSignal": "Engineers leaving citing approval process friction. Teams building shadow infrastructure to avoid approval overhead. Approval queue becoming a delivery bottleneck.",
            "theCorrective": "Measure delivery time change attributable to approval overhead. Present the number to leadership. The number is the case for moving to automated guardrails."
          },
          {
            "positionName": "Full Gatekeeping",
            "description": "All changes require platform team approval. Platform team is gatekeeper for all infrastructure decisions.",
            "howArrive": "Platform team operates as a governance function. Approval is the mechanism by which the platform team maintains oversight.",
            "internalNarrative": "\"We approve everything. We are responsible for all infrastructure.\" The team feels in control and comprehensive.",
            "whatItProduces": "Platform team bottleneck for all delivery. Fastest engineers leave. Innovation stops. Shadow infrastructure proliferating to avoid the approval overhead.",
            "whenCorrect": "Nuclear safety. Aviation. Medical device software. Environments where human error in infrastructure decisions causes physical harm.",
            "failureSignal": "Delivery stops. Engineers leave. Organisation cannot compete. Compliance achieved in the formal approval process and nowhere else.",
            "theCorrective": "Calculate the cost of blocked delivery. Calculate the value of the compliance the approval gates provide. If cost exceeds value, the gates are too heavy. Automate the compliance and eliminate the gates."
          }
        ]
      }
    ]
  },
  {
    "romanId": "VII",
    "title": "Environment & Strategy",
    "theme": "What is changing outside the platform, and how does the platform respond?",
    "definition": "What is happening outside the platform, and how should the platform respond to it? Every decision about tracking the external technology landscape, managing dependencies on vendors and ecosystems, and positioning the platform relative to industry direction.",
    "tradeOffs": [
      {
        "code": "VII-L1",
        "axis": "Ecosystem Currency ↔ Stability of Dependencies",
        "type": "L",
        "summary": "Legitimate tension — using the latest tools keeps the platform competitive; the latest tools change more frequently and are less battle-tested",
        "columns": [
          {
            "positionName": "Always Latest",
            "description": "All dependencies updated immediately on release. No stability window. Continuous adoption cycle. Consumer impact not assessed before adoption.",
            "howArrive": "Platform team values ecosystem currency above stability. Updates are applied as they are released. Consumer migration burden is not experienced by the platform team — it is experienced by consumers.",
            "internalNarrative": "\"We use the best tools available. We stay current.\" The team feels technically sophisticated. Consumer migration burden is not visible to the team.",
            "whatItProduces": "Platform always current. Maximum capability. Consumer migration burden maximum. Constant migration work appearing in consumer sprints. Trust in platform stability very low.",
            "whenCorrect": "Never an intentional choice. Always an outcome of no dependency governance.",
            "failureSignal": "Consumer incidents from dependency changes. Trust in platform stability declining. Consumer teams spending sprints on platform migration work. Adoption declining due to migration unpredictability.",
            "theCorrective": "Define a stability window. Any window. \"We evaluate dependencies two weeks after release\" is a stability window. The definition is the first step toward predictability."
          },
          {
            "positionName": "Active Tracking",
            "description": "Dependencies updated on a fast cycle. Short evaluation period before adoption. Security and feature updates both treated as high priority.",
            "howArrive": "Platform team tracks ecosystem closely and adopts quickly. Short evaluation window exists but is not always sufficient. Adoption is driven by capability desire.",
            "internalNarrative": "\"We track the ecosystem and adopt quickly.\" The team feels current and capable.",
            "whatItProduces": "Good currency. Security posture good. Capability competitive. Significant consumer migration burden. Consumer planning difficult around platform dependency changes.",
            "whenCorrect": "Small platforms with high technical capacity and low consumer base where migration is fast.",
            "failureSignal": "Consumer migration work growing. Teams spending time tracking dependency changes rather than building product. Migration burden appearing in team retrospectives.",
            "theCorrective": "Extend the stability window by two weeks. Measure whether consumer migration burden decreases. It will."
          },
          {
            "positionName": "Curated Currency",
            "description": "Dependencies evaluated on release. Adoption after short stability assessment. Triggered by capability need or security requirement.",
            "howArrive": "Platform team developed an evaluation process after experiencing problems from too-rapid adoption. The process exists and is followed.",
            "internalNarrative": "\"We adopt carefully and move with intention.\" The team feels disciplined.",
            "whatItProduces": "Good balance. Most capabilities available. Some lag in adoption. Security maintained for critical updates.",
            "whenCorrect": "Growing platforms developing dependency governance.",
            "failureSignal": "Security vulnerabilities in older versions. Capability gaps consumers work around. Some consumer requests blocked by capability lag.",
            "theCorrective": "Separate security updates from feature updates. Security updates apply immediately regardless of cadence. Feature updates follow the cadence."
          },
          {
            "positionName": "Managed Currency",
            "description": "Dependencies updated on a defined cadence. Security updates immediate. Feature updates after evaluation. Consumer impact assessed before adoption. Stability window defined.",
            "howArrive": "Platform team designed a dependency management policy explicitly. Cadence, evaluation process, consumer impact assessment, and security exception path are all defined.",
            "internalNarrative": "\"We are current and we protect consumers from change.\" The team feels professionally managed.",
            "whatItProduces": "Security maintained. Capability competitive. Consumer impact managed. Dependency lifecycle managed and predictable.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Assessment process becoming a bottleneck. Dependencies waiting for assessment while security vulnerabilities are known. Consumer impact assessment delaying security patches.",
            "theCorrective": "—"
          },
          {
            "positionName": "Stable Adoption",
            "description": "Dependencies updated infrequently. Only when capability gap or security requirement forces it. Long stability windows.",
            "howArrive": "Platform team experienced a period of too-frequent dependency changes and installed a conservative policy. The conservatism is appropriate but may be held past its usefulness.",
            "internalNarrative": "\"We are stable. Our consumers can depend on us.\" The team feels reliable.",
            "whatItProduces": "Very stable. Consumer experience highly predictable. Very low unplanned migration burden. Capability lag growing. Security posture declining for non-critical vulnerabilities.",
            "whenCorrect": "Platforms with high stability requirements and moderate security pressure.",
            "failureSignal": "Security vulnerabilities accumulating in pinned dependency versions. Platform falling behind ecosystem. Engineers embarrassed by the outdated toolchain.",
            "theCorrective": "Audit security vulnerabilities in pinned dependency versions. Critical vulnerabilities apply immediately. Treat security as the forcing function for opening the cadence."
          },
          {
            "positionName": "Conservative Pinning",
            "description": "Dependencies pinned to long-stable versions. Only security patches applied. Feature version locked. Ecosystem evolution deliberately excluded.",
            "howArrive": "Organisation experienced a significant incident from a dependency update. The response was to lock dependencies tightly. The lock has been maintained past the original justification.",
            "internalNarrative": "\"We don't change what works.\" The team feels conservative and careful.",
            "whatItProduces": "Extremely stable. Dependency-related incidents near-zero. Security posture declining. Capabilities falling significantly behind ecosystem.",
            "whenCorrect": "Legacy platforms with very high migration costs and very large consumer bases. Appropriate temporarily after a period of excessive churn.",
            "failureSignal": "Security audit findings. Ecosystem significantly ahead. Engineers unable to learn transferable skills on the outdated toolchain.",
            "theCorrective": "Identify dependencies where the ecosystem has moved significantly ahead. Evaluate whether the capability gap is causing consumer workarounds. Start with the dependency causing the most workarounds."
          },
          {
            "positionName": "Frozen Versions",
            "description": "Dependencies frozen at initial adoption version. No updates unless forced by critical security vulnerability.",
            "howArrive": "Organisation experienced a catastrophic failure from an external dependency change. The response was to freeze. The freeze is unsustainable long-term.",
            "internalNarrative": "\"We are stable. Nothing changes without necessity.\" The team feels protective. Security vulnerabilities accumulate invisibly.",
            "whatItProduces": "Complete dependency stability. Zero migration burden from dependency changes. Security critical vulnerabilities accumulating. Platform increasingly insecure.",
            "whenCorrect": "Never appropriate. Security cannot be maintained without updates.",
            "failureSignal": "Critical security vulnerabilities. Platform insecure against current attack vectors. Security audit failing.",
            "theCorrective": "Identify the three most critical security vulnerabilities in frozen dependencies. Apply those patches immediately regardless of freeze policy. Security overrides stability."
          }
        ]
      },
      {
        "code": "VII-L2",
        "axis": "Strategic Independence ↔ Deep Ecosystem Integration",
        "type": "L",
        "summary": "Legitimate tension — deep integration produces the best capabilities; it also creates dependencies whose evolution the platform team does not control",
        "columns": [
          {
            "positionName": "Full Independence",
            "description": "Platform uses no external tools. All capabilities internally built. No vendor relationships. No external dependencies of any kind.",
            "howArrive": "Organisation has specific data sovereignty or competitive requirements that prevent external dependency. Independence is a deliberate choice.",
            "internalNarrative": "\"We control our own destiny.\" The team feels independent and capable. Build burden is enormous but framed as the cost of control.",
            "whatItProduces": "Complete strategic control. No vendor risk. Enormous internal build and maintenance burden. All ecosystem progress must be replicated internally. Consumer experience limited to what the platform team can build.",
            "whenCorrect": "Organisations with specific data sovereignty or competitive requirements. Very rare.",
            "failureSignal": "Internal build burden consuming most of platform team capacity. Ecosystem moving ahead. Consumer experience limited.",
            "theCorrective": "Identify three ecosystem tools that would significantly improve consumer experience. Adopt them with thin abstraction. The build burden for replacing three ecosystem tools almost always exceeds the adoption cost."
          },
          {
            "positionName": "Abstracted Adoption",
            "description": "External tools adopted but always behind thick abstraction. Any tool theoretically replaceable without consumer impact. Significant abstraction maintenance cost.",
            "howArrive": "Organisation has very high vendor risk management requirements. Every adoption must be replaceable. Thick abstraction is the mechanism.",
            "internalNarrative": "\"We use the ecosystem but we are not dependent on it.\" The team feels strategically independent.",
            "whatItProduces": "Very high strategic independence. Any tool replaceable. Some ecosystem capability lost in translation through the thick abstraction. High abstraction maintenance cost.",
            "whenCorrect": "Organisations with very high vendor risk management requirements.",
            "failureSignal": "Abstraction layer hiding significant capability. Consumer experience worse than ecosystem alternatives.",
            "theCorrective": "Audit abstraction layers for capability loss. Where abstraction is hiding significant capability, consider thinning it and accepting some migration risk."
          },
          {
            "positionName": "Thin Abstraction",
            "description": "External tools adopted with thin abstraction. Consumer experience decoupled from external tool interfaces. Some migration cost if tool replaced.",
            "howArrive": "Platform tried to adopt directly, experienced vendor changes, and responded by adding abstraction. Abstraction is thin because the experience taught restraint.",
            "internalNarrative": "\"We use good tools with protection from their changes.\" The team feels pragmatic.",
            "whatItProduces": "Good independence. Most tools replaceable. Some migration cost if specific tools deprecated. Some ecosystem capability accessible directly.",
            "whenCorrect": "Organisations with moderate vendor risk management practices.",
            "failureSignal": "Consumer codebases bypassing platform abstraction. Platform team learning about tool changes with consumers.",
            "theCorrective": "Identify the highest-risk dependency. Add one abstraction layer for it specifically. Prioritise by replacement probability × replacement cost."
          },
          {
            "positionName": "Principled Integration",
            "description": "External tools adopted strategically. Abstraction depth calibrated to replacement risk. High-risk dependencies abstracted heavily. Low-risk dependencies adopted more directly.",
            "howArrive": "Platform team applies explicit dependency risk assessment to each adoption decision. High-risk: thick abstraction. Low-risk: thin abstraction or direct. Assessment is maintained over time.",
            "internalNarrative": "\"We integrate strategically. High-risk dependencies are protected.\" The team feels thoughtfully managed.",
            "whatItProduces": "Risk calibrated to dependency. High-risk dependencies manageable. Low-risk integrations capture full capability. Requires ongoing dependency risk assessment.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "High-risk dependency changing beyond abstraction capacity. Frequent abstraction layer updates.",
            "theCorrective": "—"
          },
          {
            "positionName": "Pragmatic Integration",
            "description": "External tools adopted with minimal abstraction. Most capabilities tied to specific tools. Migration possible but costly.",
            "howArrive": "Platform team adopted external tools for speed. Abstraction was intended but not invested in. Direct coupling accumulated.",
            "internalNarrative": "\"We use great tools. We'll manage if they change.\" The team feels pragmatic. Dependency risk is accepted as manageable.",
            "whatItProduces": "Full ecosystem capability accessible. Consumer experience excellent. Migration from deeply integrated tools very costly. Vendor dependency growing over time.",
            "whenCorrect": "Growing organisations that have not yet invested in abstraction infrastructure.",
            "failureSignal": "Vendor decisions creating platform operational crises. No buffer between vendor decision and consumer impact.",
            "theCorrective": "Identify the three most deeply integrated dependencies. Estimate migration cost if the vendor changes terms significantly. If cost is acceptable, depth is acceptable."
          },
          {
            "positionName": "Deep Integration",
            "description": "External tools adopted directly. Platform capabilities are external tool capabilities. Migration would require significant rebuild.",
            "howArrive": "Platform team adopted external tools fully, relying on the vendor's stability. The deep integration is a deliberate choice for the best consumer experience.",
            "internalNarrative": "\"We use the best tools and get the best experience for our consumers.\" The team feels consumer-focused and technically current.",
            "whatItProduces": "Maximum ecosystem capability. Consumer experience best-in-class. Migration would require significant platform rebuild. Vendor pricing and roadmap decisions directly impact platform.",
            "whenCorrect": "Early-stage platforms optimising for speed and consumer experience over strategic independence.",
            "failureSignal": "Vendor acquisition or pricing change requiring emergency platform response.",
            "theCorrective": "Identify the vendor most likely to change terms significantly. Invest in abstraction for that specific dependency."
          },
          {
            "positionName": "Full Dependency",
            "description": "Platform is an external tool's managed service. No internal capability whatsoever. Vendor decisions are platform decisions.",
            "howArrive": "Platform team fully outsourced the platform function. External tool is the platform. Vendor decisions directly determine platform capabilities and costs.",
            "internalNarrative": "\"The vendor is the platform. We configure and consume.\" The team feels lean and efficient.",
            "whatItProduces": "Platform entirely dependent on vendor. Any vendor decision (pricing, deprecation, acquisition) is a platform crisis with no buffer or response time.",
            "whenCorrect": "Organisations that have fully outsourced the platform function. Appropriate only if platform engineering is not a strategic capability.",
            "failureSignal": "Vendor decision forcing complete platform replacement with no transition time.",
            "theCorrective": "Identify the vendor decision that would most severely impact the platform. Assess the probability of that decision in the next three years. If non-trivial, begin abstraction investment immediately."
          }
        ]
      },
      {
        "code": "VII-L3",
        "axis": "Regulatory Compliance ↔ Operational Speed",
        "type": "L",
        "summary": "Legitimate tension — meeting regulatory requirements imposes process overhead; prioritising speed risks compliance gaps; both have serious organisational consequences",
        "columns": [
          {
            "positionName": "Compliance-Only",
            "description": "All platform decisions optimise for compliance. Operational speed entirely secondary. Maximum process overhead.",
            "howArrive": "Platform team operates in a heavily regulated industry. Compliance is the primary operating constraint. Speed was never the primary value.",
            "internalNarrative": "\"We are compliant. We protect the organisation.\" The team feels responsible. Speed limitation is framed as the cost of protection.",
            "whatItProduces": "Maximum compliance. Audits passed. Regulatory risk minimal. Operational speed very low. Teams frustrated by overhead. Competitive disadvantage.",
            "whenCorrect": "Heavily regulated industries where compliance failure has severe legal consequences.",
            "failureSignal": "Competitive disadvantage from speed. Teams routing around platform. Top engineers leaving because the platform slows them down.",
            "theCorrective": "Identify compliance process steps that can be automated. Each automation removes process overhead without reducing compliance. Automation is the path to both compliance and speed."
          },
          {
            "positionName": "Compliance-First",
            "description": "Compliance primary. Speed investments require compliance clearance. Process overhead significant.",
            "howArrive": "Platform team experienced compliance failures. Compliance was elevated to primary value in response. Speed has become the secondary concern.",
            "internalNarrative": "\"We are compliant first. Speed comes second.\" The team feels principled.",
            "whatItProduces": "Very high compliance. Low regulatory risk. Significant compliance overhead. Teams frustrated. Some routing around the platform to avoid compliance friction.",
            "whenCorrect": "Banks, healthcare, financial services. Post-compliance-incident organisations.",
            "failureSignal": "Teams building bypass infrastructure to avoid compliance overhead. Shadow infrastructure appearing.",
            "theCorrective": "Implement policy-as-code for the top three compliance requirements. Automation removes the overhead without removing the control."
          },
          {
            "positionName": "Compliance-Aware",
            "description": "Compliance requirements met. Speed improvements sought within compliance constraints. Process streamlined where possible.",
            "howArrive": "Platform team has compliance requirements and has invested in making them efficient. Compliance and speed are not treated as opposites.",
            "internalNarrative": "\"We are compliant and we try to be fast.\" The team feels balanced.",
            "whatItProduces": "Good compliance. Speed maintained. Some compliance gaps where streamlining went too far.",
            "whenCorrect": "Regulated industries building efficiency into compliance processes.",
            "failureSignal": "Compliance gaps discovered during audit. Streamlining went past the compliance requirement.",
            "theCorrective": "Audit the last compliance assessment for findings. Each finding is a place where streamlining went too far. Address those specifically."
          },
          {
            "positionName": "Integrated Compliance",
            "description": "Compliance requirements embedded in automated platform capabilities. Speed maintained through automation rather than process elimination. Audit trail built in.",
            "howArrive": "Platform team invested in compliance automation specifically to eliminate the trade-off. Policy-as-code, automated audit trails, and automated evidence collection replace manual compliance overhead.",
            "internalNarrative": "\"We are compliant and we are fast. The automation makes both possible.\" The team feels technically mature.",
            "whatItProduces": "Compliance automated — overhead replaced by tooling investment. Audit trail built in. Speed maintained through automation. Compliance maintained continuously.",
            "whenCorrect": "Most mature platforms in regulated industries. The default for organisations with compliance requirements.",
            "failureSignal": "Compliance automation falling behind regulatory changes. Automated checks not meeting current requirements. Gap between automated compliance and actual requirement growing.",
            "theCorrective": "—"
          },
          {
            "positionName": "Speed-Aware Compliance",
            "description": "Speed primary. Compliance met through efficient processes. Some compliance overhead accepted where unavoidable.",
            "howArrive": "Platform team values delivery speed and treats compliance as a constraint to meet efficiently. Most compliance is met; some is addressed reactively.",
            "internalNarrative": "\"We are fast and we meet our compliance requirements.\" The team feels delivery-focused.",
            "whatItProduces": "Good speed. Most compliance maintained. Some compliance gaps. Regulatory risk moderate.",
            "whenCorrect": "Fast-moving organisations with moderate compliance requirements.",
            "failureSignal": "Compliance audit findings. Regulatory inquiry. Findings in areas where speed-first created gaps.",
            "theCorrective": "Schedule a compliance review before the next audit. Understanding the gap before the auditor does produces significantly better outcomes."
          },
          {
            "positionName": "Speed-First",
            "description": "Speed primary. Compliance addressed reactively. Compliance investment triggered by audit or incident.",
            "howArrive": "Platform team has high delivery speed culture. Compliance is addressed when audits force it.",
            "internalNarrative": "\"We will deal with compliance when we have to.\" The team feels pragmatic.",
            "whatItProduces": "Significant compliance gaps. Regulatory risk growing. Compliance audit findings likely.",
            "whenCorrect": "Early-stage organisations before regulatory maturity.",
            "failureSignal": "Compliance audit failure. Regulatory action.",
            "theCorrective": "Identify the three regulatory requirements most likely to be flagged in an audit. Address them before the audit. Prevention is cheaper than remediation."
          },
          {
            "positionName": "Speed-Only",
            "description": "Speed only. Compliance not considered. Regulatory requirements unknown or ignored.",
            "howArrive": "Platform team has never invested in compliance. Speed is the only value measured.",
            "internalNarrative": "\"Speed is the value. Compliance is someone else's problem.\" The team feels unrestricted.",
            "whatItProduces": "Regulatory violations. Legal consequences. Potential shutdown. Reputational damage.",
            "whenCorrect": "Never appropriate for organisations subject to any regulation.",
            "failureSignal": "Regulatory shutdown. Legal consequences. Reputational damage.",
            "theCorrective": "Assess regulatory requirements. Non-compliance costs almost always exceed compliance costs. Start with the most likely enforcement action."
          }
        ]
      },
      {
        "code": "VII-L4",
        "axis": "Organisational Alignment ↔ Technical Excellence",
        "type": "L",
        "summary": "Legitimate tension — the most technically excellent architecture for the current organisation may not serve the organisation's strategic direction; Conway's Law ensures the platform reflects the organisation that built it",
        "columns": [
          {
            "positionName": "Strategy-Only",
            "description": "Platform designed entirely for anticipated organisational strategy. Current technical needs secondary.",
            "howArrive": "Organisation decided to build for strategy, accepting current suboptimality as the cost of strategic alignment.",
            "internalNarrative": "\"We are building for where we are going.\" The team feels strategic. Current consumers are under-served, which is framed as temporary.",
            "whatItProduces": "Platform aligned to anticipated future. Low rebuild cost when strategy realises. Current consumers poorly served. Risk of over-engineering for a strategy that never arrives.",
            "whenCorrect": "Organisations with very clear multi-year strategic roadmaps and stable strategic direction. Rare.",
            "failureSignal": "Platform over-engineered for anticipated futures. Current consumers struggling with design complexity built for future consumers.",
            "theCorrective": "Identify current consumer needs that are under-served by the strategic design. Address the most critical one. Current consumers are real. Anticipated future consumers are not yet real."
          },
          {
            "positionName": "Strategy-Led",
            "description": "Strategy primary. Technical excellence considered within strategic constraints.",
            "howArrive": "Organisation has strong strategic planning function that influences platform design explicitly.",
            "internalNarrative": "\"We build for the strategy and achieve technical excellence within it.\" The team feels aligned.",
            "whatItProduces": "Very good strategic alignment. Technical excellence maintained. Some current technical needs sub-optimally served by strategic constraints.",
            "whenCorrect": "Organisations with stable strategic direction and mature platform planning.",
            "failureSignal": "Current technical needs inadequately served due to strategic constraints. Current consumers building workarounds for current needs.",
            "theCorrective": "Identify the two most likely organisational evolution paths. Assess whether the platform can accommodate them without full rebuild. If not, invest in one architectural extension point for each."
          },
          {
            "positionName": "Strategy-Aware",
            "description": "Strategy considered in design. Technical excellence primary but strategic alignment reviewed for major decisions.",
            "howArrive": "Platform team has developed the habit of asking \"does this decision foreclose strategic futures?\" for major decisions.",
            "internalNarrative": "\"We build excellent things and we check them against strategy.\" The team feels balanced.",
            "whatItProduces": "Good technical quality. Most strategic futures achievable. Some strategic futures require rework that was foreseeable.",
            "whenCorrect": "Organisations with good strategic foresight and strong technical capability.",
            "failureSignal": "Organisational restructuring requiring platform rebuild. \"We should have designed for this.\"",
            "theCorrective": "Define a \"strategic compatibility review\" for all major architectural decisions. The review asks one question: \"Does this foreclose any of our top three strategic evolution paths?\" Make the review take less than one hour."
          },
          {
            "positionName": "Aligned Excellence",
            "description": "Platform technically excellent and aligned to current and anticipated organisational direction. Technical decisions explicitly reviewed for strategic compatibility.",
            "howArrive": "Platform team explicitly designed the review process for both technical excellence and strategic alignment. Both are first-class design concerns.",
            "internalNarrative": "\"We are excellent and we are aligned. Both are genuine requirements.\" The team feels mature.",
            "whatItProduces": "Platform technically excellent and organisationally aligned. Low future rebuild cost. High current quality. Ongoing strategic review required.",
            "whenCorrect": "Most mature platforms with active strategic alignment processes. The default.",
            "failureSignal": "Conway's Law producing a platform structure that doesn't match current or anticipated org structure. Platform team not aware of the mismatch until it causes problems.",
            "theCorrective": "—"
          },
          {
            "positionName": "Excellence-Aware",
            "description": "Technical excellence primary. Strategic alignment considered for major architectural decisions.",
            "howArrive": "Platform team focuses on technical excellence. Strategic alignment is considered when technically relevant.",
            "internalNarrative": "\"We build excellent things. We manage Conway's Law.\" The team feels technically capable.",
            "whatItProduces": "Very high technical excellence. Platform excellent for current needs. Some strategic futures require rebuild. Conway's Law is understood and managed.",
            "whenCorrect": "Organisations with high technical maturity and uncertain strategic direction.",
            "failureSignal": "Organisational restructuring requiring platform rebuild. Rebuild cost significant. \"We would have designed it differently if we'd known.\"",
            "theCorrective": "Model the two most likely organisational evolution paths. Estimate platform rebuild cost for each. If cost is high, invest in the extension point for the most likely path."
          },
          {
            "positionName": "Excellence-First",
            "description": "Technical excellence primary. Strategy considered only where directly relevant to technical decisions.",
            "howArrive": "Platform team is technically oriented. Strategy is for the strategy function. The platform team builds what is technically correct.",
            "internalNarrative": "\"We build excellent things. Strategy is not our concern.\" The team feels focused.",
            "whatItProduces": "Platform excellent for current state. Many strategic evolution paths require rebuild. Frequent rebuilding as organisation evolves.",
            "whenCorrect": "Technical-excellence-first organisations with stable organisational structure.",
            "failureSignal": "Frequent rebuilds driven by organisational changes the platform wasn't designed to accommodate. Platform investment poorly leveraged.",
            "theCorrective": "Identify the organisational change most likely in the next 18 months. Assess whether the platform can accommodate it. If not, invest in the accommodation before the change."
          },
          {
            "positionName": "Technical-Only",
            "description": "Platform designed for technical excellence only. Organisational strategy not considered at any point.",
            "howArrive": "Platform team has never considered strategy as a design input.",
            "internalNarrative": "\"We build what is technically correct. The organisation shapes itself.\" The team feels pure in its technical focus.",
            "whatItProduces": "Platform reflects the organisation that built it. Every organisational change requires a platform change. Conway's Law operating without awareness or management.",
            "whenCorrect": "Never appropriate. Conway's Law is always operating. The question is whether it is managed.",
            "failureSignal": "Every organisational change requiring a platform change. Constant rebuilding. Conway's Law operating without awareness, causing repeated rebuild cycles.",
            "theCorrective": "Conway's Law is operating. The next organisational change will require a platform change. The only question is whether the change is planned or reactive. Map the most likely change and plan for it."
          }
        ]
      },
      {
        "code": "VII-G1",
        "axis": "Build for Current ↔ Build for Anticipated Environment",
        "type": "G",
        "summary": "Genuine tension — every architectural decision either optimises for current reality or hedges against anticipated futures; both costs are real; neither can be eliminated",
        "columns": [
          {
            "positionName": "Timeless Design",
            "description": "Platform designed for all possible futures. Maximum optionality. No current optimisation.",
            "howArrive": "Platform team building for a target scale or strategic direction that is much larger than current state. Future-oriented design is intentional.",
            "internalNarrative": "\"We are building for the long term.\" The team feels strategic and far-sighted. Over-engineering for current consumers is framed as investment.",
            "whatItProduces": "Maximum future optionality. Current consumers poorly served. Design complexity high for current needs. Some current use cases sacrificed.",
            "whenCorrect": "Infrastructure with very high rebuild costs and very long intended lifetimes. Rare.",
            "failureSignal": "Platform over-engineered. Current consumers struggling with complexity designed for future consumers. Design discussions dominated by speculative requirements nobody can validate.",
            "theCorrective": "Define three specific anticipated futures with probability assessments. Design only for those. Everything else is present-only. \"All possible futures\" is design paralysis."
          },
          {
            "positionName": "Long-Horizon",
            "description": "Strong future orientation. 3–5 year horizon considered in all major decisions. Current needs met but future flexibility paramount.",
            "howArrive": "Platform team experienced a painful rebuild and responded by building for all anticipated futures. The corrective has been maintained beyond the original problem.",
            "internalNarrative": "\"We build for scale and flexibility.\" The team feels architecturally mature.",
            "whatItProduces": "Very high optionality. Most futures achievable. Some current optimisation sacrificed. Design more complex than current needs require.",
            "whenCorrect": "Large-scale infrastructure organisations with 5-year technology roadmaps and high rebuild costs.",
            "failureSignal": "Design debates dominated by unvalidated speculative requirements. Current consumer needs taking second place. Over-engineering visible to consumers as unnecessary complexity.",
            "theCorrective": "Require futures to be validated by leadership before designing for them. Unvalidated futures should not drive design. The validation requirement is the constraint."
          },
          {
            "positionName": "Future-Aware",
            "description": "Future considered in all major decisions. 1–2 year horizon standard. Extension points built where near-certain futures identified.",
            "howArrive": "Platform team has a formal process for considering future implications in major decisions. The process is established.",
            "internalNarrative": "\"We build for where we are going, not just where we are.\" The team feels forward-thinking.",
            "whatItProduces": "Good optionality for near-certain futures. Current consumers well-served. Some futures requiring rebuild that were foreseeable.",
            "whenCorrect": "Mature organisations with good strategic planning practices and moderate rebuild costs.",
            "failureSignal": "Foreseeable organisational evolution requiring rebuild. \"We knew this was coming but didn't design for it.\" Rebuild cost significant.",
            "theCorrective": "Define the horizon explicitly. \"We design for futures we are confident will occur within 18 months\" is a horizon. It constrains without eliminating forward thinking."
          },
          {
            "positionName": "Calibrated Horizon",
            "description": "Explicit horizon defined. Futures within horizon designed for. Futures outside horizon explicitly not designed for. Current needs primary within the horizon constraint.",
            "howArrive": "Platform team defines an explicit planning horizon, designs for futures within it, and explicitly does not design for futures outside it. The horizon is reviewed periodically.",
            "internalNarrative": "\"We serve current consumers well and plan for likely futures.\" The team feels balanced and explicit.",
            "whatItProduces": "Current consumers optimally served within the horizon constraint. Near-certain futures achievable without rebuild. Explicit about what is and is not designed for.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Horizon definition contested. Debates about whether a given future is within or outside the horizon consuming more time than the design itself.",
            "theCorrective": "—"
          },
          {
            "positionName": "Near-Future Aware",
            "description": "Near-certain futures (6–12 months) considered. Current needs primary. Extension points built only for near-certain evolution.",
            "howArrive": "Platform team operates in a high-uncertainty environment where near-term planning is reliable but longer-term planning is not.",
            "internalNarrative": "\"We focus on what we know and adapt as we learn.\" The team feels practical.",
            "whatItProduces": "Current consumers very well served. Near-term evolution achievable. Unanticipated or longer-horizon futures require rebuild.",
            "whenCorrect": "Organisations with high strategic uncertainty and short planning horizons.",
            "failureSignal": "Unanticipated but foreseeable futures requiring rebuild. \"We should have seen this coming.\"",
            "theCorrective": "Identify the two futures most likely to require rebuild. Assess whether designing for them now is cheaper than rebuilding later. It often is."
          },
          {
            "positionName": "Current-Horizon",
            "description": "Current needs primary. Future considered only when directly relevant. Very near horizon (3–6 months).",
            "howArrive": "Platform team has short planning cycles and high delivery pressure. Current needs are well-understood. Future needs are not.",
            "internalNarrative": "\"We solve today's problems today.\" The team feels focused and efficient.",
            "whatItProduces": "Most evolution requires rebuild. Platform lifetime shorter than investment suggests. Frequent rebuilding.",
            "whenCorrect": "Start-ups or early-stage platforms where intentionally short platform lifetime is acceptable.",
            "failureSignal": "Frequent rebuilds. Platform team spending significant time rebuilding what should have been evolvable. Investment poorly leveraged.",
            "theCorrective": "Calculate the rebuild cost of the last three platform rebuilds. The pattern reveals whether current-horizon design is cost-effective over 3–5 years."
          },
          {
            "positionName": "Present-Only",
            "description": "Current needs only. No future consideration. Every decision optimises for the present state.",
            "howArrive": "Platform team is in early stage. Current needs are the only certain information. The platform is intentionally temporary or narrow.",
            "internalNarrative": "\"We build for now and rebuild when things change.\" The team feels agile. The rebuild cost is not experienced by the team — it is experienced by the consumers who need to migrate.",
            "whatItProduces": "All evolution requires rebuild. Constant rebuilding. Platform investment never leveraged beyond current period.",
            "whenCorrect": "Prototypes. Proof-of-concept platforms explicitly intended to be temporary.",
            "failureSignal": "Constant full rebuilds. Platform investment never leveraged beyond current period. Consumers disrupted by frequent complete platform changes.",
            "theCorrective": "The platform's effective lifetime is the time until the next rebuild. Calculate cost-per-year. If higher than a future-aware design would cost, present-only is false economy."
          }
        ]
      },
      {
        "code": "VII-G2",
        "axis": "Ecosystem Dependency ↔ Strategic Independence",
        "type": "G",
        "summary": "Genuine tension — every tool adopted is an external dependency; every dependency avoided requires internal build; there is no platform architecture free of dependency; the choice is which dependencies to accept and on whom",
        "columns": [
          {
            "positionName": "Full Internal",
            "description": "All capabilities built internally. No external dependencies. Complete strategic independence. Maximum internal build burden.",
            "howArrive": "Organisation has specific requirements that prevent external dependency. Independence is a deliberate and justified choice.",
            "internalNarrative": "\"We control everything.\" The team feels independent. Build burden is enormous.",
            "whatItProduces": "Maximum control. Enormous build burden. Ecosystem progress must be replicated internally. Consumer experience limited to what the platform can build internally.",
            "whenCorrect": "Specific data sovereignty or competitive requirements. Very rare.",
            "failureSignal": "Build burden consuming most of platform team capacity. Ecosystem moving ahead. Consumer experience limited. Recruiting difficult — engineers want to work with modern tools.",
            "theCorrective": "Identify three ecosystem tools providing significantly better consumer experience than current internal alternatives. Adopt them with thin abstraction. Build burden for replacing three ecosystem tools almost always exceeds adoption cost."
          },
          {
            "positionName": "Strategic Build",
            "description": "External tools adopted only where internal build would take significantly longer. Strong internal preference. All adoptions behind thick abstraction.",
            "howArrive": "Platform team has strong internal engineering culture. External tools are adopted reluctantly.",
            "internalNarrative": "\"We build where it matters. The ecosystem serves us.\" The team feels strategically capable.",
            "whatItProduces": "Strong differentiated capabilities. Some ecosystem capabilities not achievable. Consumer experience limited where ecosystem is ahead.",
            "whenCorrect": "Organisations with proven internal expertise and high vendor risk tolerance requirements.",
            "failureSignal": "Consumer experience significantly worse than ecosystem alternatives for internally-built capabilities. Teams building shadow solutions using ecosystem tools the platform doesn't support.",
            "theCorrective": "Identify the abstraction layer with highest capability loss. Thin it by one layer. Measure whether consumer experience improves. Capability improvement justifies abstraction reduction."
          },
          {
            "positionName": "Abstracted Adoption",
            "description": "External tools adopted with thick abstraction. Any tool theoretically replaceable. Some capability lost in translation.",
            "howArrive": "Platform tried direct adoption, experienced vendor changes, and responded by adding abstraction. Abstraction depth reflects the experience of vendor changes.",
            "internalNarrative": "\"We use the ecosystem with protection.\" The team feels pragmatically independent.",
            "whatItProduces": "Good independence. Most tools replaceable. Some capability lost through abstraction. High abstraction maintenance cost.",
            "whenCorrect": "Organisations with strong vendor risk management practices.",
            "failureSignal": "Abstraction layer hiding significant ecosystem capability. Consumer experience worse because abstraction is too thick.",
            "theCorrective": "Triage external dependencies by replacement risk. High-risk: add abstraction. Low-risk: adopt directly. This is the ongoing governance needed."
          },
          {
            "positionName": "Principled Dependency",
            "description": "External tools adopted with abstraction calibrated to replacement risk. High-risk: thick abstraction. Low-risk: thin abstraction or direct. Portfolio reviewed.",
            "howArrive": "Platform team applies explicit dependency risk assessment. Each adoption decision is categorised by risk. Abstraction depth follows the risk assessment.",
            "internalNarrative": "\"We are explicit about which dependencies we accept and at what depth.\" The team feels professionally managed.",
            "whatItProduces": "Risk explicitly managed. High-risk dependencies handled safely. Low-risk integrations capture full capability. Requires ongoing dependency risk assessment.",
            "whenCorrect": "Most mature platforms. The default.",
            "failureSignal": "Dependency risk assessment not happening. Dependencies accumulating without risk review. High-risk dependencies being managed as if low-risk.",
            "theCorrective": "—"
          },
          {
            "positionName": "Pragmatic Dependency",
            "description": "External tools adopted pragmatically. Abstraction where convenient. Some deep integration where capability benefit justifies dependency risk.",
            "howArrive": "Platform team adopted external tools for speed. Abstraction was intended but was not invested in proportionally.",
            "internalNarrative": "\"We use great tools. Dependency risk is manageable.\" The team feels practical.",
            "whatItProduces": "Good ecosystem capability. Full capability accessible. Some vendor dependencies creating strategic risk. Migration cost growing over time.",
            "whenCorrect": "Growing organisations not yet invested in abstraction infrastructure.",
            "failureSignal": "Vendor decisions creating platform operational crises. No buffer between vendor decision and consumer impact.",
            "theCorrective": "Identify the three most deeply integrated dependencies. For each, estimate migration cost if vendor changes terms. If cost is acceptable, depth is acceptable."
          },
          {
            "positionName": "Deep Ecosystem",
            "description": "Platform deeply integrated with ecosystem. Most capabilities are ecosystem capabilities. Migration costly but not impossible.",
            "howArrive": "Platform team adopted external tools fully for the best consumer experience. Deep integration was a deliberate choice.",
            "internalNarrative": "\"We use the best tools and get the best experience.\" The team feels consumer-focused.",
            "whatItProduces": "Maximum ecosystem capability. Consumer experience excellent. Any major vendor decision requires significant platform response.",
            "whenCorrect": "Early-stage platforms optimising for speed and consumer experience.",
            "failureSignal": "Vendor acquisition or pricing change requiring emergency platform response with no preparation time.",
            "theCorrective": "Identify the vendor most likely to create a platform crisis. Invest in abstraction for that dependency before the crisis. Prevention is cheaper than crisis response."
          },
          {
            "positionName": "Full External",
            "description": "Platform is entirely external tools. No internal capabilities. Complete ecosystem dependency. Any vendor decision is a platform decision.",
            "howArrive": "Platform team fully outsourced the platform function. Vendor is the platform. Configuration is the only platform activity.",
            "internalNarrative": "\"The vendor handles everything. We configure.\" The team feels lean. Vendor decisions are platform decisions — this is not felt as a problem until it is.",
            "whatItProduces": "Zero maintenance overhead. Complete ecosystem capability. Any external decision is a platform crisis.",
            "whenCorrect": "Organisations that have fully outsourced the platform function.",
            "failureSignal": "Single vendor decision forcing complete platform replacement. No transition time. No leverage. Organisational crisis.",
            "theCorrective": "Identify the single vendor decision most severely impacting the platform. If the probability of that decision is non-trivial in the next three years, begin abstraction investment immediately."
          }
        ]
      }
    ]
  }
];

export const ALL_TRADE_OFFS: readonly TradeOff[] = CATEGORIES.flatMap(c => c.tradeOffs);

export function getTradeOff(code: string): TradeOff | undefined {
  return ALL_TRADE_OFFS.find(t => t.code === code);
}

export function getCategory(romanId: string): Category | undefined {
  return CATEGORIES.find(c => c.romanId === romanId);
}

export function getCategoryForTradeOff(code: string): Category | undefined {
  return CATEGORIES.find(c => c.tradeOffs.some(t => t.code === code));
}
