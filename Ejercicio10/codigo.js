let palindromo = prompt("Escribe un palíndromo:");

function comprobarPalindromo(pal) {
    let otros_caracteres = /[^A-Za-z0-9]/g;
    let normal = pal.replace(otros_caracteres, '').toLowerCase();
    let invertido = normal.split('').reverse().join('');

    if(normal === invertido) 
        alert("Es un palíndromo");
    else
        alert("No es un palíndromo");
}

comprobarPalindromo(palindromo);
