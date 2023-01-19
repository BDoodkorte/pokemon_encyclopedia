// Define URL to be used
let url = "https://pokeapi.co/api/v2/pokemon/inkay";

// Fetch url from the ether and set a task to do with it (or an error message if the response doesn't function)

// .then version
let pokemonData = fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
        console.log(`Weight: ${pokemon.weight} ,Height: ${pokemon.height}, Name: ${pokemon.name}, , Types: ${pokeData.types[0].type.name}, ${pokeData.types[1].type.name}`);
    });