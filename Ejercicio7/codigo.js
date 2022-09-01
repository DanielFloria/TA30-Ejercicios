
let numero = prompt("Escribe un número entero para calcular su factorial:");

/*let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;   
}*/

function factorial(n) {
    if(n == 0) return 1;
    else return n * factorial(n - 1);
}

alert(factorial(numero));