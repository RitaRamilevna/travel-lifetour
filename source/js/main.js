import { menuOpen } from './modules/menu-open';
import { initHeroSlider, initToursSlider, initTrainingSlider, initReviewsSlider, initAdvantagesSlider, initGallerySlider } from './modules/init-sliders';
import { validateForm } from './modules/form-validate';
//import { manageInputLabelVisibility } from './modules/input-visibility';


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

/* window.addEventListener('load', () => {
  manageInputLabelVisibility();
}); */
