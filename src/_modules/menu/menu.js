'use strict';
import $ from 'jquery';
import {menuDash} from '../../_scripts/globalAnimations';

export default class Menu {
  constructor() {
    this.name = 'menu';
    console.log('%s module', this.name.toLowerCase());
    let nav = document.querySelector('.navigation'),
        menu = document.querySelector('.navigation .menu'),
        menuItems = document.querySelectorAll('.navigation .menu .menu__list__item'),
        logo = document.querySelector('.navigation .logo'),
        navDash = document.querySelector('.navigation .navigation__dash');

    // let menuItemsActive = document.querySelector('.navigation .menu__list .active')


    let posX = ()=>{
      let x = null,
          y = 0,
          bgColor = '#ffffff',
          menuItemsActive = document.querySelector('.navigation .menu__list .active'),
          menuItemProject = document.querySelector('.navigation .menu__list .projects');
      if(document.body.classList.contains('page-index')){
        x = menuItemProject.getBoundingClientRect().left;
        y = -navDash.offsetHeight;
      }else{
        x = menuItemsActive.getBoundingClientRect().left;
      }
      return {
        x: x,
        y: y,
        bgColor: bgColor
      }
    }

    function initPos(){
      setTimeout(()=>{
        menuDash(posX().x, posX().y, posX().bgColor, posX().bgColor).animation.play();
      }, 200);
    }

    let _init = (()=>{
      initPos();
    })();

    let _render = ()=>{
      console.log('render menu hover effect');
      initPos();
      menuItems.forEach((el)=>{
        el.addEventListener('mouseenter', ()=>{
          let x = el.getBoundingClientRect().left,
              bgColor = '#ffffff';
          menuDash(x, bgColor, bgColor).animation.play();
        });
        el.addEventListener('click', ()=>{
          $(el).siblings().removeClass('active');
          el.classList.add('active');
        });
      });
      menu.addEventListener('mouseleave', ()=>{
        initPos();
      });
      logo.addEventListener('click', ()=>{
        initPos();
      })
    }

    return {
      render: _render
    }

  }
}
