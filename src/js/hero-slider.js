import 'swiper/css';
import Swiper from 'swiper';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  mousewheel: true,
  keyboard: true,
});

// import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper.use, { Navigation, Pagination };

// const swiper = new Swiper('.swiper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 3000,
//   },
//   mousewheel: true,
//   keyboard: true,
// });
