
import axios from "axios";
import GenericService from "./GenericService";

const URL_BASE = "https://api-biletly.onrender.com/evento/";

export default class EventoService extends GenericService {
  
  InsertEvento = (token) => {
    console.log("en InsertarEvento front");
    console.log(token)

    //let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let descripcion = document.getElementById("descripcion").value;
    //let ticketera = document.getElementById("ticketera").value
    const params = {
      nombre: nombre,
      fecha: fecha,
      descripcion: descripcion,
    };

    const options = {
      method: "POST",
      url: URL_BASE + "insertEvento",
      headers: {
        "token": token,
        "content-type": "application/json",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: params,
    };

    const insertar = async () => {
      await axios
        .request(options)
        .then((result) => {
          console.log(params);
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    insertar();
  };

  UpdateEvento(token, id) {
    console.log("id: " + id);
    let nombre = document.getElementById("nombreUPD").value;
    let fecha = document.getElementById("dateUPD").value;
    let descripcion = document.getElementById("descripcionUPD").value;

    let params = {
      idEvento: id,
      nombre: nombre,
      fecha: fecha,
      descripcion: descripcion,
    };

    const options = {
      method: "PUT",
      url: URL_BASE + "updateEvento",
      headers: {
        "token":token,
        "content-type": "application/json",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: params,
    };

    const update = async () => {
      await axios
        .request(options)
        .then((result) => {
          console.log(params);
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    update();
  }
}
