/* eslint-disable no-use-before-define */
export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
      // é necessário ter esse método handleEvent() no objeto para ser acessado pelo callback acima
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      // eslint-disable-next-line no-use-before-define
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      // eslint-disable-next-line prefer-template
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      // eslint-disable-next-line prefer-template
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
