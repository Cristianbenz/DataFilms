import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Index";
import Lista from "./pages/MoviesList/Index";
import MovieDetail from "./pages/MovieDetail/Index";
import Favs from "./pages/Favs/Index";

import { FavContext } from "./contexts/FavsContext";
import { LoginContext } from "./contexts/LoginContext";

import Header from "./components/Header/Index";
import Search from "./pages/Search/Index";

import './app.css'

function App() {
  return (
    <>
      <LoginContext>
        <FavContext>
          <Header />
          <Routes>
            <Route element={<Login />} path={"/"} />
            <Route element={<Lista />} path={"/movies"} />
            <Route element={<MovieDetail />} path={"/movie"} />
            <Route element={<Favs />} path={"/favourites"} />
            <Route element={<Search />} path={'/search'} />
          </Routes>
        </FavContext>
      </LoginContext>
    </>
  );
}

export default App;
