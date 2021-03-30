import '../css/style.css';

export default class Contact {
  constructor(container) {
    this.section = document.createElement('section');
    this.container = container;
  }

  title() {
    const title = document.createElement('h1');
    title.classList.add('title-contact')
    title.innerText = 'CONTACT';
    this.section.append(title);
  }

  info() {
    const info = document.createElement('div');
    info.classList.add('info');
    const address = document.createElement('p');
    address.classList.add('address');
    address.innerText = 'Av. Pedro de Osma 301, Barranco, Lima, Perú.'
    const phone = document.createElement('p');
    phone.classList.add('address');
    phone.innerText = '+51 1 242-8515';
    const email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'reservas@centralrestaurante.com.pe';

    info.append(address);
    info.append(phone);
    info.append(email);

    this.section.append(info);
  }

  reservations() {
    const reserv = document.createElement('div');
    reserv.classList.add('reservtions');
    const titlereserv = document.createElement('h3');
    titlereserv.classList.add('title-reserv');
    titlereserv.innerText = 'RESERVATIONS:';
    const days = document.createElement('h4');
    days.classList.add('days');
    days.innerText = 'Monday to Saturday';
    const hours = document.createElement('p');
    hours.classList.add('days');
    hours.innerText = 'From 12:00 to 18:30';

    reserv.append(titlereserv);
    reserv.append(days);
    reserv.append(hours);

    this.section.append(reserv);
  }

  renderContact() {
    this.title();
    this.info();
    this.reservations();
    this.container.append(this.section);
   /*  this.dishes('Snacks', this.snacks);
    this.dishes('Main', this.maindish);
    this.dishes('Desserts', this.desserts); */
  }
}