import React from 'react'
import Button from './Button';
import { Link } from "react-router-dom";

function Logout({ openLogout, setOpenLogout, form, setInput, openForm}) {
  if (openLogout === false) {
    return null;
  }

  function rform(){
      closeModal()
      openForm(true)
      setInput({
        id: "",
        userName: "",
        email: "",
        password: "",
        mobileNumber: ""
      })
      
  }
 
  function closeModal() {
    setOpenLogout(false); 
  }

  return (
    <div>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        className=" overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-50 "
      >
        <div className=" shadow-2xl shadow-cyan-800 relative flex  max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Logout</h3>
              <button
                onClick={closeModal} 
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="p-2 h-50 w-80 flex flex-col justify-center items-center">
               <img src="./exclamatory.png" alt="" className='h-20 w-20' />
               <p className='text-sm'>Are you sure you want to logout ?</p>
               <div className='flex p-2'>
                  <Link to="/form"></Link><Button button="YES" onClick={rform}/>
                  <Button button="NO" onClick={closeModal}/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
