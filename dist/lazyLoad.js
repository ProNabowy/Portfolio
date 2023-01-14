let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      observer.unobserve(lazyImage);
    }
  });
});

let lazyImages = document.querySelectorAll('img');
lazyImages.forEach(image =>
{
    if (image.src !== "https://raw.githubusercontent.com/ProNabowy/Portfolio_img/main/nabowy.webp")
    {
        {
            observer.observe(image);
        }
    }
});