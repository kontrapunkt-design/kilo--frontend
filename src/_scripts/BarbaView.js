import $ from 'jquery';
import Barba from 'barba.js';
import Navigation from '../_modules/navigation/navigation';
import Menu from '../_modules/menu/menu';
import Hero from '../_modules/hero/hero';
import Collection from '../_modules/collection/collection';
import HeroProject from '../_modules/hero--project/hero--project';
import ProjectSection from '../_modules/project__section/project__section';
import ProjectMetaInfo from '../_modules/project__meta-info/project__meta-info';
import ThumbnailProject from '../_modules/thumbnail--project/thumbnail--project';
import Loading from '../_modules/loading/loading';
import MultiColSlider from '../_modules/multi-col-slider/multi-col-slider';
import {heroProjectLoadSeq, projectsLoad} from './globalAnimations';

export default()=>{

  let projectHero = new HeroProject();
  let projectSection = new ProjectSection();
  let siteNavigation = new Navigation();
  let siteMenu = new Menu();
  //////////////////////////////////
  //************HOME*************//
  //////////////////////////////////
  let Home = Barba.BaseView.extend({
    namespace: 'template-home.php',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-index');
        $('.navigation .menu__list .menu__list__item').removeClass('active');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-single-news');
        document.body.classList.remove('page-projects');
        document.body.classList.remove('page-about');
        projectHero.destroy();
        projectSection.destroy();
  },
    onEnterCompleted: function() {
        // The Transition has just finished.
        siteNavigation.init();
        siteMenu.render();
        let ProjectCollection = new Collection();
        let SiteHero = new Hero();
        projectsLoad().animation.play()
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  // Don't forget to init the view!
  Home.init();
  //////////////////////////////////
  //************PROJECTS*************//
  //////////////////////////////////
  let Projects = Barba.BaseView.extend({
    namespace: 'template-work.php',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-projects');
        document.querySelector('.navigation .menu__list .projects').classList.add('active');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-single-news');
        document.body.classList.remove('page-about');
        document.body.classList.remove('page-project');
        projectHero.destroy();
        projectSection.destroy();
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        siteNavigation.init();
        siteMenu.render();
        let ProjectCollection = new Collection();
        projectsLoad().animation.play()
        ProjectCollection.render();
        let myLoading = new Loading();
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  // Don't forget to init the view!
  Projects.init();
  //////////////////////////////////
  //************ABOUT*************//
  //////////////////////////////////
  let About = Barba.BaseView.extend({
    namespace: 'template-about.php',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-about');
        document.querySelector('.navigation .menu__list .about').classList.add('active');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-single-news');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-projects');
        document.body.classList.remove('page-project');
        projectHero.destroy();
        projectSection.destroy();
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        siteNavigation.init();
        siteMenu.render();
        let SiteHero = new Hero();
        let SiteMultiColSlider = new MultiColSlider();
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  // Don't forget to init the view!
  About.init();
  //////////////////////////////////
  //************NEWS*************//
  //////////////////////////////////
  let News = Barba.BaseView.extend({
    namespace: 'template-news.php',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-news');
        document.querySelector('.navigation .menu__list .news').classList.add('active');
        document.body.classList.remove('page-about');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-single-news');
        document.body.classList.remove('page-projects');
        document.body.classList.remove('page-project');
        projectHero.destroy();
        projectSection.destroy();
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        siteNavigation.init();
        siteMenu.render();
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  // Don't forget to init the view!
  News.init();

  //////////////////////////////////
  //*******Single project*********//
  //////////////////////////////////
  let Project = Barba.BaseView.extend({
    namespace: 'single-work.php',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-project');
        document.querySelector('.navigation .menu__list .projects').classList.add('active');
        document.body.classList.remove('page-about');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-single-news');
        document.body.classList.remove('page-projects');
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        siteNavigation.init();
        siteMenu.render();
        projectHero.render();
        if (document.querySelector('.project__section').classList.contains('project__section--sideImg')) {
          projectSection.render('default');
        } else if(document.querySelector('.project__section').classList.contains('project__section--sideQuote')){
          projectSection.render('quoteType');
        }
        heroProjectLoadSeq().animation.play();
        let myProjectMetaInfo = new ProjectMetaInfo();
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
        projectHero.destroy();
        projectSection.destroy();
        projectSection.destroy();
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
    }
  });
  // Don't forget to init the view!
  Project.init();

  //////////////////////////////////
  //*******Single project*********//
  //////////////////////////////////
  let SingleNews = Barba.BaseView.extend({
    namespace: 'single-news.php',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-single-news');
        document.querySelector('.navigation .menu__list .news').classList.add('active');
        document.body.classList.remove('page-about');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-projects');
        document.body.classList.remove('page-project');
        const siteBody = document.querySelector('.site__body'),
              siteNewsHero = document.querySelector('.hero--news'),
              siteNewsContent = document.querySelector('.container--news__content'),
              targetheight = siteNewsHero.offsetHeight + siteNewsContent.offsetHeight;
        siteBody.style.height = targetheight + 'px';
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        siteNavigation.init();
        siteMenu.render();
    },
    onLeave: function() {
        // A new Transition toward a new page has just started.
    },
    onLeaveCompleted: function() {
        // The Container has just been removed from the DOM.
        const siteBody = document.querySelector('.site__body');
        siteBody.style.height = 'auto';
    }
  });
  // Don't forget to init the view!
  SingleNews.init();

}
