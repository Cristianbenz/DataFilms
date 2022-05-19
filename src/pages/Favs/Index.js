import { Navigate } from "react-router-dom";

import Card from "../../components/Card/Index";

import { useLoginContext } from "../../contexts/LoginContext";
import { useFavContext } from "../../contexts/FavsContext";

export default function Favs() {
  const { isLoged } = useLoginContext()
  const { favList } = useFavContext();

  return (
    <>
      {!isLoged && <Navigate to={"/"} />}
      <h1>Tus favoritos</h1>
      <div className="movieList-layout">
        {favList.map((movie) => {
          return (
              <Card
                key={movie.id}
                imgUrl={movie.imgUrl}
                title={movie.title}
                overview={movie.overview}
                id={movie.id}
              />
          );
        })}
      </div>
    </>
  );
}
