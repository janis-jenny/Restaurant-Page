import imageArray from './images';
import snacks1 from '../images/snacks1.jpg';
import snacks2 from '../images/snacks2.jpg';
import snacks3 from '../images/shari.jpg';
import poda from '../images/Poda.jpg';
import estofado from '../images/Estofado.jpg';
import ceviche from '../images/ceviche-nikkei.jpg';
import dessert1 from '../images/dessert1.jpg';
import dessert2 from '../images/dessert2.jpg';
import dessert3 from '../images/dessert3.jpg';
import '../css/style.css';

export default class Menu {
  constructor(container) {
    this.section = document.createElement('section');
    this.container = container;
    this.snacks = [snacks1, snacks2, snacks3];
    this.maindish = [poda, estofado, ceviche];
    this.desserts = [dessert1, dessert2, dessert3];
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
    this.dishes('Snacks', this.snacks);
    this.dishes('Main', this.maindish);
    this.dishes('Desserts', this.desserts);
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