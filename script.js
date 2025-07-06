// Aquí puedes agregar futuras validaciones o interacciones
// Por ahora, solo mostramos un mensaje cuando se envía el formulario

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Solicitud enviada correctamente.");
});
