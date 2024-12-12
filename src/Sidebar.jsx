import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Bcontent from './Bcontent';
import Acontent from './Acontent';
import Ccontent from './Ccontent';
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='flex'>

      <div
        className="relative h-screen border-r-2 flex w-20 sm:w-40 flex-col bg-white text-gray-700 ">

        <nav className=" flex w-40 flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <Link to="/"><div role="button"
            className="flex items-center text-2xl w-full p-3   transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            A
          </div></Link>

          <Link to="/B"><div role="button"
            className="flex items-center text-2xl w-full p-3  transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            B
          </div></Link>

          <Link to="/C"><div role="button"
            className="flex items-center text-2xl w-full p-3 transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            C
          </div></Link>

        </nav>
      </div>

      <div className='flex w-full h-80 justify-center items-center'>
        <Routes>
          <Route index element={<Acontent />} />
          <Route path="/B" element={<Bcontent />} />
          <Route path="/C" element={<Ccontent />} />
        </Routes>

      </div>
    </div>
  )
}



export default Sidebar