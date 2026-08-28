"use client";

import { useEffect } from "react";

const bannerAds = [
  { key: "8d7620d8d55e70221b9ce8c140b6e971", width: 468, height: 60 },
  { key: "4d8d768dcccd27637753ae8d2a0b2ba7", width: 160, height: 300 },
  { key: "9bc4ee17d5d4f3d3d94e3e5623654b63", width: 320, height: 50 },
  { key: "49a579ce176721f2b50a07aaa29286fd", width: 728, height: 90 },
];

export default function Advertising() {
  useEffect(() => {
    const nativeContainer = document.getElementById("container-0a74db7c0a8bb5afb2d18f0dc3b5fcc8");
    if (nativeContainer && !nativeContainer.dataset.loaded) {
      nativeContainer.dataset.loaded = "true";
      const script = document.createElement("script");
      script.async = true;
      script.dataset.cfasync = "false";
      script.src = "https://pl31068563.profitableratecpmnetwork.com/0a74db7c0a8bb5afb2d18f0dc3b5fcc8/invoke.js";
      nativeContainer.appendChild(script);
    }

    async function loadBanners() {
      for (const ad of bannerAds) {
        const container = document.getElementById(`banner-ad-${ad.key}`);
        if (!container || container.dataset.loaded) continue;

        container.dataset.loaded = "true";
        window.atOptions = { key: ad.key, format: "iframe", height: ad.height, width: ad.width, params: {} };

        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = `https://www.highrevenueformat.com/${ad.key}/invoke.js`;
          script.onload = script.onerror = resolve;
          container.appendChild(script);
        });
      }
    }

    loadBanners();
  }, []);

  return (
    <aside className="mx-auto w-full max-w-7xl px-4 py-8" aria-label="Sponsored content">
      <div
        id="container-0a74db7c0a8bb5afb2d18f0dc3b5fcc8"
        className="mb-6 flex justify-center overflow-hidden"
      />
      <div className="flex flex-wrap items-center justify-center gap-6">
        {bannerAds.map((ad) => (
          <div key={ad.key} className="flex justify-center overflow-hidden" aria-label="Advertisement">
            <div id={`banner-ad-${ad.key}`} style={{ width: ad.width, minHeight: ad.height }} />
          </div>
        ))}
      </div>
      <a
        href="https://www.profitableratecpmnetwork.com/qy5nbhnbhp?key=79a2719fe6f846b6cc640b28a429df78"
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="mt-5 block text-center text-xs text-gray-500 hover:text-emerald-700 hover:underline"
      >
        Sponsored link
      </a>
    </aside>
  );
}
