import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import TextInput from '../inputs/TextInput'
import SelectInput from '../inputs/SelectInput'
import NumberInput from '../inputs/NumberInput'
import FloatInput from '../inputs/FloatInput'

import { Grade } from '@/enums/Grade'
import { Level } from '@/enums/Level'

import { useStudentsHook } from '@/hooks /useStudentsHook'
import supabase from '@/utils/supabase'

interface StudentModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  students: ReturnType<typeof useStudentsHook>
}

const StudentModal = ({ isOpen, setIsOpen, students }: StudentModalProps) => {
  function closeModal () {
    setIsOpen(false)
  }

  const handleRegisterClick = async () => {
    students.setIsSubmitted(true)
    if (
      students.name !== '' &&
      students.lastName !== '' &&
      students.balance !== ''
    ) {
      const data = await supabase.from('Students').insert({
        name: students.name,
        lastName: students.lastName,
        level: students.level,
        grade: students.grade,
        age: students.age,
        balance: students.balance
      })
      console.log(data)
    } else {
      console.log('Registro fallido')
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-150'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center mt-20 justify-center  text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-150'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-100'
                leaveFrom='opacity-100 scale-150'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className=' space-y-5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='flex justify-between text-lg font-medium leading-6 text-gray-900'
                  >
                    <p> Registrar alumno</p>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      onClick={closeModal}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 hover:cursor-pointer hover:bg-gray-100 rounded-md'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </Dialog.Title>
                  <div className='w-full space-y-6'>
                    <div className='flex w-full space-x-5'>
                      <TextInput
                        label={'Nombre'}
                        value={students.name}
                        onChange={value => {
                          students.setName(value)
                        }}
                        isSubmitted={students.isSubmitted}
                      />
                      <TextInput
                        label={'Apellidos'}
                        value={students.lastName}
                        onChange={value => {
                          students.setLastName(value)
                        }}
                        isSubmitted={students.isSubmitted}
                      />
                    </div>
                    <div className='flex w-full space-x-5'>
                      <SelectInput label={'Nivel'} options={Level} />
                      <SelectInput label={'Grado'} options={Grade} />
                    </div>
                    <div className='flex w-full space-x-5'>
                      <NumberInput
                        label={'Edad'}
                        value={students.age}
                        onChange={value => {
                          students.setAge(value)
                        }}
                      />
                      <FloatInput
                        label={'Saldo'}
                        value={students.balance}
                        onChange={value => {
                          students.setBalance(value)
                        }}
                        isSubmitted={students.isSubmitted}
                      />
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <button
                      className='transition bg-emerald-500 hover:bg-emerald-700 text-white font-semibold
                  py-2 px-4
                  rounded-md
                  text-sm
                  '
                      onClick={handleRegisterClick}
                    >
                      Registrar Alumno
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default StudentModal
