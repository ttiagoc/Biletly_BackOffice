import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function Eventos() {

  const [data, setData] = useState([]);


  useEffect(() => {


    axios
      .get("http://localhost:3000/evento/")
      .then((result) => {
        console.log(result.data);
        const response = result.data;
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
