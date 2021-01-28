import './Modal.css';
import { useState, useEffect } from 'react'


function Modal({ selectedMovie, setSelectedMovie }) {
    const [movie, setMovie] = useState(() => '');

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=af3d009a`)
        .then((res) => res.json())
        .then(data => setMovie(data))
    },[])


    
    const closeModal = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedMovie(null);
        }
    }
    function truncate(str, n) {
        return str.length > n ? str.substr(0, n-1) + "..." : str;
        }
    

    return (
        <div className="backdrop" onClick={closeModal}>
                <button type="button" className="btn btn-danger rounded-circle" id='close_modal' onClick={() => setSelectedMovie(null)}>X</button>
                <div className='movie_page'>
                    <div className='name'>
                        {movie.Title} ({movie.Year})
                    </div>
                    <div className='poster'>
                        <img src={movie.Poster!=='N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80' } alt={movie.Title} />
                    </div>
                    <div className='detail'>
                        <div className='director'>
                            <div className='title_box'>Director</div>
                            <div className='body_box'>
                                {movie.Director ? movie.Director:'Unkown'}
                            </div>
                            
                        </div>
                        <div className='actors'>
                            <div className='title_box'>Actors</div>
                            <div className='body_box'>
                                {movie.Actors ? movie.Actors:'Unkown'}
                            </div>
                            
                        </div>
                        <div className='genre'>
                            <div className='title_box'>Genre</div>
                            <div className='body_box'>
                                {movie.Genre ? movie.Genre:'Unkown'}
                            </div>
                           
                        </div>
                        <div className='rated'>
                            <div className='title_box'>Rated</div>
                            <div className='body_box'>
                                {movie.Rated ? movie.Rated:'Unkown'}
                            </div>
                            
                        </div>
                        <div className='time'>
                            <div className='title_box'>Time</div>
                            <div className='body_box'>
                                {movie.Runtime ? movie.Runtime:'Unkown'}
                            </div>
                            
                        </div>
                        <div className='boxOffice'>
                            <div className='title_box'>boxOffice</div>
                            <div className='body_box'>
                                {movie.BoxOffice ? movie.BoxOffice:'Unkown'}
                            </div>
                            
                        </div>
                        <div className='rates'>
                            <div className='title_box'>Rates</div>
                            <div className='body_box' id='rate_body_box'>
                                <section className='body_box_sub'>{movie.imdbRating}</section>     
                                <section className='body_box_sub'>{movie.Metascore}</section>
                            </div>
                        </div>
                        <div className='plot'>
                            <div className='title_box'>Plot</div>
                            <div className='body_box'>
                                {truncate(
                                    movie.Plot || 'none'
                                    , 160)}
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>
    );
} 

export default Modal;