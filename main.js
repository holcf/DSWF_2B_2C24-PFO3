// Federico Holc - Práctica Formativa Obligatoria 3

// 1. Calcular el área de un rectángulo
function calcularArea(alto, ancho) {
  if (typeof alto !== "number" || typeof ancho !== "number") {
    throw new Error("Los parámetros deben ser números");
  }
  if (alto <= 0 || ancho <= 0) {
    throw new Error("Las dimensiones deben ser mayores que 0");
  }
  let area = alto * ancho;
  return area;
}
/* Primero se comprueba que los parámetros sean números y que sean mayores a 0. Si no se cumple alguna de estas condiciones, se lanza un error.
Si se cumplen las condiciones, se calcula el área del rectángulo multiplicando el alto por el ancho y se retorna el resultado. */

console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 1. Calcular el área de un rectángulo
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Rectángulo de alto ${2} y ancho ${3}. Resultado: ${calcularArea(2, 3)} 
Rectángulo de alto ${0.5} y ancho ${3}. Resultado: ${calcularArea(0.5, 3)} 
Rectángulo de alto ${1} y ancho ${1}. Resultado: ${calcularArea(1, 1)} 

`);

//2. Contar palabras en una cadena
function contarPalabras(texto) {
  if (typeof texto !== "string") {
    throw new Error("El parámetro debe ser una cadena de texto");
  }

  texto = texto.trim();

  if (texto === "") {
    return 0;
  }

  const palabras = texto.split(" ").filter((palabra) => palabra !== "");
  let cantidadPalabras = palabras.length;
  return cantidadPalabras;
}
/* Primero se comprueba que el parámetro sea una cadena de texto. Si no se cumple esta condición, se lanza un error. Luego se eliminan los espacios en blanco al inicio y al final del texto usando trim, y si el texto está vacío, se retorna 0.
A continuación se genera un array de palabras utilizando split por espacios. Como podría suceder que haya espacios dobles o múltiples, los cuales generan  palabras vacías en el array, se filtran las palabras que no sean vacías.
Queda entonces formado un array de palabras, y se retorna la longitud de este array, es decir la cantidad de palabras.
*/

var cadenas = ["¿Hola, cómo estás?", "  Esto es una prueba  ", " "];
console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 2. Contar palabras en una cadena
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Cantidad de palabras en "${cadenas[0]}": ${contarPalabras(cadenas[0])}  
Cantidad de palabras en "${cadenas[1]}": ${contarPalabras(cadenas[1])}  
Cantidad de palabras en "${cadenas[2]}": ${contarPalabras(cadenas[2])}  

`);

// 3. Invertir una cadena
function invertirCadena(texto) {
  if (typeof texto !== "string") {
    throw new Error("El parámetro debe ser una cadena de texto");
  }
  let cadenaInvertida = texto.split("").reverse().join("");
  return cadenaInvertida;
}
/* Primero se comprueba que el parámetro sea una cadena de texto. Si no se cumple esta condición, se lanza un error.
Luego se convierte el texto en un array de caracteres utilizando split, se invierte el orden de los elementos del array con reverse y se unen los elementos del array en una cadena de texto con join. Devolvemos el resultado.*/

var cadenas = ["neuquen", "Esto es una prueba  _  ", ""];
console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 3. Invertir una cadena
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Cadena: "${cadenas[0]}". Cadena invertida: "${invertirCadena(cadenas[0])}"  
Cadena: "${cadenas[1]}". Cadena invertida: "${invertirCadena(cadenas[1])}" 
Cadena: "${cadenas[2]}". Cadena invertida: "${invertirCadena(cadenas[2])}"  

`);

// 4. Encontrar el palíndromo
function esPalindromo(texto) {
  if (typeof texto !== "string") {
    throw new Error("El parámetro debe ser una cadena de texto");
  }
  if (texto.trim() === "") {
    return false;
  }

  const textoLimpio = texto
    .split("")
    .filter((palabra) => palabra.trim() !== "")
    .join("")
    .toLowerCase();

  const textoInvertido = textoLimpio.split("").reverse().join("");
  let esPalindromo = textoLimpio === textoInvertido;
  return esPalindromo;
}

/* Primero se comprueba que el parámetro sea una cadena de texto. Si no se cumple esta condición, se lanza un error.
Luego se comprueba si el texto está vacío, en cuyo caso se retorna false (consideré que si no había ninguna letra no había texto y por lo tanto no podía ser palíndromo).
Luego se limpia el texto original del siguiente modo: se convierte en un array de caracteres con split, se filtran los caracteres que no sean espacios en blanco con filter, se vuelven a unir los caracteres en una cadena de texto con join y se convierte todo a minúsculas con toLowerCase.
A continuación se invierte el texto limpio de la misma forma que en el ejercicio anterior, y se compara si el texto limpio es igual al texto invertido. Si son iguales, se retorna true, de lo contrario se retorna false.
 */

var cadenas = ["neuquen", "   ", "aA "];
console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 4. Encontrar el palíndromo
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Cadena: "${cadenas[0]}". Es palíndromo: "${esPalindromo(cadenas[0])}"  
Cadena: "${cadenas[1]}". Es palíndromo: "${esPalindromo(cadenas[1])}" 
Cadena: "${cadenas[2]}". Es palíndromo: "${esPalindromo(cadenas[2])}"  

`);

// 5. Crear un programa para convertir la edad de un perro a años humanos
function edadCanina() {
  const edad = prompt("¿Cuál es la edad de tu perro?");

  const edadPerro = Number(edad);

  if (isNaN(edadPerro) || edadPerro <= 0) {
    console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 5. Crear un programa para convertir la edad de un perro a años humanos
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

La edad ingresada no es válida, debe ser un número mayor a 0
  `);
    return;
  }

  const edadHumana = edadPerro * 7;

  console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 5. Crear un programa para convertir la edad de un perro a años humanos
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

Edad ingresada: "${edadPerro}". Edad en años humanos: "${edadHumana}"  
`);
}
/* Primero se pide al usuario que ingrese la edad de su perro. Luego se convierte la edad ingresada a un número con Number. Si la edad ingresada no es un número o es menor o igual a 0, se muestra un mensaje de error y se finaliza la ejecución del programa.
Si la edad ingresada es válida, se calcula la edad del perro en años humanos multiplicando la edad del perro por 7. Finalmente se muestra un mensaje con la edad ingresada y la edad en años humanos.
*/
edadCanina();
