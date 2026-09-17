import Script from "next/script";

const nativeBannerId = "0a74db7c0a8bb5afb2d18f0dc3b5fcc8";

export default function AdsterraNativeBanner() {
  return (
    <section className="border-b border-emerald-100 bg-emerald-50/60 px-4 py-3" aria-label="Sponsored">
      <div className="mx-auto min-h-[120px] max-w-6xl overflow-hidden">
        <Script
          async
          data-cfasync="false"
          src={`https://pl31068563.profitableratecpmnetwork.com/${nativeBannerId}/invoke.js`}
          strategy="afterInteractive"
        />
        <div id={`container-${nativeBannerId}`} />
      </div>
    </section>
  );
}
