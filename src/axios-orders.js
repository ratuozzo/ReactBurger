import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-54c55.firebaseio.com'
});

export default instance;