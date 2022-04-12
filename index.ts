let ingNombre = document.getElementById("inputNombre");
function saludar(): void {
  let nombre = ingNombre.value;

  let nodoSaludar = document.getElementById("saludar");
  nodoSaludar.innerHTML = "HOLA " + nombre;
}

ingNombre.addEventListener("input", saludar);
