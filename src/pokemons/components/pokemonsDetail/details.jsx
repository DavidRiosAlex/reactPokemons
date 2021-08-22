import { useEffect, useState, Suspense, lazy } from 'react';
import SideBar from 'react-sidebar';
import StatComponent from './subComponents/StatComponent';
import AbilityComponent from './subComponents/AbilityComponent';
// import NavBarItem from './subComponents/navbarItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon } from '../../actions';

const NavBarItem = lazy(() => import('./subComponents/navbarItem'));

const ListPokemons = ({ match: { params: { id } }, history }) => {
    const [name, setName] = useState('');
    const [abilities, setAbilities] = useState([]);
    const [species, setSpecies] = useState('');
    const [stats, setStats] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.pokemons.detail);

    useEffect(() =>{
        dispatch(getPokemon(id));
    } , [dispatch, id])

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
    }, [data]);

    const handleSideBarState = () => setSidebar(!sidebar)

    return (
        <>
            <SideBar
                sidebar={
                    <Suspense fallback={<></>}> <NavBarItem id={id}/> </Suspense>
                }
                docked={true}
                pullRight={true}
                onSetOpen={handleSideBarState}
                styles={{ sidebar: { background: "white" }}}
            >
                <button onClick={ () => history.push('/pokemons')}>Volver Atras</button>
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
            </SideBar>
        </>
    );
};

export default ListPokemons;