// Promises com Axios - Pomessas com Axios e encadeamento
import axios from "axios";

axios
    .get('https://api.github.com/users/debaldi')
    .then( response => axios.get(response.data.repos_url) )
    .then( repos => console.log(repos.data) )
    .catch( error => console.log(error))