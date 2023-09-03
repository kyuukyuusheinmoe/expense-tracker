import React, {useState} from 'react'
import { InputText } from 'primereact/inputtext';

function InputComponent({label, ...rest}) {
  return (
      <div className="grid grid-cols-12 items-center rounded-full px-4">
        <label className='col-span-4 text-center text-md font-bold'>{label}</label>
        <InputText {...rest} className='col-span-8 !bg-transparent !border-b-[1px] !text-black !border-b-black !rounded-none'/>
      </div>
  )
}

export default InputComponent
