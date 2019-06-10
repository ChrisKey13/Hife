
let slider
let output

const addOutputToSlider = (index) => {
  slider = document.getElementById(`text-input-meeting-slider-${index}`);
  output = document.getElementById(`agenda-duration id-${index}`);
  output.innerHTML = `${slider.value} min`; // Display the default slider value

  sliderValue();
};

// Update the current slider value (each time you drag the slider handle)
const sliderValue = () => {
  slider.addEventListener("input", (event) => {
    output.innerHTML = `${slider.value} min`;
  });
};

export { addOutputToSlider };

