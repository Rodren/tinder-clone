import axios from 'axios';

const instance = axios.create({
    baseURL:'https://rg-tinder-backend.herokuapp.com/'
});

export default instance;