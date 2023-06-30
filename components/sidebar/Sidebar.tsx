'use client'

import { FcReading, FcDataSheet, FcMoneyTransfer } from 'react-icons/fc'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = {
  classes: {
    label: 'Clases',
    path: '/classes'
  },
  students: {
    label: 'Alumnos',
    path: '/students'
  },
  charges: {
    label: 'Cobros',
    path: '/charges'
  }
}

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className=' w-60 border border-r-zinc-200 h-full bg-zinc-100'>
      <div className='border border-b-zinc-200 h-12 border-x-0 border-t-0'>
        GLADYS
      </div>
      <div className='border border-b-zinc-200 border-x-0 border-t-0 flex flex-col p-4 space-y-3'>
        <Link href={routes.classes.path}>
          <button
            className={`${
              routes.classes.path === pathname ? 'bg-zinc-200 rounded-md  border border-zinc-300' : ' border border-transparent'
            } w-full flex hover:bg-zinc-200  hover:rounded-md h-10 items-center pl-3 space-x-3`}
          >
            <FcDataSheet size={'23'} />
            <p className='text-sm'>{routes.classes.label}</p>
          </button>
        </Link>

        <Link href={routes.students.path}>
          <button
            className={`${
              routes.students.path === pathname ? 'bg-zinc-200 rounded-md border border-zinc-300' : 'border border-transparent'
            } w-full flex hover:bg-zinc-200 hover:rounded-md h-10 items-center pl-3 space-x-3`}
          >
            <FcReading size={'23'} />
            <p className='text-sm'>{routes.students.label}</p>
          </button>
        </Link>
      </div>
      <div className='flex flex-col p-4'>
        <Link href={routes.charges.path}>
          <button
            className={`${
              routes.charges.path === pathname ? 'bg-zinc-200 rounded-md border border-zinc-300' : 'border border-transparent'
            } w-full flex hover:bg-zinc-200 hover:rounded-md h-10 items-center pl-3 space-x-3`}
          >
            <FcMoneyTransfer size={'23'} />
            <p className='text-sm'>{routes.charges.label}</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
