import React, { useEffect, useState } from "react";
import EventoService from "../services/EventoService";
import Modal from "react-modal";
import TicketeraService from "../services/TicketeraService";

export default function Eventos() {
  const [data, setData] = useState([]);
  const [data2, setDataTicketeras] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(true);

  const svc = new EventoService();
  const svc2 = new TicketeraService()


  function openModal() {
    setIsOpen(true);
  }

  function openModalUpdate() {
    setIsOpen2(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModal2() {
    setIsOpen2(false);
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

  const modalUpdate = (id, nombre, descripcion, fecha) => {
    console.log("jolas");
    return (
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container-fluid">
          <h3 className="text-center">Update Event</h3>
          <div style={{ height: 15 }}></div>
          <form onSubmit={() => svc.UpdateEvento(id)}>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="event name"
                value={nombre}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <textarea
                type="text"
                class="form-control"
                id="descripcion"
                placeholder="event description"
                style={{
                  minWidth: "330px",
                  maxWidth: "330px",
                  minHeight: "60px",
                }}
                value={descripcion}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Date</label>
              <input
                type="date"
                class="form-control"
                id="fecha"
                placeholder="Password"
                value={fecha}
              />
            </div>

            
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    );
  };

  const CallGetAll = async () => {
    const datos = await svc.getAll("evento");
    console.log("en call getall: " + datos);
    setData(datos);
    const datosTicketeras = await svc2.getAll("ticketera")
    setDataTicketeras(datosTicketeras)
  };

  useEffect(() => {
    console.log("en use effect");
    CallGetAll();
  }, []);

  return (
    <>
      <div className="container">
        <button onClick={openModal} className="btn btn-info">
          New Event
        </button>
        <div style={{ height: 25 }}></div>
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
                <>
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{evento.nombre}</td>
                    <td>{evento.fecha}</td>
                    <td>{evento.descripcion}</td>
                    <button
                      onClick={() =>
                        modalUpdate(
                          evento.id,
                          evento.nombre,
                          evento.descripcion,
                          evento.fecha
                        )
                      }
                      className="btn"
                      style={{
                        color: "#8D8685",
                        borderRadius: 5,
                        margin: 5,
                        boxShadow: "-3px 10px 38px 0px rgba(0,0,0,0.2)",
                        WebkitBoxShadow: "-3px 10px 38px 0px rgba(0,0,0,0.2)",
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() =>
                        svc.Delete("evento/delete", evento.idEvento)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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
            <form onSubmit={() => svc.InsertEvento()}>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  placeholder="event name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="descripcion"
                  placeholder="event description"
                  style={{
                    minWidth: "330px",
                    maxWidth: "330px",
                    minHeight: "60px",
                  }}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="fecha"
                  placeholder="Password"
                />
              </div>
                  
              <div className="form-group">
              <label for="">Ticketera:</label>
              <select class="form-select" aria-label="Default select example" style={{marginLeft:10}}>
                <option selected>Ver ticketeras</option>
                {data2.map((ticketera,index) => {
                  return (
                   
                       <option value={index}>{ticketera.nombre}</option>

                   
                  )
                })
                }
              </select>
            </div>


              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
}
