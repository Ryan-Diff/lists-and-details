import React, { Component } from 'react';
import { getCharactersById } from '../../services/fetch-characters.js';
import PropTypes from 'prop-types';

export default class DetailPage extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        myCharacterId: PropTypes.string.isRequired
      })
    })
  };

  state = { character: '' }

  componentDidMount = async() => {
    const characterId = this.props.match.params.myCharacterId;
    await getCharactersById(characterId)
      .then(character => this.setState({ character }));
  }

  render() {
    const { character } = this.state;

    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.photoUrl} />  
        <h3> {character.weapon}</h3> 
        <h3> {character.position}</h3> 
        <h3> {character.affiliation}</h3> 
      </div>
    );
  }
}