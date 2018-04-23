//Ejercicio 2
var generador = /** @class */ (function () {
    function generador(numeroDeGenerador, numeroMWGenerados) {
        this.numeroDeGenerador = numeroDeGenerador;
        this.numeroMWGenerados = numeroMWGenerados;
    }
    return generador;
}());
function encenderTodosLosGeneradores() {
    var numeroMWGeneran4Generadores = 62;
    var totalMWGenerados = 0;
    var i = 1;
    while (i < 5) {
        totalMWGenerados = totalMWGenerados + numeroMWGeneran4Generadores;
        console.log("Generador #" + i + " est\u00E1 prendido, a\u00F1adiendo " + numeroMWGeneran4Generadores + " MW para un total de " + totalMWGenerados + " MW");
        i++;
    }
    var numeroMWGeneran15Generadores = 124;
    for (var j = i; j < 20; j++) {
        totalMWGenerados = totalMWGenerados + numeroMWGeneran15Generadores;
        console.log("Generador #" + j + " est\u00E1 prendido, a\u00F1adiendo " + numeroMWGeneran15Generadores + " MW para un total de " + totalMWGenerados + " MW");
    }
}
function encenderGeneradoresPares() {
    var numeroMWGeneran4Generadores = 62;
    var totalMWGenerados = 0;
    var i = 1;
    while (i < 5) {
        if (i % 2 === 0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran4Generadores;
            console.log("Generador #" + i + " est\u00E1 prendido, a\u00F1adiendo " + numeroMWGeneran4Generadores + " MW para un total de " + totalMWGenerados + " MW");
        }
        else {
            console.log("Generador #" + i + " est\u00E1 apagado.");
        }
        i++;
    }
    var numeroMWGeneran15Generadores = 124;
    for (var j = i; j < 20; j++) {
        if (j % 2 === 0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran15Generadores;
            console.log("Generador #" + j + " est\u00E1 prendido, a\u00F1adiendo " + numeroMWGeneran15Generadores + " MW para un total de " + totalMWGenerados + " MW");
        }
        else {
            console.log("Generador #" + j + " est\u00E1 apagado.");
        }
    }
}
function encenderGeneradoresImpares() {
    var numeroMWGeneran4Generadores = 62;
    var totalMWGenerados = 0;
    var i = 1;
    while (i < 5) {
        if (i % 2 !== 0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran4Generadores;
            console.log("Generador #" + i + " est\u00E1 prendido, a\u00F1adiendo " + numeroMWGeneran4Generadores + " MW para un total de " + totalMWGenerados + " MW");
        }
        else {
            console.log("Generador #" + i + " est\u00E1 apagado.");
        }
        i++;
    }
    var numeroMWGeneran15Generadores = 124;
    for (var j = i; j < 20; j++) {
        if (j % 2 !== 0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran15Generadores;
            console.log("Generador #" + j + " est\u00E1 prendido, a\u00F1adiendo " + numeroMWGeneran15Generadores + " MW para un total de " + totalMWGenerados + " MW");
        }
        else {
            console.log("Generador #" + j + " est\u00E1 apagado.");
        }
    }
}
encenderTodosLosGeneradores();
//encenderGeneradoresPares();
//encenderGeneradoresImpares();
