import React from 'react'
import Home from './Home'
import Inputc from './Inputc'
import { useState } from 'react';

function Ccontent() {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEOpen, setModalEOpen] = useState(false);

  
  function openModal() {
      setModalOpen(true);
  }
  
  function editModalOpen(){
    setModalEOpen(true)
  }

  function addStudent(student) {
    setStudents((c) => [...c, student]);
  }


  return (
    <div>
      <Inputc
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        addStudent={addStudent} 
        students = {students}
      />
      <Home 
        setStudents = {setStudents}
        students={students}
        openModal = {openModal}
        addStudent = {addStudent}
        modalEOpen = {modalEOpen}
        editModalOpen = {editModalOpen}
      />
    </div>
  )
}

export default Ccontent