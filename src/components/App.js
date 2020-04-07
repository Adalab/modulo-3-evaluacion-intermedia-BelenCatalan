import React from 'react';
import '../stylesheets/App.css';
import pokemons from '../data/Plist.json';
// import Pokemon from './Pokemon';
import PokeList from './PokeList';

console.log(pokemons);
const renderPokemons = () => {
  return pokemons.map((pokemon) => {
    return <PokeList key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} url={pokemon.url} evolution={pokemon.evolution} />;
  });
};

function App() {
  return (
    <div className="">
      <h1>Mi lista de pokemon</h1>
      {renderPokemons()}
      {/* <Pokemon id={pokemons.id} name={pokemons.name} types={pokemons.types} url={pokemons.url} evolution={pokemons.evolution} /> */}
    </div>
  );
}

export default App;
