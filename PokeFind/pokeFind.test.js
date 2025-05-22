// const ditto = await fetchPokemonData("Ninetales");
// console.log(ninetales);

// ---------TERMINAL------------
// {name: "ninetales", sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" }}

const fetchPokemonData = require('./pokeFind')

describe('fetchPokemonData', () => {
    it('returns the name and sprites for a selected pokemon', async () => {
        const pokemonData = await fetchPokemonData();
        expect(pokemonData).toEqual({name: "ninetales", sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" }})
    });
});
