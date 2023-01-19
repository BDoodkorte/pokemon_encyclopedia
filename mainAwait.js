// Research HTTP requests
// Make a request to the Pokeapi and receive some data on a pokemon of your choice
// console.log() the pokemon's name, weight, and height (bonus: console.log() the pokemon's types)
// look into fetch

//while loop - loop through urls (by number) until an error occurs. Error noticed via cath method or catch block. 

for(let i = 1; i<1008 ;i++){
let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
// await version
let pokeAPIresponse = await fetch(url);
let pokeData = await pokeAPIresponse.json();
//console.log(pokeData) - read with jsonviewer
let types = [];
for (let typeData of pokeData.types) {
    types.push(typeData.type.name);
}
console.log(`Weight: ${pokeData.weight} ,Height: ${pokeData.height}, Name: ${pokeData.name}, Types: ${types.join(' and ')}`);
}
//console.log(pokemonName, pokemonWeight, pokemonHeight);
