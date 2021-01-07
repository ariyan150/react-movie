import './Modal.css';
import sr from './ScrollReveal'
import { useState, useEffect } from 'react'


function Modal({ selectedMovie, setSelectedMovie }) {
    const [movie, setMovie] = useState(() => '');
    const [trailer, settrailer] = useState(null);
    
    useEffect(()=>{
        const config = {
            origin: 'top',
            duration: 2000,
            delay: 150,
            distance: '500px',
          };
        sr.reveal('.movie_page', config)
    },[])

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=af3d009a`)
        .then((res) => res.json())
        .then(data => setMovie(data))
    },[])

    useEffect(()=>{
        fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${movie.Title}${movie.Year} trailer`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ea4ba8f6aamsh23ffbbac2f6a618p1bd384jsna311b8e29f36",
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com"
        }
        })
        .then(response => response.json())
        .then(data => {
            data.items && settrailer("https://www.youtube.com/embed/" + data.items[1].id)
        })
        
        },[movie])
    
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
                        <img src={movie.Poster} />
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