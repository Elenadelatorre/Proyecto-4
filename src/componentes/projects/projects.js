import './projects.css';

export function printProjects(title, imageSrc, projectLink) {
  const card = document.createElement('div');
  card.classList.add('project-card');

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = title;

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const link = document.createElement('a');
  link.href = projectLink;
  link.textContent = 'Ver proyecto';

  card.appendChild(image);
  card.appendChild(titleElement);
  card.appendChild(link);

  return card;
}
