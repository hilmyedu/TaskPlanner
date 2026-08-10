// sw.js - Service Worker untuk menangani Notifikasi Background
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listener untuk pesan dari halaman utama (index.html)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body } = event.data;
    self.registration.showNotification(title, {
      body: body,
      icon: 'https://cdn-icons-png.flaticon.com/512/2693/2693507.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/2693/2693507.png',
      vibrate: [200, 100, 200],
      tag: 'task-reminder',
      renotify: true
    });
  }
});
