import StudentModel from '@/models/StudentModel'

interface StudentTableProps {
  studentsData: StudentModel[] | null
}

const StudentTable = ({ studentsData }: StudentTableProps) => {
  return (
    <div className='border border-zinc-300 rounded-md'>
      <table className='border-collapse w-full'>
        <thead className='bg-zinc-100 py-3'>
          <tr className='text-left text-sm text-zinc-700 font-medium'>
            <th className='p-3'>Nombre</th>
            <th className='py-3'>Apellido</th>
            <th className='py-3'>Edad</th>
            <th className='py-3'>Grado</th>
            <th className='py-3'>Nivel</th>
            <th className='py-3'>Saldo</th>
            <th className='py-3'></th>
            <th className='py-3'></th>
            <th className='p-3'></th>
          </tr>
        </thead>
        <tbody>
          {studentsData?.map((student, index) => (
            <tr key={index} className='text-sm'>
              <td className='p-3'>{student.name}</td>
              <td className='py-3'>{student.lastName}</td>
              <td className='py-3'>{student.age} años</td>
              <td className='py-3'>{student.grade}</td>
              <td className='py-3'>{student.level}</td>
              <td className='py-3'>{student.balance} Bs.</td>
              <td className='py-3'></td>
              <td className='py-3'></td>
              <td className='p-3'></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
