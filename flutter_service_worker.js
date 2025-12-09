'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "12d08303987735e1a5f51240e238c2bb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "a46452c5139d40cdd344eefb62887fee",
"index.html": "0ddad30ae3af70ab87a7438f1f1035de",
"/": "0ddad30ae3af70ab87a7438f1f1035de",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a7ce1b70d10724ccec5b5f2f29d28364",
"assets/assets/icons/app_icon_filled_64.png": "93b76b483d6976ca34de585a7b21e219",
"assets/assets/icons/call_icon.png": "e32444726264e197038d4e56a63758f1",
"assets/assets/icons/address_icon.png": "70c7ce34c055d214ef7187405c846058",
"assets/assets/icons/icomoon.ttf": "ee9fe9030a7fada5432fa68f86a06f0b",
"assets/assets/devnizam/profile_image.jpg": "6f218784c71fea306577c888e87d24e4",
"assets/assets/devnizam/dev_profile_image.png": "fdd65062d19211aa82da4be324e3c81c",
"assets/assets/project/qp_messenger/qp_messenger_banner.png": "b6ef77572df84ac9b1dd35e65c9dc5d5",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_10.png": "224aabf964c9dcc322637fee3d4a02d5",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_7.png": "81c5f88fed57fe32636b5c508472f9db",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_2.png": "d1574a730ad79710cd6d1e471770e43e",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_3.png": "552ff7fe6f42365790f438b894eb92a1",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_6.png": "383fb3142b27bdf71b63433156c882e6",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_8.png": "e1349dc2ae3805af6554e3bf9afec7a9",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_5.png": "3c974ca80b9d2aaa6605c071fad7240c",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_9.png": "d63e5851f150c6ed0dbdfd822c966b90",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_4.png": "c3b4054804db7683d550925cbe558e6a",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_1.png": "28e62af33ee76e4b5709cd257d1edc70",
"assets/assets/project/qp_messenger/qp_messenger_logo.png": "167704a4ca0bb2e036239a279c043182",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_7.png": "565fb890c481d661344761a3d472050a",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_3.png": "34d388b78bddfecfc0a829e51d4c1f6c",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_4.png": "8ff7bbbb62ac3ad1e141b1a302cba88d",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_6.png": "bf2ce62affd8d24854b7e3ccb4f72d57",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_8.png": "3462f45f15218b75ccdf179b85d0f135",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_2.png": "7184dff9aa8a224263b7a59e39af23b8",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_1.png": "d2c6ab7871628e54f30eff9eeee36d1a",
"assets/assets/project/pridesys_erp/screenshots/prideys_erp_5.png": "24297ed1788cccb1b1a670d3f12f7a09",
"assets/assets/project/pridesys_erp/pridesys_erp_banner.png": "01014e6c5897ff13c59266a93cbf79d9",
"assets/assets/project/pridesys_erp/pridesys_erp_logo.png": "3f52814712d8982f0e04de2188b75e19",
"assets/assets/project/austtaa/screenshots/austttaa_2.png": "dac18a485f9165b3122dc3997b52aafa",
"assets/assets/project/austtaa/screenshots/austttaa_4.png": "2869bf20c456b0f215fe98f04663a8b5",
"assets/assets/project/austtaa/screenshots/austttaa_1.png": "64ad20e2b14acf1aa2752520e6abdf97",
"assets/assets/project/austtaa/screenshots/austttaa_3.png": "de2ed0de3fd8b249ea5b952901d9d18c",
"assets/assets/project/austtaa/screenshots/austttaa_5.png": "e6bea8e8da4d8811c2d63b08f05cf752",
"assets/assets/project/austtaa/austtaa_icon.png": "6661634e4badcb1bda803347e3f49655",
"assets/assets/project/austtaa/austtaa_banner.png": "d3c4e96cbc40454e5f7b815499b42d84",
"assets/assets/project/quantum_possibilities/screenshots/qposs_8.png": "78d37d660b8aa83912c1c5fd4dacd369",
"assets/assets/project/quantum_possibilities/screenshots/qposs_2.png": "43fe04e1f7bc20288c788e4ab991c7f1",
"assets/assets/project/quantum_possibilities/screenshots/qposs_3.png": "aefb126166ac18c15618ef6824b88632",
"assets/assets/project/quantum_possibilities/screenshots/qposs_7.png": "e4e68bb41461891b4e37b94223739f0d",
"assets/assets/project/quantum_possibilities/screenshots/qposs_1.png": "b27969c2c7ee7a4f8e29016103a02180",
"assets/assets/project/quantum_possibilities/screenshots/qposs_5.png": "7a32a7a66bc005246eab53d2850f2590",
"assets/assets/project/quantum_possibilities/screenshots/qposs_6.png": "5aa97451e45f940e3529512ca2c1bab6",
"assets/assets/project/quantum_possibilities/screenshots/qposs_4.png": "7814a3190fa44bf59e622d4fc37b2891",
"assets/assets/project/quantum_possibilities/quantum_possibilities_logo.png": "c1035c7072efbc1b52634d1c69d4f6e7",
"assets/assets/project/quantum_possibilities/quantum_possibilities_banner.png": "21899d308c62d3bbdcc698dd73b66fae",
"assets/assets/logo/app_logo_and_text.png": "764dd0403abf9df47c19facb1f8f43b2",
"assets/assets/logo/app_logo.png": "df03b92ed3c015c502ce875b89249789",
"assets/assets/journey/pridesys_logo.png": "571dc9748abf1a94c72848be93a5dd34",
"assets/assets/journey/pakiza_logo.png": "969073b8337f1962130756d45e1453a9",
"assets/assets/menu/stickies_logo.png": "7dd3b4845f93a81eb6a45adcd2d1389c",
"assets/assets/menu/medium_logo.png": "f4297ce0c700b3f67a6546f7c79c4a02",
"assets/assets/skill/api/api_icon.png": "32f244f993a583e0548e4e2c1a3742cf",
"assets/assets/skill/api/rest_api_icon.png": "258c89d7af8ca463ac94ac12cf3363b6",
"assets/assets/skill/api/graph_ql_icon.png": "f6b5d2db019663e60203888ed0324d15",
"assets/assets/skill/framework/spring_boot_icon.png": "a5976dc5621977f59dd2265435363c71",
"assets/assets/skill/framework/framework_icon.png": "94caf834d0a32603ff9adf687d59337a",
"assets/assets/skill/framework/android_icon.png": "f3f62505de0766a4e362c7cb5df84bfb",
"assets/assets/skill/framework/flutter_icon.png": "496166b5b52e02865c338bb52558e54e",
"assets/assets/skill/payment_gateway/payment_gateway_icon.png": "5dd8b98499327eaec1e94dd72bd4bd29",
"assets/assets/skill/payment_gateway/sslcommerz_icon.png": "73f68de091f02af7e45344977b834a5b",
"assets/assets/skill/payment_gateway/stripe_icon.png": "a06ef4dcd0dd12c0edfa03ad8f7c44ab",
"assets/assets/skill/programming_language/programming_language_icon.png": "99aabbbb924844b61a12fd58d6bb3d7c",
"assets/assets/skill/programming_language/java_language_icon.png": "de6b97f9cdec6635264cc67bcee4a8f9",
"assets/assets/skill/programming_language/c_language_icon.png": "5400113499efc35474f89791b8c3d4e4",
"assets/assets/skill/programming_language/dart_language_icon.png": "6dfecd3d853795cde41dfd8990a22983",
"assets/assets/skill/version_control/gitlab_icon.png": "deab083f9d822a45332387541c474e75",
"assets/assets/skill/version_control/version_control_icon.png": "70599f294cc7f62e5ff57a9c4c2dad15",
"assets/assets/skill/version_control/github_icon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/skill/realtime_communication/socket_icon.png": "cbecc6d87fefffd741b90ac1e108c151",
"assets/assets/skill/realtime_communication/web_rtc_icon.png": "a33184a387d52572f89920be055d5c4d",
"assets/assets/skill/realtime_communication/realtime_communication_icon.png": "cdccb99378883ceb93e4a28bd8532e46",
"assets/assets/skill/database/database_icon.png": "b2a636e03fcf242cdd24e7f0f44d4c29",
"assets/assets/skill/database/sqlite_icon.png": "e372ff6e04d262a4803bb6499fc8a21d",
"assets/assets/skill/database/firebase_icon.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/skill/state_management/state_management_icon.png": "6976eddda9a26bf229149ef3f236f4f6",
"assets/assets/skill/state_management/flutter_bloc_icon.webp": "124a1f9a58edb604c9e891aa84b194be",
"assets/assets/skill/state_management/provider_icon.png": "cab4717c31fcd798a2e4bd4450a2d244",
"assets/assets/skill/state_management/getx_icon.png": "16d5f088c659357a7a393d65eeb564d6",
"assets/assets/skill/coding_architecture/mvvm_icon.png": "bbfc3c693aabf7b92c25bff6fea929ad",
"assets/assets/skill/coding_architecture/architecture_icon.png": "2f8c58b591a2d814be1b259a58cf28cf",
"assets/assets/skill/coding_architecture/clean_icon.png": "5e8572ca6465ff40b3d159a364a4fa07",
"assets/assets/skill/coding_architecture/mvc_icon.png": "083b84f576041f864f7b5ec113ec7f7f",
"assets/assets/skill/apps_deployment/playstore_icon.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/skill/apps_deployment/appstore_icon.png": "8e146e9e28baeb9b59c6004ed7b1343b",
"assets/assets/skill/apps_deployment/app_deployment_icon.png": "bf9fcfa2feef603210621db7e831856c",
"assets/assets/contact/messenger_icon.png": "302b420bc0fe0354d91edc3c075b408b",
"assets/assets/contact/facebook_icon.png": "ab796810903e8e62046efb13d9f24a75",
"assets/assets/contact/gmail_icon.png": "823dc8fc3b903246627f0d61e670beb8",
"assets/assets/contact/youtube_icon.png": "502e29fc888ec4ff8031ae30cd5c49fb",
"assets/assets/contact/skype_icon.png": "91de4584c70ec5b8715cd2d1e07cb7e8",
"assets/assets/contact/instagram_icon.png": "9cf5a9973ee7905421c36fd10db86213",
"assets/assets/contact/x_icon.png": "513dbcc68d6be7ba40a5cc04c91bdd04",
"assets/assets/contact/github_icon.png": "44e27c48a80c1719fac8a764c0bc28b0",
"assets/assets/contact/whatsapp_icon.png": "7c2c265e06636aa0e9f579970e6fdaf2",
"assets/assets/contact/linkedin_icon.png": "f47bd38152157213d291f1cefefa102f",
"assets/assets/contact/tiktok_icon.png": "af27c8cca40b000fa37c644047259b2f",
"assets/assets/contact/telegram_icon.png": "870ee62cf4e8b5318671937c980a6774",
"assets/fonts/MaterialIcons-Regular.otf": "a242c2decd1c7b67681073171e283524",
"assets/NOTICES": "5073b23acdece24b74d354bfa61b5220",
"assets/FontManifest.json": "adabd3613afb4add037c6d697c766b54",
"assets/AssetManifest.bin": "f8cf5e06858adabf5449ac57adc6765f",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "3aae5d99f1e0ac873ea18759d9772211",
"flutter_bootstrap.js": "f7cc415095ca4a0731896001c92fb2f1",
"version.json": "47a10d28f28a4f0a1aa1465f9296707b",
"main.dart.js": "564829f507f8bade186a46e121ba9493"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
