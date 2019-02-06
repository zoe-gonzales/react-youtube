import axios from 'axios';
const apiKey = 'AIzaSyAOcdZjvmiXft38GHbiaxjzwHRC6xtwTOU';

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