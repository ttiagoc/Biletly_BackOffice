import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Home() {


  return (
    <div className="container">
    <div className="row">
        <div className="col-xl-12 mb-3 mb-lg-5">
            <div className="card">
                <div className="d-flex card-header justify-content-between">
                    <h1 className="mb-3 text-center">PANEL DE CONTROL BILETLY</h1>
                    
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                      
                        <li className="list-group-item pt-0">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  
                                </div>
                                <div className="flex-grow-1">
                                <Link to={"/eventos"}> <h4 className="mb-0">Eventos</h4> </Link>
                                    
                                </div>
                            </div>
                        </li>
                       
                      
                        <li className="list-group-item pt-0">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  
                                </div>
                                <div className="flex-grow-1">
                                <Link to={"/ticketeras"}> <h4 className="mb-0">Ticketeras</h4> </Link>
                                    
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
