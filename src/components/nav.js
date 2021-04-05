import { imageArray } from './images';
import Home from './home';
import Menu from './menu';
import Contact from './contact';
import maido from '../images/logo-maido.png';

export default class Navbar {
  constructor(container, main) {
    this.navbar = document.createElement('nav');
    this.navbar.classList.add('flex');
    this.idxTab = 0;
    this.container = container;
    this.main = main;
    this.logo = [maido];
  }

  navLogo(subtitle, imgs) {
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');

    imageArray(logoContainer, imgs);

    this.navbar.appendChild(logoContainer);
    this.container.appendChild(this.navbar);
  }

  nav() {
    const navLink = document.createElement('ul');
    navLink.classList.add('links-list', 'flex');
    const homeLink = document.createElement('li');
    homeLink.innerText = 'Home';
    homeLink.classList.add('navi');
    const menuLink = document.createElement('li');
    menuLink.innerText = 'Menu';
    menuLink.classList.add('navi');
    const contactLink = document.createElement('li');
    contactLink.innerText = 'Contact';
    contactLink.classList.add('navi');
    navLink.appendChild(homeLink);
    navLink.appendChild(menuLink);
    navLink.appendChild(contactLink);
    this.navbar.appendChild(navLink);
    this.container.appendChild(this.navbar);
  }

  selectLinks() {
    this.nav();
    const links = document.querySelectorAll('.navi');
    this.listenLinks(links);
    this.SetActiveClass(links, this.idxTab);
  }

  SetActiveClass(linksGroup) {
    linksGroup[this.idxTab].classList.add('active');
  }

  static RemoveActiveClass(tabs) {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  }

  listenLinks(tabs) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        Navbar.RemoveActiveClass(tabs);
        this.idxTab = idx;
        this.SetActiveClass(tabs);
        this.displayContent(this.idxTab);
      });
    });
  }

  displayContent(idxLink) {
    this.main.innerText = '';
    switch (idxLink) {
      case 0: {
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
  }

  renderNav() {
    this.navLogo('', this.logo);
    this.selectLinks();
    this.container.append(this.main);
  }
}
