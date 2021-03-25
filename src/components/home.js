export default class Home {
  constructor(container) {
    this.header = document.createElement('header');
    this.container = container;
  }

  title() {
    const element = document.createElement('h1');
    element.innerText = 'Maido';
    element.classList.add('title');
    this.header.appendChild(element);
  };

  renderHome() {
    this.header.innerText = '';
    this.title();
    // console.log(this.container);
    this.container.append(this.header);
  }
}