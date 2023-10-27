import React from "react";
import axios from "axios";

const URL_BASE = "https://api-biletly.onrender.com/admin/login";

export default class IniciarSesionService {
  InsertClaves = async (nombre, pass) => {
    console.log("en InsertarClaves front:"+ nombre + pass);

    //let id = document.getElementById("id").value

    const params = {
      usuario: nombre,
      contrasena: pass,
    };

    const options = {
      method: "POST",
      url: URL_BASE,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: params,
    };

    let returnData;

    await axios
      .request(options)
      .then((result) => {
        console.log(params);
        console.log("lo que recibo:" + JSON.stringify(result.data));
        returnData = result.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return returnData;
  };
}
