import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Efficient", "Inclusive", "Happier"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
