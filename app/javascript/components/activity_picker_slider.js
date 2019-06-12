
const activitiesToReload = () => {

  const picker = document.getElementById('intensiveness-pick-activity');
  let intensiveness;
  let outputCapital;

  if (picker) {
    // const activities = document.getElementById('card-activities-all');
    const output = document.getElementById('activity-picker');
    picker.addEventListener('input', (event) => {
      event.preventDefault();
      if (picker.value - 1 === 0) {
        intensiveness = 'low';
        outputCapital = 'Low';
      } else if (picker.value - 2 === 0) {
        intensiveness = 'medium';
        outputCapital = 'Medium';
      } else {
        intensiveness = 'high';
        outputCapital = 'High';
      }
      const activeActivity = document.querySelector(".active-activity");
      const activityToDisplay = document.querySelector(`.activity-${intensiveness}`);
      const firstActivityToDisplay = activityToDisplay.querySelectorAll(".activity-choice");
      const firstActiveActivity = activeActivity.querySelectorAll(".activity-choice");
      activeActivity.classList.add('hide-activity');
      activeActivity.classList.remove('active-activity');
      activityToDisplay.classList.remove('hide-activity');
      activityToDisplay.classList.add('active-activity');
      output.innerHTML = outputCapital;
    });
  }
};


// const firstInitInPageActivity = () => {
//   const activeSliderInit = document.querySelector(`.activity-medium`);
//   const sliderInit = activeSliderInit.querySelectorAll(".activity-choice");
//   sliderInit[0].classList.add("active-slide");
//   sliderInit[0].classList.remove("hidden-slide");
//   sliderInit[0].classList.add("show");
// };

// const initActivitiesShow = (intensiveness) => {
//   const activeActivity = document.querySelector(".active-activity");
//   const activityToDisplay = document.querySelector(`.activity-${intensiveness}`);
//   const firstActivityToDisplay = activityToDisplay.querySelectorAll(".activity-choice");
//   const firstActiveActivity = activeActivity.querySelectorAll(".activity-choice");
//   firstActivityToDisplay[0].classList.remove('hidden-slide');
//   firstActivityToDisplay[0].classList.add('show');
//   firstActivityToDisplay[0].classList.add('active-slide');
//   firstActiveActivity[0].classList.remove('show');
//   firstActiveActivity[0].classList.add('hidden-slide');
//   firstActiveActivity[0].classList.remove('active-slide');
// };


export { activitiesToReload };
