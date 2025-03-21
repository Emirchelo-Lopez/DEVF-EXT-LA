function getPokemonNamePromise(pokename) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    .then((request) => {
      if (!request.ok) {
        throw Error("Error in pokémon request: ", request.status);
      }

      return request.json();
    })
    .then((completed) => {
      console.log("Pokémon data: ", completed);
    })
    .catch((failed) => {
      console.log("Error: ", failed);
    });
}

const btnPromise = document.getElementById("btn-promise");

btnPromise.addEventListener("click", () => {
  getPokemonNamePromise("pikachu");
});

function createCard(pokename, pokeweight, pokeid, pokeimg) {
  let article = document.createElement("article");
  article.innerHTML = `
  <h2>${pokename}</h2>
  <img src="${pokeimg}"/>
  <p>Weight: ${pokeweight}</p>
  <p>ID: ${pokeid}</p>
  `;
  article.classList.add("card");

  document.getElementById("render").appendChild(article);
}

async function getPokemonAsync() {
  try {
    // I make a request to the API
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon`);

    // I make a validation
    if (!request.ok) {
      throw Error("Error in pokémon request: ", request.status);
    }

    // I parse the request to display all pokemons
    const data = await request.json();
    console.log("Pokemon data async: ", data);

    for (let i = 0; i < data.results.length; i++) {
      // I make the request to each single pokemon
      const pokeRequest = await fetch(data.results[i].url);

      // I make a validation
      if (!pokeRequest.ok) {
        throw Error(
          "Error in individual pokemon request: ",
          pokeRequest.status
        );
      }

      // I parse the request to display individual pokemon
      const pokemon = await pokeRequest.json();

      createCard(
        pokemon.name,
        pokemon.weight,
        pokemon.id,
        pokemon.sprites.front_default
      );
    }
  } catch (error) {
    console.log("Async error: ", data);
  }
}

const btnAsync = document.getElementById("btn-async");

btnAsync.addEventListener("click", () => {
  getPokemonAsync();
});
