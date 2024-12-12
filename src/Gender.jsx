import React from 'react'

function Gender({gen, setGen, genError, setGenError}) {
   
   
    function handleGender(e){
        const egen = e.target.value
        setGen(egen)
        
        if(egen=="selectGender")
        {
            setGenError(true)
           
            return 
        }
        setGenError(false)
        
    }
  return (
    <div>
         <form className='max-w-sm mx-auto mb-4'>
                            <div className="col-span-2 sm:col-span-1">
                                <label htmlFor="studentName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={handleGender} value={gen} required>
                                    <option value="selectGender" >Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>

                                </select>
                                {genError && <p className="text-red-500 text-sm">Select your gender</p>}
                            </div>
         </form>
    </div>
  )
}

export default Gender