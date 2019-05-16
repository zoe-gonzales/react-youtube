import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();
const apiKey = process.env.REACT_APP_KEY;

export default {
    searchVideos: function(term) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
}