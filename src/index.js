/**
 * load bootstrap
 */
import jQuery from 'jquery';
import 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap';
// import '../node_modules/font-awesome/css/font-awesome';

/**
 * load styling
 */
import './scss/_styles.scss';


/**
 * preloader
 */
import Preloader from './js/Preloader';
let preloader = new Preloader();


/**
 * custom tiny-slider
 */
/* import StreetfoodTinySlider from './js/StreetfoodTinySlider';
// check if mobile & add classes, also activate slider
if (window.matchMedia("(min-width: 769px)").matches) {
  var street = new StreetfoodTinySlider();
} */


/**
 * mobile version
 */
/* import StreetfoodMobile from './js/StreetfoodMobile';
let getBody = document.querySelector('body');
if (window.matchMedia("(max-width: 768px").matches) {
  var streetMobile = new StreetfoodMobile();
  getBody.classList.add('mobile');
} */


/**
 * header slim
 */
['DOMContentLoaded', 'scroll'].forEach((evt) => {
  document.addEventListener(evt, (e) => {
    let scrollTop = document.scrollingElement.scrollTop;
    let totalHeight = document.scrollingElement.scrollHeight;
    let lastSectionHeight = document.querySelector('.voice');
    lastSectionHeight = lastSectionHeight.offsetHeight;
    let getHeader = document.querySelector('.header');
    let getMasthead = document.querySelector('.masthead');
    if (scrollTop > 20) {
      getHeader.classList.add('slim');
      getMasthead.classList.add('slim');
    } else {
      getHeader.classList.remove('slim');
      getMasthead.classList.remove('slim');
    }
  });
});
/**
 * footer reveal
 */
['DOMContentLoaded', 'scroll'].forEach((evt) => {
  document.addEventListener(evt, (e) => {
    let scrollTop = document.scrollingElement.scrollTop;
    let totalHeight = document.scrollingElement.scrollHeight;
    let lastSectionHeight = document.querySelector('.voice');
    lastSectionHeight = lastSectionHeight.offsetHeight;
    let getFooter = document.querySelector('.footer');
    if (scrollTop > totalHeight - lastSectionHeight - 120) {
      getFooter.classList.add('reveal');
    } else {
      getFooter.classList.remove('reveal');
    }
  });
});

/**
 * tiny-slider
 */
import {
  tns
} from "../node_modules/tiny-slider/src/tiny-slider";

var foodSlider = tns({
  container: '#food-slide',
  items: 1,
  // slideBy: 'page',
  loop: true,
  // autoHeight: true,
  // viewportMax: true,
  // controlsText: ['{', '}'],
  speed: 400,
  arrowKeys: true,
  mouseDrag: true,
  preventActionWhenRunning: true,
  controls: false,
  preventScrollOnTouch: 'auto',
  // responsive: {
  //   768: {
  //     loop: false,
  //   }
  // }
});

/**
 * switch language, detect geolocation
 * @link https://www.w3schools.com/html/html5_geolocation.asp
 */


/**
 * countdown timer
 */
// import CountdownTimer from './js/CountdownTimer';
// var countdownTimer = new CountdownTimer();


/**
 * language detection
 */
// var language = window.navigator.userLanguage || window.navigator.language;
// alert(language); //works IE/SAFARI/CHROME/FF


/**
 * waypoints
 */
import waypoints from '../node_modules/waypoints/lib/noframework.waypoints';

var point1 = new Waypoint({
  element: document.querySelector('.masthead__title'),
  handler: function (direction) {
    toggleAnime(this.element);
  },
  offset: '80px',
})

var point2 = new Waypoint({
  element: document.querySelector('.masthead__stripe'),
  handler: function (direction) {
    toggleAnime(this.element);
  },
  offset: '50%',
});

var point3 = new Waypoint({
  element: document.querySelector('.food__title'),
  handler: function (direction) {
    toggleAnime(this.element);
  },
  offset: '50%',
});

var point4 = new Waypoint({
  element: document.querySelector('.story__content'),
  handler: function (direction) {
    toggleAnime(this.element);
  },
  offset: '85%',
});

var point5 = new Waypoint({
  element: document.querySelector('.voice__title'),
  handler: function (direction) {
    toggleAnime(this.element);
  },
  offset: '85%',
});

function toggleAnime(ele) {
  if (!ele.classList.contains('anime')) {
    ele.classList.add('anime');
  } else {
    ele.classList.remove('anime');
  }
}
// let currentPage = 0

// window.addEventListener('load', e => {
//   let currentPage = street.fullpageSlider.getInfo().index;
//   // console.log(currentPage);
// });

// street.fullpageSlider.events.on('indexChanged', e => {
//   currentPage = e.index;
//   /* switch (currentPage) {
//     case 0:
//       console.log(0);
//       break;
//     case 1:
//       console.log(1);
//       break;
//     case 2:
//       console.log(2);
//       break;
//     case 3:
//       console.log(3);
//       break;
//   } */
// });

