'use strict';

import gsap from 'gsap'

export default class Hero {
  constructor() {
    this.name = 'hero'
    this.heroVideo = document.getElementById('heroVideo')
    this.heroBuffle = document.querySelector('.icon__buffle')
    console.log('%s module', this.name.toLowerCase())

    let _checkplay = ()=>{
      if(this.heroVideo.readyState >= 2){
        this.heroVideo.play();
        TweenMax.to(this.heroBuffle, 0.2, {
          opacity: 0
        })
      }else{
        this.heroVideo.pause();
        TweenMax.to(this.heroBuffle, 0.2, {
          opacity: 1
        })
      }
    }

    let _init = (()=>{
      this.heroVideo.addEventListener('loadstart', ()=>{
        TweenMax.to(this.heroBuffle, 0.2, {
          opacity: 1
        })
      });
      this.heroVideo.addEventListener('canplay', ()=>{
        TweenMax.to(this.heroBuffle, 0.2, {
          opacity: 0
        })
        console.log('streaming');
      });
    })()

  }
}
