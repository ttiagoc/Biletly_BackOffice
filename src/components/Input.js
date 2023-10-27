import React from 'react'
import PropTypes from 'prop-types';


export default function Input({type="text", placeholder,id, setter}) {
  return (
    <>

            <div className="form-group pt-3">
                <input type={type} className="form-control" placeholder={placeholder} id={id} style={{margin:'5px'}} required onChange={(e) => setter(e.target.value)} />
            </div>
    
    </>
  )
}

Input.propTypes = {
  
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.number,
  onChange: PropTypes.func
}