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
    simulateTouch: false,
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
