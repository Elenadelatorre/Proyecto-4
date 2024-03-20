import './style.css';

import { printHeader } from './src/componentes/header/header.js';
import { printHero } from './src/componentes/hero/hero.js';
import { printExperience } from './src/componentes/experience/experience.js';
import { printProjects } from './src/componentes/projects/projects.js';
import { printAwards } from './src/componentes/awards/awards.js';
import { printIdioms } from './src/componentes/idioms/idioms.js';
import { printFooter } from './src/componentes/footer/footer.js';
import { printInfo } from './src/componentes/info/info.js';

const body = document.querySelector('body');
const main = document.querySelector('main');

// Crear y almacenar todas las secciones
const headerElement = printHeader();
const hero = printHero();
const info = printInfo();
const experience = printExperience();
const projects = printProjects();
const awards = printAwards();
const idioms = printIdioms();
const footer = printFooter();

// Insertar las secciones en el DOM
body.insertAdjacentElement('afterbegin', headerElement);
main.insertAdjacentElement('afterbegin', hero);
main.insertAdjacentElement('beforeend', info);
main.insertAdjacentElement('beforeend', experience);
main.insertAdjacentElement('beforeend', projects);
main.insertAdjacentElement('beforeend', awards);
main.insertAdjacentElement('beforeend', idioms);
body.insertAdjacentElement('beforeend', footer);

// Función para mostrar el formulario de contacto
function showContactForm() {
  const contactFormContainer = document.getElementById(
    'contact-form-container'
  );
  if (contactFormContainer) {
    contactFormContainer.style.display = 'block';
  }
}

// Función para ocultar el formulario de contacto
function hideContactForm() {
  const contactFormContainer = document.getElementById(
    'contact-form-container'
  );
  if (contactFormContainer) {
    contactFormContainer.style.display = 'none';
  }
}

// Agregar evento de "click"al botón de contacto para mostrar el formulario
const contactButton = document.getElementById('show-contact-form');
if (contactButton) {
  contactButton.addEventListener('click', function () {
    showContactForm();
  });
}

// Agregar evento de "click" al botón de enviar dentro del formulario para ocultarlo
const submitButton = document.getElementById('submit-contact-form');
if (submitButton) {
  submitButton.addEventListener('click', function () {
    hideContactForm();
  });
}

// Agregar evento de "click" al enlace de "información":
const linkInfo = document.querySelector('#myInfo');
if (linkInfo) {
  linkInfo.addEventListener('click', function () {
    const targetSection = document.querySelector('#info-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Agregar evento de "click" al icono de experiencia:
const iconExperience = document.querySelector('#myExperience');
if (iconExperience) {
  iconExperience.addEventListener('click', function () {
    const targetSection = document.querySelector('#experience-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Agregar evento de "click" a los iconos de proyectos:
const iconProjects = document.querySelector('#myProjects');
if (iconProjects) {
  iconProjects.addEventListener('click', function () {
    const targetSection = document.querySelector('#projects-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Agregar evento de "click" al icono de premios:
const iconAwards = document.querySelector('#myAwards');
if (iconAwards) {
  iconAwards.addEventListener('click', function () {
    const targetSection = document.querySelector('#awards-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Agregar evento de "click" al icono de idiomas:
const iconIdioms = document.querySelector('#myIdioms');
if (iconIdioms) {
  iconIdioms.addEventListener('click', function () {
    const targetSection = document.querySelector('#idioms-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
