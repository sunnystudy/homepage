/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/avatar-shekel.svg",
    "revision": "3ee4c9d1ccb37a2639a7a797ec551826"
  },
  {
    "url": "assets/stylesheets/base.css",
    "revision": "8a13632a1f8c66531fbc91f7be24b4a9"
  },
  {
    "url": "index.html",
    "revision": "bd8c27f4f1d1ff1666ae8b8ac385e5fc"
  },
  {
    "url": "uk-ua/index.html",
    "revision": "7f663f179057073a3560c9073ad0d077"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
