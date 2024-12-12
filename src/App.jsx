import React, {useState} from 'react'
import PanelLayout from './PanelLayout'

function App() {  
  const [input, setInput] = useState({
    id: "",
    userName: "",
    email: "",
    password: "",
    mobileNumber: ""
  })

  const [data, saveData] = useState({
    id: "",
    userName: "",
    email: "",
    password: "",
    mobileNumber: ""
  })
 
  return (
    <div className='h-full'>
      
       {/* <p className='text-cyan-900 text-5xl font-bold text-center p-10'>REACT FORMS</p> */}
       <PanelLayout data={data} saveData={saveData} input={input} setInput={setInput}/>
    </div>
  )
}

export default App