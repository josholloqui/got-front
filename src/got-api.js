import request from 'superagent';

const URL = process.env.REACT_APP_API || 'https://got-data.herokuapp.com';

export function fetchGOT() {
    return request.get(`${URL}/got`);
}

export function fetchCharacter(id) {
    return request.get(`${URL}/got/${id}`);
}

export function addCharacter(characterData) {
    return request.post(`${URL}/got`, characterData);
}