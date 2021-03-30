import '../css/style.css';

export default class Contact {
  constructor(container) {
    this.section = document.createElement('section');
    this.container = container;
  }

  title() {
    const title = document.createElement('h1');
    title.classList.add('title-contact')
    title.innerText = 'Contact';
    this.section.append(title);
  }

  /* info(subtitle, imgs) {
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
  } */

  renderContact() {
    this.title();
    this.container.append(this.section);
   /*  this.dishes('Snacks', this.snacks);
    this.dishes('Main', this.maindish);
    this.dishes('Desserts', this.desserts); */
  }
}