import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zBUmcs-ncApm3QyUUNC584S4a7oVnLQQDGrE0Es1KEk'
    }
});