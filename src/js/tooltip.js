export default function createTooltip() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';

  const tooltipHeader = document.createElement('header');
  tooltipHeader.className = 'tooltip-header';
  tooltipHeader.textContent = 'Popover title';
  tooltip.append(tooltipHeader);

  const tooltipContent = document.createElement('div');
  tooltipContent.className = 'tooltip-content';
  tooltipContent.textContent = "And here's some amazing content. It's very engaging. Right?";
  tooltip.append(tooltipContent);

  document.body.appendChild(tooltip);
  const button = document.querySelector('.button');
  const { top, left } = button.getBoundingClientRect();
  tooltip.style.bottom = `${top + button.offsetHeight + 2}px`;
  tooltip.style.left = `${left + button.offsetLeft + 9}px`;
  tooltip.style.width = `${button.offsetWidth}px`;
}
