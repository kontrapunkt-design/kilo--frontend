import Barba from 'barba.js';
import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';
import {thumbnailWipeSeq, thumbnailExpandSeq, pageWipeSeq, pageLoadingSeq, navScrollSeq } from './globalAnimations';

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
          myWipe.style.backgroundColor = '#eeeeee';
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
      navScrollSeq().animationDown.reverse(0);
      deferred.resolve()
      return deferred.promise;
    },
    showNewPage: function(){
      let targetWidth = lastElementClicked.offsetWidth;
      let targetHeight = lastElementClicked.offsetHeight;
      let targetX = lastElementClicked.getBoundingClientRect().left;
      let targetY = lastElementClicked.getBoundingClientRect().top;

      let newContainerImgLoad = new imagesLoaded(this.newContainer);
      let myWipeLoading = document.querySelector('.wipe__loading')
      let myWipeText = document.querySelector('.wipe__loading__text')
      let myWipeBg = document.querySelector('.wipe__background')
      myWipeText.innerHTML = 'loading';
      TweenMax.set(myWipeBg, {
        scaleX: 0,
      });
      TweenMax.set(myWipeLoading, {
        left: 0,
      })
      newContainerImgLoad.on('progress', (instance, image)=>{
        var result = image.isLoaded ? 'loaded' : 'broken';
        let percentComplete = instance.progressedCount/instance.images.length;
        myWipeText.innerHTML = Math.floor(percentComplete*100) + '%';
        TweenMax.to(myWipeBg, 0.1, {
          scaleX: percentComplete,
        });
        TweenMax.to(myWipeLoading, 0.1, {
          left: Math.floor(window.innerWidth * percentComplete)
        });
      });
      newContainerImgLoad.on('done', ()=>{
        thumbnailExpandSeq().animation.play();
        myWipeText.innerHTML = 'loading';
        this.done();
        setTimeout(()=>{
          TweenMax.set(myWipeBg, {
            scaleX: 0,
          });
          TweenMax.set(myWipeLoading, {
            left: 0,
          });
          navScrollSeq().animationUp.play();
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
      document.body.style.overflow = null;
      //get fadeback transiton here
      pageWipeSeq(
        deferred.resolve()
      ).animation.play();
      navScrollSeq().animationDown.play(0);
      return deferred.promise;
    },
    showNewPage: function(){
      let newContainerImgLoad = new imagesLoaded(this.newContainer);
      let myWipeLoading = document.querySelector('.wipe__loading')
      let myWipeText = document.querySelector('.wipe__loading__text');
      let myWipeBg = document.querySelector('.wipe__background')
      myWipeText.innerHTML = 'loading';
      TweenMax.set(myWipeBg, {
        scaleX: 0,
      });
      TweenMax.set(myWipeLoading, {
        left: 0,
      })
      newContainerImgLoad.on('progress', (instance, image)=>{
        var result = image.isLoaded ? 'loaded' : 'broken';
        let percentComplete = instance.progressedCount/instance.images.length;
        myWipeText.innerHTML = Math.floor(percentComplete*100) + '%';
        console.log('loading' + percentComplete);
        TweenMax.to(myWipeBg, 0.1, {
          scaleX: percentComplete,
        });
        TweenMax.to(myWipeLoading, 0.1, {
          left: Math.floor(window.innerWidth * percentComplete)
        });
      });
      newContainerImgLoad.on('done', ()=>{
        document.body.style.overflow = 'auto';
        myWipeText.innerHTML = 'loading';
        TweenMax.set(myWipeBg, {
          scaleX: 0,
        });
        TweenMax.set(myWipeLoading, {
          left: 0,
        });
        this.done()
        navScrollSeq().animationUp.play(0);
        pageLoadingSeq().animation.play();
      });
    }
  });


  Barba.Pjax.getTransition = function() {
  let transitionObj = toHomeTransition;
  console.log(lastElementClicked);

  if (lastElementClicked.classList.contains('thumbnail--project__target')){
    // transitionObj = toProjectTransition;
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
