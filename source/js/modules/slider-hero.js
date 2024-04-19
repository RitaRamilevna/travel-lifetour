import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function initSlider() {
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
    },

  });

  return heroSwiper;

}
