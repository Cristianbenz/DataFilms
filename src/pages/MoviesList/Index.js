import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Card from "../../components/Card/Index";

import { useLoginContext } from "../../contexts/LoginContext";

export default function Lista() {
  const { isLoged } = useLoginContext();
  const [movieList, setMovieList] = useState([]);
  const API_ENDPOINT =
    "https://api.themoviedb.org/3/movie/popular?api_key=128f56cf896a7c28578efc0a98b0e4b6&language=es-ES&sort_by=release_date.desc&page=1";
  useEffect(() => {
    axios.get(API_ENDPOINT).then((res) => setMovieList(res.data.results));
  }, []);

  return (
    <>
      {!isLoged && <Navigate to={"/"} />}
      <h1>Peliculas Populares</h1>
      <div className="movieList-layout">
      {movieList.map((singleMovie) => {
        return (
          <Card key={singleMovie.id}
            imgUrl={singleMovie.poster_path}
            title={singleMovie.title}
            overview={singleMovie.overview}
            id={singleMovie.id}
          />
        );
      })}
      </div>
    </>
  );
}
