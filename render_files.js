// Request and cache critical resources
const resources = ['/index.html', '/css/main.css', '/dist/bundle.js' , '/dist/swiper-bundle.min.js'];
caches.open('critical-resources')
    .then(cache => cache.addAll(resources));
  

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/css/main.css';
document.head.appendChild(link);
const script = document.createElement('script');
script.src = '/dist/bundle.js';
document.body.appendChild(script);
const swiper = document.createElement('script');
script.src = '/dist/swiper-bundle.min.js';
document.body.appendChild(swiper);

