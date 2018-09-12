//'use strict';
//importScripts('sw-toolbox.js'); toolbox.precache(["index.html","style/style.css"]); toolbox.router.get('/images/*', toolbox.cacheFirst); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
const filesToCache = [
	'/',
	'/index.html'
];

// install
self.addEventListener('install', event => {
    console.log('installing…');
    event.waitUntil(
		caches.open('static-v1').then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

// activate
self.addEventListener('activate', event => {
    console.log('now ready to handle fetches!');
});

// fetch
self.addEventListener('fetch', event => {
    console.log('now fetch!');
});