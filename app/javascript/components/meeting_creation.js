const disableButtonIfAllNotFilled = () => {
  const form = document.forms[0];
  const submitInputs = form.querySelectorAll('input');
  let submitArray = []
    submitInputs.forEach((formInput) => {
      submitArray.push(formInput);
    });
  const submitButton = submitArray[submitArray.length - 1];
  let formInputs = form.querySelectorAll('input');
  let formCollections = form.querySelectorAll('select');
  if (formInputs) {
    let formArray = loadingArray(formInputs, formCollections);
    const lastInput = formArray[formArray.length - 1];
    lastInput.addEventListener('click', (event) => {
      let able = []
      formInputs = form.querySelectorAll('input');
      formCollections = form.querySelectorAll('select');

      formArray = loadingArray(formInputs, formCollections);
      formArray.forEach((input, index) => {
        able.push(true);
        if (!input.value) {
          able[index] = false;
        }
      });
      able.splice(-1,1);
      if (validArray(able)) {
        submitButton.disabled = false;
      }
    });
  }
}

const loadingArray = (formInputs, formCollections) => {
  let formArray = []
  formInputs.forEach((formInput) => {
    formArray.push(formInput);
  });
  formArray.splice(-1,1);
  formCollections.forEach((formCollection) => {
    formArray.push(formCollection);
  });
  return formArray
};

const validArray = (able) => {
  let boolean = true;
  able.forEach((test) => {
    if (!test) {
      console.log(test);
      boolean = false;
    }
  });
  return boolean;
};

export { disableButtonIfAllNotFilled }
