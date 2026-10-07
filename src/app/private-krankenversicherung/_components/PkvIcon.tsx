/** Seitenspezifische Outline-Icons der PKV-Seite (das gemeinsame Icon-Set bleibt unverändert). */
const paths = {
  shield: <path d="M12 3 5 6v5c0 4.400 2.800 8.200 7 10 4.200-1.800 7-5.600 7-10V6l-7-3ZM9 12l2.200 2.200L15.500 9.800" />,
  document: <path d="M7 3h7l4 4v14H7V3ZM14 3v4h4M9.500 12h5M9.500 15.500h5" />,
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="8" r="2.500" />
      <path d="M3.500 19c0-3 2.500-5 5.500-5s5.500 2 5.500 5M16 13.500c2.500 0 4.500 1.700 4.500 4.500" />
    </>
  ),
  chat: <path d="M4 6.500A2.500 2.500 0 0 1 6.500 4h11A2.500 2.500 0 0 1 20 6.500v7a2.500 2.500 0 0 1-2.500 2.500H11l-4.500 4v-4A2.500 2.500 0 0 1 4 13.500v-7Z" />,
  chart: <path d="M4 20h16M6.500 20v-6M11 20V9M15.500 20v-8M20 20V5" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.500 2.800 2.800L16 9.500" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.200-4.200" />
    </>
  ),
  building: <path d="M6 21V4h9v17M15 9h3v12M9 8h3M9 12h3M9 16h3M3 21h18" />,
  heart: <path d="M12 20s-7-4.300-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.700-7 10-7 10Z" />,
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),
};

export type PkvIconName = keyof typeof paths;

export default function PkvIcon({ name, size = 24, strokeWidth = 1.3, className }: { name: PkvIconName; size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
