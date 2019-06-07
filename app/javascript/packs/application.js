import "bootstrap";
import "../plugins/flatpickr"
import { slideToNext, slideToPrevious } from "../components/carousel_slider"
import { loadDynamicBannerText } from '../components/banner';
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();

slideToNext();

slideToPrevious();

loadDynamicBannerText();
