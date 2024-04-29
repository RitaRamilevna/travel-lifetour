import { menuOpen } from './modules/menu-open';
import { initHeroSlider, initToursSlider, initTrainingSlider } from './modules/init-sliders';

document.addEventListener('DOMContentLoaded', () => {
  menuOpen();
  initHeroSlider();
  initToursSlider();
  initTrainingSlider();

});
