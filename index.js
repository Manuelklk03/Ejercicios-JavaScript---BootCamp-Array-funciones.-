//Ejercicio 1
let arrayVacio = [];

//Ejercicio 2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Ejercicio 3
let arrayNumerosPares = [0, 2, 4, 6, 8];

//Ejercicio 4
let arrayBidimensional = [
  [0, 1, 2],
  [a, b, c],
];

//Ejercicio 5
function suma(a, b) {
  return a + b;
}

//Ejercicio 6
function potenciacion(base, exponente) {
  return Math.pow(base, exponente);
}

//Ejercicio 7
function separarPalabras(frase) {
  return frase.split(" ");
}

//Ejercicio 8
function repetirString(texto, veces) {
  let resultado = "";
  for (let i = 0; i < veces; i++) {
    resultado += texto;
  }
  return resultado;
}

//Ejercicio 9
function esPrimo(numero) {
  if (numero <= 2) return false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

//Ejercicio 10
function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}

//Ejercicio 11
function obtenerPares(array) {
  return array.filter((num) => num % 2 === 0);
}

//Ejercicio 12
function pintarArray(array) {
  return "[" + array.join(", ") + "]";
}

//Ejercicio 13

//Ejercicio 14

//Ejercicio 15

//Ejercicio 16

//Ejercicio 17

//Ejercicio 18

//Ejercicio 19

//Ejercicio 20

//Ejercicio 21

//Ejercicio 22

//Ejercicio 23

//Ejercicio 24

//Ejercicio 25

//Ejercicio 26
