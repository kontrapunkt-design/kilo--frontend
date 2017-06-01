'use strict';
import imagesLoaded from 'imagesloaded';
import swiper from 'swiper';

export default class MultiColSlider {
  constructor() {
    this.name = 'multi-col-slider';
    console.log('%s module', this.name.toLowerCase());

    let sliders = document.querySelectorAll('.swiper-container');
    let targetH = document.querySelector('.swiper-container .swiper-wrapper .list__item').offsetHeight;

    let slidersImgLoad = new imagesLoaded(sliders);


    let init = (()=>{
      slidersImgLoad.on('done', ()=>{
        sliders.forEach((el, i)=>{
          el.style.height = targetH + 'px';
          let mySwiper = new Swiper(el, {
            slidesPerView: 1,
            direction: 'vertical',
            loop: true,
            autoplay: 3000 + i*100,
            speed: 600,
            autoplayDisableOnInteraction: false
          })
        });
      })
    })();

  }
}
