
const addOutputToSliderBullet = (index) => {
    const slider = document.getElementById(`text-input-agenda-slider-${index}`);
    const output = document.getElementById(`agenda-duration id-${index}`);
    output.innerHTML = `${slider.value} min`; // Display the default slider value
    slider.addEventListener("input", (event) => {
    if (slider.value > 59) {
        if ((slider.value % 60) === 0) {
          output.innerHTML = `${Math.floor(slider.value / 60)}h00min`;
        } else {
          output.innerHTML = `${Math.floor(slider.value / 60)}h${Math.round((slider.value/60 - Math.floor(slider.value/60))*60)}min`;
        }
      } else {
        output.innerHTML = `${slider.value} min`;
      }
    });
};

const addOutputToSliderMeeting = () => {
    const slider = document.getElementById(`text-input-meeting-slider`);
    const output = document.getElementById(`meeting-duration-slider`);
    output.innerHTML = `${slider.value} min`; // Display the default slider value
    slider.addEventListener("input", (event) => {
      if (slider.value > 59) {
        if ((slider.value % 60) === 0) {
          output.innerHTML = `${Math.floor(slider.value / 60)}h00min`;
        } else {
          output.innerHTML = `${Math.floor(slider.value / 60)}h${Math.round((slider.value/60 - Math.floor(slider.value/60))*60)}min`;
        }
      } else {
        output.innerHTML = `${slider.value} min`;
      }
    });
};



export { addOutputToSliderBullet, addOutputToSliderMeeting };

