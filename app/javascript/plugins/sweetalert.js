import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

// const Swal = require('sweetalert2');

const addSweetAlertAfterCreateMeeting = () => {
  const submitBtn = document.querySelector(".btn-success");
  if (submitBtn) {
    if (submitBtn.disabled === true) {
      const form = document.forms[0];
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
          type: 'success',
          title: 'Meeting created!',
          timer: 3000
        })
        form.submit();
      });

    }
  }
};

export { addSweetAlertAfterCreateMeeting };
