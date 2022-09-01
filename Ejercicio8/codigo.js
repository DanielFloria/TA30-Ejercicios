let entero = prompt("Escribe un número entero:");

function parImpar(n) {
    if(n % 2 == 0) return alert("Es par");
    else if(n % 2 != 0) return alert("Es impar");
}

parImpar(entero);