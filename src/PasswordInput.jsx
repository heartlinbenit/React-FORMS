import React, {useState} from 'react'

function PasswordInput({ value, name, onChange, max, min}) {
    const [show, setShow] = useState(false);
  
    function showPassword() {
      setShow(!show);
    }
  
    return (
      <div className="flex justify-between  rounded-lg  bg-gray-50 border border-gray-300  p-1 w-80" >
        <input 
          type={show ? "text" : "password"} 
          className=' w-80  p-1 focus : outline-none rounded-lg bg-gray-50 '
          maxLength={max} 
          minLength={min} 
          onChange={onChange} 
          name={name} 
          value={value}
        />
        <button type='button' onClick={showPassword}><img className="h-4 w-4" src={show? "./view.png" : "./hide.png"} alt="" /></button>
      </div>
    );
  }


export default PasswordInput