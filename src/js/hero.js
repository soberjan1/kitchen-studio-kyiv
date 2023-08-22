import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
});
