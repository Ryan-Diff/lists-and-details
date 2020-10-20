export const getCharacters = () => {
    return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
        .then(res => res.json());
};

export const getCharactersById = (characterId) => {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`)
    .then(res => res.json());
};