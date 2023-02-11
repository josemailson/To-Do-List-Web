const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
const container = document.querySelector(".container");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

async function fetchPokemons() {
    const response = await fetch(API_URL);
    const pokemons = await response.json();
    return pokemons.results;
}

async function displayPokemons(pokemons) {
    container.innerHTML = "";
    for (const pokemon of pokemons) {
        const pokemonData = await fetchPokemonData(pokemon.url);
        const pokemonCard = createPokemonCard(pokemonData);
        container.appendChild(pokemonCard);
    }
}

async function fetchPokemonData(url) {
    const response = await fetch(url);
    return await response.json();
}

function createPokemonCard(pokemonData) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonImage.classList.add("pokemon-image");
    pokemonCard.appendChild(pokemonImage);

    const pokemonName = document.createElement("div");
    pokemonName.textContent = pokemonData.name;
    pokemonName.classList.add("pokemon-name");
    pokemonCard.appendChild(pokemonName);

    const pokemonNumber = document.createElement("div");
    pokemonNumber.textContent = "#" + pokemonData.id;
    pokemonNumber.classList.add("pokemon-number");
    pokemonCard.appendChild(pokemonNumber);

    const pokemonType = document.createElement("div");
    if (pokemonData.types.length > 1) {
        pokemonType.textContent = "Type: " + pokemonData.types[0].type.name + " " + pokemonData.types[1].type.name;
    } else {
        pokemonType.textContent = "Type: " + pokemonData.types[0].type.name;
    }
    pokemonType.classList.add("pokemon-type");
    pokemonCard.appendChild(pokemonType);

    const pokemonHeight = document.createElement("div");
    pokemonHeight.textContent = "Height: " + pokemonData.height;
    pokemonHeight.classList.add("pokemon-height");
    pokemonCard.appendChild(pokemonHeight);

    const pokemonWeight = document.createElement("div");
    pokemonWeight.textContent = "Weight: " + pokemonData.weight;
    pokemonWeight.classList.add("pokemon-weight");
    pokemonCard.appendChild(pokemonWeight);

    return pokemonCard;
}

searchButton.addEventListener("click", async function() {
    const searchTerm = searchInput.value.toLowerCase();
    const pokemons = await fetchPokemons();
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
    displayPokemons(filteredPokemons);
});
