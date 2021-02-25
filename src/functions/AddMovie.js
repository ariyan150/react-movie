import axios from 'axios';

export const AddMovie = (e) => {
    e.preventDefault();
    axios.get('http://127.0.0.1:8000/api/movies/',{})
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}