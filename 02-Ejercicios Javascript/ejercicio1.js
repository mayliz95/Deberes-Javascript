//Ejercicio 1
function validarNumeroDeStringsEnArreglo(arreglo) {
    var aux = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === 'string') {
            aux++;
        }
    }
    return aux;
}
console.log(validarNumeroDeStringsEnArreglo([1, "dfd", "dff", 2, "hol", 5, "geg", 'djfnkj', null, undefined]));
