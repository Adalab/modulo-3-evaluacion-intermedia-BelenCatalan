import React from 'react';

function Pokemon(props) {
  console.log(props);
  return (
    <div className="pokemon__border pokemon__style">
      <ul className="pokemon__list--style">
        <li>
          <img src={props.url} alt={props.name} />
        </li>
        <li>{props.name}</li>
        <li>{props.types}</li>
        <li>{props.evolution}</li>
      </ul>
    </div>
  );
}

export default Pokemon;
