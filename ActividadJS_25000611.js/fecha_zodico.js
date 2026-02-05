let mes = parseInt(prompt("Ingrese su mes de nacimiento (1-12):"));
let dia = parseInt(prompt("Ingrese su día de nacimiento:"));

let signo = "";
let fechaValida = true;

// Validar mes
if (mes < 1 || mes > 12) {
    fechaValida = false;
}

// Validar días según el mes
if (fechaValida) {
    if (mes === 2) {
        if (dia < 1 || dia > 28) {
            fechaValida = false;
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia < 1 || dia > 30) {
            fechaValida = false;
        }
    } else {
        if (dia < 1 || dia > 31) {
            fechaValida = false;
        }
    }
}

// Si la fecha es válida, calcular signo
if (fechaValida) {
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Tauro";
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Géminis";
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Cáncer";
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leo";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgo";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpio";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitario";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricornio";
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Piscis";
    }

    alert("Tu signo zodiacal es: " + signo);
} else {
    alert("Fecha inválida. Verifique el mes y el día ingresados.");
}
