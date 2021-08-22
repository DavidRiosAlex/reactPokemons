import { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';
import {cleanPokemons, getPokemons} from '../../actions'; 


const ListPokemons = ({ history }) => {
    const ListRef = useRef(null);
    const dispatch = useDispatch();
    const [byName, setByName] = useState(new RegExp('', 'g'));
    const { list: pokemons, count} = useSelector( state => state.pokemons );

    const fetchNewPokemons = useCallback(() => {
        dispatch(getPokemons());
    }, [dispatch])

    const onScrolling = () => {
        const { offsetHeight, scrollHeight, scrollTop } = ListRef.current;
        if ( (scrollHeight - 300 ) <= scrollTop + offsetHeight ){
            if ( count > pokemons.length)fetchNewPokemons();
        }
    };
    const filterByName = ({ target: { value } }) => {
        setByName(new RegExp(value, 'g'));
    }

    useEffect(() => {
        ListRef.current.onscroll = onScrolling;
        dispatch(getPokemons());
        return () => dispatch(cleanPokemons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);
    
    return (
        <div className={styles.pokemons}>
            <div className={styles.searchBox}>
                <div className={styles.imageBox}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokemon"/>
                </div>
                <div className={styles.searchContainer}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="pokeball"/>
                    <input className={styles.search} placeholder="Search pokemon" onChange={filterByName}/>
                </div>
            </div>
            <div className={styles.list} ref={ListRef} >
                {pokemons.length && pokemons.filter(state => state.name.match(byName)).map(
                    (pokemon, index) => (
                        <div key={index} className={styles.itemList} onClick={ () => history.push(`/pokemons/${pokemon.name}`)}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                            <div className={styles.name}>
                                <Link to={`pokemons/${pokemon.name}`}>{pokemon.name}</Link>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default ListPokemons;