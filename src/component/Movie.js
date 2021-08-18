import React from 'react'
import './Movie.css'


function Movie({title,image,rate}) {
    const imagath=`https://image.tmdb.org/t/p/w500${image}`;
    return (
        <div className="movie">
            <img src={imagath} alt=""/>
            <div className="movie_info" >
                <h5>{title}</h5>
                <h5>{rate}</h5>   
            </div>
        </div>
    )
}

export default Movie
