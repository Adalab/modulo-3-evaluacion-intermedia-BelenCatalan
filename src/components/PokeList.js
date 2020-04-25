import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

function PokeList(props) {
  console.log(props);
  const renderPokemons = () => {
    return props.pokemons.map((pokemon) => {
      return <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} url={pokemon.url} evolution={pokemon.evolution} />;
    });
  };
  return <div>{renderPokemons()}</div>;
}

PokeList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;
