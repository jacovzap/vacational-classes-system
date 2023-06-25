'use client'
import StudentModal from "@/components/modals/StudentModal"
import { useState } from "react"

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className='w-full p-4 px-24 space-y-10'>
      <h1 className="text-3xl font-bold">Alumnos</h1>
      <div className='items-end flex justify-between'>
        <p>Lista de alumnos</p>
        <button 
        onClick={() => setIsModalOpen(true)}
        className='bg-emerald-500 p-2 px-6 font-semibold text-sm rounded-md hover:bg-emerald-600 text-white'>
          Registrar alumno
        </button>
      </div>
      <StudentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
      <div></div>
    </section>
  )
}

export default StudentsPage
