import { combineReducers, applyMiddleware } from 'redux';
import pokemons from '../pokemons/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios';

const reducersCombined = combineReducers({pokemons});

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

const extraArguments = {
    api,
};

const  middlewares = applyMiddleware(
    thunk.withExtraArgument(extraArguments)
);

const store = createStore(
    reducersCombined,
    composeWithDevTools(middlewares),
)
export default store;