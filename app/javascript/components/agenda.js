

import { addOutputToSliderBullet } from './meeting_slider';


const addAgenda = document.querySelector(".add-agenda");

const clickToAddAgendaBullet = () => {
  let number;
  let agendaBullets;
  addAgenda.addEventListener('click', (event) => {
    event.preventDefault();
    agendaBullets = document.querySelectorAll(".agenda-bullets");
    number = agendaBullets.length;
    const htmlBullet = `
        <div class="agenda-bullets">
          <div class="form-group string optional meeting_agenda${number}_title">
            <label class="form-control-label string optional" for="meeting_agenda${number}_title">Item title ${number + 1}</label>
            <input class="form-control string optional" type="text" name="meeting[agenda${number}][title]" id="meeting_agenda${number}_title">
          </div>
          <div class="agenda-bullet-section i-${number} show">
            <div class="form-group text optional meeting_agenda${number}_description">
              <label class="form-control-label text optional" for="meeting_agenda${number}_description">Item description</label>
              <textarea class="form-control text optional" name="meeting[agenda${number}][description]" id="meeting_agenda${number}_description">
              </textarea>
            </div>
            <div class="form-group range optional meeting_agenda${number}_duration">
              <label class="range optional" for="text-input-agenda-slider-${number}">Duration</label>
              <input class="form-control-range numeric range optional" step="5" value="15" min="5" max="120" id="text-input-agenda-slider-${number}" type="range" name="meeting[agenda${number}][duration]">
            </div>
            <output class="agenda-duration" id="agenda-duration id-${number}">15 min</output>
            <div class="form-group select required meeting_agenda${number}_user">
              <label class="form-control-label select required" for="meeting_agenda${number}_user">Collaborator in charge <abbr title="required">*</abbr>
              </label>
              <select class="form-control select required" name="meeting[agenda${number}][user]" id="meeting_agenda${number}_user">
                <option value="14">Vincent Despatin</option>
                <option value="15">Mikael Garriguet</option>
                <option value="16">Clément Pecastaings</option>
                <option value="17">Louise Salle</option>
                <option value="18">Magdalena Niemec</option>
                <option value="19">Laurent Toave</option>
                <option value="20">Nicolas Martin</option>
                <option value="21">Christophe Boucquet</option>
                <option value="22">Servane Level</option>
                <option value="23">Raphaelle Grec</option>
                <option value="24">Diane Johnston roussillon</option>
              </select>
            </div>
          </div>
          <div class="unhide-bullet in-${number} btn-agenda-unhide"><i class="fas fa-arrow-circle-up"></i></div>
        </div>
        `;
    addAgendaBulletHTML(htmlBullet);
    const previousBullet = agendaBullets[number - 1].querySelector('.agenda-bullet-section');
    previousBullet.classList.remove('show');
    setTimeout(function() {previousBullet.classList.add('hide')}, 600);
    agendaBullets[number - 1].querySelector(`.unhide-bullet.in-${number - 1}`).innerHTML = `<i class="fas fa-arrow-circle-down"></i>`;
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
      unhideBullet.innerHTML = `<i class="fas fa-arrow-circle-down"></i>`;
    } else {
      agendaBulletSection.classList.toggle("hide");
      setTimeout(function() {agendaBulletSection.classList.toggle("show")}, 200)
      unhideBullet.innerHTML = `<i class="fas fa-arrow-circle-up"></i>`;
    }
  })
};


export { clickToAddAgendaBullet, toggleToUnhide };
