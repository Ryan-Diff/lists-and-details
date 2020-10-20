import React, { Component } from 'react';
import { getCharacters } from '../../services/fetch-characters.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class HomePage extends Component {
    state = {
      characters: []
    }

    componentDidMount = async() => {
        await getCharacters()
        .then(characters => this.setState({ characters }));
    }

    render() {
        const { characters } = this.state;

        const characterElements = characters.map(character => (
          <Link key={character._id} to={`/${character._id}`}>
            <li key={character.name}>
                {character.name}
            </li>
          </Link>  
        ));

        return (
            <div>
                <ul>{characterElements}</ul>
            </div>
        );
    }
}

HomePage.propTypes = {
    photoURL: PropTypes.string.isRequired
}