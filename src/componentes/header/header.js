import './header.css';
export function printHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.classList.add('flex-container');
  header.innerHTML = `
  <div class="flex-container">
  <img class="logo" src="./desarrollador.png" alt="logo CV" />
  <h1><i>Curriculum Vitae</i></h1>
</div>
<nav>
  <ul class="flex-container">
    <li id="myInfo">
      <a href="#Information">Información</a>
    </li>
    <li>
    <button id="show-contact-form">Contacto</button>
    </li>
      </ul>
</nav>

<div id="contact-form-container" style="display: none;">
  <div id="contact-form">
    <h2>Contacto</h2>
    <form id="contact-form-fields">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Mensaje:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Enviar</button>
      <button type="button" id="close-form">Cancelar</button>
    </form>
  </div>
</div>
  `;
  return header;
}

printHeader();
