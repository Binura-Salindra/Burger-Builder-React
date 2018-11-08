import axios from 'axios';

const instance = axios.create({
   baseURL:'https://burger-builder-react-b6432.firebaseio.com/'
});

export default instance;