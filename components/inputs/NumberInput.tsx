interface NumberInputProps {
  label: string
    value: string
    onChange: (value: string) => void
}

const NumberInput = ({ label, value, onChange}: NumberInputProps) => {
  return (
    <div className='w-full space-y-1'>
      <p className='text-xs font-semibold text-gray-600 '>{label}</p>
      <input
       pattern="\d*"
       value={value}
       onInput={e => onChange(e.currentTarget.value)}
        type='number'
        className='border-gray-200 border rounded-md py-1 px-3 focus:outline-emerald-500 focus:border font-normal text-sm'
        min={0}
      />
    </div>
  )
}

export default NumberInput
