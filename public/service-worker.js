const CACHE_VERSION = 'novskidev-pwa-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const PRECACHE_URLS = [
  '/',
  '/manifest.webmanifest',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      await Promise.all(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch((error) => {
            console.warn(`Failed to precache ${url}`, error);
          }),
        ),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE) {
            return caches.delete(key);
          }
          return Promise.resolve();
        }),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    if (PRECACHE_URLS.includes(url.pathname)) {
      event.respondWith(cacheFirst(request));
      return;
    }

    if (
      url.pathname.startsWith('/_next/') ||
      url.pathname.startsWith('/icons/') ||
      url.pathname.startsWith('/images/') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.css')
    ) {
      event.respondWith(staleWhileRevalidate(request));
      return;
    }
  }

  event.respondWith(networkFirst(request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }
  const cache = await caches.open(STATIC_CACHE);
  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await caches.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      cache.put(request, response.clone());
      return response;
    })
    .catch((error) => {
      console.warn('Network request failed during revalidate', error);
      return undefined;
    });

  if (cached) {
    // Update cache in background but serve cached immediately.
    networkPromise.catch(() => undefined);
    return cached;
  }

  const networkResponse = await networkPromise;
  if (networkResponse) {
    return networkResponse;
  }

  const fallback = await caches.match('/');
  if (fallback) {
    return fallback;
  }

  return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }

    if (request.mode === 'navigate') {
      return caches.match('/');
    }

    throw error;
  }
}
