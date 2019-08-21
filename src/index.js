import './scss/_styles.scss';

import jQuery from 'jquery';
import 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap';

import Preloader from './js/Preloader';
let preloader = new Preloader();

import street from './js/StreetfoodTinySlider';

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
 * 
 */
// import anime from '../node_modules/animejs/lib/anime.es';


// animation classes
let currentPage = 0

window.addEventListener('load', e => {
  let currentPage = street.fullpageSlider.getInfo().index;
  // console.log(currentPage);
});

street.fullpageSlider.events.on('indexChanged', e => {
  currentPage = e.index;
  /* switch (currentPage) {
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    case 3:
      console.log(3);
      break;
  } */
});