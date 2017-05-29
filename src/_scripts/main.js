// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Barba from 'barba.js'
import BarbaView from './BarbaView';
import PageTransition from './PageTransition';
// import Link from '../_modules/link/link';

$(() => {
  BarbaView();
  Barba.Pjax.start();
  Barba.Prefetch.init();
  PageTransition();
  console.log('Welcome to Yeogurt!');
});
