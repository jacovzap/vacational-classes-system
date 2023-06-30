interface TextInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  isSubmitted: boolean
}

const TextInput = ({ label, value, onChange, isSubmitted }: TextInputProps) => {
  return (
    <div className='w-full space-y-1'>
      <p className='text-xs font-semibold text-gray-600 '>
        {label}
        <span className='text-xs text-red-500'> *</span>
      </p>
      <input
        className={`${isSubmitted && value === '' ? 'border-red-500' : 'border-gray-200'} border rounded-md py-1 px-3 focus:outline-emerald-500 focus:border text-sm font-normal`}
        type='text'
        value={value}
        onInput={e => onChange(e.currentTarget.value)}
      />
      {isSubmitted && value === '' ? <p className='text-xs text-red-500'>Este campo es obligatorio</p> : null}         
    </div>
  )
}

export default TextInput
