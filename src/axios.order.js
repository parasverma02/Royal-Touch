import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://royal-touch-salon-default-rtdb.firebaseio.com/'
});

export default instance;