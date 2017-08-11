'use strict';
import ScrollMagic from 'ScrollMagic';
import TweenMax from 'animation.TweenMax';
import addIndicators from 'debug.addIndicators';

export default class HeroProject {
  constructor() {
    this.name = 'hero--project';
    console.log('%s module', this.name.toLowerCase());

    let heroController = new ScrollMagic.Controller();
    let heroScene = new ScrollMagic.Scene({
    });


    let _init = ()=>{
    };

    let _render = ()=>{

      const heroMedia = document.querySelector('.hero--project__media');
      const heroMediaImg = document.querySelector('.hero--project__media img');
      const heroContent = document.querySelector('.hero--project__content');
      const heroTitle = document.querySelector('.hero--project__content .title');
      const heroUSP = document.querySelector('.hero--project__content .usp');

      const animationDuration = heroMedia.offsetHeight*0.5;


      const tweenContent = TweenMax.staggerFromTo([heroUSP, heroTitle], 1, {
        // y: 0,
        opacity:1,
      }, {
        // y: heroContent.offsetHeight+100,
        opacity:0,
      }, 0.05)
      const tweenMediaImg = TweenMax.fromTo(heroMediaImg, 1, {
        scale: 1.02
      }, {
        scale: 1.1
      })
      const tweenMedia = TweenMax.fromTo(heroMedia, 1.5, {
        opacity: 1,
      }, {
        opacity: 0,
      })

      const animation = new TimelineMax().add([tweenMedia, tweenContent, tweenMediaImg]);


      heroScene = new ScrollMagic.Scene({
        triggerElement: heroMedia,
        offset: heroMedia.offsetHeight*0.5,
        duration: animationDuration,
        triggerHook: 0,
        tweenChanges: true
      })
      .setTween(animation)
      // .addIndicators({
      //   name: 'hero'
      // })
      .addTo(heroController);

    };

    let _destroy = ()=>{
      heroScene.destroy(true);
    };


    return {
      render : _render,
      destroy : _destroy
    }

  }
}
