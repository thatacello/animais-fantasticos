// eslint-disable-next-line import/extensions
import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  // touchstart é o 'click' do mobile
}

// o que é Event Bubble:
// momento de hosting -> todas as variáveis vão para a memória
// fase de execução do script -> atualiza as variáveis
// fase de bubble -> faz uma verificação em todos os elementos pai que
// iniciaram o evento
// window > document > html > body > outros
