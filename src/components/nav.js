import Home from './home';
/* import Menu from './components/menu';
import Contact from './components/contact';  */

export default class Navbar {
  constructor(container, main) {
    this.navbar = document.createElement('nav');
    this.idxTab = 0;
    this.container = container;
    this.main = main;
  }

  nav() {
    const navLink = document.createElement('ul');
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
  }

  renderNav() {
    // this.listenLinks();
    this.selectLinks();
    this.container.append(this.main);
  }
}
