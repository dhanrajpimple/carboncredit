"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const tagId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function GoogleAds() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem("analytics-consent");
    queueMicrotask(() => setConsent(savedConsent));
  }, []);

  const choose = (value) => {
    window.localStorage.setItem("analytics-consent", value);
    setConsent(value);
  };

  return (
    <>
      {tagId && consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} strategy="afterInteractive" />
          <Script id="google-ads-tag" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${tagId}');`}
          </Script>
        </>
      )}
      {consent === null && (
        <aside className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl" aria-label="Cookie preferences">
          <p className="text-sm text-gray-700">We use optional analytics cookies to measure website and advertising performance. Registration and payment work without them. See our privacy policy for details.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose("granted")} className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-bold text-white">Accept analytics</button>
            <button type="button" onClick={() => choose("denied")} className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-bold text-gray-800">Decline</button>
          </div>
        </aside>
      )}
    </>
  );
}
