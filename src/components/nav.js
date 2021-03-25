export default class Navbar {
  constructor(container) {
    this.navbar = document.createElement('nav');
    this.container = container;
  }

  nav() {
    const navLink = document.createElement('ul');
    const homeLink = document.createElement('li');
    homeLink.innerText = 'Home';
    const menuLink = document.createElement('li');
    menuLink.innerText = 'Menu';
    const contactLink = document.createElement('li');
    contactLink.innerText = 'Contact';
    navLink.appendChild(homeLink);
    navLink.appendChild(menuLink);
    navLink.appendChild(contactLink);
    this.navbar.appendChild(navLink);
    this.container.appendChild(this.navbar);
  /*   
      
      
      const menuLink = document.createElement('li');
      menuLink.innerText = "Menu"
      const contactLink = document.createElement('li');
      contactLink.innerText = "Menu"
    */
  }

  renderNav() {
    this.nav()
  }
}