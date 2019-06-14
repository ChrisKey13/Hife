

import { addOutputToSliderBullet } from './meeting_slider';


const addAgenda = document.querySelector(".add-agenda");

const clickToAddAgendaBullet = () => {
  let number;
  let agendaBullets;
  addAgenda.addEventListener('click', (event) => {
    event.preventDefault();
    agendaBullets = document.querySelectorAll(".agenda-bullets");
    number = agendaBullets.length;

    const meetingAgendaUser = document.getElementById('meeting_agenda_user');
    const optionsFromTeam = meetingAgendaUser.querySelectorAll('option');
    let htmlTeam;

    optionsFromTeam.forEach((option) => {
      if (option.value) {
        htmlTeam += `<option value="${option.value}">${option.innerHTML}</option> \ `
      }
    });

    const htmlBullet = `
        <div class="agenda-bullets"> \
          <div class="form-group string optional meeting_agenda${number}_title"> \
            <label class="form-control-label string optional" for="meeting_agenda${number}_title">What else ?</label> \
            <input class="form-control string optional" type="text" name="meeting[agendas][${number}][title]" id="meeting_agenda${number}_title"> \
          </div> \
          <div class="agenda-bullet-section i-${number} show"> \
            <div class="form-group text optional meeting_agenda${number}_description"> \
              <label class="form-control-label text optional" for="meeting_agenda${number}_description">Enter a description</label> \
              <textarea class="form-control text optional" name="meeting[agendas][${number}][description]" id="meeting_agenda${number}_description"></textarea> \
            </div> \
            <div class="form-group range optional meeting_agenda${number}_duration"> \
              <label class="range optional" for="text-input-agenda-slider-${number}">Select the duration</label> \
              <input class="form-control-range numeric range optional" step="5" value="15" min="5" max="120" id="text-input-agenda-slider-${number}" type="range" name="meeting[agendas][${number}][duration]"> \
            </div> \
            <output class="agenda-duration" id="agenda-duration id-${number}">15 min</output> \
            <div class="form-group select required meeting_agenda${number}_user"> \
              <label class="form-control-label select required" for="meeting_agenda${number}_user">Who's in charge ? <abbr title="required">*</abbr> \
              </label> \
              <select class="form-control select required" name="meeting[agendas][${number}][user]" id="meeting_agenda${number}_user"> \
                ${htmlTeam}
              </select> \
            </div> \
          </div> \
          <div class="unhide-bullet in-${number} btn-agenda-unhide"><i class="fas fa-chevron-up"></i></div> \
        </div> \
        `;

    addAgendaBulletHTML(htmlBullet);
    const previousBullet = agendaBullets[number - 1].querySelector('.agenda-bullet-section');
    previousBullet.classList.remove('show');
    setTimeout(function() {previousBullet.classList.add('hide')}, 600);
    agendaBullets[number - 1].querySelector(`.unhide-bullet.in-${number - 1}`).innerHTML = `<i class="fas fa-chevron-down"></i>`;
    toggleToUnhide(number);
    addOutputToSliderBullet(number);
  });

};


const addAgendaBulletHTML = (htmlBullet) => {
  const agendaBullet = document.querySelector(".agenda-bullets");
  agendaBullet.insertAdjacentHTML('beforeend', htmlBullet);
};



const toggleToUnhide = (index) => {
  const agendaBulletSection = document.querySelector(`.agenda-bullet-section.i-${index}`)
  const unhideBullet = document.querySelector(`.unhide-bullet.in-${index}`);
  unhideBullet.addEventListener('click', (e) => {
    if (agendaBulletSection.classList.contains('show')) {
      agendaBulletSection.classList.toggle("show");
      setTimeout(function() {agendaBulletSection.classList.toggle("hide")}, 600);
      unhideBullet.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    } else {
      agendaBulletSection.classList.toggle("hide");
      setTimeout(function() {agendaBulletSection.classList.toggle("show")}, 200)
      unhideBullet.innerHTML = `<i class="fas fa-chevron-up"></i>`;
    }
  })
};


export { clickToAddAgendaBullet, toggleToUnhide };
