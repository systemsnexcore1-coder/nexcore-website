import type { CSSProperties } from "react";

export function SignalPath({ d, delay = 0, duration = 8, className = "" }: { d: string; delay?: number; duration?: number; className?: string }) {
  const timing = { animationDelay: `${delay}s`, animationDuration: `${duration}s` } as CSSProperties;

  return (
    <g className={`signal-connection ${className}`}>
      <path d={d} className="signal-track" />
      <path d={d} pathLength="100" className="signal-trail" style={timing} />
      <path d={d} pathLength="100" className="signal-packet" style={timing} />
    </g>
  );
}
