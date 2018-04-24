//Ejercicio 3

function imprimirPoblacionOsos(numeroDeMeses: Number) {
    let numeroInicalOsos = 16;
    let totalOsos = 0;

    for (let i = 0; i < numeroDeMeses; i++) {
        if (i === 0) {
            totalOsos = numeroInicalOsos;
            console.log(`Van a existir ${totalOsos} osos de anteojos después del mes ${1 + i}`);
        } else {
            totalOsos = totalOsos * 4;
            console.log(`Van a existir ${totalOsos} osos de anteojos después del mes ${1 + i}`)
        }

        if (totalOsos > 10000) {
            totalOsos = totalOsos / 2;
            console.log(`Removiendo ${totalOsos} osos de anteojos de la población`)
            console.log(`Van a existir ${totalOsos} osos de anteojos después del mes ${1 + i}`)
        }
    }
}

imprimirPoblacionOsos(10);