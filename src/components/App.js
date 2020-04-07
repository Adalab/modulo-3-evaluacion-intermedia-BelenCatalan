import React from 'react';
import '../stylesheets/App.css';
import pokemons from '../data/Plist.json';
import Pokemon from './Pokemon';

console.log(pokemons);
const renderPokemons = () => {
  return pokemons.map((pokemon) => {
    return <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} url={pokemon.url} evolution={pokemon.evolution} />;
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi lista de pokemon</h1>
        {renderPokemons()}
        {/* <Pokemon id={pokemons.id} name={pokemons.name} types={pokemons.types} url={pokemons.url} evolution={pokemons.evolution} /> */}
      </header>
    </div>
  );
}

export default App;
