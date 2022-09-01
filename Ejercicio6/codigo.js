var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = prompt("Escribe el número de tu DNI:", "01234567A");

var numero = dni.substring(0, dni.length - 1);
var letra = dni.substring(dni.length - 1);
var letra_esperada = letras[numero % 23];

if(!(numero <= 99999999 && numero >= 0)) {
    alert("No se ha introducido un número válido");
}

if(letra == letra_esperada) {
    alert("El número y la letra del DNI son correctos");
} else {
    alert("La letra indicada no es correcta");
}