import React from 'react'

function Label({label}) {
  return (
    <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>{label} *</label>
    </div>
  )
}

export default Label