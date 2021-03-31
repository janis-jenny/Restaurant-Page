import imageArray from './images';
import face from '../images/facebook.png';
import insta from '../images/instagram.png';
import '../css/style.css';

export default class Footer {
  constructor(container) {
    this.section = document.createElement('footer');
    this.container = container;
    this.icons = [face, insta];
  }

  footer(subtitle, imgs) {
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('icons');
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icons-card');
    const iconSubtitle = document.createElement('h3');
    iconSubtitle.innerText = `${subtitle}`;
    iconSubtitle.classList.add('icons-title');

    imageArray(iconContainer, imgs)

    socialMedia.appendChild(iconContainer);
    socialMedia.appendChild(iconSubtitle);
    this.section.appendChild(socialMedia);
  }

  /* selectLinks() {
    this.nav();
    const links = document.querySelectorAll('.navi');
    this.listenLinks(links);
    // console.log(links)
  }

  listenLinks(tabs) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        this.idxTab = idx;
        this.displayContent(this.idxTab);
      });
    });
  }

  displayContent(idxLink) {
    this.main.innerText = '';
    switch (idxLink) {
      case 0: {
        // console.log(this.main)
        const home = new Home(this.main);
        home.renderHome();
        break;
      }
      case 1: {
        const menu = new Menu(this.main);
        menu.renderMenu();
        break;
      }
      default: {
        const cont = new Contact(this.main);
        cont.renderContact();
        break;
      }
    }
  } */

  renderFooter() {
    // this.listenLinks();
 
    this.container.append(this.section);
    this.footer('Social Media', this.icons);
  }
}
