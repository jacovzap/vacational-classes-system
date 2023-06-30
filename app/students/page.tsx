'use client'
import StudentModal from '@/components/modals/StudentModal'
import { useEffect, useState } from 'react'
import { useStudentsHook } from '@/hooks /useStudentsHook'
import supabase from '@/utils/supabase'
import StudentModel from '@/models/StudentModel'
import StudentTable from '@/components/tables/StudentTable'

const StudentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [studentsList, setStudentsList] = useState<StudentModel[] | null>([])
  const students = useStudentsHook()

  function openModal () {
    students.setName('')
    students.setLastName('')
    students.setLevel('')
    students.setGrade('')
    students.setAge('')
    students.setBalance('')
    students.setIsSubmitted(false)
    setIsModalOpen(true)
  }

  const fetchStudents = async () => {
    const data = await supabase.from('Students').select('*')
    console.log(data.data)
    setStudentsList(data.data)
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <section className='w-full p-4 px-24 space-y-10'>
      <h1 className='text-3xl font-bold'>Alumnos</h1>

      <div className='space-y-5'>
        <div className='items-end flex justify-between'>
          <p>Lista de alumnos</p>
          <button
            onClick={openModal}
            className='bg-emerald-500 p-2 px-6 font-semibold text-sm rounded-md hover:bg-emerald-600 text-white'
          >
            Registrar alumno
          </button>
        </div>
        <StudentTable studentsData={studentsList} />
      </div>
      <StudentModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        students={students}
      />
    </section>
  )
}

export default StudentsPage
