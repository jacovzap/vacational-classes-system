interface TextInputProps {
  label: string
  value: string
  onChange: (value: string) => void
}

const TextInput = ({ label, value, onChange }: TextInputProps) => {
  return (
    <div className='w-full space-y-1'>
      <p className='text-xs font-semibold text-gray-600 '>
        {label}
        <span className="text-xs text-red-500"> *</span>
      </p>
      <input
        className='border-gray-200 border rounded-md py-1 px-3 focus:outline-emerald-500 focus:border text-sm font-normal'
        type='text'
        value={value}
        onInput={e => onChange(e.currentTarget.value)}
      />
    </div>
  )
}

export default TextInput
