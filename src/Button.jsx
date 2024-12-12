import React from 'react'

function Button({button, type, onClick}) {
  return (
    <div>
        <button type={type} onClick={onClick} className='text-white bg-cyan-900 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>{button}</button>
    </div>
  )
}

export default Button