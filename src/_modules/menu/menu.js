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
          bgColor = null,
          menuItemsActive = document.querySelector('.navigation .menu__list .active');
      if(document.body.classList.contains('page-index')){
        x = logo.getBoundingClientRect().left;
        bgColor = '#000000';
      }else{
        x = menuItemsActive.getBoundingClientRect().left;
        bgColor = '#ffffff';
        if(nav.classList.contains('top')){
          bgColor = '#ffffff';
        }else{
          bgColor = '#000000';
        }
      }
      return {
        x: x,
        bgColor: bgColor
      }
    }
    function initPos(){
      setTimeout(()=>{
        menuDash(posX().x, posX().bgColor, posX().bgColor).animation.play();
      }, 200);
    }

    let _init = (()=>{
      initPos();
    })();

    let _render = ()=>{
      console.log('render menu hover effect');
      menuItems.forEach((el)=>{
        el.addEventListener('mouseenter', ()=>{
          let x = el.getBoundingClientRect().left,
              bgColor = null;
          if(nav.classList.contains('top')){
            bgColor = '#ffffff';
          }else{
            bgColor = '#000000';
          }          
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
      logo.addEventListener('mouseleave', ()=>{
        initPos();
      });
      logo.addEventListener('mouseenter', ()=>{
        let x = logo.getBoundingClientRect().left;
        menuDash(x, '#000000').animation.play();
      });
    }

    return {
      render: _render
    }

  }
}
