const disableButtonIfAllNotFilled = () => {
  const form = document.forms[0];
  const submitInputs = form.querySelectorAll('input');
  let submitArray = []
    submitInputs.forEach((formInput) => {
      submitArray.push(formInput);
    });
  const submitButton = submitArray[submitArray.length - 1];
  let formInputs = form.querySelectorAll('input');
  const agendaBullets = document.querySelectorAll(".agenda-bullets");
  const number = agendaBullets.length - 1;
  let i
  let arrayToCut = [];
  formInputs.forEach((input, index) => {
    if (input.id === `text-input-agenda-slider-${number}`) {
      i = index;
      arrayToCut.push(input);
    }
  });
  const start = arrayToCut.length - i;
  arrayToCut.splice(start, i);
  let formCollections = form.querySelectorAll('select');
  if (arrayToCut) {
    let formArray = loadingArray(arrayToCut, formCollections);
    const lastInput = document.querySelectorAll('.activity-choices');
    lastInput.forEach((activity) => {
      activity.addEventListener('click', (event) => {
      let able = []
      formArray.forEach((input, index) => {
        able.push(true);
        if (!input.value) {
          able[index] = false;
        }
      });
      if (validArray(able)) {
        submitButton.disabled = false;
      }
      });
    });
  }
}

const loadingArray = (formInputs, formCollections) => {
  let formArray = []
  formInputs.forEach((formInput) => {
    formArray.push(formInput);
  });
  formCollections.forEach((formCollection) => {
    formArray.push(formCollection);
  });
  return formArray
};

const validArray = (able) => {
  let boolean = true;
  able.forEach((test) => {
    if (!test) {
      boolean = false;
    }
  });
  return boolean;
};

export { disableButtonIfAllNotFilled }
