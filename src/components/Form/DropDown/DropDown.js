import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function DropDownComponent({label, options, value, onChange, placeholder}) {
  return (
    <div className="grid grid-cols-12">
        <label className='col-span-4 text-center text-md font-bold'>{label}</label>
        <Dropdown value={value} onChange={(e) => onChange(e.value)} options={options} optionLabel="name" 
                placeholder={placeholder} className="col-span-8 w-full" />
    </div>
  )
}

export default DropDownComponent
