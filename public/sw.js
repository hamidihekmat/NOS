async function customHeaderRequestFetch(e) {
  const t = `https://www.googleapis.com/drive/v3/files/${new URL(
      e.request.url
    ).pathname.substring(1)}?alt=media`,
    s = await getToken(),
    a = atob(s),
    n = new Request(t, {
      headers: {
        range: e.request.headers.get('range'),
        Authorization: 'Bearer ' + a,
      },
    });
  return fetch(n);
}
async function getToken() {
  const e = await fetch('https://token.noss.workers.dev/');
  return await e.text();
}
self.addEventListener('install', (e) => {
  self.skipWaiting();
}),
  self.addEventListener('fetch', (e) => {
    e.request.headers.has('range') &&
      e.respondWith(customHeaderRequestFetch(e));
  });
