import request from 'superagent';

const URL = 'https://got-data.herokuapp.com';

export function fetchGOT() {
    return request.get(`${URL}/got`);
}

export function fetchCharacter(id) {
    return request.get(`${URL}/got/${id}`);
}