//Ejercicio 1
function validarNumeroDeStringsEnArreglo(arreglo: any[]) {
    let aux = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === 'string') {
            aux++;
        }
    }
    return aux;
}
console.log(validarNumeroDeStringsEnArreglo([1,"dfd","dff", 2, "hol",5, "geg", 'djfnkj',null, undefined ]));