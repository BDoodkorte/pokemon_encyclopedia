//while loop - loop through urls (by number) until an error occurs. Error noticed via cath method or catch block. 

let url = `https://pokeapi.co/api/v2/pokemon/`;
let i = 1000;
while(url + `${i}` != ){
    url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    i++
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
