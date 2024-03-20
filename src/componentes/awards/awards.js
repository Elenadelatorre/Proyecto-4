import './awards.css';
export function printAwards() {
  const awards = document.createElement('section');
  awards.id = 'awards-section';
  awards.classList.add('awards');
  awards.classList.add('flex-container');
  awards.innerHTML = `
  <div class="awards-content">
    <h1>Premios Ganados</h1>
    <p>Premio 1</p>
    <p>Premio 2</p>
    <p>Premio 3</p>
    <p>Premio 4</p>
      </div>
  `;
  return awards;
}
