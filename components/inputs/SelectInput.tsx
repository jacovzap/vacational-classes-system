import { AiFillCaretDown } from 'react-icons/ai'

interface Item {
  value: string
  label: string
}

interface SelectInputProps {
  label: string
  options: Item[]
}

const SelectInput = ({ label, options }: SelectInputProps) => {
  return (
    <div className='relative w-full space-y-1'>
      <p className='text-xs font-semibold text-gray-600 '>{label}</p>
      <div className='absolute top-[26px] right-2'>
        <AiFillCaretDown size={'10px'}/>
      </div>
      <select
        name=''
        id=''
        className='text-sm appearance-none w-full border-gray-200 border rounded-md py-1 hover:cursor-pointer px-3 focus:outline-emerald-500 focus:border bg-gray-50'
      >
        {options.map((element, index) => {
          return (
            <option value={element.value} key={index}>
              {element.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectInput
