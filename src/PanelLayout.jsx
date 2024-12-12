import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Form from './Form'


function PanelLayout({input, data, saveData, setInput}) {
  const [form, openForm] = useState(true)
  return (
    <div className='h-80'>
        <Form form={form} data={data} saveData={saveData} input={input} setInput={setInput} openForm={openForm}/>
        {!form && (<Navbar data={data} saveData={saveData} input={input} setInput={setInput} form={form} openForm={openForm}/>)}
        {!form && <Sidebar input={input} setInput={setInput}/>}
        
    </div>
  )
}

export default PanelLayout