'use strict';
import {scrollSeq} from '../../_scripts/globalAnimations';

export default class Footer {
  constructor() {
    this.name = 'footer';
    console.log('%s module', this.name.toLowerCase());

    const footerItems = [document.querySelector('.footer .address'),
                        document.querySelector('.footer .emails'),
                        document.querySelector('.footer .social-media')]

    const footer = document.querySelector('.footer');


    const footerWatcher = scrollMonitor.create(footer, -100 );

    TweenMax.set(footerItems, {
      opacity: 0,
      y: 50
    })

    footerWatcher.enterViewport(()=>{
      footer.classList.add('entered');
      scrollSeq(footerItems).animation.play();
    })
    footerWatcher.exitViewport(()=>{
      footer.classList.remove('entered');
      scrollSeq(footerItems).animation.reverse(0);
    })



  }
}
