import React, {useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Home() {


  return (
    <div class="container">
    <div class="row">
        <div class="col-xl-12 mb-3 mb-lg-5">
            <div class="card">
                <div class="d-flex card-header justify-content-between">
                    <h1 class="mb-3 text-center">PANEL DE CONTROL BILETLY</h1>
                    
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                      
                        <li class="list-group-item pt-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 me-3">
                                  
                                </div>
                                <div class="flex-grow-1">
                                <Link to={"/eventos"}> <h4 class="mb-0">Ver eventos</h4> </Link>
                                    
                                </div>
                            </div>
                        </li>
                       
                      
                        <li class="list-group-item pt-0">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 me-3">
                                  
                                </div>
                                <div class="flex-grow-1">
                                <Link to={"/nuevoEvento"}> <h4 class="mb-0">Nuevo evento</h4> </Link>
                                    
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
