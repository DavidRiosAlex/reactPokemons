import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { QueryClient, QueryClientProvider } from 'react-query'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './app/store';
import Pokemons from './pokemons/components/listPokemons';
import DetailPokemons from './pokemons/components/pokemonsDetail';

import './App.css';

function App() {
  const storage = createStore(store, devToolsEnhancer());
  const client = new QueryClient();
  return (
    <Provider store={storage}>
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
