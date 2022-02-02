import React from 'react';
import './App.css';
import PokemonCard from './Components/PokemonCard';
import { SearchBox } from './Components/SearchBox';


//TODO: to convert this to functional component and hooks instead
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: ''
    };
  }


  // TODO: to write to localstorage instead of set state, 
  // and retrieve from localstorage
  componentDidMount() {
    if (!this.pokemons) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(response => response.json())
        .then(poke => {
          this.setState({ pokemons: poke.results });
        });
    }
  }

  render() {

    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(filteredPokemons);

    return (
      <div className="App">
        <SearchBox
          placeholder="Search for pokemon"
          handlechange={event => this.setState({ searchField: event.target.value })} />
        <div className="card-list">
          {filteredPokemons.map(items => {
            return <PokemonCard key={items.url} name={items.name} url={items.url} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
