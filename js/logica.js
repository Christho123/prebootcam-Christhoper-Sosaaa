function verificarEdad() {
  const edadInput = document.getElementById("edad").value;
  const resultado = document.getElementById("resultado");

  const edad = parseInt(edadInput);

  if (isNaN(edad)) {
    resultado.textContent = "Por favor, ingresa un número válido.";
  } else if (edad < 0 || edad > 120) {
    resultado.textContent = "Por favor, ingresa una edad realista.";
  } else if (edad >= 18) {
    resultado.textContent = "✅ Puedes conducir en Perú.";
    console.log("Puedes conducir");
  } else {
    resultado.textContent = "❌ No puedes conducir en Perú.";
    console.log("No puedes conducir");
  }
}
