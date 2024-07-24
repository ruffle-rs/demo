const rufflePlayer = "ruffle-player-v1";
const assets = [
  "/",
  "/icon180.png",
  "/icon32.png",
  "/index.html",
  "/logo-anim.fla",
  "/logo-anim.swf",
  "/logo.svg",
  "/manifest.json",
  "/swfs.json",
  "/assets/index-BnsjZZMS.css",
  "/assets/index-YtYtzVMW.js",
  "/assets/ruffle-imports-CztXuSei.js",
  "/assets/ruffle_web-B3lxCmX0.js",
  "/assets/ruffle_web-wasm_extensions-CEZPBwNz.js",
  "/assets/ruffle_web-wasm_extensions_bg-Cw4o4Lf_.wasm",
  "/assets/ruffle_web_bg-0ifEBDiX.wasm",
  "/assets/S6uyw4BMUTPHjx4wXg-BEhtfm5r.woff2",
  "/assets/S6uyw4BMUTPHjxAwXjeu-C8eBZ-j2.woff2",
  "/fonts/S6uyw4BMUTPHjx4wXg.woff2",
  "/fonts/S6uyw4BMUTPHjxAwXjeu.woff2",
  "/swfs/alien_hominid.swf",
  "/swfs/bitey1.swf",
  "/swfs/flyguy.swf",
  "/swfs/marvin_spectrum.swf",
  "/swfs/saturday_morning_watchmen.swf",
  "/swfs/synj1.swf",
  "/swfs/synj2.swf",
  "/swfs/wasted_sky.swf",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(rufflePlayer).then((cache) => {
      cache.addAll(assets);
    }),
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
