'use strict';
import scrollMonitor from 'scrollmonitor';
import {scrollSeq} from '../../_scripts/globalAnimations'

export default class ProjectMetaInfo {
  constructor() {
    this.name = 'project__meta-info';
    console.log('%s module', this.name.toLowerCase());

    let metaInfo = document.querySelector('.project__meta-info');
    let metaInfoLsItems = document.querySelectorAll('.project__meta-info .meta');
    let metaInfoWatcher = scrollMonitor.create(metaInfo, -100 );
    TweenMax.set(metaInfoLsItems, {
      opacity: 0,
      y: 50
    })


    metaInfoWatcher.enterViewport(()=>{
      metaInfo.classList.add('entered');
      scrollSeq(metaInfoLsItems).animation.play();
    })
    metaInfoWatcher.exitViewport(()=>{
      metaInfo.classList.remove('entered');
      scrollSeq(metaInfoLsItems).animation.reverse(0);
    })

  }
}
