'use restrict'
import gsap from 'gsap';
import $ from 'jquery';
import scrollToTop from './vendors/ScrollToPlugin';
import splitText from './vendors/SplitText';


export function menuDash(PosX, bgColor='#ffffff', InitbgColor='#ffffff'){
  let navDash = document.querySelector('.navigation .navigation__dash');

  let navDashTween = TweenMax.fromTo(navDash, 0.4, {
    scaleX: 1.5
  }, {
    scaleX: 1,
    left: PosX,
    backgroundColor: bgColor
  });

  let navDashAnimation = new TimelineMax().add(navDashTween)

  return {
    animation: navDashAnimation
  }

}

export function projectsLoad(){
  let projects = document.querySelector('.collection--projects .projects');
  let project = document.querySelectorAll('.collection--projects .projects .thumbnail--project');
  let projectsTween = TweenMax.to(projects, 0.2, {
    opacity:1
  });
  let projectTween = TweenMax.staggerFromTo(project, 0.4, {
    opacity:0,
    y: 20,
  }, {
    opacity:1,
    y: -0,
  }, 0.05);
  let projectsAnimation = new TimelineMax().add(projectsTween).add(projectTween)
  return {
    animation: projectsAnimation
  }
}

export function thumbnailWipeSeq(){
  let el = document.querySelector('.clickedEl');
  let elContents = document.querySelectorAll('.clickedEl .thumbnail--project__content > *');
  let wipe = document.querySelector('.wipe');
  let wipePercentage = document.querySelector('.wipe .wipe__loading__text');
  let wipeDash = document.querySelector('.wipe .wipe__loading__dash');

  let thumbnailContentsTween = TweenMax.staggerFromTo(elContents, 0.4, {
    y:0,
  }, {
    y:200,
  }, 0.1);

  let thumbnailWipeTween = TweenMax.fromTo(wipe, 0.4, {
    display: 'none',
    opacity: 0,
    scaleX: 0,
  }, {
    display: 'flex',
    opacity: 1,
    scaleX: 1,
  })

  let wipeDashTween = TweenMax.fromTo(wipeDash, 0.2, {
    width: 150,
  }, {
    width: 0,
    delay: 0.1,
  })

  let thumbnailWipeAnimation = new TimelineMax()
  .add(thumbnailContentsTween)
  .add(thumbnailWipeTween)
  .add(wipeDashTween);


  return {
    animation: thumbnailWipeAnimation,
  }

}

export function thumbnailExpandSeq(targetX, targetY, targetWidth,targetHeight){
  let wipe = document.querySelector('.wipe')
  let collectionProjects = document.querySelector('.collection--projects');

  let thumbnailWipeTweenExp = TweenMax.fromTo(wipe, 0.5, {
    // top: targetY,
    // left: targetX,
    // width: targetWidth,
    // height: targetHeight,
    left: 0,
    top:0,
    x: 0
  },
    {
    // top: 0,
    // left: 0,
    // width: window.innerWidth,
    // height: window.innerHeight,
    left: 0,
    top:0,
    x: window.innerWidth,
    onComplete: function(){
    }
  })


  let collectionProjectsTween = TweenMax.fromTo(collectionProjects, 0.4, {
    opacity: 1,
  }, {
    opacity: 0,
  })

  let scrollToTopTween = TweenMax.to(window, 0.2, {
    scrollTo: 0,
  })


  let thumbnailWipeTweenFade = TweenMax.to(wipe, 0.4, {
    opacity: 0,
    delay: 0.2,
    display: 'none',
    onComplete: function(){
    }
  })



  let thumbnailWipeExpAnimation = new TimelineMax()
  .add(thumbnailWipeTweenExp)
  .add(collectionProjectsTween)
  // .add(thumbnailWipeTweenWipe)
  .add(scrollToTopTween)
  .add(thumbnailWipeTweenFade);

  return {
    animation: thumbnailWipeExpAnimation,
  }
}


export function heroProjectLoadSeq(){
  let hero = document.querySelector('.hero--project');
  let heroTitle = document.querySelector('.hero--project .hero--project__content .title');
  let heroUsp = document.querySelector('.hero--project .hero--project__content .usp p');
  let heroMeta = document.querySelector('.hero--project .hero--project__content .meta-group');
  let heroMedia = document.querySelector('.hero--project .hero--project__media');
  let heroMediaImg = document.querySelector('.hero--project .hero--project__media img');
  let heroContent = document.querySelector('.hero--project .hero--project__content');

  let heroTitleSplitTx = new SplitText(heroTitle, {
    type: 'lines',
    wordClass: 'line line++'
  });

  // let heroUspSplitLn = new SplitText(heroUsp, {
  //   type: 'lines',
  //   wordClass: 'line line++'
  // });

  $(heroTitleSplitTx.lines).each(function(index, el) {
    $(el)
    .wrapInner('<span class="word__text"></span>')
    .append('<span class="word__dash"></span>');

    const text = $(el).find('.word__text');
    const dash = $(el).find('.word__dash');

    TweenMax.set($(el), {
      display: 'block',
      overflow: 'hidden',
    });

    TweenMax.set(text, {
      display: 'inline-block',
      opacity: 0,
      y: -5,
      x: -20
    });
    TweenMax.set(dash, {
      display: 'block',
      position: 'absolute',
      backgroundColor: '#fefefe',
      top: '0',
      scaleX: '0',
      transformOrigin: 'center left',
      width: text.innerWidth(),
      height: text.innerHeight()+20,
      opacity: 0
    });
  });

  TweenMax.set([heroUsp], {
    display: 'block',
    opacity: 0,
    x: -20
  });

  TweenMax.set(heroContent, {
    opacity: 0,
  });

  let heroTitleTx = document.querySelectorAll('.hero--project .title .word__text');
  let heroTitleDash = document.querySelectorAll('.hero--project .title .word__dash');

  let heroTween = TweenMax.fromTo(hero, 0.4, {
    opacity: 0
  }, {
    opacity: 1
  });
  let heroMediaTween = TweenMax.fromTo(heroMedia, 0.5, {
    y: 0,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  });
  let heroContentTween = TweenMax.to(heroContent, 0.6, {
    opacity: 1,
  });
  let heroMediaImgTween = TweenMax.to(heroMediaImg, 4, {
    scale: 1.02,
  });

  let heroTitleDashTween = TweenMax.staggerTo(heroTitleDash, 0.4,{
    scaleX: 1,
    opacity: 1,
    onComplete: ()=>{
      TweenMax.staggerTo(heroTitleDash, 0.2, {
        xPercent: '100%',
        scaleX: 0,
        // opacity: 0,
        delay: 0.2,
        onComplete: ()=>{
          TweenMax.staggerTo(heroTitleTx, 0.4, {
            opacity: 1,
            x: 0,
            onComplete: ()=>{
              TweenMax.staggerTo([heroUsp], 0.2, {
                opacity: 1,
                x: 0
              },0.05)
            }
          }, 0.05);
        }
      }, 0.1);
    }
  }, 0.05);

  let heroAnimation = new TimelineMax()
  .add(heroTween)
  .add(heroMediaTween)
  .add([heroContentTween, heroTitleDashTween]);

  return {
    animation: heroAnimation
  }

}

export function pageWipeSeq(callback){
  let wipe = document.querySelector('.wipe'),
      page = document.querySelector('.site__body'),
      wipeDash = document.querySelector('.wipe .wipe__loading__dash');

  let pageFadeTween = TweenMax.to(page, 0.4, {
    opacity: 0,
  });

  let pageWipeTween = TweenMax.fromTo(wipe, 0.4, {
    display: 'none',
    opacity: 0,
    scaleX: 0,
  }, {
    display: 'flex',
    opacity: 1,
    scaleX: 1,
  })

  let wipeDashTween = TweenMax.fromTo(wipeDash, 0.2, {
    width: 150,
  }, {
    width: 0,
    delay: 0.05,
    onComplete: ()=>{
      callback;
    }
  })

  let pageWipeAnimation = new TimelineMax()
  .add(pageFadeTween)
  .add(pageWipeTween)
  .add(wipeDashTween);

  return {
    animation: pageWipeAnimation
  }

}


export function pageLoadingSeq(callback){
  let wipe = document.querySelector('.wipe'),
      page = document.querySelector('.site__body'),
      wipeDash = document.querySelector('.wipe .wipe__loading__dash');

  let pageFadeInTween = TweenMax.fromTo(page, 0.4, {
    opacity: 0,
  },{
    opacity: 1,
    onComplete: ()=>{
      TweenMax.to(wipe, 0.2, {
        display: 'none',
        opacity: 0,
        onComplete: ()=>{
          callback;
        }
      })
    }
  });

  let pageWipeTween = TweenMax.fromTo(wipe, 0.4, {
    display: 'none',
    opacity: 1,
  }, {
    display: 'flex',
    opacity: 0,
  })

  let wipeDashTween = TweenMax.fromTo(wipeDash, 0.2, {
    width: 0,
  }, {
    width: 150,
  })

  let pageWipeAnimation = new TimelineMax()
  .add(pageWipeTween)
  .add(wipeDashTween)
  .add(pageFadeInTween);

  return {
    animation: pageWipeAnimation
  }

}


export function thumbnailProjectHoverSeq(el, elTitle, elMeta, elOverlay, elImg){

  let tweenOverlay = TweenMax.fromTo(elOverlay, 0.2, {
    opacity: 0
  }, {
    opacity: 0.75
  })

  let tween = TweenMax.fromTo(el, 0.2, {
    x: -100,
    opacity:0
  }, {
    x: 0,
    opacity:1
  })

  let tweenChildren = TweenMax.staggerFromTo([elTitle, elMeta], 0.2, {
    x: -20,
    opacity:0
  }, {
    x: 0,
    opacity:1
  }, 0.05)

    let tweenImg = TweenMax.fromTo(elImg, 0.5, {
      scale: 1
    }, {
      scale: 1.2
    })


  let animation = new TimelineMax().add([tweenOverlay, tween]).add(tweenChildren).add(tweenImg, 0.2);

  return {
    animation : animation
  }

}


export function scrollSeq(el){
  let tweenScroll = TweenMax.staggerFromTo(el, 0.4, {
    opacity: 0,
    y: 20
  }, {
    opacity: 1,
    y: 0
  }, 0.05)
  let animationScroll = new TimelineMax().add(tweenScroll).pause();

  return {
    animation: animationScroll
  }

}
