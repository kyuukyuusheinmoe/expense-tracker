import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';

function CalendarComponent({label}) {
    const [date, setDate] = useState(null)
  return (
    <div className="flex gap-6 bg-egray-500 rounded-full p-4">
        <label htmlFor="username">{label}</label>
        <Calendar value={date} onChange={(e) => setDate(e.value)} className='!bg-transparent border-b-[1px] broder-black text-black' />
    </div>
  )
}

export default CalendarComponent
