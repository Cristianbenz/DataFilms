import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/Card/Index";

import './search.css'

export default function Search() {
  const [searchList, setSearchList] = useState([]);
  const GET_URL = new URLSearchParams(window.location.search);
  const KEYWORD = GET_URL.get("query");
  const SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?query=${KEYWORD}&api_key=128f56cf896a7c28578efc0a98b0e4b6&language=es-ES&page=1`;

  useEffect(() => {
    axios.get(SEARCH_ENDPOINT).then((res) => setSearchList(res.data.results));
  });

  return (
    <>
      <h1>Buscaste {KEYWORD}</h1>
      <div className="movieList-layout">
        {searchList.map((singleMovie) => {
          return (
            <Card
              key={singleMovie.id}
              imgUrl={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`}
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
