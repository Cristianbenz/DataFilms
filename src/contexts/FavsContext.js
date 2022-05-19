import { createContext, useContext, useState, useEffect } from "react";

const CONTEXT = createContext();

export const useFavContext = () => useContext(CONTEXT);

export function FavContext({ children }) {
  const LOCAL_LIST = localStorage.getItem("favList");
  const [favList, setFavList] = useState(null);

  useEffect(() => {
    setFavList(JSON.parse(LOCAL_LIST) || []);
  }, [LOCAL_LIST]);

  const isAdded = (id) => {
   return favList ? favList.some((movie) => movie.id === id) : false;
  } 

  const addToFav = (movie) => {
    const ID = movie.id;
    if(isAdded(ID))  {
      return;
    } else {
      const movieData = {
        'id': movie.id,
        'imgUrl': movie.imgUrl,
        'title': movie.title,
        'overview': movie.overview,
      };
      localStorage.setItem("favList", JSON.stringify([...favList, movieData]));
      setFavList(JSON.parse(LOCAL_LIST));
    }
  };

  const removeFromFav = (id) => {
    const NEW_FAV_LIST = favList.filter((movie) => movie.id !== id);
    localStorage.setItem("favList", JSON.stringify(NEW_FAV_LIST));
    setFavList(JSON.parse(LOCAL_LIST));
  };

  return (
    <CONTEXT.Provider
      value={{
        favList,
        addToFav,
        removeFromFav,
        isAdded,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
}
