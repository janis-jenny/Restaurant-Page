/* import poda from '../images/Poda-ceviche.jpg';
import nikkei from '../images/nikkei.jpg';
import snacks from '../images/Snacks.jpg'; */
/* import estofado from '../images/Estofado-Nikkei.jpg';
import nigiris from '../images/Nigiris.jpg';
import dimsum from '../images/Dim-Sum.jpg'; */

export default class Menu {
  constructor(container) {
    this.section = document.createElement('section');
    this.container = container;
    // this.cardsContainer = newElment('section', undefined, ['cards-container']);
    // this.images = [poda, nikkei, snacks];
  }

  title() {
    const title = document.createElement('h1');
    title.innerText = 'NIKKEI';
    this.section.append(title);
  }

  renderMenu() {
    this.section.innerText = '';
    this.title();
    this.container.append(this.section);
  }
 /*  cardContainer() {
    const card = document.createElement('div');
    card.classList.add('div-img');
    const img = document.createElement('img');
    img.src = poda;
    img.classList.add('menu-item');
    const name = document.createElement('h3');
    name.innerText = 'Poda Ceviche';
    const cost = document.createElement('h2');
    cost.innerText = price;
  } */
}