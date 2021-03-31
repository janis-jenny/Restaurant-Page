import '../css/style.css';

export default class Footer {
  constructor(container) {
    this.section = document.createElement('footer');
    this.container = container;
  }

  footer() {
    const socialMedia = document.createElement('ul');
    socialMedia.classList.add('icons');
    const facebook = document.createElement('li');
    facebook.classList.add('face-icon');
    facebook.innerHTML = '<i class=\'fab fa-facebook\'></i>';
    const instagram = document.createElement('li');
    instagram.classList.add('insta-icon');
    instagram.innerHTML = '<i class\'fab fa-instagram-square\'></i>';
    socialMedia.appendChild(facebook);
    socialMedia.appendChild(instagram);
    this.section.appendChild(socialMedia);
    this.container.appendChild(this.section);
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
    this.footer();
  }
}
