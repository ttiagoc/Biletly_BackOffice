import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../index.css';


const Navbar = () => {



  return (

    <>
      <nav className="navbar navbar-static-top navbar-inverse bg-inverse" >
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbarSupportedContent">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className='navbar-brand'>Home</Link>
          </div>
          <div className="collapse navbar-collapse navbarSupportedContent">
           
              
          </div>
        </div>
      </nav>




    </>
  )
}

export default Navbar;