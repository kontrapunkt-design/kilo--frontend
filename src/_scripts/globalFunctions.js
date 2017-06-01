'use strict';
import Navigation from '../_modules/navigation/navigation';
import Menu from '../_modules/menu/menu';

export default()=>{
  console.log('load global functions')
  let siteNavigation = new Navigation();
  let siteMenu = new Menu();
  siteMenu.render();
}
