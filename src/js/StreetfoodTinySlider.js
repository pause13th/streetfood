import {
  tns
} from "../../node_modules/tiny-slider/src/tiny-slider"

class StreetfoodTinySlider {

  constructor() {

    // selection
    let getHeader = document.querySelector('.header');
    let getFooter = document.querySelector('.footer');
    var getSection = document.querySelectorAll('#fullpage section');

    // RUN SLIDERS (FOR DESKTOP)
    run_tiny_slider();


    // HELPER FUNCTIONS FOR SLIDER ELEMENT CLASS UPDATE
    // update_elements_class - update classes according to slider-index
    function update_elements_class(currentIndex, totalPage) {
      insertElementClass(getHeader, 'slim', checkIndex(currentIndex, [0, totalPage]), true);
      insertElementClass(getFooter, 'reveal', checkIndex(currentIndex, totalPage));
      getSection.forEach((item, index) => {
        insertElementClass(item, 'reveal', checkIndex(index, currentIndex));
      });
    }
    // update_elements_class - insert class to element
    function insertElementClass(element, className, func, invert = false) {
      let output = func;
      if (invert) output = !output;
      if (output) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
    // update_elements_class - check slider index
    function checkIndex(currentIndex, targetIndex) {
      let detect = false;
      if (typeof targetIndex === 'object') {
        targetIndex.forEach(item => {
          if (currentIndex === item) detect = true;
        });
        return detect;
      } else {
        return currentIndex === targetIndex;
      }
    }


    // HOIST
    function run_tiny_slider() {

      // INIT SLIDERS
      var fullpageSlider = tns({
        container: '#fullpage',
        items: 1,
        slideBy: 'page',
        axis: 'vertical',
        loop: false,
        viewportMax: true,
        controlsText: ['<span>PRE</span>', '<span>NEX</span>'],
        speed: 400,
        arrowKeys: true,
        mouseDrag: true,
        preventActionWhenRunning: true,
        controls: false,
        preventScrollOnTouch: "auto",
        swipeAngle: 30,
      });

      var foodSlider = tns({
        container: '.food-slide',
        items: 1,
        slideBy: 'page',
        loop: true,
        viewportMax: true,
        controlsText: ['{', '}'],
        speed: 400,
        arrowKeys: true,
        mouseDrag: true,
        preventActionWhenRunning: true,
        controls: false,
        // preventScrollOnTouch: 'auto',
        responsive: {
          768: {
            loop: false,
          }
        }
      });


      // UPDATE SLIDER ELEMENTS CLASS
      window.addEventListener('load', e => {
        let fullpageCurrentIndex = fullpageSlider.getInfo().index;
        let fullpageTotalPage = fullpageSlider.getInfo().pages - 1;
        update_elements_class(fullpageCurrentIndex, fullpageTotalPage);
      });

      // UPDATE SLIDER ELEMENTS CLASS - ON SLIDER UPDATE
      fullpageSlider.events.on('indexChanged', e => {
        let fullpageCurrentIndex = e.index;
        let fullpageTotalPage = e.pages - 1;
        update_elements_class(fullpageCurrentIndex, fullpageTotalPage);
      });

      // CHECK SLIDER TRANSITION
      var slideTransition = false;
      [fullpageSlider, foodSlider].forEach((element) => {
        element.events.on('transitionStart', () => {
          slideTransition = true;
        });
        element.events.on('transitionEnd', () => {
          slideTransition = false;
        });
      });


      // MOUSE WHEEL EVENT
      document.addEventListener('wheel', e => {

        // get slider info
        var pageInfo = fullpageSlider.getInfo(),
          pageIndexPrev = pageInfo.indexCached,
          pageIndexCurrent = pageInfo.index;

        var foodInfo = foodSlider.getInfo(),
          foodIndexPrev = foodInfo.indexCached,
          foodIndexCurrent = foodInfo.index,
          foodTotalPages = foodInfo.pages;

        // wheel scroll interaction
        if (e.deltaY > 0 && !slideTransition) {
          if (pageIndexCurrent == 1 && foodIndexCurrent <= foodTotalPages - 1) {
            foodSlider.goTo('next');
          } else {
            fullpageSlider.goTo('next');
          }
        } else {
          if (pageIndexCurrent == 1 && foodIndexCurrent > 1) {
            foodSlider.goTo(0);
          } else {
            fullpageSlider.goTo('prev');
          }
        }

      });
    }
  }

  // easter_egg - update body background-color
  easter_egg_update_background(color) {
    let body = document.querySelector('body');
    body.style.backgroundColor = color;
  }

}

export default StreetfoodTinySlider;