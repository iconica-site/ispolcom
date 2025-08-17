import Swiper from 'swiper';
import { Autoplay, EffectFade, } from 'swiper/modules';

/** @type {NodeListOf<HTMLDivElement>} */
const heroSliders = document.querySelectorAll('.hero-slider');

heroSliders.forEach((slider, index) => {
  setTimeout(() => {
    const swiper = new Swiper(slider, {
      modules: [Autoplay, EffectFade],
      autoplay: {
        disableOnInteraction: false,
      },
      fadeEffect: {
        crossFade: true,
      },
      effect: 'fade',
      allowTouchMove: false,
      speed: 1000,
    });
  }, index * 300);
});
