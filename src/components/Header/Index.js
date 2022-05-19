import { useState } from "react";

import { Link } from "react-router-dom";

import { useLoginContext } from "../../contexts/LoginContext";

import MoviesSearcher from "../MoviesSearcher/Index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

export default function Header() {
  const { isLoged, logOut } = useLoginContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky-top p-2 bg-dark d-flex justify-content-between align-items-center">
      <div className="d-flex w-100">
        <button className="btn menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <img alt="Boton para abrir menú" src="https://w7.pngwing.com/pngs/451/380/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button.png" />
          ) : (
            <img alt="Boton para cerrar menú" src="https://e7.pngegg.com/pngimages/844/786/png-clipart-maine-computer-icons-close-icon-logo-law.png" />
          )}
        </button>
        <Link className="navbar-brand" to={"/movies"}>
          <span className=" text-white">DataFilms</span>
        </Link>
        {isLoged && (
          <nav className={`nav-mobile ${!isOpen ? "" : "nav-mobile--open"}`}>
            <ul className="d-flex mb-0">
              <li>
                <Link className="nav-link" to={"/movies"}>
                  Peliculas
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/favourites"}>
                  Favoritos
                </Link>
              </li>
            </ul>
            <MoviesSearcher />
          </nav>
        )}
      </div>
      {!isLoged ? (
        <Link className="text-white nav-link fw-bold" to={"/"}>
          Log In
        </Link>
      ) : (
        <span
          className="text-white cursor-pointer fw-bold"
          onClick={() => logOut()}
        >
          Log Out
        </span>
      )}
    </header>
  );
}
