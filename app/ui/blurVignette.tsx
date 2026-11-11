export default function BlurVignette() {
  return (
    <>
      {/* Flou progressif haut de l'écran */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-24 sm:h-32 z-50 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"
      />

      {/* Flou progressif bas de l'écran */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 inset-x-0 h-24 sm:h-32 z-50 backdrop-blur-md [mask-image:linear-gradient(to_top,black_20%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_20%,transparent_100%)]"
      />
    </>
  );
}
