/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

let numero1 = parseInt(prompt("Ingresa un número por favor."));
let numero2 = parseInt(prompt("Ingresa otro un número por favor."));
document.write("La suma del número "+numero1+" más el número "+numero2+" es = "+(numero1+numero2));