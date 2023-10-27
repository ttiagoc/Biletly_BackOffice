import React from 'react'
import PropTypes from 'prop-types';


export default function Input({type="text", placeholder,id,onChange}) {
  return (
    <>

            <div class="form-group pt-3">
                <input type={type} class="form-control" placeholder={placeholder} id={id} style={{margin:'5px'}} />
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