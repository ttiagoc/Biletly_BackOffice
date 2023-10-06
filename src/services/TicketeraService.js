import React from 'react'
import axios from 'axios'
import GenericService from './GenericService'


const URL_BASE = "http://localhost:3000/ticketera/";

export default class TicketeraService extends GenericService {


   InsertTicketera = () => {

  let nombre = document.getElementById("nombre").value
  let direccion = document.getElementById("url").value
  
  const params = {

    "nombre": nombre,
    "url": direccion,
  };

  const options = {
    method: 'POST',
    url: URL_BASE + 'insertTicketera',
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

  UpdateTicketera() {

  let id = document.getElementById("idTicketera").value
  let nombre = document.getElementById("nombre").value
  let url = document.getElementById("url").value
 
  let params = {
 
    "id": id,
    "nombre": nombre,
    "fecha": url,
 
  };
 
 
  const options = {
    method: 'PUT',
    url: URL_BASE + 'updateTicketera',
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