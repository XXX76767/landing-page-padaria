const botao = document.getElementById("encomendar");
const form = document.getElementById("formulario");
botao.addEventListener("click", function () {
  form.style.display = "block";
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
