import '../images/Maido.jpg';
import '../css/style.css';

export default class Home {
  constructor(container) {
    this.header = document.createElement('header');
    this.container = container;
  }

  backgroundImg() {
    const image = document.createElement('section');
    image.classList.add('back-img');
    const element = document.createElement('h1');
    element.innerText = 'MAIDO';
    element.classList.add('title', 'flex');
    const description = document.createElement('p');
    description.innerText = 'THE BEST RESTAURANT IN PERU';
    description.classList.add('paragraph');
    image.appendChild(element);
    image.appendChild(description);
    this.header.appendChild(image);
  }

  renderHome() {
    this.header.innerText = '';
    this.backgroundImg();
    this.container.append(this.header);
  }
}