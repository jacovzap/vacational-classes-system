interface FloatInputProps {
  label: string
    value: string
    onChange: (value: string) => void
    isSubmitted: boolean
}

const FloatInput = ({ label,value, onChange, isSubmitted}: FloatInputProps) => {
  return (
    <div className='w-full space-y-1'>
      <p className='text-xs font-semibold text-gray-600 '>
        {label} (Bs.)<span className='text-xs text-red-500'> *</span>
      </p>
      <input
        type='number'
        value={value}
        onInput={e => onChange(e.currentTarget.value)}
        step='0.5'
        className={`${isSubmitted && value === '' ? 'border-red-500' : 'border-gray-200'} border rounded-md py-1 px-3 focus:outline-emerald-500 focus:border text-sm`}
        min={0}
      />
         {isSubmitted && value === '' ? <p className='text-xs text-red-500'>Este campo es obligatorio</p> : null}  
    </div>
  )
}

export default FloatInput
