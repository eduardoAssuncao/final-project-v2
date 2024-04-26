
const body = document.querySelector("body");
const lightModeButton = document.querySelector(".dark__mode__icon");

// Verifica se o modo escuro está ativado no Local Storage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Aplica o modo escuro ou claro ao body
if (isDarkMode) {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

// Função para ativar o modo escuro
function ativarModoEscuro() {
  localStorage.setItem("darkMode", "true");
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
}

// Função para ativar o modo claro
function ativarModoClaro() {
  localStorage.setItem("darkMode", "false");
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
}

// hover de icone para topo e de surgimento de conteudo
window.addEventListener("scroll", function () {
  const icone = document.getElementById("arrow__page");
  const secondSection = document.getElementById("segunda-secao");
  const thirdSection = document.getElementById("terceira-secao");
  const scrollTop = window.scrollY;

  if (scrollTop > 500) {
    icone.style.top = "36rem";
    icone.classList.add("add__animation__arrow");
    icone.classList.remove("remove__animation__arrow");
  } else {
    icone.classList.remove("add__animation__arrow");
    icone.classList.add("remove__animation__arrow");
  }

  if (scrollTop < 100) {
    secondSection.classList.remove("show__content__index");
    thirdSection.classList.remove("show__content__index");
  }

  if (scrollTop > 200) {
    secondSection.classList.add("show__content__index");
  }
  if (scrollTop > 1000) {
    thirdSection.classList.add("show__content__index");
  }
});
