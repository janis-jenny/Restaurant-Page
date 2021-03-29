import imageArray from './images';
import poda from '../images/Poda.jpg';
import estofado from '../images/Estofado.jpg';
import ceviche from '../images/ceviche-nikkei.jpg';
/* import estofado from '../images/Estofado-Nikkei.jpg';
import nigiris from '../images/Nigiris.jpg';
import dimsum from '../images/Dim-Sum.jpg'; */
import '../css/style.css';

export default class Menu {
  constructor(container) {
    this.section = document.createElement('section');
    this.container = container;
    this.images = [poda, estofado, ceviche];
  }

  title() {
    const title = document.createElement('h1');
    title.innerText = 'AMAZON NIKKEI EXPERIENCE...';
    this.section.append(title);
  }

  dishes(subtitle, imgs) {
    const cards = document.createElement('div');
    cards.classList.add('card');
    const imgcontainer = document.createElement('div');
    imgcontainer.classList.add('card-img');
    const cardSubtitle = document.createElement('h3');
    cardSubtitle.innerText = `${subtitle}`;
    cardSubtitle.classList.add('card-title');

    imageArray(imgcontainer, imgs);

    cards.append(cardSubtitle);
    cards.append(imgcontainer);

    this.section.append(cards);
  }

  renderMenu() {
    this.title();
    this.container.append(this.section);
    this.dishes('Main', this.images);
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