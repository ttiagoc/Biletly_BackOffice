import React from 'react'
import axios from 'axios'
import GenericService from './GenericService'


const URL_BASE = "http://localhost:3000/ticketera/";

export default class TicketeraService extends GenericService {


   InsertTicketera = () => {

  console.log("en InsertarEvento front")

  let nombre = document.getElementById("nombre").value
  let fecha = document.getElementById("fecha").value
  let descripcion = document.getElementById("descripcion").value

  const params = {

    "nombre": nombre,
    "fecha": fecha,
    "descripcion": descripcion

  };

  const options = {
    method: 'POST',
    url: URL_BASE + 'insertEvento',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    },
    data: params
  };

  axios
    .request(options)
    .then((result) => {
      console.log(params)
      console.log(result.data)

    })
    .catch((error) => {
      console.log(error);
    });


}

  UpdatTicketera() {

  let id = document.getElementById("idUpd").value
  let nombre = document.getElementById("nombre").value
  let fecha = document.getElementById("fecha").value
  let descripcion = document.getElementById("descripcion").value
 
  let params = {
 
    "id": id,
    "nombre": nombre,
    "fecha": fecha,
    "descripcion": descripcion
 
  };
 
 
  const options = {
    method: 'PUT',
    url: URL_BASE + 'updateEvento',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    },
    data: params
  };
 
  axios
    .request(options)
    .then((result) => {
      console.log(params)
      console.log(result.data)
      
    })
    .catch((error) => {
      console.log(error);
    });
 
}
 

 
}