import './css/style.css';
import Navbar from './components/nav';
import Home from './components/home';


const cont = document.querySelector('#content');
const main = document.createElement('div');
const nav = new Navbar(cont, main);
nav.renderNav();

const homePage = new Home(main);
homePage.renderHome();
