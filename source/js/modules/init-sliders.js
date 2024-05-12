import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function initHeroSlider() {
  const heroSwiper = new Swiper('.hero__swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 500,
    autoHeight: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,

    pagination: {
      el: '.hero__pagination',
      clickable: true,
      watchSlidesProgress: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" aria-label="Перейти к слайду ${index + 1}" tabindex="0"></button>`;
      },
    },
  });

  const paginationBullets = document.querySelectorAll('.hero__pagination-bullet');

  paginationBullets.forEach((bullet, index) => {
    bullet.addEventListener('keydown', (event) => {
      if (event.code === 'Tab') {
        event.preventDefault();
        const nextBullet = paginationBullets[(index + 1) % paginationBullets.length];
        nextBullet.focus();
      } else if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        heroSwiper.slideTo(index);
      }
    });
  });

  return heroSwiper;
}

export function initToursSlider() {
  const toursSlider = new Swiper('.tours__swiper', {
    modules: [Navigation],
    direction: 'horizontal',

    grabCursor: true,
    speed: 500,
    observer: true,
    observeParents: true,


    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        autoHeight: true,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        simulateTouch: false,

      },
    },
  });

  return toursSlider;

}

export function initTrainingSlider() {
  const trainingSlider = new Swiper('.training__swiper', {
    modules: [Navigation],
    direction: 'horizontal',

    grabCursor: true,
    speed: 500,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 15,
        autoHeight: true,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        simulateTouch: false,
      },
    },
  });

  return trainingSlider;

}

export function initReviewsSlider() {
  const reviewsSlider = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    direction: 'horizontal',

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    grabCursor: true,
    speed: 500,
    observer: true,
    observeParents: true,
    watchOverflow: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 110,
        simulateTouch: false,

      },
    },
  });

  return reviewsSlider;

}

export function initAdvantagesSlider() {
  const advantagesSlider = new Swiper('.advantages__swiper', {
    modules: [Navigation],
    direction: 'horizontal',

    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },

    grabCursor: true,
    speed: 500,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    simulateTouch: false,

    breakpoints: {
      // when window width is >= 1440px
      1440: {
        slidesPerGroup: 2,
        initialSlide: 2,
        spaceBetween: 30,
        simulateTouch: false,
        centeredSlides: true,
      },
    },
  });

  if (window.innerWidth < 1440) {
    advantagesSlider.destroy();
  }

  return advantagesSlider;

}

export function initGallerySlider() {
  const gallerySlider = new Swiper('.gallery__swiper', {
    modules: [Navigation],
    direction: 'horizontal',

    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },

    grabCursor: true,
    speed: 500,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    loop: true,
    slidesPerView: 5,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    }

  });

  if (window.innerWidth >= 1440) {
    gallerySlider.destroy();
  }

  return gallerySlider;

}
