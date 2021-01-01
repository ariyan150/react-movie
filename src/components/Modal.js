import './Modal.css';
import { useState, useEffect } from 'react'


function Modal({ selectedMovie, setSelectedMovie }) {
    const [movie, setMovie] = useState(() => '');
    const [trailer, settrailer] = useState(null);
    
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

        useEffect(()=>{
            console.log(trailer)
        },[])

    return (
        <div className="backdrop" onClick={() => setSelectedMovie(null)}>
            
                <div className='movie_page'>
                    <div className='name'>
                        {movie.Title} ({movie.Year})
                    </div>
                    <div className='poster'>
                        <img src={movie.Poster} />
                    </div>
                    <div className='trailer'>
                        {trailer &&
                            <iframe width="560" height="315" src={trailer}
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        }
                        
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
                                <div className='body_box_sub'>{movie.imdbRating}</div>     
                                <div className='body_box_sub'>{movie.Metascore}</div>
                            </div>
                        </div>
                        <div className='plot'>
                            <div className='title_box'>Plot</div>
                            <div className='body_box'>
                                {movie.Plot ? movie.Plot:'Unkown'}
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            
        </div>
    );
} 

export default Modal;