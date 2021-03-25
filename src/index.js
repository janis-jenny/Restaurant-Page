import './css/style.css';
import Navbar from './components/nav';

class Container {
  constructor(container) {
    this.container = container;
  }
}

const cont = document.querySelector('#content');
console.log(cont);
const nav = new Navbar(cont);
nav.renderNav();
