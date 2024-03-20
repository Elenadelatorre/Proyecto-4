import './experience.css';
export function printExperience() {
  const experience = document.createElement('section');
  experience.id = 'experience-section';
  experience.classList.add('experience');
  experience.classList.add('flex-container');
  experience.innerHTML = `
  <div class="experience-content">
    <h1>Experiencia Laboral</h1>
    <p>Empresa 1</p>
    <p>Empresa 2</p>
    <p>Empresa 3</p>
    <p>Empresa 4</p>
      </div>
  `;
  return experience;
}
