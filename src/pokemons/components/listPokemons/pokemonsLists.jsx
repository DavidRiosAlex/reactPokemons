import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {getPokemonsSuccess, getPokemonsRequest, cleanPokemons} from '../../actions'; 


const ListPokemons = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector( state => state.pokemons.list );
    const { data, isSuccess } = useQuery('repoData', async () => {
            dispatch(getPokemonsRequest());
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            return response.json();
        }
    )
    useEffect(() => {
        // console.log(data);
        if (data?.results?.length && isSuccess){
            dispatch(getPokemonsSuccess(data.results));
        }
        return () => dispatch(cleanPokemons());
    },[dispatch, data, isSuccess]);
    
    return (
        <div>
            {pokemons.map(
                (pokemon, index) => (
                    <div key={index}>
                        <Link to={`pokemons/${pokemon.name}`}>{pokemon.name}</Link>
                    </div>
                )
            )}
        </div>
    )
}

export default ListPokemons;