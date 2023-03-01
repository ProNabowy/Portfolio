// Request and cache critical resources
const resources = ['/index.html', '/css/main.css',  '/dist/bundle.js']; // '/dist/bundle.js'
caches.open('critical-resources')
    .then(cache => cache.addAll(resources));
  

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/css/main.css';
document.head.appendChild(link);
const script = document.createElement('script');
script.src = '/dist/bundle.js';
document.body.appendChild(script);

const imgElements = document.querySelectorAll('img');

imgElements.forEach(img => {
  img.addEventListener('load', () => {
    const imgSrc = img.getAttribute('src');
    const cacheTime = 604800; // 1 week in seconds
    fetch(imgSrc, { cache: 'no-store' })
      .then(response => {
        const headers = new Headers(response.headers);
        headers.set('Cache-Control', `public, max-age=${cacheTime}`);
        const newResponse = new Response(response.body, { headers });
        caches.open('my-cache')
          .then(cache => {
            cache.put(imgSrc, newResponse);
          });
      });
  });
});
