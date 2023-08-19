import createTooltip from './tooltip';

const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const tooltipElement = document.querySelector('.tooltip');
  if (tooltipElement === null) {
    createTooltip();
  } else {
    tooltipElement.remove();
  }
});
