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
          const activityToUpdate = activityChecked.querySelector(".card-activity-infos-question-pick-activity");
          activityToUpdate.innerText = "Choose this one?";
          activityToUpdate.classList.remove("picked");
        }
      });
      activity.classList.add("checked");
      let activityInput = activity.querySelector("input");
      activityInput.checked = true;
      const changeTextActivityPicked = activity.querySelector(".card-activity-infos-question-pick-activity");
      changeTextActivityPicked.innerText = "Chosen Activity";
      changeTextActivityPicked.classList.add("picked");
    });
  });
};



export { slideToNext, slideToPrevious, selectCardActivity };


