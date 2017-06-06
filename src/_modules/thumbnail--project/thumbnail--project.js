'use strict';
import gsap from 'gsap';
import {thumbnailProjectHoverSeq} from '../../_scripts/globalAnimations';

export default class ThumbnailProject {
  constructor() {
    this.name = 'thumbnail--project';
    console.log('%s module', this.name.toLowerCase());

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function(callback, argument) {
        argument = argument || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(argument, this[i], i, this);
        }
      };
    }

    const projects = document.querySelectorAll('.thumbnail--project'),
          projectsContent = document.querySelectorAll('.thumbnail--project .thumbnail--project__content'),
          projectsOverlay = document.querySelectorAll('.thumbnail--project .overlay');

    let _init = (()=>{
      TweenMax.set([projectsContent, projectsOverlay], {
        opacity: 0
      })
    })();

    let _render = ()=>{
      projects.forEach((el)=>{
        let elContent = el.getElementsByClassName('thumbnail--project__content');
        let elMediaImg = el.getElementsByTagName('img');
        let elContentTitle = el.getElementsByClassName('title');
        let elContentMeta = el.getElementsByClassName('meta');
        let elContentOverlay = el.getElementsByClassName('overlay');
        el.addEventListener('mouseenter', ()=>{
          thumbnailProjectHoverSeq(elContent,elContentTitle, elContentMeta, elContentOverlay, elMediaImg)
          .animation.play();
        })
        el.addEventListener('mouseleave', ()=>{
          thumbnailProjectHoverSeq(elContent, elContentTitle, elContentMeta, elContentOverlay, elMediaImg)
          .animation.reverse(0).timeScale(1.5);
        })
      });
    }

    return {
      render : _render
    }

  }
}
