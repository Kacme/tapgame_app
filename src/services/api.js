import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://protected-tor-93414.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;