import React, {useState} from 'react'
import { InputText } from 'primereact/inputtext';

function InputComponent({label, ...rest}) {
  return (
    <>
      <div className="flex justify-between items-center bg-egray-500 rounded-full p-2 px-4">
        <label className='text-md font-bold'>{label}</label>
        <InputText {...rest} className='!bg-transparent !border-b-[1px] !text-black !border-b-black !rounded-none'/>
      </div>
    </>
  )
}

export default InputComponent
