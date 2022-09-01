var valores = [true, 5, false, "hola", "adios", 2];

function compararStrings() {
    if(valores[3].length > valores[4].length) {
        console.log("\"" + valores[3] + "\" es más grande que \"" + valores[4] + "\"");
    } else if(valores[3].length < valores[4].length) {
        console.log("\"" + valores[4] + "\" es más grande que " + valores[3] + "\"");
    } else if(valores[3].length == valores[4].length) {
        console.log("\"" + valores[3] + "\" y \"" + valores[4]) + "\" son de igual tamaño";
    }
}

function compararBooleanos() {
    console.log(valores[0] || valores[2]);
    console.log(valores[0] && valores[2]);
}


function compararIntegers() {
    console.log(valores[1] + valores[5]);
    console.log(valores[1] - valores[5]);
    console.log(valores[1] * valores[5]);
    console.log(valores[1] / valores[5]);
    console.log(valores[1] % valores[5]);
}

compararStrings();
compararBooleanos();
compararIntegers();