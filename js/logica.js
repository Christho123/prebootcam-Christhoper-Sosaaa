let edad = prompt("¿Cuántos años tienes?");

if (edad === null || edad.trim() === "") {
  alert("No ingresaste una edad válida.");
} else {
  edad = parseInt(edad);

  if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido.");
  } else if (edad >= 18) {
    alert("✅ Puedes conducir.");
  } else {
    alert("❌ No puedes conducir.");
  }
}
