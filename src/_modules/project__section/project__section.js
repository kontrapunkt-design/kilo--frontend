'use strict';
import ScrollMagic from 'ScrollMagic';
import TweenMax from 'animation.TweenMax';
import addIndicators from 'debug.addIndicators';


export default class ProjectSection {
  constructor() {
    this.name = 'project__section';
    console.log('%s module', this.name.toLowerCase());

    let sectionController = new ScrollMagic.Controller();
    let sectionScene = new ScrollMagic.Scene({
    });

    let sectionSideController = new ScrollMagic.Controller();
    let sectionSideScene = new ScrollMagic.Scene({
    });

    let sectionPinController = new ScrollMagic.Controller();
    let sectionPinScene = new ScrollMagic.Scene({
    });



    let _render = (sectionType)=>{
      const sectionDescription = document.querySelectorAll('.section__description p'),
            sectionDescriptionTitle = document.querySelector('.section__description .title'),
            sectionMediaImg = document.querySelector('.section__media img'),
            setionQuoteItems = document.querySelectorAll('.section__quote *'),
            section = document.querySelector('.project__section');

      const tweenDescriptionTitle = TweenMax.fromTo(sectionDescriptionTitle, 0.5, {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
      })
      const tweenDescription = TweenMax.staggerFromTo(sectionDescription, 0.5, {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
      }, 0.05)
      const animation = new TimelineMax()
      .add(tweenDescriptionTitle, 0.1)
      .add(tweenDescription, 0.2)
      .pause();
      sectionScene = new ScrollMagic.Scene({
        triggerElement: section,
        offset: 0,
        duration: window.innerHeight,
        triggerHook: 0.5,
        tweenChanges: true
      })
      .addIndicators({
        name: 'section'
      })
      .addTo(sectionController);

      sectionScene
      .on('enter', ()=>{
        animation.play();
      })
      .on('leave', ()=>{
        animation.reverse(0);
      });

      switch (sectionType) {
        case 'quoteType':
          const tweenQuoteItems = TweenMax.staggerFromTo(setionQuoteItems, 0.5, {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0
          }, 0.05);

          const animationSideQuote = new TimelineMax()
          .add(tweenDescriptionTitle, 0.1)
          .add(tweenDescription, 0.2)
          .add(tweenQuoteItems, 0.3)
          .pause()

          sectionSideScene = new ScrollMagic.Scene({
            triggerElement: section,
            offset: 0,
            duration: window.innerHeight,
            triggerHook: 0.5,
            tweenChanges: true
          })
          .addTo(sectionSideController);
          sectionSideScene
          .on('enter', ()=>{
            animationSideQuote.play();
          })
          .on('leave', ()=>{
            animationSideQuote.reverse(0);
          });

          break;
        default:

          sectionPinScene = new ScrollMagic.Scene({
            triggerElement: section,
            offset: 0,
            duration: window.innerHeight,
            triggerHook: 0.5,
            tweenChanges: true
          })
          .setPin(sectionMediaImg)
          .addTo(sectionController);

      }
    }

    let _destroy = ()=>{
      sectionScene.destroy(true);
      sectionSideScene.destroy(true);
      sectionPinScene.destroy(true);
    };

    return {
      render : _render,
      destroy : _destroy
    }

  }
}
