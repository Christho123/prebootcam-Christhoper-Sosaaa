document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const edadInput = document.getElementById("edad").value;
  const mensaje = document.getElementById("mensaje");

  const edad = parseInt(edadInput);

  if (nombre === "" || isNaN(edad)) {
    mensaje.textContent = "Por favor, completa todos los campos correctamente.";
    return;
  }

  if (edad < 0 || edad > 120) {
    mensaje.textContent = "Por favor, ingresa una edad realista.";
  } else if (edad >= 18) {
    mensaje.textContent = `✅ Hola ${nombre}, con ${edad} años puedes conducir.`;
    console.log("Puedes conducir");
  } else {
    mensaje.textContent = `❌ Hola ${nombre}, con ${edad} años no puedes conducir.`;
    console.log("No puedes conducir");
  }
});
