import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../index.css';


const Navbar = () => {



  return (

    <>
      <nav class="navbar navbar-static-top navbar-inverse bg-inverse" >
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbarSupportedContent">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/" className='navbar-brand'>Home</Link>
          </div>
          <div class="collapse navbar-collapse navbarSupportedContent">
           
              
          </div>
        </div>
      </nav>




    </>
  )
}

export default Navbar;