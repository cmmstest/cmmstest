'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "74f02d96d4f0cce19b549519ea24cb47",
"favicon.ico": "50662bfc284f1f36c951677eb8ac5a2a",
"index.html": "b2b0c150b692d961a29806ef40ba1cdb",
"/": "b2b0c150b692d961a29806ef40ba1cdb",
"main.dart.js": "7b8e6b1e7110b24c31571bb52e7fdcc1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "c00f09244c800ff2a077027c31880ebd",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "ab5dba26d792d98652b35e8cb9bf63d8",
"manifest.json": "3f4d13ba493a92dd1b34247260d080f5",
"assets/AssetManifest.json": "97481492d1acf511d287c2afd3a2fdd7",
"assets/NOTICES": "c5459f57f0c91c36185a31927fa7385b",
"assets/FontManifest.json": "de9d4caf84cfab96c4a1a52138d6ed41",
"assets/AssetManifest.bin.json": "dbdc27cb3a9987da28b89ad1e17cd8d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "08091c5a19148cac3c251932f00e32b8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7efc368717fffb24c92abc8f26a5c16b",
"assets/fonts/MaterialIcons-Regular.otf": "32a71ade5ca4e1a98cd1ac198940285e",
"assets/assets/files/maintenance.png": "002f6cf2e56a18e4ddff046264bdcc0b",
"assets/assets/files/correct.png": "1aa827c906e6e29ae2046d8684315b94",
"assets/assets/files/hfeLogo.jpg": "674f86a4418f7fd336a88c16542e3b65",
"assets/assets/files/reportins.png": "4d36a64cee2c334979fa3d72fb71ce81",
"assets/assets/files/dashboard.png": "6186e931fda6bbeec07d881d6f96328f",
"assets/assets/files/inventory.png": "01a51de3fe45fda9b291e825e11ec6a4",
"assets/assets/files/warranty.png": "d57673f75768e6b86797ed9cc7e49a39",
"assets/assets/files/banner.png": "46f80776fb48152cf868b51d5cc0aa01",
"assets/assets/files/preventive.png": "93080d32781965d4824286e002e713b4",
"assets/assets/files/Import_PM_Plan.xlsx": "9306c09ef7efcd1a7d6f59fd591eee9e",
"assets/assets/files/home.png": "f4aef6e7317c2cafe541717c650b4043",
"assets/assets/files/maint.png": "de58a071d80eab3fe1ad5b7f9c5e3b82",
"assets/assets/files/soler.jpeg": "4ccc82dc07e4dde605359edf0305cf36",
"assets/assets/files/galary.png": "2d99609f0de8c0eb397784c3bb5cfe13",
"assets/assets/files/Logo_bg_white.jpg": "8771e8b423b7cbccfc1a6bdf461f8c9f",
"assets/assets/files/ptwsop.pdf": "571a3e3df5adf086385e14106f5766c2",
"assets/assets/files/pdf2.png": "477cb31549896c1179c7add9fd45989d",
"assets/assets/files/logo.png": "4face63840c545e10dd1dc83bdadf559",
"assets/assets/files/proimg.png": "5d6cf3e948d5047438d467b2dee9f4c5",
"assets/assets/files/pdf.png": "2d817117582f40053d421127835169e3",
"assets/assets/files/menu_vertical.png": "b8375d1261c68e92e40ca2df0642b8ec",
"assets/assets/files/admin.png": "1a7499f576757bf44e953842d1cb8eae",
"assets/assets/files/misc.png": "bb4bab2484f1cdaaeb9f29dc2ca43496",
"assets/assets/files/Fixed%2520Asset%2520Imports.xlsx": "32dd34df72de1593cb3a7277da3fdb75",
"assets/assets/files/audit_book.png": "95aebb27fac8714ef7097584cd171f3e",
"assets/assets/files/setting.png": "0f6b3c6ece5b8c00be23680f26ec6db4",
"assets/assets/files/images.png": "c80fa6ab29b1d1f906659075334b68de",
"assets/assets/files/logodrawer.jpg": "7eff648690106909176a83249e1925bc",
"assets/assets/files/logodrawer.png": "eee1b6e04fe541afd8b715c4fa745d2b",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
