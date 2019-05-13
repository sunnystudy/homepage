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
    "url": "assets/images/shekel-avatar-min.jpg",
    "revision": "4a0a479a531adee875add2ad6c649814"
  },
  {
    "url": "assets/stylesheets/base.css",
    "revision": "1d0ed02d99934b705ec7002f2e7ce90b"
  },
  {
    "url": "index.html",
    "revision": "c33eda123f4862d3839d7669eb49e7e6"
  },
  {
    "url": "uk-ua/index.html",
    "revision": "3c42612a07c7b63aa251e5279c00b286"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
