import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

function PokeList(props) {
  const renderPokemons = () => {
    return props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} url={pokemon.url} evolution={pokemon.evolution} />
        </li>
      );
    });
  };
  return (
    <div className="section__grid">
      <ul className="pokemon__list--style wrapper">{renderPokemons()}</ul>
    </div>
  );
}

PokeList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;
