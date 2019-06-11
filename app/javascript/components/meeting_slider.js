
const addOutputToSlider = (index) => {
  const slider = document.getElementById(`text-input-meeting-slider-${index}`);
  const output = document.getElementById(`agenda-duration id-${index}`);
  if (slider) {
  output.innerHTML = `${slider.value} min`; // Display the default slider value
  slider.addEventListener("input", (event) => {
    output.innerHTML = `${slider.value} min`;
  });
  }
};

export { addOutputToSlider };

