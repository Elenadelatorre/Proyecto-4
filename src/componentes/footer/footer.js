export function printFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.classList.add('flex-container');
  footer.innerHTML = `<p>&copy; 2024 Elena de la Torre</p>`;
  return footer;
}
