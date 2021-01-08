import './BoxOffice.css';
import { useState, useEffect } from 'react'




function BoxOffice() {
    const data = require('../BoxOffice.json').items;
    const date = require('../BoxOffice.json').date;
    console.log(date)

    return (
      <div className="BoxOffice">
        <div className="BoxOffice__date">
            {date}
        </div>
                {data.map(movie => 
                    <div className="movie_row">
                        <img src={movie.poster} />
                        <div className='info'>
                            <div className='info__title'>
                                {movie.title}
                            </div>
                            <div className='numbers'>
                                <p>{movie.last}</p>
                                <p>{movie.total}</p>
                                <p>{movie.weeks_count}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                )}

        
      </div>
    );
  } 
  
  export default BoxOffice;