import React from 'react'
import { Dropdown } from 'primereact/dropdown';


function DropDownComponent({label, items, value, onChange, placeholder, displayKey}) {
  return (
    <div className="grid grid-cols-12">
        <label className='col-span-4 text-center text-md font-bold'>{label}</label>
        <Dropdown value={value} onChange={(e) => onChange(e.value)} options={items} optionLabel={displayKey}
                placeholder={placeholder} className="col-span-8 w-full" />
    </div>
  )
}

export default DropDownComponent
