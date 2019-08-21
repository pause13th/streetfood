import {
  tns
} from "../../node_modules/tiny-slider/src/tiny-slider"

// init tiny-slider
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
  preventScrollOnTouch: 'auto',
});
module.exports.fullpageSlider = fullpageSlider;

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
  preventScrollOnTouch: 'auto',
  responsive: {
    768: {
      loop: false,
    }
  }
});
module.exports.foodSlider = fullpageSlider;


// selection
let getHeader = document.querySelector('.header');
let getFooter = document.querySelector('.footer');
let getSection = document.querySelectorAll('#fullpage section');

// wheel event 
document.addEventListener('wheel', e => {

  // slider info
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

  // easterEgg: body background updates
  // if (pageIndexCurrent > 2) {
  //   update_background('goldenrod');
  // } else if (pageIndexCurrent < 2) {
  //   update_background('blue');
  // }

});

// onload
window.addEventListener('load', e => {
  let fullpageCurrentIndex = fullpageSlider.getInfo().index;
  update_elements_class(fullpageCurrentIndex);
});

// update header,footer,section classes
fullpageSlider.events.on('indexChanged', (e) => {
  let fullpageCurrentIndex = e.index;
  update_elements_class(fullpageCurrentIndex);
});

function update_elements_class(fullpageCurrentIndex) {

  getSection.forEach((item, index) => {
    updateElementClass(item, 'reveal', checkWithinIndex(index, fullpageCurrentIndex));
  });
  console.log(checkWithinIndex(fullpageCurrentIndex, [0, 3]));
  updateElementClass(getHeader, 'slim', checkWithinIndex(fullpageCurrentIndex, [1, 2]));

  updateElementClass(getFooter, 'reveal', checkWithinIndex(fullpageCurrentIndex, 3));
}

// helper - update classes
let updateElementClass = function (element, className, func) {
  if (func) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}
let checkOutsideIndex = function (currentIndex, targetIndex) {
  let detect = false;
  if (typeof targetIndex === 'object') {
    targetIndex.forEach(item => {
      if (currentIndex !== item) {
        detect = true;
      }
    });
    return detect;
  } else {
    return currentIndex !== targetIndex;
  }
}
let checkWithinIndex = function (currentIndex, targetIndex) {
  let detect = false;
  if (typeof targetIndex === 'object') {
    targetIndex.forEach(item => {
      if (currentIndex === item) {
        detect = true;
      }
    });
    return detect;
  } else {
    return currentIndex === targetIndex;
  }
}

// helper check if middle of slider transition
var slideTransition = false;
[fullpageSlider, foodSlider].forEach((element) => {
  element.events.on('transitionStart', () => {
    slideTransition = true;
  });
  element.events.on('transitionEnd', () => {
    slideTransition = false;
  });
});


/**
 * EASTER EGG
 */
// update body background-color
function update_background(color) {
  let body = document.querySelector('body');
  body.style.backgroundColor = color;
}