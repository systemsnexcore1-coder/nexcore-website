import { ArrowRight, Check, Code2, Database, LayoutTemplate, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { SystemActivity } from "./SystemActivity";
import { SignalPath } from "./SignalPath";

function Module({ x, y, label, width = 98, delay = 0 }: { x: number; y: number; label: string; width?: number; delay?: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect width={width} height="40" rx="4" className="service-node-skin live-module" style={{ animationDelay: `${delay}s` }} />
      <text x={width / 2} y="25" textAnchor="middle" className="service-node-label">{label}</text>
      <circle cx={width - 8} cy="8" r="2" className="service-port" />
    </g>
  );
}

function WebSystem() {
  return (
    <>
      {["UI", "API", "DATA", "AUTH"].map((label, index) => (
        <g key={label}>
          <SignalPath d={`M110 ${40 + index * 58}H165Q180 ${40 + index * 58} 180 ${index < 2 ? 100 : 144}V122H250`} delay={index * -1.8} duration={7.2} />
          <Module x={18} y={20 + index * 58} label={label} width={92} delay={index * -1.8} />
        </g>
      ))}
      <rect x="250" y="42" width="150" height="180" rx="5" className="service-window" />
      <path d="M250 69H400" className="signal-track" />
      <circle cx="263" cy="56" r="2" className="service-port" />
      <circle cx="272" cy="56" r="2" className="service-port service-port-muted" />
      <text x="386" y="59" textAnchor="end" className="service-small-label">PLATFORM</text>
      <g className="assembly-piece assembly-piece-one"><rect x="264" y="82" width="122" height="29" rx="3" className="service-interface-primary" /><Code2 x="274" y="89" width="15" height="15" /><path d="M298 95H373" className="service-interface-line" /></g>
      <g className="assembly-piece assembly-piece-two"><rect x="264" y="123" width="54" height="48" rx="3" className="service-interface-secondary" /><rect x="330" y="123" width="56" height="48" rx="3" className="service-interface-secondary" /></g>
      <g className="assembly-piece assembly-piece-three"><path d="M264 187H386M264 199H350" className="service-interface-line" /></g>
    </>
  );
}

function RelationshipSystem() {
  const nodes = [{ x: 55, y: 62, label: "Lead" }, { x: 207, y: 62, label: "Contact" }, { x: 207, y: 183, label: "Opportunity" }, { x: 365, y: 183, label: "Customer" }];
  return (
    <>
      <SignalPath d="M55 62H207V183H365" duration={10} />
      {nodes.map((node, index) => <g key={node.label} transform={`translate(${node.x},${node.y})`}><circle r="23" className="service-node-skin live-module crm-node" style={{ animationDelay: `${index * 2.5}s` }} /><Users x="-10" y="-10" width="20" height="20" strokeWidth="1.5" /><text y="46" textAnchor="middle" className="service-node-label">{node.label}</text></g>)}
      <path d="M45 151H103M45 163H127M45 175H84" className="service-quiet-lines" />
      <path d="M315 47H370M315 59H353M315 71H365" className="service-quiet-lines" />
      <circle cx="55" cy="62" r="29" className="service-arrival-ring" />
      <circle cx="365" cy="183" r="29" className="service-arrival-ring service-arrival-late" />
    </>
  );
}

function EnterpriseSystem() {
  return (
    <>
      <SignalPath d="M79 51H338V210H79Z" duration={12} />
      <SignalPath d="M79 71V130H164M338 71V130H256M79 190V130M338 190V130" duration={6} delay={-3} />
      <Module x={24} y={31} label="Procurement" width={110} />
      <Module x={283} y={31} label="Finance" width={110} delay={-3} />
      <Module x={24} y={190} label="Inventory" width={110} delay={-6} />
      <Module x={283} y={190} label="Operations" width={110} delay={-9} />
      <rect x="164" y="99" width="92" height="64" rx="5" className="service-core-skin" />
      <Database x="199" y="109" width="22" height="22" strokeWidth="1.4" />
      <text x="210" y="150" textAnchor="middle" className="service-small-label">SHARED CORE</text>
    </>
  );
}

function SupportSystem() {
  const labels = ["Monitor", "Detect", "Resolve", "Healthy"];
  return (
    <>
      <rect x="26" y="20" width="368" height="126" rx="5" className="service-window" />
      <text x="43" y="43" className="service-small-label">SYSTEM HEALTH</text>
      <path d="M43 75H375M43 102H375M43 128H375" className="diagram-grid" />
      <path d="M43 112H94L107 95L119 120L135 58L152 125L169 87L184 104H219L234 91L248 103H280L295 94L313 100H375" pathLength="100" className="support-wave" />
      <path d="M43 112H94L107 95L119 120L135 58L152 125L169 87L184 104H219L234 91L248 103H280L295 94L313 100H375" pathLength="100" className="signal-packet" style={{ animationDuration: "8s" }} />
      <SignalPath d="M43 197H375" duration={8} />
      {labels.map((label, index) => <g key={label} transform={`translate(${43 + index * 110},197)`}><circle r="13" className="service-node-skin live-module" style={{ animationDelay: `${index * 2}s` }} />{index === 3 ? <Check x="-6" y="-6" width="12" height="12" /> : <circle r="3" className="service-port" />}<text y="36" textAnchor="middle" className="service-node-label">{label}</text></g>)}
    </>
  );
}

function InterfaceSystem() {
  return (
    <>
      <rect x="18" y="34" width="151" height="170" rx="4" className="wireframe-window" />
      <path d="M18 59H169M43 47H91" className="signal-track" />
      <g className="wireframe-pieces"><rect x="33" y="76" width="121" height="35" rx="2" /><rect x="33" y="123" width="53" height="38" rx="2" /><rect x="100" y="123" width="54" height="38" rx="2" /><path d="M33 178H154M33 188H110" /></g>
      <SignalPath d="M169 120H251" duration={7} />
      <ArrowRight x="201" y="110" width="20" height="20" strokeWidth="1.3" />
      <rect x="251" y="34" width="151" height="170" rx="4" className="service-window" />
      <LayoutTemplate x="264" y="43" width="14" height="14" strokeWidth="1.5" />
      <path d="M251 65H402" className="signal-track" />
      <g className="refined-interface"><rect x="266" y="78" width="121" height="34" rx="3" className="service-interface-primary" /><rect x="266" y="124" width="52" height="36" rx="3" className="service-interface-secondary" /><rect x="331" y="124" width="56" height="36" rx="3" className="service-interface-secondary" /><path d="M266 177H386M266 188H349" className="service-interface-line" /></g>
      <text x="93" y="234" textAnchor="middle" className="service-node-label">Wireframe</text>
      <text x="326" y="234" textAnchor="middle" className="service-node-label">Interface</text>
      <ShieldCheck x="371" y="43" width="15" height="15" strokeWidth="1.4" className="interface-ready" />
    </>
  );
}

const systems = [WebSystem, RelationshipSystem, EnterpriseSystem, SupportSystem, InterfaceSystem];

export function ServiceVisual({ index, className }: { index: number; className?: string }) {
  const System = systems[index] || WebSystem;

  return (
    <SystemActivity className={cn("service-visual live-service", `service-kind-${index}`, className)} decorative>
      <svg viewBox="0 0 420 260" fill="none">
        <path d="M0 20H420M0 80H420M0 140H420M0 200H420M30 0V260M90 0V260M150 0V260M210 0V260M270 0V260M330 0V260M390 0V260" className="diagram-grid" />
        <System />
      </svg>
    </SystemActivity>
  );
}
