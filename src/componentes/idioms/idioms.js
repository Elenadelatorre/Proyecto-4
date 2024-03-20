import './idioms.css';
export function printIdioms() {
  const idioms = document.createElement('section');
  idioms.id = 'idioms-section';
  idioms.classList.add('idioms');
  idioms.classList.add('flex-container');
  idioms.innerHTML = `
  <div class="idioms-content">
    <h1>Idiomas Afianzados</h1>
    <p>Idioma 1</p>
    <p>Idioma 2</p>
    <p>Idioma 3</p>
    <p>Idioma 4</p>
      </div>
  `;
  return idioms;
}
