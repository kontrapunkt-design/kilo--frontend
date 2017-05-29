import Barba from 'barba.js';
import globalFunctions from './globalFunctions';
import Collection from '../_modules/collection/collection';

export default()=>{
  let Home = Barba.BaseView.extend({
    namespace: 'home',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        globalFunctions();
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
  let Projects = Barba.BaseView.extend({
    namespace: 'projects',
    onEnter: function() {
        // The new Container is ready and attached to the DOM.
    },
    onEnterCompleted: function() {
        // The Transition has just finished.
        globalFunctions();
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
}
