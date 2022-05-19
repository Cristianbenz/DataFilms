import { useNavigate } from "react-router-dom";
import Swalert from "sweetalert2";

export default function MoviesSearcher() {
  const REDIRECT = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const SEARCH = e.target.search.value.trim();
    if (SEARCH === "") {
      Swalert.fire({
        icon: "error",
        title: "La busqueda no puede estar en blanco",
      });
    } else if (SEARCH.length < 4) {
      Swalert.fire({
        icon: "error",
        title: "Debe ingresar minimo 4 caracteres",
      });
    } else {
      REDIRECT(`/search?query=${SEARCH}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="header-searcher d-flex alig-items-center">
      <label htmlFor="search" className="me-2">
        <input type={"text"} name="search" className="form-control" />
      </label>
      <button className="btn btn-primary">Buscar</button>
    </form>
  );
}
