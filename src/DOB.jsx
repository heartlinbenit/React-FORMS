import React from 'react'

function DOB({ date, setDate, dateError, setDateError }) {
  function handleDate(e) {
    const edate = e.target.value
    setDate(edate)
    if (edate == null) {
      setDateError("Enter the Date of Birth")
    }
    else {
      setDateError("")
    }
  }

  return (
    <div>

      <form className="max-w-sm mx-auto mb-4">

      <div class="relative max-w-sm">
          <label htmlFor="">Date of Birth</label>
          <input type="date" value={date} onChange={handleDate} className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
          
      </div>

        {dateError && <p className="text-red-500 text-sm">Enter a valid dob</p>}
      </form>
    </div>
  )
}

export default DOB