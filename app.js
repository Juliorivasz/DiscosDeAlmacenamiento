const conclusion = document.querySelector(".titulo_conclusion");
const parrafos = document.querySelector(".conteneder_parrafos");

conclusion.addEventListener("click", () => {
  parrafos.classList.toggle("mostrar_parrafos");
});
