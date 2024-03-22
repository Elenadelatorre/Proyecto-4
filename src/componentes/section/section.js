export function printSection(id, title, subTitle, contentArray) {
  const section = document.createElement('section');
  section.id = id;
  section.classList.add('flex-container');
  section.classList.add('section');

  const sectionContent = document.createElement('div');
  sectionContent.classList.add(`${id}-content`);

  const heading = document.createElement('h2');
  heading.textContent = title;

  const subHeading = document.createElement('h4');
  subHeading.textContent = subTitle;

  sectionContent.appendChild(heading);
  sectionContent.appendChild(subHeading);

  contentArray.forEach((item) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = item;
    sectionContent.appendChild(paragraph);
  });

  const button = document.createElement('button');
  button.textContent = 'Saber más';
  button.addEventListener('click', () => {
    console.log('Más información sobre la sección ', title);
  });
  sectionContent.appendChild(button);

  section.appendChild(sectionContent);

  return section;
}
