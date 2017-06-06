'use strict';
import Navigation from '../_modules/navigation/navigation';
import Menu from '../_modules/menu/menu';
import Footer from '../_modules/footer/footer';

export default()=>{
  console.log('load global functions')
  let siteNavigation = new Navigation();
  let siteMenu = new Menu();
  let siteFooter = new Footer();
  siteMenu.render();
}
