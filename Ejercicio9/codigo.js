let cadena = prompt("Escribir una cadena de texto:");

if(cadena === cadena.toLowerCase()) 
    alert("La cadena está formada solamente por minúsculas");
else if(cadena === cadena.toUpperCase()) 
    alert("La cadena está formada solamente por mayúsculas");
else 
    alert("La cadena está formada por mayúsculas y minúsculas");