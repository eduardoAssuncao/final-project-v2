/*function myFunction() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}*/

const body = document.querySelector('body');
const lightModeButton = document.querySelector('.dark__mode__icon');

// Verifica se o modo escuro está ativado no Local Storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica o modo escuro ou claro ao body
if (isDarkMode) {
  body.classList.add('dark-mode');
} else {
  body.classList.add('light-mode');
}

// Função para ativar o modo escuro
function ativarModoEscuro() {
  localStorage.setItem('darkMode', 'true');
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
}

// Função para ativar o modo claro
function ativarModoClaro() {
  localStorage.setItem('darkMode', 'false');
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
}


// hover de icone para topo
window.addEventListener('scroll', function() {
  const icone = document.getElementById('arrow__page');
  const scrollTop = window.scrollY;

  if (scrollTop > 500) {
    icone.style.top = '36rem';
  } else {
    icone.style.top = '-40rem';
  }
});