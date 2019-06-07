import "bootstrap";
import "../plugins/flatpickr";
import { slideToNext, slideToPrevious } from "../components/carousel_slider";
import { loadDynamicBannerText } from '../components/banner';
import "../components/slick";
// import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
// import { initMapbox } from '../plugins/init_mapbox';
import { disableButtonIfAllNotFilled } from '../components/meeting_creation';

slideToNext();
slideToPrevious();

loadDynamicBannerText();

if (document.querySelector(".slider")) {
  disableButtonIfAllNotFilled();
}

const banner = document.getElementById('banner-typed-text');
if (banner) {
  loadDynamicBannerText();
}

// initMapbox();
