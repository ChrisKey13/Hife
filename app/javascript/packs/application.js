import "bootstrap";;
import "../plugins/flatpickr";
import { slideToNext, slideToPrevious } from "../components/carousel_slider";
import { loadDynamicBannerText } from '../components/banner';
import { disableButtonIfAllNotFilled } from '../components/meeting_creation';

slideToNext();

slideToPrevious();

loadDynamicBannerText();

if (document.querySelector(".slider")) {
  disableButtonIfAllNotFilled();
}
