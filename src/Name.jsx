import React from 'react';

function Name({stuName, setStuName, nameError, setnameError}) {
 

  function handleName(e) {
    const name = e.target.value;
    setStuName(name);
    
    const words = name.trim().split(" ");
    for (let i = 0; i < words.length; i++) {
      if (!isLetter(words[i]) || !words[i]) {
        setStuName(name)
        setnameError(true);
        return;
      }
    }
    setnameError(false); 
    
   
  }

  function isLetter(char) {
    const c = char.charCodeAt(0);
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
  }

  return (
    <div>
      <form className="max-w-sm mx-auto mb-4">
        <label htmlFor="studentName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student's Name</label>
        <input
          type="text"
          value={stuName}
          id="studentName"
          className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter the name"
          onChange={handleName} 
        />
        {nameError && <p className="text-red-500 text-sm">Enter a valid name</p>} 
      </form>
    </div>
  );
}

export default Name;
