/**
 * load bootstrap
 */
import jQuery from 'jquery';
import 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap';


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
import StreetfoodTinySlider from './js/StreetfoodTinySlider';
// check if mobile & add classes, also activate slider
let getBody = document.querySelector('body');
if (window.matchMedia("(min-width: 769px)").matches) {
  var street = new StreetfoodTinySlider();
} else {
  getBody.classList.add('mobile');
}


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