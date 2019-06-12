import { slideToLeft, slideToRight } from './activity_slide_right_left';
import { activitiesToReload } from './activity_picker_slider';

const mainActivityMaker = () => {
  const picker = document.getElementById('intensiveness-pick-activity');

  if (picker) {
    activitiesToReload();
    slideToRight('low');
    slideToRight('medium');
    slideToRight('high');
    slideToLeft('low');
    slideToLeft('medium');
    slideToLeft('high');
  };

};

export { mainActivityMaker }
