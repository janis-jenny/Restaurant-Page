import { imageArray, imageName } from './images';
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
    this.snacksName = ['Nikkei snacks', 'Nigiris', 'Sushi crackers'];
    this.maindish = [poda, estofado, ceviche];
    this.mainName = ['Poda ceviche', 'Estofado nikkei', 'Lapas ceviche'];
    this.desserts = [dessert1, dessert2, dessert3];
    this.dessertName = ['Cacao', 'Bahuaja', 'Mussel'];
  }

  title() {
    const title = document.createElement('h1');
    title.classList.add('title-menu', 'flex');
    title.innerText = 'AMAZON NIKKEI EXPERIENCE...';
    this.section.append(title);
  }

  dishes(subtitle, imgs, names) {
    const cards = document.createElement('div');
    cards.classList.add('card', 'flex');
    const cardSubtitle = document.createElement('h3');
    cardSubtitle.innerText = `${subtitle}`;
    cardSubtitle.classList.add('card-title', 'flex');
    const imgcontainer = document.createElement('div');
    imgcontainer.classList.add('card-img', 'flex');
    const namecontainer = document.createElement('div');
    namecontainer.classList.add('card-name');

    imageArray(imgcontainer, imgs);
    imageName(namecontainer, names);

    cards.append(cardSubtitle, imgcontainer, namecontainer);

    this.section.append(cards);
  }

  renderMenu() {
    this.title();
    this.container.append(this.section);
    this.dishes('Snacks', this.snacks, this.snacksName);
    this.dishes('Main', this.maindish, this.mainName);
    this.dishes('Desserts', this.desserts, this.dessertName);
  }
}