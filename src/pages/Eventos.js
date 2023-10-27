import React, { useEffect, useState, useContext } from "react";
import EventoService from "../services/EventoService";
import Modal from "react-modal";
import TicketeraService from "../services/TicketeraService";
import QRCode from "react-qr-code";
import {TokenContext} from '../context/TokenContext'

export default function Eventos() {
  const [data, setData] = useState([]);
  const [data2, setDataTicketeras] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [qrModal, setQrModal] = useState(false);
  const [eventSelected, setEventSelected] = useState();
  const {token} = useContext(TokenContext);

  const [id, setId] = useState()

  const svc = new EventoService();
  const svc2 = new TicketeraService();

  function showQrEvent(index) {
    setEventSelected(index);
    setQrModal(true);
  }

  function closeQrModal() {
    setQrModal(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "450px",
      width: "400px",
    },
  };

  const CallGetAll = async () => {
    const datos = await svc.getAll("evento");

    setData(datos);
    const datosTicketeras = await svc2.getAll("ticketera");
    setDataTicketeras(datosTicketeras);
  };

  const HandleForm = (idF) => {
    let id1 = document.getElementById('formUpdate')
    id1.style.display = 'block'
    setId(idF)
  }

  const HandleUpdate = async(e) => {
    e.preventDefault()
    await svc.UpdateEvento(token, id)
    let id1 = document.getElementById('formUpdate')
    id1.style.display = 'none'
    alert("SE HA ACTUALIZADO EL EVENTO DE ID: " + id)
  }

  const createEvent = async (e) => {
    try{
      e.preventDefault();
      console.log('token:', token)
      await svc.InsertEvento(token);
      alert('Evento creado')
    }catch(error){
      alert('No se pudo crear el evento')
    }
  }

  useEffect(() => {
    CallGetAll();
  }, []);

  return (
    <>
      <div className="container">
        <button onClick={openModal} className="btn btn-info">
          New Event
        </button>
        <div style={{ height: 25 }}></div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" key={1}>
                #
              </th>
              <th scope="col" key={2}>
                Nombre
              </th>
              <th scope="col" key={3}>
                Fecha
              </th>
              <th scope="col" key={4}>
                Descripcion
              </th>
              <th scope="col" key={5}>
                Funciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((evento, index) => {
              return (
                <>
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{evento.nombre}</td>
                    <td>{evento.fecha}</td>
                    <td>{evento.descripcion}</td>

                    <td>
                      {" "}
                      
                      <button
                        onClick={() => HandleForm(evento.idEvento) && console.log(evento.id)}
                        className="btn"
                        style={{
                          color: "#8D8685",
                          borderRadius: 5,
                          margin: 10,
                          boxShadow: "-3px 10px 38px 0px rgba(0,0,0,0.2)",
                          WebkitBoxShadow: "-3px 10px 38px 0px rgba(0,0,0,0.2)",
                        }}
                      >
                        Update
                      </button>
                      <button
                        id="reload"
                        onClick={() =>
                          svc.Delete("evento/delete", evento.idEvento, token)
                        }
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "blue",
                          fontWeight: "bold",
                          margin: 5,
                        }}
                        onClick={() => showQrEvent(index)}
                      >
                        View Qr
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="container-fluid">
            <h3 className="text-center">Create Event</h3>
            <div style={{ height: 15 }}></div>
            <form onSubmit={(e) => createEvent(e)}>
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="event name"
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="descripcion"
                  placeholder="event description"
                  style={{
                    minWidth: "330px",
                    maxWidth: "330px",
                    minHeight: "60px",
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label for="">Ticketera:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ marginLeft: 10 }}
                >
                  <option selected>Ver ticketeras</option>
                  {data2.map((ticketera) => {
                    return (
                      <option value={ticketera.idTicketera} id="ticketera">
                        {ticketera.nombre}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={qrModal}
          onRequestClose={closeQrModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {JSON.stringify(data[eventSelected]) ? (
            <div className="container-fluid">
              <h3 className="text-center">
                Qr from: {JSON.stringify(data[eventSelected].nombre)}
              </h3>

              <QRCode
                title={JSON.stringify(data[eventSelected].nombre)}
                value={JSON.stringify(data[eventSelected])}
                style={{
                  display: "block",
                  margin: "auto",
                  marginTop: 40,
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </Modal>
      </div>

      <div className="container" style={{width:'350px' , height:'auto', borderRadius:8 , display:"none"}} id="formUpdate">
        <form onSubmit={(e) => HandleUpdate(e)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="nombreUPD"
              placeholder="event name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="descripcionUPD"
              placeholder="event description"
              style={{
                minWidth: "330px",
                maxWidth: "330px",
                minHeight: "60px",
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Date</label>
            <input
              type='date'
              id="dateUPD"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
