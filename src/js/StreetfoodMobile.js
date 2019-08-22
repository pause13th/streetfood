import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';

import {
  tns
} from "../../node_modules/tiny-slider/src/tiny-slider";

class StreetfoodMobile {

  constructor() {

    this.headerSlim();


    // var waypoints = new Waypoint({
    //   element: document.querySelector('.header'),
    //   handler: function (direction) {
    //     console.log(direction, 'Scrolled to waypoint!')
    //   }
    // });
    // console.log('mobile version on!', waypoints);
    this.foodSliderActivation();

  }

  headerSlim() {
    /**
     * header mobile menu
     */
    ['DOMContentLoaded', 'scroll'].forEach((evt) => {
      document.addEventListener(evt, (e) => {
        let scrollTop = document.scrollingElement.scrollTop;

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
  }

  foodSliderActivation() {
    var foodSlider = tns({
      container: '#food-slide',
      items: 1,
      slideBy: 'page',
      loop: true,
      autoHeight: true,
      viewportMax: true,
      controlsText: ['{', '}'],
      speed: 400,
      arrowKeys: true,
      mouseDrag: true,
      preventActionWhenRunning: true,
      controls: false,
      preventScrollOnTouch: 'auto',
      responsive: {
        768: {
          loop: false,
        }
      }
    });
  }
}

export default StreetfoodMobile;