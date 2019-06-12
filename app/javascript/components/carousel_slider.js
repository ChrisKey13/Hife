const slideToRight = (intensiveness) => {
  const rightBtn = document.querySelector(".btn-arrow-right");
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

const slideToLeft = () => {
  const leftBtn = document.querySelector(".btn-arrow-left");
  if (leftBtn) {
    const sliderInit = document.querySelector(".activity-choice");
    sliderInit.classList.add("active-slide");
    sliderInit.classList.remove("hidden-slide");
    sliderInit.classList.add("show");
    leftBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const sliders = document.querySelectorAll(".activity-choice");
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



const slideToNext = () => {
  const nextBtn = document.querySelectorAll(".next-btn");
  if (nextBtn) {
    nextBtn.forEach(btn => {
      btn.addEventListener('click', (event) => {

        event.preventDefault();
        const sliders = document.querySelectorAll(".slider-meeting");
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
      });
    })
  }
};

const slideToPrevious = () => {
  const previousBtn = document.querySelectorAll(".previous-btn");
  if (previousBtn) {
    previousBtn.forEach(btn => {
      btn.addEventListener('click', (event) => {

        event.preventDefault();
        const sliders = document.querySelectorAll(".slider-meeting");
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
        setTimeout(function() {sliders[i-1].classList.add("show")}, 200);
      });
    })
  }
};


const selectCardActivity = () => {
  const activities = document.querySelectorAll(".activity-choice");
  activities.forEach((activity) => {

    activity.addEventListener("click", (event) => {
      event.preventDefault();
      activities.forEach((activityChecked) => {
        if (activityChecked.classList.contains("checked")) {
          activityChecked.classList.remove("checked");
        }
      });
      activity.classList.add("checked");
      let activityInput = activity.querySelector("input");
      activityInput.checked = true;
    });
  });
};



export { slideToNext, slideToPrevious, slideToLeft, slideToRight, selectCardActivity };


