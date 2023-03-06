// Request and cache critical resources
const resources = ['/index.html', '/dist/bundle.css',  '/dist/bundle.js']; // '/dist/bundle.js'
caches.open('critical-resources')
    .then(cache => cache.addAll(resources));
  

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/dist/bundle.css';
document.head.prepend(link);
const script = document.createElement('script');
script.src = '/dist/bundle.js';
document.body.appendChild(script);
