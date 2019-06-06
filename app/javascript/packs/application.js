import "bootstrap";
import "../plugins/flatpickr"
import { slideToNext, slideToPrevious } from "../components/carousel_slider"
import { loadDynamicBannerText } from '../components/banner';
import "../components/slick"

slideToNext();

slideToPrevious();

loadDynamicBannerText();
