import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './app/store';
import Pokemons from './pokemons/components/listPokemons';
import DetailPokemons from './pokemons/components/pokemonsDetail';

import './App.css';

function App() {
  
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/pokemons' exact component={Pokemons}>
              {/* <Pokemons/> */}
            </Route>
            <Route path='/pokemons/:id' component={DetailPokemons}>
              {/* <DetailPokemons/> */}
            </Route>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
