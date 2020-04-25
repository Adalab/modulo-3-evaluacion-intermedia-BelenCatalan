import React, { useState } from 'react';
import '../stylesheets/App.css';
import pokemonsData from '../data/Plist.json';
import PokeList from './PokeList';

function App() {
  const [pokemons] = useState(pokemonsData);
  return (
    <div className="">
      <h1 className="pokemon__header">Mi lista de pokemon</h1>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
