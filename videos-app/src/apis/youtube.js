import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const params = {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,

}