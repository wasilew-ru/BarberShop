import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiper () {
    const swiper = new Swiper('#swiper-header', {
        // Optional parameters
        // autoplay: {delay: 5000},
        loop: true, //перекл с послед на 1
        // parallax: true,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '#sliderNext',
          prevEl: '#sliderPrev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          
        },
      });
}

export default swiper;