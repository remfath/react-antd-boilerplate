import axios from 'axios';

export default {
    fetchName() {
        return process.env.USER_NAME;
    },
    fetchDetailList() {
        let apiUrl = process.env.GITHUB_URL;

        return axios.get(apiUrl).then(response => {
            return response.data.results;
        });
    }
}