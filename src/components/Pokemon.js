import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  const renderTypes = () => {
    return props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
  };
  return (
    <div className="pokemon__border pokemon__style">
      <ul className="pokemon__list--style">
        <li>
          <img src={props.url} alt={props.name} />
        </li>
        <li>{props.name}</li>
        <ul className="pokemon__list--style">{renderTypes()}</ul>
        <li>{props.evolution}</li>
      </ul>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    key: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array,
    url: PropTypes.string,
    evolution: PropTypes.string,
  }),
};

export default Pokemon;
