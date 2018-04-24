//Ejercicio 3
function imprimirPoblacionOsos(numeroDeMeses) {
    var numeroInicalOsos = 16;
    var totalOsos = 0;
    for (var i = 0; i < numeroDeMeses; i++) {
        if (i === 0) {
            totalOsos = numeroInicalOsos;
            console.log("Van a existir " + totalOsos + " osos de anteojos despu\u00E9s del mes " + (1 + i));
        }
        else {
            if (totalOsos > 10000) {
                totalOsos = totalOsos / 2;
                console.log("Removiendo " + totalOsos + " osos de anteojos de la poblaci\u00F3n");
                console.log("Van a existir " + totalOsos + " osos de anteojos despu\u00E9s del mes " + (1 + i));
                totalOsos = totalOsos * 4;
            }
            else {
                totalOsos = totalOsos * 4;
                console.log("Van a existir " + totalOsos + " osos de anteojos despu\u00E9s del mes " + (1 + i));
            }
        }
    }
}
imprimirPoblacionOsos(10);
