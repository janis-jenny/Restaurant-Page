import '../images/MaidoInside.jpg';
import '../css/style.css';

export default class Home {
  constructor(container) {
    this.header = document.createElement('header');
    this.container = container;
  }

  backgroundImg() {
    const image = document.createElement('div');
    image.classList.add('back-img');
    this.header.appendChild(image);
  }

  title() {
    const element = document.createElement('h1');
    element.innerText = 'MAIDO';
    element.classList.add('title');
    this.header.appendChild(element);
  }

  description() {
    const description = document.createElement('p');
    description.innerText = 'THE BEST RESTAURANT IN PERU';
    description.classList.add('paragraph');
    this.header.appendChild(description);
  }

  renderHome() {
    this.header.innerText = '';
    this.backgroundImg();
    this.title();
    this.description();
    // console.log(this.container);
    this.container.append(this.header);
  }
}