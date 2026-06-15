import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let howSwiper = null;
let gallerySwiper = null;
let featuresSwiper = null;

function initHowSwiper() {
  if (window.innerWidth < 1440) {
    if (!howSwiper) {
      howSwiper = new Swiper('.how-swiper', {
        modules: [Autoplay],
        slidesPerView: 1.17,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  } else {
    if (howSwiper) {
      howSwiper.destroy(true, true);
      howSwiper = null;
    }
  }
}

function initGallerySwiper() {
  if (window.innerWidth < 1440) {
    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.gallery-swiper', {
        modules: [Autoplay],
        slidesPerView: 1.2,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  } else {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }

    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation],
      slidesPerView: 3.4,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
    });
  }
}

function initFeaturesSwiper() {
  if (window.innerWidth < 1440) {
    if (!featuresSwiper) {
      featuresSwiper = new Swiper('.features-swiper', {
        modules: [Autoplay],
        slidesPerView: 1.2,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  } else {
    if (featuresSwiper) {
      featuresSwiper.destroy(true, true);
      featuresSwiper = null;
    }
  }
}

function initSwipers() {
  initHowSwiper();
  initGallerySwiper();
  initFeaturesSwiper();
}

initSwipers();

window.addEventListener('resize', () => {
  clearTimeout(window.swiperResize);

  window.swiperResize = setTimeout(() => {
    if (howSwiper) {
      howSwiper.destroy(true, true);
      howSwiper = null;
    }

    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }

    if (featuresSwiper) {
      featuresSwiper.destroy(true, true);
      featuresSwiper = null;
    }

    initSwipers();
  }, 200);
});