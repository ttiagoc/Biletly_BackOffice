import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {getAll, getById, InsertEvento, UpdatePizza, DeletePizza} from '../services/EventoService';

export default function Eventos() {

  const [data, setData] = useState([]);


  useEffect(() => {

  const data = getAll()
   setData(data)

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
        
        return(
            <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{evento.nombre}</td>
          <td>{evento.fecha}</td>
          <td>{evento.descripcion}</td>
          
        </tr>
        
        )
        
      })}
    </tbody>
    </table>
    
    </>
  )
}
