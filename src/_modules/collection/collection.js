'use strict';
import Isotope from 'isotope-layout';


export default class Collection {
  constructor() {
    this.name = 'collection';
    console.log('%s module', this.name.toLowerCase());
    let projects = document.querySelector('.collection--projects .projects');
    let project = '.collection--projects .projects .thumbnail--project';

    let _init = (()=>{
      let projectsLayout = new Isotope(projects, {
        itemSelector: project,
        percentPosition: true,
        masonry: {
          columnWidth: project
        }
      })
    })();

  }
}
