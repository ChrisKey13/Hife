

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
            slider.classList.remove("show")
            i = index;
          }
        });
        sliders[i+1].classList.add("show");
        sliders[i+1].classList.add("active-slide");
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
            i = index;
          }
        });
        sliders[i-1].classList.add("show");
        sliders[i-1].classList.add("active-slide");
      });
    })
  }
};


export { slideToNext, slideToPrevious };


