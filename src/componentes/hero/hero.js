import './hero.css';

export function printHero() {
  const hero = document.createElement('section');
  hero.classList.add('hero');
  hero.classList.add('flex-container');
  hero.innerHTML = `
  <div class="hero-content">
    <h1>¡Construyamos juntos el futuro!</h1>
    <p>Soy una apasionada del desarrollo de software en busca de nuevos desafíos.</p>
  </div>`;
  return hero;
}
