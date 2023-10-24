/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo

*/

let frase = prompt("Ingrese una frase corta, por favor. Solamente hasta 15 caracteres.");
let mensaje = "";

if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u"
) {
  mensaje = mensaje + frase.charAt(0);
};
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u"
) {
  mensaje = mensaje + frase.charAt(1);
};
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u"
) {
  mensaje = mensaje + frase.charAt(2);
};
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u"
) {
  mensaje = mensaje + frase.charAt(3);
};
if (
  frase.charAt(4) === "a" ||
  frase.charAt(4) === "e" ||
  frase.charAt(4) === "i" ||
  frase.charAt(4) === "o" ||
  frase.charAt(4) === "u"
) {
  mensaje = mensaje + frase.charAt(4);
};
if (
  frase.charAt(5) === "a" ||
  frase.charAt(5) === "e" ||
  frase.charAt(5) === "i" ||
  frase.charAt(5) === "o" ||
  frase.charAt(5) === "u"
) {
  mensaje = mensaje + frase.charAt(5);
};
if (
  frase.charAt(6) === "a" ||
  frase.charAt(6) === "e" ||
  frase.charAt(6) === "i" ||
  frase.charAt(6) === "o" ||
  frase.charAt(6) === "u"
) {
  mensaje = mensaje + frase.charAt(6);
};
if (
  frase.charAt(7) === "a" ||
  frase.charAt(7) === "e" ||
  frase.charAt(7) === "i" ||
  frase.charAt(7) === "o" ||
  frase.charAt(7) === "u"
) {
  mensaje = mensaje + frase.charAt(7);
};
if (
  frase.charAt(8) === "a" ||
  frase.charAt(8) === "e" ||
  frase.charAt(8) === "i" ||
  frase.charAt(8) === "o" ||
  frase.charAt(8) === "u"
) {
  mensaje = mensaje + frase.charAt(8);
};
if (
  frase.charAt(9) === "a" ||
  frase.charAt(9) === "e" ||
  frase.charAt(9) === "i" ||
  frase.charAt(9) === "o" ||
  frase.charAt(9) === "u"
) {
  mensaje = mensaje + frase.charAt(9);
};
if (
  frase.charAt(10) === "a" ||
  frase.charAt(10) === "e" ||
  frase.charAt(10) === "i" ||
  frase.charAt(10) === "o" ||
  frase.charAt(10) === "u"
) {
  mensaje = mensaje + frase.charAt(10);
};
if (
  frase.charAt(11) === "a" ||
  frase.charAt(11) === "e" ||
  frase.charAt(11) === "i" ||
  frase.charAt(11) === "o" ||
  frase.charAt(11) === "u"
) {
  mensaje = mensaje + frase.charAt(11);
};
if (
  frase.charAt(12) === "a" ||
  frase.charAt(12) === "e" ||
  frase.charAt(12) === "i" ||
  frase.charAt(12) === "o" ||
  frase.charAt(12) === "u"
) {
  mensaje = mensaje + frase.charAt(12);
};
if (
  frase.charAt(13) === "a" ||
  frase.charAt(13) === "e" ||
  frase.charAt(13) === "i" ||
  frase.charAt(13) === "o" ||
  frase.charAt(13) === "u"
) {
  mensaje = mensaje + frase.charAt(13);
};
if (
  frase.charAt(14) === "a" ||
  frase.charAt(14) === "e" ||
  frase.charAt(14) === "i" ||
  frase.charAt(14) === "o" ||
  frase.charAt(14) === "u"
) {
  mensaje = mensaje + frase.charAt(14);
};
if (
  frase.charAt(15) === "a" ||
  frase.charAt(15) === "e" ||
  frase.charAt(15) === "i" ||
  frase.charAt(15) === "o" ||
  frase.charAt(15) === "u"
) {
  mensaje = mensaje + frase.charAt(15);
};

document.write("Las vocales de la palabra '"+frase+"' son:<h1>"+mensaje+"</h1>");