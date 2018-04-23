//Ejercicio 2
class generador {
    constructor(public numeroDeGenerador: Number,
                public numeroMWGenerados: Number) {
    }
}

function encenderTodosLosGeneradores() {
    const numeroMWGeneran4Generadores = 62;
    let totalMWGenerados = 0;
    let i = 1;
    while (i<5) {
        totalMWGenerados = totalMWGenerados + numeroMWGeneran4Generadores;
        console.log(`Generador #${i} está prendido, añadiendo ${numeroMWGeneran4Generadores} MW para un total de ${totalMWGenerados} MW`);
        i++;
    }
    const numeroMWGeneran15Generadores = 124;
    for (let j = i; j < 20; j++) {
        totalMWGenerados = totalMWGenerados + numeroMWGeneran15Generadores;
        console.log(`Generador #${j} está prendido, añadiendo ${numeroMWGeneran15Generadores} MW para un total de ${totalMWGenerados} MW`);
    }
}

function encenderGeneradoresPares() {
    const numeroMWGeneran4Generadores = 62;
    let totalMWGenerados = 0;
    let i = 1;
    while (i<5) {
        if (i%2===0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran4Generadores;
            console.log(`Generador #${i} está prendido, añadiendo ${numeroMWGeneran4Generadores} MW para un total de ${totalMWGenerados} MW`);
        } else {
            console.log(`Generador #${i} está apagado.`);
        }
        i++;
    }
    const numeroMWGeneran15Generadores = 124;
    for (let j = i; j < 20; j++) {
        if (j%2===0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran15Generadores;
            console.log(`Generador #${j} está prendido, añadiendo ${numeroMWGeneran15Generadores} MW para un total de ${totalMWGenerados} MW`);
        } else {
            console.log(`Generador #${j} está apagado.`);
        }
    }
}
function encenderGeneradoresImpares() {
    const numeroMWGeneran4Generadores = 62;
    let totalMWGenerados = 0;
    let i = 1;
    while (i<5) {
        if (i%2!==0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran4Generadores;
            console.log(`Generador #${i} está prendido, añadiendo ${numeroMWGeneran4Generadores} MW para un total de ${totalMWGenerados} MW`);
        } else {
            console.log(`Generador #${i} está apagado.`);
        }
        i++;
    }
    const numeroMWGeneran15Generadores = 124;
    for (let j = i; j < 20; j++) {
        if (j%2!==0) {
            totalMWGenerados = totalMWGenerados + numeroMWGeneran15Generadores;
            console.log(`Generador #${j} está prendido, añadiendo ${numeroMWGeneran15Generadores} MW para un total de ${totalMWGenerados} MW`);
        } else {
            console.log(`Generador #${j} está apagado.`);
        }
    }
}
encenderTodosLosGeneradores();
//encenderGeneradoresPares();
//encenderGeneradoresImpares();
