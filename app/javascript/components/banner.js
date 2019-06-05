import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["n Efficient", "n Inclusive", "Happier"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
