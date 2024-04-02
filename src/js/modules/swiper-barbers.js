import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperBarb () {
    const swiper = new Swiper('#barbers-slide', {
        direction: 'horizontal',
        // autoplay: {delay: 2000},
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, //перекл с послед на 1
        grabCursor: true,
        a11y: false,
        freeMode: true,

        
        navigation: {
          nextEl: '#sliderNext',
          prevEl: '#sliderPrev',
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
          
      });
}

export default swiperBarb;