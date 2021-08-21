import { useEffect, useState } from 'react';
import SideBar from 'react-sidebar';
import { useQuery } from 'react-query';
import StatComponent from './subComponents/StatComponent';
import AbilityComponent from './subComponents/AbilityComponent';
import NavBarItem from './subComponents/navbarItem';
import { pokemonId } from './index';
// import {} from '../../actions';

const ListPokemons = ({ match: { params: { id } }, history }) => {
    const [name, setName] = useState('');
    const [abilities, setAbilities] = useState([]);
    const [species, setSpecies] = useState('');
    const [stats, setStats] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const [pokemonContext, setPokemonContext] = useState(null);
    // console.log('id: ', id);
    const { data, isSuccess } = useQuery('pokemon', async () => {
        console.log('id: ', id);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // console.log(response)
        return response.json();
        }
    )

    useEffect(() => {
        if (data?.name) {
            setName(data.name)
        }
        if (data?.abilities) {
            setAbilities(data.abilities)
        }
        if (data?.species?.name) {
            setSpecies(data.species.name)
        }
        if (data?.stats) {
            setStats(data.stats)
        }
        if (data?.id){
            setPokemonContext(data.id)
        }
    }, [data, isSuccess]);

    const handleSideBarState = () => setSidebar(!sidebar)

    return (
        <pokemonId.Provider value={pokemonContext}>
            <SideBar
            sidebar={<NavBarItem/>}
            docked={true}
            pullRight={true}
            onSetOpen={handleSideBarState}
            styles={{ sidebar: { background: "white" } }}>
                <button onClick={ () => history.push('/pokemons')}>Volver Atras</button>
            </SideBar>
            <div>{`${species}, ${name}`}</div>
            <div>{abilities.map( (pokemon, index) => 
                <AbilityComponent 
                    key={index} 
                    name={pokemon.ability.name} 
                    {...pokemon}/> 
                )}
            </div>
            <div>{stats.map(({stat, base_stat, effort, ...information}, index) => {
                return (
                    <StatComponent 
                        key={index} 
                        title={stat.name} 
                        base={base_stat} 
                        effort={effort} 
                        {...information}
                    />)
                })}
            </div>
        </pokemonId.Provider>
    );
};

export default ListPokemons;