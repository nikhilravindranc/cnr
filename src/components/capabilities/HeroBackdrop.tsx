/**
 * Large soft ambient bloom of overlapping circles behind the hero — an
 * abstracted, blurred echo of the crisp VennGraphic layered on top of it.
 */
export default function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute -right-[10%] top-1/2 -z-10 h-[60rem] w-[60rem] -translate-y-1/2 opacity-80 blur-2xl"
      aria-hidden
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 42% 30%, var(--color-accent) 0%, transparent 32%)," +
            "radial-gradient(circle at 68% 30%, var(--color-amber) 0%, transparent 32%)," +
            "radial-gradient(circle at 30% 55%, var(--color-accent) 0%, transparent 34%)," +
            "radial-gradient(circle at 78% 55%, var(--color-accent) 0%, transparent 34%)," +
            "radial-gradient(circle at 42% 78%, var(--color-amber) 0%, transparent 32%)," +
            "radial-gradient(circle at 65% 78%, var(--color-accent) 0%, transparent 32%)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
