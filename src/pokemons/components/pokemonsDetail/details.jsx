import { useEffect, useState, Suspense, lazy, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from 'react-sidebar';
import CustomSideBar from '../../../shared/components/SideBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StatComponent from './subComponents/StatComponent';
import AbilityComponent from './subComponents/AbilityComponent';
import styles from './details.module.scss';
import { getPokemon } from '../../actions';

const NavBarItem = lazy(() => import('./subComponents/NavBarItem'));

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
    
    const CustomNavBar = () => <Suspense fallback={<></>}> <NavBarItem id={id}/></Suspense>

    return (
        <>
            <CustomSideBar
                CustomNavBar={CustomNavBar}
            >
                <div className={styles.detailContainer}>
                    <div className={styles.pokemonInformationContainer}>
                        <div className={styles.backBox}>
                            <div className={styles.backButton} onClick={ () => history.push('/pokemons')}>
                                <ArrowBackIcon/>
                            </div>
                            <div className={styles.backLabel} onClick={ () => history.push('/pokemons')}>
                                <div>{`pokemons: ${name}`}</div>
                            </div>
                        </div>
                        <img className={styles.pokemonImage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt={data.name} />
                        {/* <div className={styles.label}>Skills</div>
                        <div className={styles.skillContainer}>
                            {abilities.map( (pokemon, index) => 
                                <AbilityComponent 
                                    key={index} 
                                    name={pokemon.ability.name} 
                                    {...pokemon}/> 
                                )}
                        </div> */}
                        <div className={styles.label}>Stats</div>
                        <div className={styles.statsContainer}>
                            {stats.map(({stat, base_stat, effort, ...information}, index) => {
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
                    </div>
                    <div className={styles.showcase}>
                        <img className={styles.showcase} src="/assets/ashPokemon.png" alt="showcase"/>
                    </div>
                </div>
            </CustomSideBar>
        </>
    );
};

export default ListPokemons;