'use strict';

import {scrollSeq} from '../../_scripts/globalAnimations';

export default class Loading {
  constructor() {
    this.name = 'loading';
    console.log('%s module', this.name.toLowerCase());


    const loading = document.querySelector('.container--load')
    const buttonEl = document.querySelectorAll('.button--load >*');

    const loadingBtnWatcher = scrollMonitor.create(loading, -100 );

    TweenMax.set(buttonEl, {
      opacity: 0,
      y: 50
    })

    loadingBtnWatcher.enterViewport(()=>{
      loading.classList.add('entered');
      scrollSeq(buttonEl).animation.play();
    })
    loadingBtnWatcher.exitViewport(()=>{
      loading.classList.remove('entered');
      scrollSeq(buttonEl).animation.reverse(0);
    })


  }
}
