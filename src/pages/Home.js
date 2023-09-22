import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

export default function Home() {
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

  {
    /*  
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
      <td>{evento.nombre}</td>
      <td>{evento.nombre}</td>
      
    </tr>
    
    )
    
  })}
</tbody>
</table>

</>

*/
  }

  return (
    <main class="site-wrapper">
      <div class="pt-table desktop-768">
        <div class="pt-tablecell page-home relative">
          <div class="overlay"></div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                <div class="page-title  home text-center">
                  <span class="heading-page"> PANEL DE CONTROL BILETLY</span>
                  <p class="mt20">Acceder a todo el backend de Biletly</p>
                </div>

                <div class="hexagon-menu clear">
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-universal-access"></i>
                        </span>
                        <span class="title">Welcome</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-bullseye"></i>
                        </span>
                        <span class="title">About</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-braille"></i>
                        </span>
                        <span class="title">Services</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-id-badge"></i>
                        </span>
                        <span class="title">Resume</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-life-ring"></i>
                        </span>
                        <span class="title">Works</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-clipboard"></i>
                        </span>
                        <span class="title">Testimonials</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="hexagon-item">
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="hex-item">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <a class="hex-content">
                      <span class="hex-content-inner">
                        <span class="icon">
                          <i class="fa fa-map-signs"></i>
                        </span>
                        <span class="title">Contact</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
