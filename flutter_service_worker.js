'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "29b6089dcaecd8c7d3bf108cc02ed2ae",
"version.json": "07ef5d0105409a99e00a161fe3998b5f",
"index.html": "bfee39ddd6bbf67b02abf2c02b04e261",
"/": "bfee39ddd6bbf67b02abf2c02b04e261",
"main.dart.js": "58ec4672f0b47c2558767885aa0c9290",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "3aae5d99f1e0ac873ea18759d9772211",
"icons/Icon-192.png": "12d08303987735e1a5f51240e238c2bb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6a54dd2d22554eea2620e6182650fefe",
"assets/AssetManifest.json": "15715faf6df56631a9aadde22e80302e",
"assets/NOTICES": "927d74f1f5bd363c14cbe1fbabf635d6",
"assets/FontManifest.json": "dbdbb1a9d67ae955d0ebd448b4fc810b",
"assets/AssetManifest.bin.json": "1cd47a273221d8310d0ec2ac930fce14",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5574ccb2f7395423de37069f4e0182bc",
"assets/fonts/DancingScript/DancingScript-Bold.ttf": "6c5b41b0622681bb6aafb3d4ed2a1171",
"assets/fonts/DancingScript/DancingScript-Regular.ttf": "949b41b511eeacbbf6884959b6eedc56",
"assets/fonts/Verdana/verdana-regular.ttf": "7652f550f74d065c79f44da613344338",
"assets/fonts/Verdana/verdana-bold.ttf": "ddbe52e2cfdcc2b8c9c4ab8de872a325",
"assets/fonts/MaterialIcons-Regular.otf": "9d3c49d5da39684bf69f9592189d1f25",
"assets/assets/background/main_background.png": "4c8569cca96cd8a364d4b3bd958c231b",
"assets/assets/screenshot/project/pridesys_erp/pridesys_erp_1.png": "a7061f9e2fb1072719f3092bf1004a08",
"assets/assets/screenshot/project/pridesys_erp/pridesys_erp_2.png": "be04038d5dee16f416619f5d277b34ad",
"assets/assets/screenshot/project/quantum_possibilities/quantum_possibilities_1.png": "1406c7c9ebfb81c930d993f2f281593d",
"assets/assets/screenshot/project/quantum_possibilities/quantum_possibilities_2.png": "6cc3124317c165222a4f5d0a2bebb3b6",
"assets/assets/screenshot/project/qp_messenger/qp_messenger_2.png": "5d2b375c39ae246dc150a2ee345d4ea5",
"assets/assets/screenshot/project/qp_messenger/qp_messenger_1.png": "957b751461a20a648d63a8e7036ab5b4",
"assets/assets/logo/project/qp_messenger_logo.png": "167704a4ca0bb2e036239a279c043182",
"assets/assets/logo/project/quantum_possibilities_logo.png": "c1035c7072efbc1b52634d1c69d4f6e7",
"assets/assets/logo/project/pridesys_erp_logo.png": "3f52814712d8982f0e04de2188b75e19",
"assets/assets/logo/company/pridesys_logo.png": "7401bd6e0bfd6ffa2aa8ec44e840f4e3",
"assets/assets/logo/company/pakiza_logo.png": "95fe868477c574cf9e0e346b32009484",
"assets/assets/icons/skill/c_language_icon.png": "5400113499efc35474f89791b8c3d4e4",
"assets/assets/icons/skill/socket_icon.png": "cbecc6d87fefffd741b90ac1e108c151",
"assets/assets/icons/skill/graph_ql_icon.png": "f6b5d2db019663e60203888ed0324d15",
"assets/assets/icons/skill/version_control_icon.png": "70599f294cc7f62e5ff57a9c4c2dad15",
"assets/assets/icons/skill/firebase_icon.png": "bb5d30fec65686babae2e8caa53666c3",
"assets/assets/icons/skill/sslcommerz_icon.png": "73f68de091f02af7e45344977b834a5b",
"assets/assets/icons/skill/web_rtc_icon.png": "a33184a387d52572f89920be055d5c4d",
"assets/assets/icons/skill/provider_icon.png": "cab4717c31fcd798a2e4bd4450a2d244",
"assets/assets/icons/skill/gitlab_icon.png": "deab083f9d822a45332387541c474e75",
"assets/assets/icons/skill/app_deployment_icon.png": "bf9fcfa2feef603210621db7e831856c",
"assets/assets/icons/skill/state_management_icon.png": "6976eddda9a26bf229149ef3f236f4f6",
"assets/assets/icons/skill/android_icon.png": "f3f62505de0766a4e362c7cb5df84bfb",
"assets/assets/icons/skill/payment_gateway_icon.png": "5dd8b98499327eaec1e94dd72bd4bd29",
"assets/assets/icons/skill/appstore_icon.png": "8e146e9e28baeb9b59c6004ed7b1343b",
"assets/assets/icons/skill/flutter_bloc_icon.webp": "124a1f9a58edb604c9e891aa84b194be",
"assets/assets/icons/skill/api_icon.png": "32f244f993a583e0548e4e2c1a3742cf",
"assets/assets/icons/skill/realtime_communication_icon.png": "cdccb99378883ceb93e4a28bd8532e46",
"assets/assets/icons/skill/sqlite_icon.png": "e372ff6e04d262a4803bb6499fc8a21d",
"assets/assets/icons/skill/framework_icon.png": "94caf834d0a32603ff9adf687d59337a",
"assets/assets/icons/skill/mvvm_icon.png": "bbfc3c693aabf7b92c25bff6fea929ad",
"assets/assets/icons/skill/stripe_icon.png": "a06ef4dcd0dd12c0edfa03ad8f7c44ab",
"assets/assets/icons/skill/rest_api_icon.png": "258c89d7af8ca463ac94ac12cf3363b6",
"assets/assets/icons/skill/playstore_icon.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/icons/skill/flutter_icon.png": "496166b5b52e02865c338bb52558e54e",
"assets/assets/icons/skill/programming_language_icon.png": "99aabbbb924844b61a12fd58d6bb3d7c",
"assets/assets/icons/skill/architecture_icon.png": "2f8c58b591a2d814be1b259a58cf28cf",
"assets/assets/icons/skill/java_language_icon.png": "de6b97f9cdec6635264cc67bcee4a8f9",
"assets/assets/icons/skill/getx_icon.png": "16d5f088c659357a7a393d65eeb564d6",
"assets/assets/icons/skill/spring_boot_icon.png": "a5976dc5621977f59dd2265435363c71",
"assets/assets/icons/skill/mvc_icon.png": "083b84f576041f864f7b5ec113ec7f7f",
"assets/assets/icons/skill/github_icon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/icons/skill/clean_icon.png": "5e8572ca6465ff40b3d159a364a4fa07",
"assets/assets/icons/skill/database_icon.png": "b2a636e03fcf242cdd24e7f0f44d4c29",
"assets/assets/icons/skill/dart_language_icon.png": "6dfecd3d853795cde41dfd8990a22983",
"assets/assets/icons/social_media/telegram_icon.png": "870ee62cf4e8b5318671937c980a6774",
"assets/assets/icons/social_media/instagram_icon.png": "9cf5a9973ee7905421c36fd10db86213",
"assets/assets/icons/social_media/messenger_icon.png": "302b420bc0fe0354d91edc3c075b408b",
"assets/assets/icons/social_media/youtube_icon.png": "502e29fc888ec4ff8031ae30cd5c49fb",
"assets/assets/icons/social_media/gmail_icon.png": "823dc8fc3b903246627f0d61e670beb8",
"assets/assets/icons/social_media/tiktok_icon.png": "af27c8cca40b000fa37c644047259b2f",
"assets/assets/icons/social_media/linkedin_icon.png": "f47bd38152157213d291f1cefefa102f",
"assets/assets/icons/social_media/skype_icon.png": "91de4584c70ec5b8715cd2d1e07cb7e8",
"assets/assets/icons/social_media/x_icon.png": "513dbcc68d6be7ba40a5cc04c91bdd04",
"assets/assets/icons/social_media/facebook_icon.png": "ab796810903e8e62046efb13d9f24a75",
"assets/assets/icons/social_media/whatsapp_icon.png": "7c2c265e06636aa0e9f579970e6fdaf2",
"assets/assets/icons/social_media/github_icon.png": "44e27c48a80c1719fac8a764c0bc28b0",
"assets/assets/icons/app_icon_filled_64.png": "93b76b483d6976ca34de585a7b21e219",
"assets/assets/banner/project/pridesys_erp_banner.png": "01014e6c5897ff13c59266a93cbf79d9",
"assets/assets/banner/project/quantum_possibilities_banner.png": "21899d308c62d3bbdcc698dd73b66fae",
"assets/assets/banner/project/qp_messenger_banner.png": "f5cd9c649b98cb1cc16bced42c3a1006",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
