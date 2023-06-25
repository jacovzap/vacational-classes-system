import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import TextInput from '../inputs/TextInput'
import SelectInput from '../inputs/SelectInput'
import NumberInput from '../inputs/NumberInput'
import FloatInput from '../inputs/FloatInput'
import { Grade } from '@/enums/Grade'
import { Level } from '@/enums/Level'

interface StudentModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const StudentModal = ({ isOpen, setIsOpen }: StudentModalProps) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [level, setLevel] = useState('')
  const [grade, setGrade] = useState('')
  const [age, setAge] = useState('')
  const [balance, setBalance] = useState('')

  function closeModal () {
    setIsOpen(false)
  }

  function openModal () {
    setIsOpen(true)
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
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-5 h-5 hover:cursor-pointer hover:bg-gray-100 rounded-md'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </Dialog.Title>
                  <div className='w-full space-y-4'>
                    <div className='flex w-full space-x-5'>
                      <TextInput
                        label={'Nombre'}
                        value={name}
                        onChange={value => {
                          setName(value)
                        }}
                      />
                      <TextInput
                        label={'Apellidos'}
                        value={lastName}
                        onChange={value => {
                          setLastName(value)
                        }}
                      />
                    </div>
                    <div className='flex w-full space-x-5'>
                      <SelectInput label={'Nivel'} options={Level} />
                      <SelectInput label={'Grado'} options={Grade} />
                    </div>
                    <div className='flex w-full space-x-5'>
                      <NumberInput
                        label={'Edad'}
                        value={age}
                        onChange={value => {
                          setAge(value)
                        }}
                      />
                      <FloatInput
                        label={'Saldo'}
                        value={balance}
                        onChange={value => {
                          setBalance(value)
                        }}
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
