import './info.css';

export function printInfo() {
  const info = document.createElement('section');
  info.id = 'info-section';
  info.classList.add('info');
  info.classList.add('flex-container');

  info.innerHTML = `
  <ul class="achievements-list flex-container column">
  <li id="myExperience" class="achievement" >
    <img  id="myExperience" class="icon bounce" src="./public/assets/desarrollo-web.png" alt="programación" />
    <p>20</p>
    <h4>Años en Programación</h4>
  </li>
  <li class="achievement" id="myProjects">
    <img class="icon bounce" src="./public/assets/proyecto.png" alt="proyectos" />
    <p>102</p>
    <h4>Proyectos Realizados</h4>
  </li>
  <li class="achievement" id="myAwards">
    <img class="icon bounce" src="./public/assets/medalla.png" alt="premios" />
    <p>10</p>
    <h4>Premios Ganados</h4>
  </li>
  <li class="achievement" id="myIdioms">
    <img class="icon bounce" src="./public/assets/idiomas.png" alt="idiomas" />
    <p>4</p>
    <h4>Idiomas Afianzados</h4>
  </li>
</ul>`;

  return info;
}
