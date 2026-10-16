/** Kennzeichnung für Links auf Seiten, die es (noch) nur auf Deutsch gibt. */
export default function DeTag({ badge, hint }: { badge: string; hint: string }) {
  return (
    <span
      lang="de"
      role="img"
      aria-label={hint}
      title={hint}
      style={{ marginLeft: 8, fontSize: "0.66em", letterSpacing: "0.08em", opacity: 0.72, fontWeight: 600, verticalAlign: "0.18em" }}
    >
      {badge}
    </span>
  );
}
