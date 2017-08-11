'use strict';
import scrollMonitor from 'scrollmonitor'
import swiper from 'swiper'
import imagesLoaded from 'imagesloaded'
import {scrollSeq} from '../../_scripts/globalAnimations'

export default class ProjectMetaInfo {
  constructor() {
    this.name = 'project__meta-info';
    console.log('%s module', this.name.toLowerCase());

    const metaInfo = document.querySelector('.project__meta-info');
    const metaInfoLsItems = document.querySelectorAll('.project__meta-info .meta');
    const metaInfoWatcher = scrollMonitor.create(metaInfo, -100 );
    const sliders = document.querySelectorAll('.swiper-container');
    const slidersImgLoad = new imagesLoaded(sliders);

    TweenMax.set(metaInfoLsItems, {
      opacity: 0,
      y: 50
    })

    metaInfoWatcher.enterViewport(()=>{
      metaInfo.classList.add('entered');
      scrollSeq(metaInfoLsItems).animation.play();
    })
    metaInfoWatcher.exitViewport(()=>{
      metaInfo.classList.remove('entered');
      scrollSeq(metaInfoLsItems).animation.reverse(0);
    })

    slidersImgLoad.on('done', ()=>{
      let mySwiper = new Swiper(sliders, {
        slidesPerView: 'auto',
        direction: 'vertical',
        loop: true,
        autoHeight: true,
        setWrapperSize: true,
        autoplay: 3000,
        speed: 600,
        autoplayDisableOnInteraction: false
      })
    })



  }
}
