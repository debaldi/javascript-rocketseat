// Async / Await com Axios

import axios from "axios"

async function fetchRepos() {
    const user = await axios.get('https://api.github.com/users/debaldi')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
}

fetchRepos()