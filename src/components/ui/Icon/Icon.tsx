import type { IconName } from "@/data/home";

const paths: Record<IconName | "arrow" | "play" | "globe" | "chevron" | "menu" | "close" | "linkedin" | "google" | "mail" | "pin" | "phone", React.ReactNode> = {
  people: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <circle cx="4.8" cy="10" r="2.2" />
      <circle cx="19.2" cy="10" r="2.2" />
      <path d="M6.5 19c0-3.2 2.4-5.2 5.5-5.2s5.5 2 5.5 5.2" />
      <path d="M1.5 17.5c0-2 1.2-3.4 3.3-3.6M22.5 17.5c0-2-1.2-3.4-3.3-3.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.5 5.6v5.6c0 4.6 3.1 8.4 7.5 10 4.4-1.6 7.5-5.4 7.5-10V5.6L12 2.8Z" />
      <path d="m8.6 11.8 2.4 2.4 4.4-4.6" />
    </>
  ),
  document: (
    <>
      <path d="M6 2.8h8.2L19 7.6v13.6H6V2.8Z" />
      <path d="M14 2.8v5h5M9 12h7M9 15.2h7M9 18.4h4.5" />
    </>
  ),
  diamond: (
    <>
      <path d="M6.5 4h11L22 9.4 12 21 2 9.4 6.5 4Z" />
      <path d="M2 9.4h20M9 4l-2 5.4L12 21l5-11.6L15 4M9 4l3 5.4L15 4" />
    </>
  ),
  user: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20c0-3.6 2.7-6 6.2-6s6.2 2.4 6.2 6" />
      <path d="M16.5 5.2a3.2 3.2 0 0 1 0 6M18.5 14.4c2 .7 3.2 2.5 3.2 5.1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.4 2" />
    </>
  ),
  laptop: (
    <>
      <rect x="4.5" y="5" width="15" height="10.5" rx="1" />
      <path d="M2 19h20" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.4 2.8 2.8L16.2 9.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V13M10 20V9M16 20v-8M3 20.2h18" />
      <path d="m4 9 5-4 4 3 7-5" />
    </>
  ),
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  play: <path d="M9.5 7.5v9l7-4.5-7-4.5Z" fill="currentColor" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3Z" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10.5V17M8 7.2v.1M12 17v-6.5M12 13c0-1.6 1-2.6 2.4-2.6S17 11.4 17 13v4" />
    </>
  ),
  google: <path d="M20.5 12.2H12v3.4h4.9c-.5 2.4-2.4 3.6-4.9 3.6a6.2 6.2 0 1 1 4-10.9l2.4-2.4A9.6 9.6 0 1 0 12 21.6c5.1 0 8.800-3.600 8.800-8.600 0-.3 0-.6-.1-.8Z" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.500 6.500L20.500 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.500-5.800 6.500-11A6.500 6.500 0 0 0 5.500 10c0 5.200 6.500 11 6.500 11Z" />
      <circle cx="12" cy="10" r="2.300" />
    </>
  ),
  phone: <path d="M5 4h4l1.600 4-2.100 1.400a11 11 0 0 0 6.100 6.100L16 13.400l4 1.600v4a1.500 1.500 0 0 1-1.600 1.500C10.700 20 4 13.300 3.500 5.600A1.500 1.500 0 0 1 5 4Z" />,
};

type Props = {
  name: keyof typeof paths;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({ name, size = 24, strokeWidth = 1.4, className }: Props) {
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
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
