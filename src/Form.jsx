import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Label from './Label'
import PasswordInput from './PasswordInput'

function Form({ form, openForm, data, saveData, input, setInput }) {

  const [headError, setHeadError] = useState(false)
  const [uerror, setUerror] = useState(false)
  const [eerror, setEerror] = useState(false)
  const [perror, setPerror] = useState(false)
  const [merror, setMerror] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if ((uerror === false && eerror === false && perror === false && merror === false) && (input.userName.length !== 0 && input.email.length !== 0
      && input.password.length !== 0 && input.mobileNumber.length !== 0)) {
      // console.log(input)
      saveData({...input})
     
      localStorage.setItem('name', input.userName)
      localStorage.setItem('email', input.email)
      setInput({
        id: Date.now(),
        userName: "",
        email: "",
        password: "",
        mobileNumber: ""
      })
      openForm(false)
      
     }
     
    else{
      if(input.userName.length == 0 || input.email.length == 0
        || input.password.length == 0 || input.mobileNumber.length == 0){
          setHeadError(true)
        }
        else{
          setHeadError(false)
        }
    }
    
  }
  console.log(data)

  function handleChange(e) {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }


  function userNamehandle(e) {
    const name = e.target.value
    const regexp = /^[a-zA-Z. ]{1,20}$/
    let a = (regexp.test(name))
    if (!a) {
      setUerror(true)
    } else {
      setUerror(false)
      setHeadError(false)
    }
  }

  function emailhandle(e) {
    const name = e.target.value
    const regexp = /^[a-zA-Z0-9_.-]+@[a-z]+\.[a-z]{2,3}$/
    let a = (regexp.test(name))
    if (!a) {
      setEerror(true)
    } else {
      setEerror(false)
      setHeadError(false)
    }
  }

  function passwordhandle(e) {
    const name = e.target.value
    const regexp = /^[a-zA-Z0-9]{8,12}$/
    let a = (regexp.test(name))
    if (!a) {
      setPerror(true)
    } else {
      setPerror(false)
      setHeadError(false)
    }
  }

  function mobilehandle(e) {
    const name = e.target.value;
    if (name.length > 10) {
      setInput({ mobileNumber: name });
    }
    const regexp = /^[0-9]{10}$/;
    let isValid = regexp.test(name);
    if (!isValid) {
      setMerror(true);
    } else {
      setMerror(false);
      setHeadError(false)
    }
  }

  return (
    <div>
      {headError && (<div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"><svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg> <span class="sr-only">Info</span>
  Kindly fill the form to submit!
      </div>)}
      {form && (
        <div className='min-h-screen flex justify-center items-center'>
          <div className='flex justify-center flex-col max-w-sm mx-auto p-6 border border-gray-200 rounded-lg shadow-2xl shadow-cyan-800 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 bg-gray-100'>
            <p className='text-3xl color-slate-600 font-bold text-center'>Register Now</p>
            <form action="submit" className='flex flex-col gap-1' onSubmit={handleSubmit} noValidate>
             
              <Label label="Name" />
              <Input type="text" name='userName' min={1} max={20} value={input.userName} onChange={(e) => { handleChange(e), userNamehandle(e) }} />
              {uerror && <p className='text-red-600'>Enter a valid name</p>}
              <Label label="Email Address" />
              <Input type="text" name='email' value={input.email} onChange={(e) => { handleChange(e), emailhandle(e) }} />
              {eerror && <p className='text-red-600'>Enter a valid email ID</p>}
              <Label label="Password" />
              <PasswordInput type="text" name='password' value={input.password} min="8" max="12" onChange={(e) => { handleChange(e), passwordhandle(e) }} />
              {perror && <p className='text-red-600'>Password must contain 8-12 characters any of [A-Z, 0-9 a-z]</p>}
              <Label label="Mobile Number" />
              <Input name='mobileNumber' max="10" value={input.mobileNumber} onChange={(e) => { handleChange(e), mobilehandle(e) }} />
              {merror && <p className='text-red-600'>Mobile number should be of 10 digit numbers </p>}
              <div className='h-20 items-center flex justify-center'>
                <Button type="submit" button="Submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form


