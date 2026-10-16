/** Seitenspezifische Outline-Icons (gleicher Stil wie die PKV-Seite). */
const paths = {
  briefcase: <path d="M4 8h16v11H4V8ZM9 8V6h6v2M4 13h16" />,
  coins: (
    <>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M14.500 9.200A3.500 3.500 0 0 0 9 11v2a3.500 3.500 0 0 0 5.500 1.800M7.500 11h5.500M7.500 13h5.500" />
    </>
  ),
  home: <path d="M4 11 12 4l8 7v9H4v-9ZM10 20v-6h4v6" />,
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="8" r="2.500" />
      <path d="M3.500 19c0-3 2.500-5 5.500-5s5.500 2 5.500 5M16 13.500c2.500 0 4.500 1.700 4.500 4.500" />
    </>
  ),
  future: <path d="m5 17 5-5 3 3 6-7M14 8h5v5" />,
  shield: <path d="M12 3 5 6v5c0 4.400 2.800 8.200 7 10 4.200-1.800 7-5.600 7-10V6l-7-3ZM9 12l2.200 2.200L15.500 9.800" />,
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),
};

export type BuIconName = keyof typeof paths;

export default function BuIcon({ name, size = 24, strokeWidth = 1.3, className }: { name: BuIconName; size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
