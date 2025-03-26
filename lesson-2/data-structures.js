/* EXERCISE 1 */
function basicModMethods() {
  // Define array
  const fruits = ["banana", "strawberry", "apple"];

  // OG Array
  console.log(`Original fruits: ${fruits}`);

  // New fruit pushed to array
  fruits.push("orange");
  console.log(fruits);

  // Added fruit removed from array
  fruits.pop();
  console.log(fruits);

  // New fruit unshift added to array
  fruits.unshift("kiwi");
  console.log(fruits);

  // Unshift fruit removed from array
  fruits.shift();
  console.log(fruits);
}

/* EXERCISE 2 */
function sliceAndSplice() {
  // Array of colors
  const colors = ["red", "green", "blue", "yellow", "purple"];
  console.log(`Original array: ${colors}`);

  // Array sliced from item 1 - 3
  const firstThreeColors = colors.slice(0, 3);
  console.log(firstThreeColors);

  // Array last 2 items sliced
  const lastTwoColors = colors.slice(-2);
  console.log(lastTwoColors);

  // Green removed from array using splice
  colors.splice(1, 1);
  console.log(colors);

  colors.splice(1, 0, "black", "white");
  console.log(colors);
}

/* EXERCISE 3 */
const numbers = [2, 4, 6, 8, 10];

function traverseArrayForEach(numbers) {
  numbers.forEach((number) => {
    console.log(`Number: ${number}`);
  });
}

traverseArrayForEach(numbers);

function traverseArrayMap(numbers) {
  let modifiedArray = numbers.map((number) => {
    return number * 2;
  });

  console.log(modifiedArray);
}

traverseArrayMap(numbers);

/* EXERCISE 4 */

// filter

const users = [
  { name: "María", age: 30 },
  { name: "Pepe", age: 30 },
  { name: "Ana", age: 25 },
  { name: "Juan", age: 17 },
  { name: "María", age: 45 },
];

function filterPractice(users) {
  const adultUsers = users.filter((user) => user.age >= 18);
  console.log(adultUsers);
}

filterPractice(users);

// find

function findSeventeen(users) {
  const ageSeventeenUser = users.find((user) => user.age === 17);
  console.log(ageSeventeenUser);
}

findSeventeen(users);

// findIndex
function findFirstMaria(users) {
  let firstMaria = users.findIndex((user) => user.name === "María");
  console.log(firstMaria);
}

findFirstMaria(users);

/* EXERCISE 5 */

const grades1 = [10, 8, 9, 7, 6, 10];

function redArrGrades(grades) {
  let totalSum = grades.reduce((total, grade) => {
    return total + grade;
  }, 0);

  let average = Math.round(totalSum / grades.length);
  console.log("The average is: " + average);
}

redArrGrades(grades1);

/* EXERCISE 6 */

const numbers1 = [5, 12, 4, 22, 9, 10, 33, 2];

function filterMapReduce1(numbers) {
  const filteredNums = numbers.filter((number) => number > 5);
  const mappedNums = filteredNums.map((number) => number * 3);
  const reducedNums = mappedNums.reduce((sum, number) => sum + number);
  console.log(reducedNums);
}

filterMapReduce1(numbers1);

/* EXERCISE 7 */

const animals1 = ["dog", "cat", "elephant", "bee", "dolphin"];
const numbers2 = [5, 12, 4, 22, 9, 10, 33, 2];

function sortArr(animals, numbers) {
  console.log(animals);
  const animalsSorted = animals1.sort();
  console.log(animalsSorted);
  console.log(numbers);
  const numberSorted = numbers.sort((a, b) => a - b);
  console.log(numberSorted);
}

sortArr(animals1, numbers2);

// EJERCICIOS

// 1. Añadir y quitar elementos (push, pop, shift, unshift)
// Crea un array llamado frutas con al menos 3 frutas:
// js
// Copy
// Edit
// const frutas = ['manzana', 'banana', 'pera'];
// Agrega al final del array la fruta 'naranja' usando push.
// Quita la última fruta del array usando pop.
// Agrega 'kiwi' al principio del array usando unshift.
// Quita la primera fruta usando shift.
// Muestra el array final por consola.
// Objetivo: Practicar la manipulación directa de los extremos de un array.

// 2. Cortar y modificar secciones de un array (slice, splice)
// Crea un array llamado colores con 5 colores:
// js
// Copy
// Edit
// const colores = ['rojo', 'verde', 'azul', 'amarillo', 'morado'];
// Usa slice para obtener los 3 primeros colores en un nuevo array llamado primerosTres.
// Usa slice para obtener del array original los 2 últimos colores en un nuevo array llamado últimos Dos.
// Con splice, elimina el color que se encuentra en el índice 1.
// Con splice, a partir del índice 1, inserta el color 'negro' y 'blanco'.
// Muestra los arrays resultantes por consola.
// Objetivo: Ver la diferencia entre:

// slice: retorna una copia de una sección sin modificar el original.
// splice: modifica el array original, eliminando o insertando elementos.

// 3. Recorrer y transformar arrays (forEach, map)
// Crea un array de números, por ejemplo:
// js
// Copy
// Edit
// const números = [2, 4, 6, 8, 10];
// Usa forEach para imprimir cada número en la consola con un texto que diga Número: X.
// Usa map para crear un nuevo array dobles que contenga cada número multiplicado por 2.
// Imprime el array dobles por consola.
// Objetivo: Distinguir entre

// forEach: recorre cada elemento pero no devuelve nada.
// map: recorre y devuelve un nuevo array transformado.

// 4. Filtrar y encontrar elementos (filter, find, findIndex)
// Parte de un array de objetos que representen usuarios (o crea uno sencillo). Ejemplo:
// js
// Copy
// Edit
// const usuarios = [
//   { nombre: 'Ana', edad: 25 },
//   { nombre: 'Juan', edad: 17 },
//   { nombre: 'María', edad: 30 },
//   { nombre: 'Pedro', edad: 15 }
// ];
// Usa filter para crear un array con los usuarios mayores de edad (edad >= 18).
// Usa find para buscar el primer usuario que tenga exactamente 17 años.
// Usa findIndex para encontrar la posición (índice) de un usuario con nombre 'María'.
// Muestra los resultados por consola.
// Objetivo: Practicar la búsqueda selectiva de elementos en un array.

// 5. Reducción de arrays (reduce)
// Toma un array de números, por ejemplo:
// js
// Copy
// Edit
// const calificaciones = [8, 9, 10, 7, 6, 10];
// Usa reduce para calcular la suma total de las calificaciones.
// Calcula el promedio de calificaciones usando la suma y la longitud del array.
// Imprime en consola el promedio final.
// Objetivo: Ver cómo reduce puede “acumular” valores de todo el array en un único resultado.

// 6. Encadenar métodos (filter + map + reduce)
// Para practicar un poco más, haz algo como esto:

// Crea un array de números, por ejemplo:
// js
// Copy
// Edit
// const numeros = [5, 12, 4, 22, 9, 10, 33, 2];
// Filtra (filter) los números que sean mayores que 5.
// A los números resultantes, aplícales map para multiplicarlos por 3.
// Finalmente, usa reduce para sumarlos todos.
// Muestra el resultado final por consola.
// Objetivo: Practicar el uso combinado de métodos de array para lograr un resultado.

// 7. Ordenar elementos (sort)
// Crea un array de strings desordenados, por ejemplo:
// js
// Copy
// Edit
// const animales = ['perro', 'gato', 'elefante', 'abeja', 'delfín'];
// Usa sort para ordenarlos alfabéticamente.
// Crea un array de números y ordénalos de menor a mayor.
// Pista: Por defecto, sort ordena como strings, así que si quieres que ordene numéricamente, necesitarás pasarle un callback:

// js
// Copy
// Edit
// numeros.sort((a, b) => a - b);
// Muestra los arrays ordenados.
// Objetivo: Practicar cómo ordenar arrays de texto y numéricos.
