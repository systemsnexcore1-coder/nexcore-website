import { Boxes, Code2, Database, LifeBuoy, Network, ShieldCheck, Users } from "lucide-react";
import { SystemActivity } from "@/components/systems/SystemActivity";
import { SignalPath } from "@/components/systems/SignalPath";

const modules = [
  { label: "WEB", detail: "Interfaces", icon: Code2, x: 80, y: 80, path: "M140 80H235Q251 80 251 96V215Q251 230 270 230H303" },
  { label: "CRM", detail: "Relationships", icon: Users, x: 75, y: 240, path: "M135 240H303" },
  { label: "DATA", detail: "Information", icon: Database, x: 140, y: 400, path: "M200 400H255Q273 400 273 382V280Q273 266 290 266H303" },
  { label: "ERP", detail: "Operations", icon: Boxes, x: 550, y: 96, path: "M377 230H421Q437 230 437 214V112Q437 96 453 96H490" },
  { label: "SUPPORT", detail: "Continuity", icon: LifeBuoy, x: 605, y: 252, path: "M377 248H545" },
  { label: "SECURITY", detail: "Controls", icon: ShieldCheck, x: 552, y: 396, path: "M377 266H424Q441 266 441 283V380Q441 396 457 396H492" }
];

export function HeroArchitecture() {
  return (
    <SystemActivity className="hero-architecture" decorative>
      <div className="architecture-caption"><span className="architecture-status" />CONNECTED ARCHITECTURE<span>NX / 01</span></div>
      <svg viewBox="0 0 700 480" fill="none" className="architecture-desktop">
        <path className="architecture-grid" d="M0 80H700M0 160H700M0 240H700M0 320H700M0 400H700M80 0V480M160 0V480M240 0V480M320 0V480M400 0V480M480 0V480M560 0V480M640 0V480" />
        <path className="architecture-orbit" d="M220 170L340 105L460 170V310L340 375L220 310Z" />
        <path className="architecture-orbit architecture-orbit-inner" d="M268 200L340 160L412 200V282L340 322L268 282Z" />
        {modules.map((module, index) => <SignalPath key={module.label} d={module.path} delay={index * -1.25} duration={7.5} />)}
        <SignalPath d="M340 285V445Q340 463 322 463H0" delay={-3} duration={9} className="architecture-outlet" />
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <g key={module.label} transform={`translate(${module.x - 60}, ${module.y - 32})`}>
              <rect x="4" y="5" width="120" height="64" rx="5" className="architecture-module-depth" />
              <rect width="120" height="64" rx="5" className="architecture-module live-module" style={{ animationDelay: `${index * -1.25}s` }} />
              <Icon x="12" y="14" width="19" height="19" strokeWidth="1.4" className="architecture-icon" />
              <text x="42" y="28" className="architecture-label">{module.label}</text>
              <text x="13" y="49" className="architecture-detail">{module.detail}</text>
              <circle cx="115" cy="15" r="2" className="architecture-status-light" style={{ animationDelay: `${index * -1.25}s` }} />
            </g>
          );
        })}
        <g transform="translate(303 205)" className="architecture-core">
          <rect x="6" y="7" width="74" height="80" rx="6" className="architecture-core-depth" />
          <rect width="74" height="80" rx="6" className="architecture-core-frame" />
          <Network x="23" y="15" width="28" height="28" strokeWidth="1.3" />
          <text x="37" y="62" textAnchor="middle">NEXCORE</text>
        </g>
      </svg>
      <svg viewBox="0 0 360 310" fill="none" className="architecture-mobile">
        <path d="M0 55H360M0 155H360M0 255H360M60 0V310M180 0V310M300 0V310" className="architecture-grid" />
        <SignalPath d="M118 55H180V155H242M118 155H242M118 255H180V55H242M180 155V255H242" duration={10} />
        {modules.map((module, index) => {
          const Icon = module.icon;
          const x = index < 3 ? 12 : 242;
          const y = 26 + (index % 3) * 100;
          return <g key={module.label} transform={`translate(${x},${y})`}><rect width="106" height="58" rx="5" className="architecture-module live-module" style={{ animationDelay: `${index * -1.25}s` }} /><Icon x="12" y="12" width="18" height="18" strokeWidth="1.5" className="architecture-icon" /><text x="13" y="46" className="architecture-label">{module.label}</text><circle cx="90" cy="19" r="2" className="architecture-status-light" style={{ animationDelay: `${index * -1.25}s` }} /></g>;
        })}
        <rect x="164" y="139" width="32" height="32" rx="4" className="architecture-core-frame" />
        <Network x="171" y="146" width="18" height="18" strokeWidth="1.3" className="architecture-icon" />
      </svg>
      <div className="architecture-bottom"><span>INTERFACES</span><i /><span>WORKFLOWS</span><i /><span>OPERATIONS</span></div>
    </SystemActivity>
  );
}
