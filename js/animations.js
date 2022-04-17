//move car forward
function moveCar() {
  const tl = new TimelineMax();

  tl.fromTo(
    carWrapper,
    {
      duration: 2,
      x: -500,
      ease: 'slow',
      scale: 0.5,
    },
    {
      duration: 2,
      x: 0,
      ease: 'slow',
      scale: 0.5,
    }
  ).to(carWrapper, {
    delay: 8,
    duration: 2,
    x: 500,
    scale: 0.5,
  });
}

//spin and stop wheels
function spinWheels() {
  const tl = new TimelineMax();

  tl.to(wheelSpin, {
    rotation: 1500,
    duration: 1.5,
    transformOrigin: 'center',
    ease: 'Linear.easeNone',
  })
    .to(
      wheelStop,
      {
        rotation: 1530,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.4'
    )
    .to(wheelSpin, {
      rotation: 2200,
      delay: 8.2,
      duration: 1.2,
      transformOrigin: 'center',
      ease: 'power2.out',
    })
    .to(
      wheelStop,
      {
        opacity: 0,
        duration: 0.5,
        rotation: 1540,
      },
      '-=1.3'
    );
}

//animate tagline text first  and second frame
function changeTaglineText() {
  const tl = new TimelineMax();

  tl.fromTo(
    taglineWrapperFirstSecond,
    { x: -300, ease: 'slow' },
    { duration: 2, x: 0, ease: 'slow' }
  )
    .fromTo(
      taglineWrapperFirstFirst,
      { x: 300, ease: 'slow' },
      { duration: 2, x: 0, ease: 'slow' },

      '-=2'
    )
    .to(taglineWrapperFirstSecond, {
      duration: 2,
      delay: 2,
      x: 900,
      ease: 'slow',
    })
    .to(
      taglineWrapperFirstFirst,
      {
        duration: 2,
        delay: 2,
        x: -900,
        ease: 'slow',
      },
      '-=4'
    )
    .fromTo(
      taglineWrapperSecondSecond,
      { x: 300, ease: 'slow' },
      { duration: 1, x: 0, ease: 'slow' },
      '-=1'
    )
    .fromTo(
      taglineWrapperSecondFirst,
      { x: -300, ease: 'slow' },
      { duration: 1, x: 0, ease: 'slow' },
      '-=1'
    )
    .to(taglineWrapperSecondSecond, {
      duration: 2,
      delay: 3.5,
      x: -900,
      ease: 'slow',
    })
    .to(
      taglineWrapperSecondFirst,
      {
        duration: 2,
        delay: 3.5,
        x: 900,
        ease: 'slow',
      },
      '-=5.5'
    );
}

//change background for each frame
function changeBackground() {
  const tl = new TimelineMax();

  tl.to(scene, {
    backgroundColor: colors.blue,
    delay: 1.8,
  })
    .to(scene, {
      backgroundColor: colors.yellow,
      delay: 1.8,
    })
    .to(scene, {
      backgroundColor: colors.red,
      delay: 2.4,
    })
    .to(scene, {
      backgroundColor: colors.black,
      delay: 2.8,
    })
    .from(whiteBg, {
      yPercent: -100,
      delay: 1.9,
      opacity: 0,
    })
    .to(whiteBg, {
      yPercent: 100,
    });
}

//car lights blinking and animate border in frame 4
function blinking() {
  const tl = new TimelineMax();

  tl.to(carLights, {
    alpha: 0,

    duration: 0.3,
  })
    .to(carLights, {
      alpha: 1,
      duration: 0.3,
      delay: 3.65,
    })
    .to(carLights, {
      alpha: 0,
      duration: 0.3,
    })
    .to(carLights, {
      alpha: 1,
      duration: 0.3,
      delay: 2.3,
    })
    .to(carLights, {
      alpha: 0,
      duration: 0.3,
    })
    .fromTo(
      scene,
      {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0,
      },
      {
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 8,
        borderTopWidth: 8,
        delay: 3,
        duration: 1,
        borderColor: colors.blue,
        ease: Back.easeInOut,
      }
    );
}

//animate explore button in and out
function animateExploreBtn() {
  const tl = new TimelineMax();

  tl.fromTo(
    rectangleBtn,
    {
      height: 0,
    },
    {
      delay: 2.5,
      height: 30.5,
    }
  )
    .fromTo(
      exploreBtn,
      {
        left: -100,
        bottom: 0,

        ease: Linear.easeNone,
        transformOrigin: 'center',
      },
      {
        left: 0,
        bottom: 0,

        ease: Linear.easeNone,
        transformOrigin: 'center',
      }
    )

    .fromTo(
      exploreBtnText,
      {
        alpha: 0,
      },
      {
        alpha: 1,
      }
    )
    .to(rectangleBtn, {
      height: 0,
      delay: 6.5,
    })
    .to(
      exploreBtn,
      {
        bottom: -20,
      },
      '-=0.46'
    )
    .to(rectangleBtn, {
      height: 30.5,
      bottom: 0,
      left: 0,
      delay: 2.6,
    })
    .to(
      exploreBtnWrapper,
      {
        left: 0,
        bottom: 0,
      },
      '-=1'
    )
    .to(
      exploreBtn,
      {
        bottom: 0,
      },
      '-=0.55'
    );
}

//animate the car logo
function miniLogo() {
  const tl = new TimelineMax();

  tl.fromTo(
    logoWrapper,
    {
      scale: 0,
      bottom: 30,
      right: -10,
    },
    {
      delay: 1.5,
      bottom: 30,
      right: 45,
      scale: 0.5,
    }
  )
    .to(logoWrapper, {
      scale: 1.5,
      bottom: '50%',
      right: '50%',
      duration: 0.8,
      delay: 8.5,
      yoyoEase: 'power3',
      ease: Power1.easeOut,
    })
    .to(logoWrapper, {
      delay: 1.5,
      bottom: 20,
      right: 37,
      scale: 0.5,
      yoyoEase: 'power3',
      delay: 2,
    });
}

//animate in the grey car in the last frame
function greyCar() {
  const tl = new TimelineMax();

  tl.fromTo(
    carVariationGrey,
    {
      alpha: 0,
    },
    {
      alpha: 1,
      duration: 0.8,
      delay: 14,
    }
  );
}

//animate the color choise boxes
function colorChoiseBoxes() {
  const tl = new TimelineMax();

  tl.fromTo(
    colorChoise,
    {
      top: -50,
    },
    {
      top: 0,
      duration: 0.5,
      ease: 'back',
      stagger: 1,
      delay: 14.2,
    }
  );
}

//animate the outline for one color square box
function animateSquare() {
  let tl = new TimelineMax();
  tl.fromTo(
    '.l2',
    { width: 0 },
    {
      width: '100%',
      duration: 0.2,
      delay: 16.4,
    }
  )
    .to('.l3', { height: '100%', duration: 0.2 })
    .to('.l4', { width: '100%', duration: 0.2 })
    .to('.l1', { height: '100%', duration: 0.2 });
}

//change the border color for each color choise box
function changeBorderColor() {
  const tl = new TimelineMax();

  tl.fromTo(
    scene,
    {
      borderColor: colors.blue,
    },
    {
      borderColor: colors.yellow,
      ease: Linear.easeNone,
      duration: 0.1,
      delay: 15.4,
    }
  ).to(scene, {
    borderColor: colors.red,
    ease: Linear.easeNone,
    duration: 0.1,
    delay: 0.9,
  });
}

//animate the cars color for each color choise box
function animateCarColors() {
  const tl = new TimelineMax();

  tl.to(carVariationBlue, {
    opacity: 1,
    duration: 0.1,
    ease: Linear.easeNone,
    delay: 14.35,
  })
    .to(carVariationYellow, {
      opacity: 1,
      duration: 0.1,
      ease: Linear.easeNone,
      delay: 0.92,
    })
    .to(carVariationRed, {
      opacity: 1,
      duration: 0.1,
      ease: Linear.easeNone,
      delay: 0.92,
    });
}

//animate the change color text
function changeColorText() {
  const tl = new TimelineMax();

  tl.fromTo(
    taglineColor,
    { x: -300, y: 15, ease: 'slow' },
    { duration: 2, x: 13, y: 18, ease: 'slow', delay: 13.5 }
  );
}

//hover effect on explore button
const exploreBtnTl = new TimelineMax({ paused: true });
exploreBtnTl
  .to(arrowFirst, {
    x: 210,
    rotate: 180,
    duration: 0.3,
    ease: Linear.easeNone,
  })
  .to(
    exploreBtnText,
    {
      left: '51%',
      duration: 0.3,
      ease: 'back',
    },
    '-=0.1'
  );
rectangleBtn.addEventListener('mouseenter', function () {
  exploreBtnTl.play();
});
rectangleBtn.addEventListener('mouseleave', function () {
  exploreBtnTl.reverse();
});
