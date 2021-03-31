import imageArray from './images';
import face from '../images/facebook.png';
import insta from '../images/instagram.png';
import maido from '../images/logo-maido.png';
import '../css/style.css';

export default class Footer {
  constructor(container) {
    this.section = document.createElement('footer');
    this.container = container;
    this.icons = [face, insta];
    this.logo = [maido];
  }

  footerMedia(subtitle, imgs) {
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('icons');
    const iconSubtitle = document.createElement('h3');
    iconSubtitle.innerText = `${subtitle}`;
    iconSubtitle.classList.add('icons-title');
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icons-card');

    imageArray(iconContainer, imgs);
    
    socialMedia.appendChild(iconSubtitle);
    socialMedia.appendChild(iconContainer);
    this.section.appendChild(socialMedia);
  }

  footerLogo(subtitle, imgs) {
    const logo = document.createElement('div');
    logo.classList.add('logo-card');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');

    imageArray(logoContainer, imgs);

    logo.appendChild(logoContainer);

    this.section.appendChild(logo);
  }

  renderFooter() {
    this.container.append(this.section);
    this.footerMedia('Social Media', this.icons);
    this.footerLogo('', this.logo);
  }
}
