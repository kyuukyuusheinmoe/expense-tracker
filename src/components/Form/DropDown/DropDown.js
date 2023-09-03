import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function DropDownComponent({options, value, onChange, placeholder}) {
  return (
    <div>
      <Dropdown value={value} onChange={(e) => onChange(e.value)} options={options} optionLabel="name" 
                placeholder={placeholder} className="w-full md:w-14rem" />
    </div>
  )
}

export default DropDownComponent
