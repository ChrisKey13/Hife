import "bootstrap";
import "../plugins/flatpickr";
import { slideToNext, slideToPrevious } from "../components/carousel_slider";
import { loadDynamicBannerText } from '../components/banner';
import "../components/slick";
// import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
// import { initMapbox } from '../plugins/init_mapbox';
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { disableButtonIfAllNotFilled } from '../components/meeting_creation';

slideToNext();
slideToPrevious();

if (document.querySelector(".slider-meeting")) {
  disableButtonIfAllNotFilled();
}

const banner = document.getElementById('banner-typed-text');
if (banner) {
  loadDynamicBannerText();
}


import { addOutputToSlider } from '../components/meeting_slider';

const agendaSliders = document.querySelectorAll(".form-group.range");
if (agendaSliders) {
  addOutputToSlider(0);
}


import { clickToAddAgendaBullet, toggleToUnhide } from '../components/agenda';

const addAgenda = document.querySelector(".add-agenda");
if (addAgenda) {
  clickToAddAgendaBullet();
}

const agendaBullets = document.querySelectorAll(".agenda-bullets");
if (agendaBullets) {
  toggleToUnhide(0);
}

// initMapbox();
