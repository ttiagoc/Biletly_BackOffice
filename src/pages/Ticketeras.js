import React, { useEffect, useState } from "react";
import TicketeraService from "../services/TicketeraService";
import Modal from "react-modal";

export default function Ticketeras() {
  const [data, setData] = useState([]);
  const svc = new TicketeraService();
 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(true);

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
      height:'400px',
      width:'400px'
    },
  };

  
  const CallGetAll = async () => {
    const datos = await svc.getAll("ticketera");
    console.log("en call getall: " + datos);
    setData(datos);
  };

  useEffect(() => {
    console.log("en use effect");
    CallGetAll();
  }, []);

  return (
    <>
      <div className="container">
      <button onClick={openModal} className="btn btn-info" >New Ticket Holder</button>
      <div style={{height:25}}></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Url</th>
              <th scope="col">Funciones</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((ticketera, index) => {
              return (
                <>
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{ticketera.nombre}</td>
                  <td>{ticketera.direccion}</td>
                 
                <td>  <button
                    
                    className="btn"
                    style={{color:"#8D8685", borderRadius:5, margin: 5, boxShadow: "-3px 10px 38px 0px rgba(0,0,0,0.2)", WebkitBoxShadow: "-3px 10px 38px 0px rgba(0,0,0,0.2)"}}
                    
                  >
                    Update
                  </button>
                  <button
                    onClick={() => svc.Delete("ticketera/delete", ticketera.idTicketera)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button></td>
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
            <h3 className="text-center">Create Ticket Holder</h3>
            <div style={{height:15}}></div>
            <form onSubmit={() => svc.InsertTicketera()}>
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
                <label for="exampleInputEmail1">Url</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="url"
                  placeholder="event description"
                  style={{minWidth:'330px', maxWidth:'330px', minHeight:'60px'}}
                />
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
