const fetchPokemonData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ninetales");
        const pokemonData = await response.json();
        
        const { name, sprites } = pokemonData;
        return { name, sprites: { front_default: sprites.front_default } };
}


module.exports = fetchPokemonData;