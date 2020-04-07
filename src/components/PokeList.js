import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
  console.log(props);

  return (
    <>
      <Pokemon key={props.id} id={props.id} name={props.name} types={props.types} url={props.url} evolution={props.evolution} />
    </>
  );
}

export default PokeList;
