import React from 'react'
import '../index.css'
import axios from 'axios'

export default function CrearEvento() {

    const URL_BASE = "http://localhost:3000/evento/";



    const InsertEvento = () => {

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


    return (
        <>
            <div className='container-fluid'>
                <form onSubmit={InsertEvento}>
                    <div className='containerInputs'>
                        <input type="text" placeholder='Nombre Evento' className='inputForm' id='nombre' />
                        <input type="date" placeholder='Fecha Evento' className='inputForm' id='fecha'/>
                        <input type="text" placeholder='Descripción Evento' className='inputForm' id='descripcion'/>
                    </div>
                </form>
                <button type='submit' className='boton btn-primary'>Crear</button>
            </div>
        </>
    )
}
