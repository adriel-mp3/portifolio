import { SlideNav } from './modules/slide.js';
import { activeMenuMobile } from './modules/menu-mobile.js';

const slide = new SlideNav('.slide','.slide-wrapper');

slide.init();
slide.addArrow('.prev', '.next');

activeMenuMobile();
