export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';
export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';
export const GET_POKEMON_EVOLUTION_REQUEST = 'GET_POKEMON_EVOLUTION_REQUEST';
export const GET_POKEMON_EVOLUTION_SUCCESS = 'GET_POKEMON_EVOLUTION_SUCCESS';
export const GET_POKEMON_EVOLUTION_FAILURE = 'GET_POKEMON_EVOLUTION_FAILURE';
export const CLEAN_POKEMONS = 'CLEAN_POKEMONS';


export const getPokemonsRequest = () => ({
    type: GET_POKEMONS_REQUEST,
});
export const getPokemonsSuccess = ({ results: pokemons, count, next }) => ({
    type: GET_POKEMONS_SUCCESS,
    payload: { pokemons, count, next }
});
export const getPokemonsFailure = () => ({
    type: GET_POKEMONS_FAILURE,
});

export const getPokemonRequest = () => ({
    type: GET_POKEMON_REQUEST,
});
export const getPokemonSuccess = (data) => ({
    type: GET_POKEMON_SUCCESS,
    payload: data,
});
export const getPokemonFailure = () => ({
    type: GET_POKEMON_FAILURE,
});

export const cleanPokemons = () => ({
    type: CLEAN_POKEMONS,
});

export const getPokemonEvolutionRequest = () => ({
    type: GET_POKEMON_EVOLUTION_REQUEST,
})
export const getPokemonEvolutionSuccess = (evolution) => ({
    type: GET_POKEMON_EVOLUTION_SUCCESS,
    payload: evolution,
})
export const getPokemonEvolutionFailure = () => ({
    type: GET_POKEMON_EVOLUTION_FAILURE,
})

export const getPokemons = () => async (dispatch, getState, { api }) => {
    try {
        dispatch(getPokemonsRequest());
        const next = getState().pokemons.next.split('/').splice(-1)[0];
        console.log(next);
        const nextRequest = `/${next}`;
        const { data } = await api.get(nextRequest);
        dispatch(getPokemonsSuccess(data));
    } catch(err){
        console.error(err);
        dispatch(getPokemonsFailure());
    }
};

export const getPokemon = (id) => async (dispatch, getState, { api }) => {
    try {
        dispatch(getPokemonRequest());
        const { data } = await api.get(`/pokemon/${id}`);
        dispatch(getPokemonSuccess(data));
    } catch(err){
        console.error(err);
        dispatch(getPokemonRequest());
    }
}

export const getPokemonEvolution = () => async (dispatch, getState, { api }) => {
    try {
        const pokemonId = getState().pokemons.detail.id;
        console.log('pokemonId: ', pokemonId);
        dispatch(getPokemonEvolutionRequest());
        const { data } = await api.get(`/evolution-chain/${pokemonId}`);
        // console.log(data);
        dispatch(getPokemonEvolutionSuccess(data));
    } catch(err){
        console.error(err);
        dispatch(getPokemonEvolutionFailure());
    }
}