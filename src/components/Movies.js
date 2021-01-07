 import { useState, useEffect } from 'react'
 import "./Movies.css"
 import sr from './ScrollReveal'


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
  useEffect(()=>{
    const config = {
        
        duration: 2000,
        delay: 150,
        distance: '500px',
        scale: 1,
        
      }
    sr.reveal('.container', config)
  },[query])

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n-1) + "..." : str;
  }
  
    return (
      <div className="container">
        <div className='search bar mt-3'>
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
              <div className='title' >
                {truncate(movie.Title, 10)} ({truncate(movie.Year, 5)})
              </div>
              <div className='poster'>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              
              <div className='buttons'>
                <button type="button" class="btn btn-success" onClick={() => setSelectedMovie(movie.imdbID)}>Info</button>
                <button type="button" class="btn btn-danger">Trailers</button>
                <button type="button" class="btn btn-primary">Parents Guid</button>
                <button type="button" class="btn btn-warning">Movies like this</button>
              </div>
              
            </div>
          ))}
          
        </div>
      </div>
    );
  }
  
  export default Row;