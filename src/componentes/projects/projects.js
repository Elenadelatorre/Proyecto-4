import './projects.css';
export function printProjects() {
  const projects = document.createElement('section');
  projects.id = 'projects-section';
  projects.classList.add('projects');
  projects.classList.add('flex-container');
  projects.innerHTML = `
  <div class="projects-content">
    <h1>Proyectos </h1>
    <p>Proyecto 1</p>
    <p>Proyecto 2</p>
    <p>Proyecto 3</p>
    <p>Proyecto 4</p>
      </div>
  `;
  return projects;
}
