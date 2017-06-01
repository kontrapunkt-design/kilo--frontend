import $ from 'jquery';
import Barba from 'barba.js';
import Collection from '../_modules/collection/collection';
import MultiColSlider from '../_modules/multi-col-slider/multi-col-slider';

export default()=>{
  //////////////////////////////////
  //************HOME*************//
  //////////////////////////////////

  let Home = Barba.BaseView.extend({
    namespace: 'home',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-index');
        $('.navigation .menu__list .menu__list__item').removeClass('active');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-projects');
        document.body.classList.remove('page-about');
  },
    onEnterCompleted: function() {
        // The Transition has just finished.
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
    namespace: 'projects',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-projects');
        document.querySelector('.navigation .menu__list .projects').classList.add('active');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-about');
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        let ProjectCollection = new Collection();
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
    namespace: 'about',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-about');
        document.querySelector('.navigation .menu__list .about').classList.add('active');
        document.body.classList.remove('page-news');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-projects');
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
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
    namespace: 'news',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
        document.body.classList.add('page-news');
        document.querySelector('.navigation .menu__list .news').classList.add('active');
        document.body.classList.remove('page-about');
        document.body.classList.remove('page-index');
        document.body.classList.remove('page-projects');
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
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

}
