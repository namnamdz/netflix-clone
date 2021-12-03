import React, { useEffect, useState } from 'react'
import axios from './localaxios'
import './css/row.css'
function Row({title, isLargeRow, fetchURL}) {

    const [movie, setMovie] = useState([]);
    const base_url_img = 'https://image.tmdb.org/t/p/original/';
    useEffect(() =>{
        async function getData(){
            const request = await axios.get(fetchURL);

            setMovie(request.data.results);
            return request
        }
        getData();
    },[fetchURL])
    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row__poster">
                {movie.map((item, index) => (
                    <img 
                    src={`${base_url_img}${isLargeRow ? item.poster_path : item.backdrop_path}`}
                    alt="img row__poster"
                    className={`rowposter ${isLargeRow && "largeImg"}`}
                    key={item.id}
                />
                ))}
                
            </div>
        </div>
    )
}

export default Row
