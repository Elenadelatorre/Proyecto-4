import './style.css';

import { printHeader } from './src/componentes/header/header.js';
import { printHero } from './src/componentes/hero/hero.js';
import { printInfo } from './src/componentes/info/info.js';
import { printProjects } from './src/componentes/projects/projects.js';
import { printSection } from './src/componentes/section/section.js';
import { printFooter } from './src/componentes/footer/footer.js';

const body = document.querySelector('body');
const main = document.querySelector('main');

// Crear y almacenar todas las secciones
const headerElement = printHeader();
const hero = printHero();
const info = printInfo();
const footer = printFooter();

body.insertAdjacentElement('afterbegin', headerElement);
main.insertAdjacentElement('afterbegin', hero);
main.insertAdjacentElement('beforeend', info);
main.insertAdjacentElement('beforeend', footer);

// Crear una sección de proyectos
const projectsSection = document.createElement('section');
projectsSection.id = 'projects-section';
projectsSection.classList.add('projects');
projectsSection.classList.add('flex-container');
main.insertAdjacentElement('beforeend', projectsSection);

// Definir un array de objetos que representen los proyectos
const projects = [
  {
    title: 'Tienda Virtual',
    imageSrc: './tienda.png',
    projectLink: 'https://poetic-meerkat-a29b48.netlify.app'
  },
  {
    title: 'Inspirest',
    imageSrc: './bombilla.png',
    projectLink: 'https://eloquent-medovik-2afd4b.netlify.app'
  }
  // Agregar más proyectos según sea necesario
];

// Iterar sobre el array de proyectos y crear una ficha de proyecto para cada uno
projects.forEach((project) => {
  const projectCard = printProjects(
    project.title,
    project.imageSrc,
    project.projectLink
  );
  projectsSection.appendChild(projectCard);
});

// Contenido para las secciones combinadas
const combinedSections = [
  {
    id: 'experience-section',
    title: 'Experiencia laboral en programación',
    subTitle: 'Aplicando habilidades',
    content: [
      'Desarrolladora front-end',
      'Desarrolladora back-end',
      'Analista de datos',
      'Seguridad informática'
    ]
  },
  {
    id: 'awards-section',
    title: 'Reconocimientos y premios',
    subTitle: 'Distinciones y logros',
    content: [
      'Innovación en Seguridad Informática',
      'Mejor Diseño de Interfaz (UI/UX)',
      'Desarrollo APP',
      'Investigación Inteligenica Artificial'
    ]
  },
  {
    id: 'idioms-section',
    title: 'Dominio de Idiomas',
    subTitle: 'Idiomas utilizados en Entornos Profesionales',
    content: [
      'Inglés: Nivel Avanzado',
      'Español: Lengua Materna',
      'Aleman: Nivel Básico',
      'Chino Mandarín: Nivel Intermedio'
    ]
  }
];

// Insertar las secciones en el DOM

combinedSections.forEach((section) => {
  main.insertAdjacentElement(
    'beforeend',
    printSection(section.id, section.title, section.subTitle, section.content)
  );
});

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

// Agregar evento de "click" al botón de cancelar para ocultar el formulario:
document.getElementById('close-form').addEventListener('click', function () {
  document.getElementById('contact-form-container').style.display = 'none';
});

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
