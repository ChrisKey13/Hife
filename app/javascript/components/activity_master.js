import { slideToLeft, slideToRight } from './carousel_slider';
import { firstInitInPageActivity, initActivitiesShow } from './activity_picker_slider';

const mainActivityMaker = () => {
  const picker = document.getElementById('intensiveness-pick-activity');

  let input = 'medium'

  initActivitiesShow('medium');

  picker.addEventListener('input', (event) => {
    event.preventDefault();
    if (picker.value - 1 === 0) {
      input = 'low';
      // initActivitiesShow('low');
    } else if (picker.value - 2 === 0) {
      input = 'medium';
      // initActivitiesShow('medium');
    } else {
      input = 'high';
      // initActivitiesShow('high');
    }
  });

  const rightBtn = document.querySelector(".btn-arrow-right");
  const leftBtn = document.querySelector(".btn-arrow-left");


  rightBtn.addEventListener('click', (event) => {
    slideToRight(input);

  });

};

export { mainActivityMaker }
