import { useContext } from 'react';
import { useQuery } from 'react-query';
import { pokemonId } from '../index'; 

const NavBarItem = () => {
    const contextPokemon = useContext(pokemonId);
    console.log('contextPokemon', contextPokemon);
    const { data } = useQuery('repoData', async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${contextPokemon}`);
        return response.json();
        }
    )
    // console.log(data);
    return <>
        <b>Evolutions</b>
        {data && data.chain?.evolves_to?.map( state => {
            return <div> {state.species.name}</div>
        })}
        {/* <div>hola</div> */}
    </>
};

export default NavBarItem;