function jugar() {
  let continuar = "SI";

  while (continuar === "SI") {
    let numeroComputadora = Math.floor(Math.random() * 9) + 1;

    let numeroUsuario;
    do {
      numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
    } while (numeroUsuario < 3 || numeroUsuario > 6);

    let eleccion = prompt("¿MAYOR, MENOR o IGUAL?").toUpperCase();

    let acierto =
      (eleccion === "MAYOR" && numeroUsuario > numeroComputadora) ||
      (eleccion === "MENOR" && numeroUsuario < numeroComputadora) ||
      (eleccion === "IGUAL" && numeroUsuario === numeroComputadora);

    alert(
      `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. ` +
      (acierto ? "¡Ha adivinado!" : "No ha adivinado")
    );

    continuar = prompt("¿Desea jugar otra vez? (SI / NO)").toUpperCase();
  }

  let nombre = prompt("Ingrese su nombre:");
  let carnet = prompt("Ingrese su número de carné:");
  alert(`Nombre: ${nombre}\nCarné: ${carnet}`);
}
