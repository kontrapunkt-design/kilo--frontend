'use restrict'
import gsap from 'gsap';


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
