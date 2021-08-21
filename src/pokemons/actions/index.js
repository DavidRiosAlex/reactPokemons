export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';
export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';
export const CLEAN_POKEMONS = 'CLEAN_POKEMONS';


export const getPokemonsRequest = () => ({
    type: GET_POKEMONS_REQUEST,
})
export const getPokemonsSuccess = (pokemons) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: pokemons
})
export const getPokemonsFailure = () => ({
    type: GET_POKEMONS_FAILURE,
})

export const cleanPokemons = () => ({
    type: CLEAN_POKEMONS,
})