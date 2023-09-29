import React from 'react'
import axios from 'axios'

const URL_BASE = "http://localhost:3000/evento/";


export const  getAll = async () => {
  let response;
 await axios
    .get(URL_BASE)
    .then((result) => {
      console.log(result.data);
      response = result.data;
    })
    .catch((error) => {
      console.log(error);
      response = error
    });

  return response

}



export const getById = (id) => {

  axios
    .get(URL_BASE + "getById/" + id)
    .then((result) => {
      console.log(result.data);
      const response = result.data;
      return response
    })
    .catch((error) => {
      console.log(error);
    });


}

 export const InsertEvento = () => {

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

export function UpdateEvento() {

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
 

export function DeleteEvento(id) {

 
  let url = URL_BASE + "delete/" + id
  
 
  
  axios
    .delete(url)
    .then((result) => {
 
     console.log(result)

    })
    .catch((error) => {
      console.log(error);
    });
}

