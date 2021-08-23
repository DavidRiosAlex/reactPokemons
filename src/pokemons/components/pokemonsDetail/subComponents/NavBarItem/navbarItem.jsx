import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory}  from 'react-router-dom';
import { getPokemonEvolution } from '../../../../actions';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styles from './navbarItem.module.scss';

const NavBarItem = ({ id: pokemonName }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pokemonId = useSelector(state => state.pokemons.detail);
    const evolutions = useSelector(state => state.pokemons.evolutions?.chain?.evolves_to);

    useEffect(() =>{
        dispatch(getPokemonEvolution());
    }, [dispatch, pokemonId])

    return(
        <div className={styles.containerSideBar}>
            <b>Evolutions</b>
            {evolutions && evolutions.map( (state, index) => {
                return(
                    <div 
                    className={styles.item}
                    key={index} 
                    onClick={ () =>history.push(`/pokemons/${state.species.name}`) }
                    > 
                        <NavigateNextIcon/>
                        {state.species.name}
                    </div>
                )

            })}
            {/* <div>hola</div> */}
        </div>
)};

export default NavBarItem;