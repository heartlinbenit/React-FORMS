import React from 'react';

function Input({ value, type, name, onChange, max, min }) {
 
  return (
    <div>
      <input 
        type={type} 
        maxLength={max} 
        minLength={min} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 ps-5 p-2.5" 
        onChange={onChange} 
        name={name} 
        value={value}
      />
    
    </div>
  );
}

export default Input;
