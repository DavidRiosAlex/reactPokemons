import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonEvolution } from '../../../../actions';

const NavBarItem = ({ id: pokemonName }) => {
    
    const dispatch = useDispatch();
    const pokemonId = useSelector(state => state.pokemons.detail);
    const evolutions = useSelector(state => state.pokemons.evolutions?.chain?.evolves_to);

    useEffect(() =>{
        dispatch(getPokemonEvolution());
    }, [dispatch, pokemonId])

    return(
        <>
            <b>Evolutions</b>
            {evolutions && evolutions.map( (state, index) => {
                return <div key={index}> {state.species.name}</div>
            })}
            {/* <div>hola</div> */}
        </>
)};

export default NavBarItem;