const slideToRight = (intensiveness) => {
  const activityIntensiveness = document.querySelector(`.activity-${intensiveness}`);
  const rightBtn = activityIntensiveness.querySelector(`.btn-arrow-right`);
  console.log(rightBtn);
  if (rightBtn) {
    rightBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const activeSliders = document.querySelector(`.activity-${intensiveness}`);
        const sliders = activeSliders.querySelectorAll(".activity-choice");
        let checkLast = sliders[sliders.length - 1 ].classList.contains("active-slide");
        if (!checkLast) {
        let i
        sliders.forEach( (slider, index) => {
          let slideActive = slider.classList.contains("active-slide");
            if (slideActive) {
              slider.classList.remove("active-slide");
              slider.classList.remove("show");
              setTimeout(function() {slider.classList.add("hidden-slide")}, 400);
              i = index;
            }
        });
        sliders[i+1].classList.remove("hidden-slide");
        sliders[i+1].classList.add("active-slide");
        setTimeout(function() {sliders[i+1].classList.add("show")}, 100);
        }
    })
  }
};

const slideToLeft = (intensiveness) => {
  const activityIntensiveness = document.querySelector(`.activity-${intensiveness}`);
  const leftBtn = activityIntensiveness.querySelector(`.btn-arrow-left`);
  console.log(leftBtn);
  if (leftBtn) {
    leftBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const activeSliders = document.querySelector(`.activity-${intensiveness}`);
        const sliders = activeSliders.querySelectorAll(".activity-choice");
        let checkFirst = sliders[0].classList.contains("active-slide");
        if (!checkFirst) {
        let i
        sliders.forEach( (slider, index) => {
          let slideActive = slider.classList.contains("active-slide");
            if (slideActive) {
              slider.classList.remove("active-slide");
              slider.classList.remove("show");
              setTimeout(function() {slider.classList.add("hidden-slide")}, 400);
              i = index;
            }
        });
        sliders[i-1].classList.remove("hidden-slide");
        sliders[i-1].classList.add("active-slide");
        setTimeout(function() {sliders[i-1].classList.add("show")}, 100);
        }
    })
  }
};

export { slideToRight, slideToLeft }
