 import { useState, useEffect } from 'react'
 import "./Row.css"


function Row({setSelectedMovie}) {
  const [movies, setmovies] = useState([])
  const [query, setQuery] = useState([""])
  

  const onChange = e => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=af3d009a`)
    .then((res) => res.json())
    .then((data) => {
      if(data.Response === 'True') {
        setmovies(data.Search)
        console.log(data.Search)
      } else {
        setmovies([])
      };
      
    });
  }
  
  
  
    return (
      <div className="containers">
        <div className='Search bar mt-3'>
          <input class="form-control"
          value={query}
          onChange={onChange} type="text"
          placeholder="Search for movies"
          aria-label="default input example">
          </input>
        </div>

        <div className="movies" id='row_movies'>
          {movies.map(movie => (
            <div className='movie'>
              <div className='poster' onClick={() => setSelectedMovie(movie.imdbID)}>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            </div>
          ))}
          
        </div>
      </div>
    );
  }
  
  export default Row;