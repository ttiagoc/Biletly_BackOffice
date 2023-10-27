import React, { useContext, useState } from "react";
import Input from "../components/Input";
import IniciarSesionService from "../services/IniciarSesionService";
import { TokenContext } from "../context/TokenContext";
import { Link, useNavigate } from "react-router-dom";

export default function IniciarSesion() {
  const { createToken } = useContext(TokenContext);
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const svc = new IniciarSesionService();

  const getToken = async (e) => {
    e.preventDefault();
    const returnData = await svc.InsertClaves(user, password);
    if(returnData){
      createToken(returnData.token);
      navigate("/home");
    }else{
      alert('Usuario o contraseña incorrectas')
    }
  };

  return (
    <div
      className="contact container"
      style={{
        maxWidth: "400px",
        paddingTop: "70px",
        alignItems: "center",
        height: "500px",
      }}
    >
      <h1 className="text-center">Iniciar Sesión</h1>

      <form onSubmit={(e) => getToken(e)} className="form-contact">
        <Input placeholder={"nombre usuario"} setter={setUser} />
        <Input placeholder={"contraseña"} setter={setPassword} />

        <button
          type="submit "
          className="btn btn-secondary boton mt-3"
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
