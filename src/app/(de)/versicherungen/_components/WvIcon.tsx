/** Seitenspezifische Outline-Icons (gleicher Stil wie PKV/BU). */
const paths = {
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="8" r="2.500" />
      <path d="M3.500 19c0-3 2.500-5 5.500-5s5.500 2 5.500 5M16 13.500c2.500 0 4.500 1.700 4.500 4.500" />
    </>
  ),
  bandage: (
    <>
      <rect x="1.500" y="8.500" width="21" height="7" rx="3.500" transform="rotate(-45 12 12)" />
      <path d="M10.500 10.500h.01M13.500 13.500h.01M13.500 10.500h.01M10.500 13.500h.01" />
    </>
  ),
  building: <path d="M6 21V4h9v17M15 9h3v12M9 8h3M9 12h3M9 16h3M3 21h18" />,
  leaf: <path d="M5 19c0-8 4-13 14-14 0 10-5 14-13 14M5 19c2-4 5-7 9-9" />,
  shield: <path d="M12 3 5 6v5c0 4.400 2.800 8.200 7 10 4.200-1.800 7-5.600 7-10V6l-7-3ZM9 12l2.200 2.200L15.500 9.800" />,
  scales: <path d="M12 4v16M7 20h10M5 7h14M5 7l-2.500 6a3 3 0 0 0 5 0L5 7ZM19 7l-2.500 6a3 3 0 0 0 5 0L19 7Z" />,
  cross: <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z" />,
  paw: (
    <>
      <circle cx="7" cy="10" r="1.600" />
      <circle cx="11" cy="6.500" r="1.600" />
      <circle cx="15" cy="6.500" r="1.600" />
      <circle cx="19" cy="10" r="1.600" />
      <path d="M12 12c-3 0-5 2.500-5 4.500 0 1.500 1.500 2.500 3 2 .8-.3 1.300-.5 2-.5s1.200.2 2 .5c1.500.5 3-.5 3-2 0-2-2-4.500-5-4.500Z" />
    </>
  ),
  sofa: <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 13a2 2 0 0 1 4 0v1h10v-1a2 2 0 0 1 4 0v4H3v-4ZM6 17v2M18 17v2" />,
  home: <path d="M4 11 12 4l8 7v9H4v-9ZM10 20v-6h4v6" />,
  cloud: <path d="M7 18a4 4 0 0 1-.5-8A5.500 5.500 0 0 1 17 8.500 4.500 4.500 0 0 1 17 18H7ZM11 20l1-2M15 20l1-2" />,
  window: <path d="M5 4h14v16H5V4ZM12 4v16M5 12h14" />,
  car: <path d="M5 16V12l2-5h10l2 5v4M3 16h18v2H3v-2ZM7 12h10M7.500 14.500h.01M16.500 14.500h.01" />,
  plane: <path d="m3 13 18-8-4 14-5-5-3 3v-5L3 13Z" />,
  tooth: <path d="M8 4c-2 0-4 1.500-4 4 0 3 1.500 4 2 7 .4 2.500 1 5 2.500 5 1.200 0 1.300-3 2-3h-1 2.100c.7 0 .8 3 2 3 1.500 0 2.100-2.500 2.500-5 .5-3 2-4 2-7 0-2.500-2-4-4-4-1.500 0-2.200.7-4 .7S9.500 4 8 4Z" />,
  plus: (
    <>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
};

export type WvIconName = keyof typeof paths;

export default function WvIcon({ name, size = 24, strokeWidth = 1.3, className }: { name: WvIconName; size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
