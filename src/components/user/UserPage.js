import './UserPage.css'
// import MovieCard from "../MovieCard"
import { useState, useEffect } from 'react'
import axios from 'axios';

function UserPage() {
    const [lists, setLists] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/lists/', {
            headers: {"Authorization": "Token 65271d3c8c48c96f48aabdc51fe3a7f75893fb2475f5e321610ddc7d6d220769"}
        })
        .then(res => res.data)
        .then(data => {
            for(let list of data){
                
                const dic = {"name": list.name, "movies":list.movies};
                setLists(prev => [...prev, dic]);
            };
            console.log(lists)
        })
        .catch(err => console.log(err));
    },[])

    return (
        <div className='lists'>
            {lists.map(list => (
                <div className="list">
                    <div className="list__title">{list.name}</div>
                    <div className="list__movies">{list.movies}</div>
                </div>
            ))}
        </div>
    )
}

export default UserPage
