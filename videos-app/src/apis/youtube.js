import axios from 'axios';

const KEY = 'AIzaSyAw3dKi_xxts-BGdACiB0H0bhYnbk8pOQA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const params = {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,

}