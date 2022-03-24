import axios from "axios";

axios.get('https://api.github.com/users/debaldi')
.then( (res) => {
    console.log(res.data);
  });
