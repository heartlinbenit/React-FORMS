import React, { useState } from 'react';


function Home({ openModal, students, setStudents, modalEOpen, editModalOpen}) {

    function handleColor(x){
         if(x == 'male')
            return {backgroundColor : 'cyan'}
        else if(x == 'female')
            return {backgroundColor : 'pink'}
       
    }
  
  

  return (
    <div>

      <div className='h-full m-10 flex-wrap flex justify-between'>
        <p className='text-black text-2xl'>STUDENT DATA</p>
        <button
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm p-3 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
          onClick={openModal}
        >
          Add +
        </button>
      </div>

      <div className='flex justify-evenly'>
        <table className=" min-80 border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 px-10 py-2 text-left">S.No</th>
              <th className="border border-slate-300 px-10 py-2 text-left">NAME</th>
              <th className="border border-slate-300 px-10 py-2 text-left">GENDER</th>
              <th className="border border-slate-300 px-10 py-2 text-left">PHONE NUMBER</th>
              <th className="border border-slate-300 px-10 py-2 text-left">DATE OF BIRTH</th>
              <th className="border border-slate-300 px-10 py-2 text-left">EDIT</th>
              <th className="border border-slate-300 px-10 py-2 text-left">DELETE</th>
             
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} style={handleColor(student.gender)}>
                <td className="border border-slate-300 px-10 py-2">{index +1}</td>
                <td className="border border-slate-300 px-10 py-2">{student.studentName}</td>
                <td className="border border-slate-300 px-10 py-2">{student.gender}</td>
                <td className="border border-slate-300 px-10 py-2">{student.phoneNumber}</td>
                <td className="border border-slate-300 px-10 py-2">{student.dob}</td>
                <td className="border border-slate-300 px-10 py-2">
                  <button  className="text-white-400 bg-transparent rounded-lg text-sm w-12 h-8 ms-auto 
                inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                
                >EDIT</button>
                </td>
                <td className="border border-slate-300 px-10 py-2">
                <button className="text-white-400 bg-transparent rounded-lg text-sm w-12 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setStudents(students.filter((a, i) => i !== index))}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
