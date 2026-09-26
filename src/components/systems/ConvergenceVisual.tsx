import { SignalPath } from "./SignalPath";
import { SystemActivity } from "./SystemActivity";

const paths = [
  "M0 22H790Q825 22 825 57V177Q825 212 860 212H980",
  "M1200 45H1110Q1080 45 1080 75V182Q1080 212 1050 212H980",
  "M1200 365H1110Q1080 365 1080 335V242Q1080 212 1050 212H980",
  "M0 405H790Q825 405 825 370V247Q825 212 860 212H980"
];

export function ConvergenceVisual() {
  return (
    <SystemActivity className="cta-convergence" decorative>
      <svg className="cta-convergence-desktop" viewBox="0 0 1200 430" preserveAspectRatio="xMidYMid slice" fill="none">
        {paths.map((d, index) => <SignalPath key={d} d={d} delay={index * -2.6} duration={12} />)}
        <g className="convergence-terminal" transform="translate(970,202)">
          <rect x="-6" y="-6" width="32" height="32" rx="4" />
          <rect width="20" height="20" rx="2" />
          <path d="M6 10H14M10 6V14" />
        </g>
      </svg>
      <svg className="cta-convergence-mobile" viewBox="0 0 360 200" fill="none">
        <SignalPath d="M0 12H284Q300 12 300 28V64Q300 80 284 80H250" duration={10} delay={-2} />
        <SignalPath d="M360 150H288Q272 150 272 134V102Q272 80 250 80" duration={8} delay={-4} />
        <SignalPath d="M0 192H230Q250 192 250 172V80" duration={12} delay={-6} />
        <g className="convergence-terminal" transform="translate(240,70)">
          <rect x="-6" y="-6" width="32" height="32" rx="4" />
          <rect width="20" height="20" rx="2" />
          <path d="M6 10H14M10 6V14" />
        </g>
      </svg>
    </SystemActivity>
  );
}
