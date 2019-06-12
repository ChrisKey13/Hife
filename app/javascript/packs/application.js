require("chartkick")
require("chart.js")
import "bootstrap";
import "../plugins/flatpickr";
import { slideToNext, slideToPrevious, slideToRight, slideToLeft, selectCardActivity } from "../components/carousel_slider";
import { loadDynamicBannerText } from '../components/banner';
import "../components/slick";

import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
import { initMapbox } from '../plugins/init_mapbox';
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { disableButtonIfAllNotFilled } from '../components/meeting_creation';
//import { displayCards }

slideToNext();
slideToPrevious();

const activities = document.querySelectorAll(".activity-choice");
if (activities) {
  selectCardActivity();
  slideToRight();
  slideToLeft();
}


if (document.querySelector(".slider-meeting")) {
  disableButtonIfAllNotFilled();
}

const banner = document.getElementById('banner-typed-text');
if (banner) {
  loadDynamicBannerText();
}


import { addOutputToSlider } from '../components/meeting_slider';

const agendaSliders = document.querySelectorAll(".form-group.range");
if (agendaSliders.length > 0) {
  addOutputToSlider(0);
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


import { drawBackgroundColor, drawStacked } from '../plugins/googlecharts';
const lineChart = document.querySelector(".svg-container1");
if (lineChart) {
  drawBackgroundColor();
}
const stackchart = document.querySelector(".svg-container2");
if (stackchart) {
  drawStacked();
}


initMapbox();
