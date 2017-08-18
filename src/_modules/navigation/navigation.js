'use strict';
import {navScrollSeq} from '../../_scripts/globalAnimations'
import _ from 'lodash'
import scrollDir from 'scrolldir'


export default class Navigation {
  constructor() {
    this.name = 'navigation';
    console.log('%s module', this.name.toLowerCase());
    let nav = document.querySelector('.navigation');
    let navLogo = document.querySelector('.navigation .logo');
    let navChildren = document.querySelectorAll('.navigation .menu__list__item');
    let navDash = document.querySelector('.navigation .navigation__dash');
    let lastScrollTop = 0;

    function isOnTop(){
      let windowScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if(windowScrollTop>0){
        nav.classList.remove('top')
        TweenMax.to(nav, 0.2, {
          backgroundColor : 'rgba(0,0,0,0.7)',
        });
      }else{
          nav.classList.add('top');
          if (document.body.classList.contains('page-news')) {
            TweenMax.to(nav, 0.2, {
              backgroundColor : 'rgba(0,0,0,0.7)',
            });
          } else {
            TweenMax.to(nav, 0.2, {
              backgroundColor : 'rgba(0,0,0,0)',
            });
          }
      }
    }

    let _init = function(){
      isOnTop();
    };



    let _scroll = function(){
      let timer = null;
      window.addEventListener('scroll', _.throttle(()=>{
        isOnTop();
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
          navScrollSeq().animationDown.play();
        } else {
          navScrollSeq().animationUp.play();
        }
        lastScrollTop = st;
      }, 500), false);
    }()

    return {
      init: _init
    }

  }
}
