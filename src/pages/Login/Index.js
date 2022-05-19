import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useLoginContext } from "../../contexts/LoginContext";

import './login.css'

export default function Login() {
  const { isLoged, logIn } = useLoginContext();
  const SWALERT = withReactContent(Swal);

  const handleSubmit = (e) => {
    e.preventDefault();
    const EMAIL_VALUE = e.target.email.value;
    const PASSWORD_VALUE = e.target.password.value;
    const REGEX_EMAIL =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
    if (EMAIL_VALUE === "" || PASSWORD_VALUE === "") {
      SWALERT.fire({
        icon: "error",
        title: "Completar todos los campos",
      });
      return;
    } else if (!REGEX_EMAIL.test(EMAIL_VALUE)) {
      SWALERT.fire({
        icon: "error",
        title: "Debe colocar un mail valido",
      });
      return;
    } else if (
      EMAIL_VALUE !== "prueba@gmail.com" ||
      PASSWORD_VALUE !== "contraseña"
    ) {
      SWALERT.fire({
        icon: "error",
        title: "Credenciales no validas",
      });
      return;
    } else {
      logIn();
      SWALERT.fire({
        icon: "success",
        title: "¡Ha ingresado con exito!",
      });
    }
  };

  return (
    <section className="loginContainer-size loginContainer-position loginContainer-layout">
      {isLoged && <Navigate to={"/movies"} />}
      <h2 className="login--h1">Login</h2>
      <form className="form-layout" onSubmit={handleSubmit}>
        <label className="form--label-layout form--label-text">
          Email:
          <input
          className="form-control"
            type={"text"}
            placeholder={"Usar prueba@gmail.com"}
            name="email"
          />
        </label>
        <label className="form--label-layout form--label-text">
          Password:
          <input
          className="form-control"
            type={"password"}
            placeholder={"Usar contraseña"}
            name="password"
          />
        </label>
        <button className="form--btn">Log in</button>
      </form>
    </section>
  );
}
