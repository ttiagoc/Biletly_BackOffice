import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EventoService from '../services/EventoService';

export default function Eventos() {

  const [data, setData] = useState([]);
  const svc = new EventoService()

  const CallGetAll = async() =>  {
    const datos = await svc.getAll('evento')
    console.log("en call getall: " + datos)
    setData(datos)
  }

  useEffect(() => {
    console.log("en use effect")
    CallGetAll()

  }, []);


  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((evento, index) => {

            return (
              <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{evento.nombre}</td>
                <td>{evento.fecha}</td>
                <td>{evento.descripcion}</td>
                <button onClick={() => svc.Delete("evento/delete",evento.idEvento)}>Delete</button>

              </tr>

            )

          })}
        </tbody>
      </table>

    </>
  )
}
