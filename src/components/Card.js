import React from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../actions/LoginAction';

const Card = props => {
  const fetchPokemon = e => {
    e.preventDefault();
    props.getPokemon();
  };

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getPokemon }
)(Card);
