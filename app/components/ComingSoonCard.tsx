export default function ComingSoonCard() {
  return (
    <div
      className="
        snap-start
        min-w-[280px] sm:min-w-[320px] lg:min-w-[360px]
        h-[520px]
        rounded-2xl
        border border-dashed border-white/20
        bg-white/5
        flex flex-col items-center justify-center
        text-center
        px-6
      "
    >
      <p className="text-sm tracking-wide text-zinc-400">
        NEXT PROJECT
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        Coming Soon
      </h3>

      <p className="mt-3 text-sm text-zinc-500">
        Actively building new products.
        Check back soon.
      </p>
    </div>
  );
}
