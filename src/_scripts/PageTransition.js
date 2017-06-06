import Barba from 'barba.js';
import imagesLoaded from 'imagesloaded';
import {thumbnailWipeSeq, thumbnailExpandSeq, pageWipeSeq, pageLoadingSeq } from './globalAnimations';

export default()=>{

  var lastElementClicked;

  Barba.Dispatcher.on('linkClicked', function(el) {
    lastElementClicked = el;
  });

  let _wipeInit = (target)=>{

    if(target === 'thumbnail--project'){

      let myWipeText = document.querySelector('.wipe .wipe__loading__text'),
          myWipe = document.querySelector('.wipe'),
          myWipeDash = document.querySelector('.wipe .wipe__loading__dash'),
          // targetWidth = lastElementClicked.offsetWidth,
          // targetHeight = lastElementClicked.offsetHeight,
          targetWidth = window.innerWidth,
          targetHeight = window.innerHeight,
          targetColor = lastElementClicked.getAttribute('data-bgColor');

        myWipe.style.position = 'fixed';
        // myWipe.style.top = lastElementClicked.getBoundingClientRect().top + 'px';
        // myWipe.style.left = lastElementClicked.getBoundingClientRect().left + 'px';
        myWipe.style.top = 0 + 'px';
        myWipe.style.left = 0 + 'px';
        myWipe.style.width = targetWidth +'px';
        myWipe.style.height = targetHeight +'px';
        if(targetColor){
          myWipe.style.backgroundColor = targetColor;
          myWipeText.style.color = '#ffffff';
          myWipeDash.style.backgroundColor = '#ffffff';
        } else {
          myWipe.style.backgroundColor = '#ffffff';
          myWipeText.style.color = '#000000';
          myWipeDash.style.backgroundColor = '#000000';
        }

      }else if(target === 'menu__list__item'){

        let myWipeText = document.querySelector('.wipe .wipe__loading__text'),
            myWipe = document.querySelector('.wipe'),
            myWipeDash = document.querySelector('.wipe .wipe__loading__dash'),
            targetWidth = window.innerWidth,
            targetHeight = window.innerHeight,
            targetColor = lastElementClicked.getAttribute('data-bgColor');

        myWipe.style.position = 'fixed';
        myWipe.style.top = 0;
        myWipe.style.left = 0;
        myWipe.style.width = targetWidth +'px';
        myWipe.style.height = targetHeight +'px';
        if(targetColor){
          myWipe.style.backgroundColor = targetColor;
          myWipeText.style.color = '#ffffff';
          myWipeDash.style.backgroundColor = '#ffffff';
        } else {
          myWipe.style.backgroundColor = '#ffffff';
          myWipeText.style.color = '#000000';
          myWipeDash.style.backgroundColor = '#000000';
        }
    }
  }

  //////////////////////////////////
  //*to single project transition*//
  //////////////////////////////////

  let toProjectTransition = Barba.BaseTransition.extend({

    start: function(){
      _wipeInit('thumbnail--project');

      Promise
        .all([this.newContainerLoading, this.thumbnailWipe()])
        .then(this.showNewPage.bind(this));
    },
    thumbnailWipe: function(){
      let deferred = Barba.Utils.deferred();
      document.body.style.overflow = 'hidden';
      //get wipe transiton here
      let targetHeight = lastElementClicked.offsetHeight;
      thumbnailWipeSeq().animation.play();
      deferred.resolve()
      return deferred.promise;
    },
    showNewPage: function(){
      let targetWidth = lastElementClicked.offsetWidth;
      let targetHeight = lastElementClicked.offsetHeight;
      let targetX = lastElementClicked.getBoundingClientRect().left;
      let targetY = lastElementClicked.getBoundingClientRect().top;

      let newContainerImgLoad = new imagesLoaded(this.newContainer);
      let myWipeText = document.querySelector('.wipe__loading__text')
      newContainerImgLoad.on('progress', (instance, image)=>{
        var result = image.isLoaded ? 'loaded' : 'broken';
        let percentComplete = instance.progressedCount/instance.images.length;
        myWipeText.innerHTML = Math.floor(percentComplete*100) + '%';
      });
      newContainerImgLoad.on('done', ()=>{
        // thumbnailExpandSeq(targetX, targetY, targetWidth, targetHeight).animation.play();
        thumbnailExpandSeq().animation.play();
        this.done();
        // thumbnailExpandSeq().animation.eventCallback('onComplete', function(){
        //   this.newContainer.style.visibility = 'visible';
        //   document.body.style.overflow = 'auto';
        // })
        setTimeout(()=>{
          this.newContainer.style.visibility = 'visible';
          document.body.style.overflow = 'auto';
        }, 1200)
      });
    },
  });

  let toHomeTransition = Barba.BaseTransition.extend({
    start: function(){
      _wipeInit('menu__list__item');
      Promise
        .all([this.newContainerLoading, this.fadeback()])
        .then(this.showNewPage.bind(this));
    },
    fadeback: function(){
      let deferred = Barba.Utils.deferred();
      document.body.style.overflow = 'hidden';
      //get fadeback transiton here
      pageWipeSeq(
        deferred.resolve()
      ).animation.play();
      return deferred.promise;
    },
    showNewPage: function(){
      let newContainerImgLoad = new imagesLoaded(this.newContainer);
      let myWipe = document.querySelector('.wipe')
      let myWipeText = document.querySelector('.wipe__loading__text')
      newContainerImgLoad.on('progress', (instance, image)=>{
        var result = image.isLoaded ? 'loaded' : 'broken';
        let percentComplete = instance.progressedCount/instance.images.length;
        myWipeText.innerHTML = Math.floor(percentComplete*100) + '%';
      });
      newContainerImgLoad.on('done', ()=>{
        document.body.style.overflow = 'auto';
        pageLoadingSeq(
          this.done()
        ).animation.play();
      });
    }
  });


  Barba.Pjax.getTransition = function() {
  let transitionObj = toHomeTransition;
  console.log(lastElementClicked);

  if (lastElementClicked.classList.contains('thumbnail--project__target')){
    transitionObj = toProjectTransition;
    console.log('***to project***');
  } else if (lastElementClicked.classList.contains('menu__list__item__target')){
    transitionObj = toHomeTransition;
    console.log('***to other page***');
  }

    // if (Barba.HistoryManager.prevStatus().namespace === 'singleProject') {
    //   transitionObj = toProjectTransition;
    // }
    return transitionObj;
  };

}
