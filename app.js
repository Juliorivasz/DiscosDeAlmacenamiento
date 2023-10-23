const conclusion = document.querySelector(".contenedor_icon");
const parrafos = document.querySelector(".conteneder_parrafos");

conclusion.addEventListener("click", () => {
  parrafos.classList.toggle("mostrar_parrafos");
});
