import { useState, useEffect } from "react";
import axios from "axios";

import { useLoginContext } from "../../contexts/LoginContext";
import { useFavContext } from "../../contexts/FavsContext";

import './movieDetails.css'

export default function MovieDetail() {
  const { isLoged } = useLoginContext()
  const { isAdded, addToFav, removeFromFav } = useFavContext()
  const URL_ID = new URLSearchParams(window.location.search);
  const MOVIE_ID = URL_ID.get("movieID");
  const API_ENDPOINT = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=128f56cf896a7c28578efc0a98b0e4b6&language=es-ES`;
  const [movieDetails, setMovieDetails] = useState(null);


  useEffect(() => {
    axios.get(API_ENDPOINT)
    .then((res) => setMovieDetails(res.data));
  }, [API_ENDPOINT]);

  const handleAdd = movie => {
    addToFav({
      id: movie.id,
      title: movie.title,
      imgUrl: movie.poster_path,
      overview: movie.overview
    })
  }

  return (
      <>
        {movieDetails && 
        <section>
            <h1>{movieDetails.title}</h1>
            <article className="movieDetails-layout movieDetails-size movieDetails-position">
              <img className="movieDetails--img-size" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
              <div className="movieDetails--info-layout">
                <span>
                  Descripcion: <p>{movieDetails.overview}</p>
                </span> 
                <span>
                  Genero/s: <ul>
                              { movieDetails.genres.map( genre => <li>{genre.name}</li>)}
                            </ul>
                </span> 
                <span>
                  Fecha de Estreno: <p>{movieDetails.release_date}</p>
                </span> 
                {isLoged && (!isAdded(movieDetails.id) ? 
                  <button className="btn btn-outline-primary" onClick={() => handleAdd(movieDetails)}>Añadir a Favoritos</button>
                  :
                  <button className="btn btn-outline-secondary" onClick={() => removeFromFav(movieDetails.id)}>Eliminar de Favoritos</button>)
                }
              </div>
            </article>
        </section>}
      </>
  )
}
