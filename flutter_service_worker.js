'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "12d08303987735e1a5f51240e238c2bb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "a46452c5139d40cdd344eefb62887fee",
"index.html": "0ddad30ae3af70ab87a7438f1f1035de",
"/": "0ddad30ae3af70ab87a7438f1f1035de",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "bc7e6d064c7e9516d853c28e96cb4c7a",
"assets/assets/icons/app_icon_filled_64.png": "93b76b483d6976ca34de585a7b21e219",
"assets/assets/icons/call_icon.png": "e32444726264e197038d4e56a63758f1",
"assets/assets/icons/address_icon.png": "70c7ce34c055d214ef7187405c846058",
"assets/assets/devnizam/profile_image.jpg": "6f218784c71fea306577c888e87d24e4",
"assets/assets/project/qp_messenger/qp_messenger_banner.png": "f5cd9c649b98cb1cc16bced42c3a1006",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_10.png": "04ed8452232c497213fe08ed9ebee02d",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_7.png": "70e7e153b36553d2bbe5f4f35d355ee3",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_2.png": "52d23beba5acd71b2d69ce929562b36b",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_3.png": "5d8565140c1f41f36dc3576273eaa481",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_6.png": "d60d531f0740592a5d68ce61662929ee",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_8.png": "856026cf30281058949d898df1c99704",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_5.png": "39792e801c51b3969f78c3b6426fd192",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_9.png": "5f4381eef02371dd44d620e7f34391e4",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_4.png": "32a0bb2449baebcc21e83a62d1e696a9",
"assets/assets/project/qp_messenger/screenshots/qp_messenger_1.png": "a6a2cfa5163c404796b7baca9e46c34e",
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
"assets/assets/project/quantum_possibilities/screenshots/quantum_possibilities_1.png": "1406c7c9ebfb81c930d993f2f281593d",
"assets/assets/project/quantum_possibilities/screenshots/quantum_possibilities_2.png": "6cc3124317c165222a4f5d0a2bebb3b6",
"assets/assets/project/quantum_possibilities/quantum_possibilities_logo.png": "c1035c7072efbc1b52634d1c69d4f6e7",
"assets/assets/project/quantum_possibilities/quantum_possibilities_banner.png": "21899d308c62d3bbdcc698dd73b66fae",
"assets/assets/journey/pridesys_logo.png": "7401bd6e0bfd6ffa2aa8ec44e840f4e3",
"assets/assets/journey/pakiza_logo.png": "95fe868477c574cf9e0e346b32009484",
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
"assets/fonts/MaterialIcons-Regular.otf": "24460f3c2249940a9ea0fdb57aecea9e",
"assets/NOTICES": "8019405b3a06af6dca08e5d5dbbf9694",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "8c24937c5a9e894b65977cf85c139f21",
"assets/AssetManifest.json": "cf73f3fb078fea517e665022c8a87ca8",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "3aae5d99f1e0ac873ea18759d9772211",
"flutter_bootstrap.js": "2d49fd648a9bf79209d2da289a9886af",
"version.json": "d3baaf428ed80a97064fcc23310d4a44",
"main.dart.js": "d66bb7c39185000a2dbb45f6277af5f5"};
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
