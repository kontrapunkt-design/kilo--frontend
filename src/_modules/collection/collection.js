'use strict';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import {projectsLoad} from '../../_scripts/globalAnimations';

export default class Collection {
  constructor() {
    this.name = 'collection';
    console.log('%s module', this.name.toLowerCase());
    let projects = document.querySelector('.collection--projects .projects');
    let project = '.collection--projects .projects .thumbnail--project';
    let projectImgLoad = new imagesLoaded(projects);

    let layoutOptions = {
      itemSelector: project,
      percentPosition: true,
      masonry: {
        columnWidth: project
      }
    }

    let projectsLayout = new Isotope(projects);

    let _init = (()=>{
      projectImgLoad.on('done', ()=>{
        projectsLayout.layout(layoutOptions);
        projectsLoad().animation.play();
      })
    })();


  }
}
