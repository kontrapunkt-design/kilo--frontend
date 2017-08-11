// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import modernizr from './vendors/modernizr';
import Barba from 'barba.js'
import BarbaView from './BarbaView';
import PageTransition from './PageTransition';
import globalFunctions from './globalFunctions';
// import Link from '../_modules/link/link';

$(() => {
  BarbaView();
  Barba.Pjax.start();
  globalFunctions();
  Barba.Prefetch.init();
  PageTransition();
  console.log('Welcome to Yeogurt!');
});
