import React from 'react';
import './App.css';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import {KantoPokemon} from './Components/KantoPokemon';
import {SearchBox} from './Components/SearchBox/SearchBox';

class App extends React.Component {
  constructor(){
    super();
  this.state = {
    pokemons: KantoPokemon.results,
    searchField:''
  };
}


// Method to retrieve from pokeapi 
// However, I took the .json out instead and made it into an obj
// componentDidMount() {
//   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
//   .then(response=>response.json())
//   .then(poke => {
//     this.setState({pokemons:poke.results});
// })}

  render() {

    const {pokemons,searchField} = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(filteredPokemons);

    return (
      <div className="App">
        <SearchBox 
        placeholder="Search for pokemon"
        handleChange={event => this.setState({searchField:event.target.value})}/>
        <div className="card-list">
        {filteredPokemons.map(items => {
          return <PokemonCard key={items.url} name={items.name} url={items.url}/> })}
      </div>
      </div>
    );
}
}

export default App;
