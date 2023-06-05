import { SlideNav } from './modules/slide.js';
import { activeMenuMobile } from './modules/menu-mobile.js';
import AnimateScroll  from './modules/animate-scroll.js';
import SoftScroll from './modules/soft-scroll.js';

const slide = new SlideNav('.slide','.slide-wrapper');

slide.init();
slide.addArrow('.prev', '.next');

const softScroll = new SoftScroll('a[href^="#"');
softScroll.init();

const animateOnScroll = new AnimateScroll('[data-anime="scroll"]');
animateOnScroll.init();

activeMenuMobile();