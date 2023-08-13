import React, {useState} from 'react'
import { InputText } from 'primereact/inputtext';

function InputComponent({label}) {
    const [value, setValue] = useState('');
  return (
    <>
      <div className="flex items-center gap-6 bg-egray-500 rounded-full p-4">
        <label className='text-md font-bold'>{label}</label>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} className='!bg-transparent !border-b-[1px] !text-black !border-b-black' />
      </div>
    </>
  )
}

export default InputComponent
