import React, { useState } from "react";
import Button from "./Button";
import Logout from './Logout'

function Navbar({form, openForm, data, saveData, input, setInput}) {
  const [openLogout, setOpenLogout] = useState(false);

  function logoutClick() {
    setOpenLogout(!openLogout);
  }
  const name = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  console.log(name)
  return (
    <div>
      <nav className="block w-full border-b-2 h-30 mx-auto text-white bg-white rounded-md ">
        <div className="w-full flex items-center justify-between mx-auto text-slate-800">
          <div className="p-4 mb-2">
            <h5 className="block font-sans text-5xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Hi!
            </h5>
          </div>
          <div className="flex justify-end items-center gap-5">
            <img className="rounded-full w-20 h-20" src="./avatar.jpg" alt="avatar" />
            <div className="flex flex-col">
               <p className="text-xl font-bold text-black">{name}</p>
               <p className="text-sm text-black">{email}</p>
            </div>
            <button onClick={logoutClick}>
              <img className="h-10 w-10" src="./logout.png" alt="" />
            </button>
          </div>
        </div>
      </nav>

      {openLogout && <Logout input={input} form={form} openForm={openForm} openLogout={openLogout} setOpenLogout={setOpenLogout} />}
    </div>
  );
}

export default Navbar;
