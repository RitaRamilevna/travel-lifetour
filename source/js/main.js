import { menuOpen } from './modules/menu-open';
import { initHeroSlider, initToursSlider, initTrainingSlider, initReviewsSlider, initAdvantagesSlider } from './modules/init-sliders';

document.addEventListener('DOMContentLoaded', () => {
  menuOpen();
  initHeroSlider();
  initToursSlider();
  initTrainingSlider();
  initReviewsSlider();
  initAdvantagesSlider();

});
