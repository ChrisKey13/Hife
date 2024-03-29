
import "bootstrap";
import "../plugins/flatpickr";
import { loadDynamicBannerText } from '../components/banner';
import "../components/slick";

import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
//import { displayCards }


import { slideToNext, slideToPrevious, selectCardActivity } from "../components/carousel_slider";
import { mainActivityMaker } from '../components/activity_master';
slideToNext();
slideToPrevious();
const activities = document.querySelectorAll(".activity-choice");

if (activities.length > 0) {
  selectCardActivity();
  mainActivityMaker();
}

import { disableButtonIfAllNotFilled } from '../components/meeting_creation';

if (document.querySelector(".slider-meeting")) {
  disableButtonIfAllNotFilled();
}

const banner = document.getElementById('banner-typed-text');
if (banner) {
  loadDynamicBannerText();
}


import { addOutputToSliderMeeting, addOutputToSliderBullet } from '../components/meeting_slider';

const agendaSliders = document.querySelectorAll(".form-group.range");
if (agendaSliders.length > 0) {
  addOutputToSliderBullet(0);
  addOutputToSliderMeeting();
}


import { clickToAddAgendaBullet, toggleToUnhide } from '../components/agenda';

const addAgenda = document.querySelector(".add-agenda");
if (addAgenda) {
  clickToAddAgendaBullet();
}

const agendaBullets = document.querySelectorAll(".agenda-bullets");
if (agendaBullets.length > 0) {
  toggleToUnhide(0);
}


import { drawBackgroundColor, drawStacked, drawLineChart, drawLineChart2 } from '../plugins/googlecharts';


if (document.getElementById('chart_div')) {
  drawBackgroundColor();
}

if (document.getElementById('chart2_div')) {
  drawStacked();

}

if (document.getElementById('chart3_div')) {
  drawLineChart();

}
if (document.getElementById('chart4_div')) {
  drawLineChart2();
}


// map to unhide once working
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
import { initMapbox } from '../plugins/init_mapbox';

const activityCards = document.getElementById('card-activities-all');

if (activityCards) {
  initMapbox('low');
  initMapbox('medium');
  initMapbox('high');
}

import { addSweetAlertAfterCreateMeeting } from '../plugins/sweetalert';


const submitBtn = document.querySelector(".btn-success");

if (submitBtn) {
  addSweetAlertAfterCreateMeeting();
}

