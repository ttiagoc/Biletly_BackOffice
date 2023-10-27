import React, {useContext} from "react";
import Input from "../components/Input";
import IniciarSesionService from "../services/IniciarSesionService";
import { TokenContext } from "../context/TokenContext";

export default function IniciarSesion() {

  const { TokenSetter } = useContext(TokenContext);
  const svc = new IniciarSesionService();

  const getToken = async (e) => {
    e.preventDefault();
    const token = await svc.InsertClaves();
    console.log((token));
    TokenSetter(token)
  };

  return (
    <div
      class="contact container"
      style={{
        maxWidth: "400px",
        paddingTop: "70px",
        alignItems: "center",
        height: "500px",
      }}
    >
      <h1 className="text-center">Iniciar Sesión</h1>

      <form onSubmit={(e) => getToken(e)} class="form-contact">
        <Input placeholder={"nombre usuario"} id="name" />
        <Input placeholder={"contraseña"} id="password" />

        <button
          type="submit "
          class="btn btn-secondary boton mt-3"
          style={{
            backgroundColor: "#abf7b1",
            fontSize: 15,
            border: "1px solid black",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
