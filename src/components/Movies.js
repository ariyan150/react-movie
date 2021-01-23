 import { useState, useEffect } from 'react'
 import "./Movies.css"
 import sr from './ScrollReveal'
 import BoxOffice from "./BoxOffice"
 import MovieCard from "./MovieCard"


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
    const midle = {
        duration: 2000,
        delay: 150,
        distance: '500px',
        scale: 1
      }
      const left = {
        origin: 'left',
        duration: 2000,
        delay: 150,
        distance: '500px',
        scale: 1
      }
      
    sr.reveal('.midle_page', midle);
    sr.reveal('.left_page', left);
  },[query])

  
    return (
      <div className="page">
        <div className='left_page'>
          <div className='boxoffice_title'>
            BoxOffice
          </div>
          <BoxOffice />
        </div>

        <div className='midle_page'>

          <div className='search bar mt-3'>
            <input class="form-control"
            value={query}
            onChange={onChange} type="text"
            placeholder="Search for movies"
            aria-label="default input example"
            id="search">
            </input>
          </div>

          <div className="movies" id='row_movies'>
            {movies.map(movie => (
              <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} imdbid={movie.imdbID} setSelectedMovie={setSelectedMovie} />
            ))}
          </div>
        </div>
        <div className='right_page'>Ads</div>
      </div>
    );
  }
  
  export default Row;