'use strict';

export default class Navigation {
  constructor() {
    this.name = 'navigation';
    console.log('%s module', this.name.toLowerCase());
    let nav = document.querySelector('.navigation');

    function isOnTop(){
      let windowScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if(windowScrollTop>0){
        nav.classList.remove('top');
      }else{
        nav.classList.add('top');
      }
    }

    let _init = function(){
      isOnTop();
    }();

    let _scroll = function(){
      let timer = null;
      window.addEventListener('scroll', ()=>{
        isOnTop();
        if (timer !==null){
          clearTimeout(timer);
          nav.classList.add('scrolling');
        }
        timer = setTimeout(()=>{
          nav.classList.remove('scrolling');
        }, 250)
      }, false);
    }()

    return {
    }

  }
}
