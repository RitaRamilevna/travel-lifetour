import { menuOpen } from './modules/menu-open';
import { initHeroSlider, initToursSlider, initTrainingSlider, initReviewsSlider, initAdvantagesSlider, initGallerySlider } from './modules/init-sliders';
import { validateForm } from './modules/form-validate';

document.addEventListener('DOMContentLoaded', () => {
  menuOpen();
  initHeroSlider();
  initToursSlider();
  initTrainingSlider();
  initReviewsSlider();
  initAdvantagesSlider();
  initGallerySlider();

  validateForm();
});
