'use strict';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import ThumbnailProject from '../../_modules/thumbnail--project/thumbnail--project'
import $ from 'jquery';
import {projectsLoad} from '../../_scripts/globalAnimations';

export default class Collection {
  constructor() {
    this.name = 'collection';
    console.log('%s module', this.name.toLowerCase());
    let collectionProjects = document.querySelector('.collection--projects');
    let projects = document.querySelector('.collection--projects .projects');
    let project = '.collection--projects .projects .thumbnail--project';
    let projectImgLoad = new imagesLoaded(projects);
    let loadMoreBtn = document.getElementById('buttonLoadProjects');
    let loadingBar = document.querySelector('.loading .loading__bar');
    let loadingText = document.querySelector('.loading .loading__text');
    let containerLoad = document.querySelector('.container--load');
    let projectArhiveUrl = '../projects-archive/index.html';

    let layoutOptions = {
      itemSelector: project,
      percentPosition: true,
      masonry: {
        columnWidth: project
      }
    }

    let myThumbnailProject = new ThumbnailProject();
    let projectsIso = new Isotope(projects);

    let _init = (()=>{
      projectImgLoad.on('done', ()=>{
        projectsIso.layout(layoutOptions);
        TweenMax.to(collectionProjects, 0.4, {
          opacity: 1
        });
        myThumbnailProject.render();
      })
    })();


    let _render = ()=>{
      loadMoreBtn.addEventListener('click', ()=>{

        $.ajax({

          xhr: function()
            {
              var xhr = new window.XMLHttpRequest();
              xhr.addEventListener("progress", function(evt){
                if (evt.lengthComputable) {
                  var percentComplete = evt.loaded / evt.total;
                  console.log(percentComplete);
                }
              }, false);
              return xhr;
            },

            url: projectArhiveUrl,
            context: document.body,
            dataType: 'html',

            success: (data)=>{
              let moreProjects = $(data).find('.projects-archive .thumbnail--project');
              let $moreProjects = $(moreProjects);
              $('.collection--projects .projects').append($moreProjects);
              let moreProjectsImgLoaded = new imagesLoaded('.collection--projects .projects');
              let moreThumbnailProject = new ThumbnailProject();


              moreProjectsImgLoaded.on('progress', (instance, image)=>{
                var result = image.isLoaded ? 'loaded' : 'broken';
                let percentComplete = instance.progressedCount/instance.images.length;
                loadingBar.style.width = percentComplete*100 + '%';
                loadingText.innerHTML = Math.floor(percentComplete*100) + '%';
                loadingText.style.left = percentComplete*100 + '%';
                loadMoreBtn.style.display = 'none';
              });
              moreProjectsImgLoaded.on('done', ()=>{
                $moreProjects.removeClass('archive');
                $moreProjects.show();
                projectsIso.appended($moreProjects);
                projectsIso.layout(layoutOptions);
                containerLoad.style.display = 'none';
                moreThumbnailProject.render();
              });

            }
        });
      });
    }

    return {
      render : _render
    }

  }
}
