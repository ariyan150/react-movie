import './MovieCard.css';


function MovieCard({ title, year, poster, imdbid, setSelectedMovie }) {

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <div className='movie'>
      <div className='title' >
          {truncate(title, 10)} ({truncate(year, 5)})
      </div>
      <div className='poster_buttons'>
        <div className='poster'>
          <img src={poster!='N/A' ? poster : 'https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80' } alt={title} />
        </div>
        <div className='buttons'>
          <button type="button" class="btn btn-success" onClick={() => setSelectedMovie(imdbid)}>Info</button>
          <button type="button" class="btn btn-light">Watchlist</button>
          <button type="button" class="btn btn-danger">Trailers</button>
          <button type="button" class="btn btn-primary">Parents</button>
          <button type="button" class="btn btn-warning">like this</button>
        </div>
      </div>
      </div>
  );
} 

export default MovieCard;