import React from 'react'

function PhoneNumber({phoneNumber, setPhoneNumber, phoneError, setPhoneError}) {


    function handleNumber(e){
        const enumber = e.target.value
        setPhoneNumber(enumber)
        for (let i = 0; i < enumber.length; i++) {
        if(((enumber.length > 10))|| !isNumber(enumber[i])){
            setPhoneNumber(phoneNumber)
            return
        }
        if(enumber.length < 10){
            return setPhoneError(true)
        }
       }
       setPhoneError(false); 
     
      
    }

    function isNumber(a){
        return (a >= 0 && a <= 9)
    }
  return (
    <div>
        <form className='max-w-sm mx-auto mb-4'>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input value={phoneNumber} type="tel"  name="floating_phone" id="floating_phone" className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required 
                                onChange={handleNumber}/>
                                {phoneError && <p className="text-red-500 text-sm">Enter a valid number</p>}
                            </div>
                           
        </form>

    </div>
  )
}

export default PhoneNumber