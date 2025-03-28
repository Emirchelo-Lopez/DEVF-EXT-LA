/* 
Ejercicio 1: Obtener un Pokémon por ID
[ x ] Crear una función asíncrona llamada obtenerPokemon que acepte un parámetro id
[ x ] Implementar un bloque try/catch dentro de la función
[ x ] Dentro del try:
[ x ] Realizar una petición fetch a https://pokeapi.co/api/v2/pokemon/${id}
[ x ] Verificar si la respuesta es válida con respuesta.ok
[ x ] Si no es válida, lanzar un error personalizado
[ x ] Convertir la respuesta a JSON usando await respuesta.json()
[ ] En el catch:
[ ] Capturar cualquier error que ocurra
[ ] Mostrar el mensaje de error en la consola
[ ] Probar la función con diferentes IDs (ejemplo: 1 para Bulbasur)
*/

async function getPokemonByID(id) {
  try {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const Pokemon = await request.json();
    console.log("Pokemon name: " + Pokemon.name);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de conexión: No se pudo alcanzar la API");
    } else if (error instanceof SyntaxError) {
      console.error("Error de formato: La respuesta no es válida");
    } else {
      console.error("Error: ", error.message);
    }
  }
}

getPokemonByID(25);

/*

Ejercicio 2: Buscar Pokémon por nombre

[ ] Crear una función asíncrona llamada buscarPokemon que acepte un parámetro nombre
[ ] Implementar un bloque try/catch dentro de la función
[ ] Dentro del try:
[ ] Convertir el nombre a minúsculas usando toLowerCase()
[ ] Realizar una petición fetch con el nombre convertido
[ ] Verificar si la respuesta es válida con respuesta.ok
[ ] Convertir la respuesta a JSON usando await respuesta.json()
[ ] Manejar errores:
[ ] Verificar si el Pokémon existe
[ ] Mostrar mensajes de error claros
[ ] Probar la función con diferentes nombres (ejemplo: 'charizard')

*/

async function getPokemonByName(pokename) {
  try {
    const pokenameLower = pokename.toLowerCase();

    const request = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokenameLower}`
    );

    const pokemon = await request.json();
    console.log(`Pokemon name: ${pokemon.name}`);
    console.log(`Pokemon abilities: ${pokemon.height} decimeters`);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error to fetch API");
    } else if (error instanceof SyntaxError) {
      console.error("Error: not valid response");
    } else {
      console.error("Error: " + error.message);
    }
  }
}

getPokemonByName("pikachu");
