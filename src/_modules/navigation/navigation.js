'use strict';

export default class Navigation {
  constructor() {
    this.name = 'navigation';
    console.log('%s module', this.name.toLowerCase());
    let nav = document.querySelector('.navigation');
    let navDash = document.querySelector('.navigation .navigation__dash');

    function isOnTop(){
      let windowScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if(windowScrollTop>0){
        nav.classList.remove('top');
        navDash.style.backgroundColor = '#000000'
      }else{
        nav.classList.add('top');
        navDash.style.backgroundColor = '#ffffff'
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
