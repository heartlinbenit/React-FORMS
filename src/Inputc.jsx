import React, {useState}  from 'react';
import Name from './Name';
import PhoneNumber from './PhoneNumber';
import Gender from './Gender';
import DOB from './DOB';

function Inputc({ isOpen, setModalOpen, addStudent, students  }) {


    const [stuName, setStuName] = useState('');
    const [nameError, setnameError] = useState(false);
    const [gen, setGen] = useState('')
    const [genError, setGenError] = useState(false);
    const[phoneNumber, setPhoneNumber] = useState('')
    const[phoneError, setPhoneError] = useState(false)
    const[date, setDate] = useState('')
    const[dateError, setDateError] = useState('')
   
    function close(){
        setModalOpen(false)
        setStuName('')
        setGen('')
        setPhoneNumber('')
        setGenError('')
        setPhoneError('')
        setnameError('')
        setDate('')
        setDateError('')
    }
    
   

    function output(){
        const newStudent = {
            studentName: stuName,
            gender: gen,
            phoneNumber: phoneNumber,
            dob : date
          };
          addStudent(newStudent); 
          close();
    }
   
    

    if (!isOpen) return null;
    
    return (

        <div
            id="static-modal"
            data-modal-backdrop="static"
            className="overflow-y-auto overflow-x-hidden fixed  z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add a student</h3>
                        <button
                            onClick={close}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-4">

                       <Name 
                           stuName = {stuName}
                           setStuName = {setStuName}
                           nameError={nameError}
                           setnameError={setnameError}
                          
                       />

                       <Gender 
                          gen = {gen}
                          setGen = {setGen}
                          genError={genError}
                          setGenError={setGenError}
                          students = {students}

                       />

                       <PhoneNumber 
                          phoneNumber = {phoneNumber}
                          setPhoneNumber={setPhoneNumber}
                          phoneError={phoneError}
                          setPhoneError={setPhoneError}
                         
                       />

                       <DOB 
                         date={date}
                         setDate={setDate}
                         dateError={dateError}
                         setDateError={setDateError}
                         
                       />


                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={output}
                                disabled={stuName=='' || phoneNumber =='' || gen=='' || date==''}
                                className="text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg disabled:bg-gray-400 disabled:text-black text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Save
                            </button>
                            <button
                                onClick={close}
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Inputc;
