const scene = document.getElementById('scene');
const whiteBg = document.querySelector('.white-bg');

//car
const carSide = document.querySelector('.car-side');
const carWrapper = document.querySelector('.car-wrapper');
const carLights = document.querySelectorAll('.car-lights');
const wheelSpin = document.querySelectorAll('.wheel-spin');
const wheelStop = document.querySelectorAll('.wheel-stop');

//button
const exploreBtnWrapper = document.querySelector('.explore-btn-wrapper');
const rectangleBtn = document.querySelector('.rectangle-btn');
const exploreBtn = document.querySelector('.explore-btn');
const exploreBtnText = document.querySelector('.explore-btn-text');
const arrowFirst = document.querySelector('.arrow-first');

//text
const taglineWrapperFirstFirst = document.querySelectorAll(
  '.tagline-wrapper-first .tagline-first'
);
const taglineWrapperFirstSecond = document.querySelectorAll(
  '.tagline-wrapper-first .tagline-second'
);
const taglineWrapperSecondFirst = document.querySelectorAll(
  '.tagline-wrapper-second .tagline-first'
);
const taglineWrapperSecondSecond = document.querySelectorAll(
  '.tagline-wrapper-second .tagline-second'
);
const taglineColor = document.querySelector('.tagline-color');

//logo
const logoWrapper = document.querySelector('.logo-wrapper');

//color change
const colorChoise = document.querySelectorAll('.color-choise');
const carVariationGrey = document.querySelector('.car-variation-grey');
const carVariationBlue = document.querySelector('.car-variation-blue');
const carVariationRed = document.querySelector('.car-variation-red');
const carVariationYellow = document.querySelector('.car-variation-yellow');
const carColorVariants = document.querySelectorAll('.car-variation-color');

//scene
const sceneDimensions = {
  width: '300px',
  height: '250px',
};

//colors
const colors = {
  blue: '#07a2d4',
  red: '#93121b',
  yellow: '#dd8601',
  black: '#000',
};

scene.style.width = sceneDimensions.width;
scene.style.height = sceneDimensions.height;
scene.style.backgroundColor = colors.blue;

window.onload = init; //Initializing the animation

function init() {
  moveCar();
  blinking();
  spinWheels();
  changeTaglineText();
  changeBackground();
  miniLogo();
  animateExploreBtn();
  changeBorderColor();
  animateSquare();
  colorChoiseBoxes();
  greyCar();
  animateCarColors();
  changeColorText();
}

//color choise border and eventlistener that starts frame border and car color change
colorChoise.forEach((changeColorBtn) => {
  changeColorBtn.addEventListener('click', (e) => {
    colorChoise.forEach((changeColorBtn) => {
      changeColorBtn.classList.remove('show-border');
    });
    applyNewCarColor(e.target);
    changeBorder(e.target);
  });
});

//change the car color
const applyNewCarColor = (e) => {
  let colorValue = e.getAttribute('data-color');
  carColorVariants.forEach((carColorVariant) => {
    if (colorValue === carColorVariant.getAttribute('data-color')) {
      carColorVariant.classList.add('active-car-color');
      carColorVariant.classList.remove('not-active-car-color');
      e.classList.add('show-border');
    } else {
      carColorVariant.classList.remove('active-car-color');
      carColorVariant.classList.add('not-active-car-color');
    }
  });
};

//change the border color
const changeBorder = (e) => {
  let color = e.getAttribute('data-color');

  switch (color) {
    case 'red':
      scene.style.borderColor = colors.red;
      break;
    case 'blue':
      scene.style.borderColor = colors.blue;
      break;
    case 'yellow':
      scene.style.borderColor = colors.yellow;
      break;
  }
};
