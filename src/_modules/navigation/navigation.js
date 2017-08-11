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

    function isOnTop(){
      let windowScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if(windowScrollTop>0){
        nav.classList.remove('top')
        TweenMax.to(nav, 0.2, {
          backgroundColor : 'rgba(0,0,0,1)',
        });
      }else{
          nav.classList.add('top');
          if (document.body.classList.contains('page-news')) {
            TweenMax.to(nav, 0.2, {
              backgroundColor : 'rgba(0,0,0,1)',
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

    let dScroll = _.debounce(()=>{
      isOnTop();
    }, 200);


    let _scroll = function(){
      let timer = null;
      window.addEventListener('scroll', ()=>{
        dScroll();
        if (timer !==null){
          clearTimeout(timer);
          nav.classList.add('scrolling');
          navScrollSeq().animation.reverse();
        }
        timer = setTimeout(()=>{
          nav.classList.remove('scrolling');
          navScrollSeq().animation.play();
        }, 200)
      }, false);
    }()

    return {
      init: _init
    }

  }
}
