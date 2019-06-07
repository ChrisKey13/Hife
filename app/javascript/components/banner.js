import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const bannerTyped = document.querySelector('#banner-typed-text');
  if (bannerTyped) {
    new Typed('#banner-typed-text', {
      strings: ["Efficient", "Inclusive", "Happier"],
      typeSpeed: 100,
      loop: true
    });
  }
};

export { loadDynamicBannerText };
