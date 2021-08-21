import {
    GET_POKEMONS_FAILURE,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_REQUEST,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAILURE,
    CLEAN_POKEMONS
} from '../actions';

const initialState = {
    list: [],
    detail: {},
    fetching: false,
};

const pokemonReducer =  (state = initialState, action) => {
    switch (action.type){
        // list
        case GET_POKEMONS_REQUEST: {
            return { ...state, fetching: true }
        }
        case GET_POKEMONS_SUCCESS: {
            return { ...state, fetching: false, list: state.list.concat(action.payload) }
        }
        case GET_POKEMONS_FAILURE: {
            return { ...state, fetching: false }
        }
        // detail
        case GET_POKEMON_REQUEST: {
            return { ...state, fetching: true }
        }
        case GET_POKEMON_SUCCESS: {
            return { ...state, fetching:false, detail: action.payload }
        }
        case GET_POKEMON_FAILURE: {
            return { ...state, fetching:false }
        }
        case CLEAN_POKEMONS: return initialState;
        default: return state;
    }
};

export default pokemonReducer;
