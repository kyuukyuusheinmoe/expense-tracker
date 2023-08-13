import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';
import styles from './Calendar.module.scss'
import './Calendar.module.scss'
import clsx from 'clsx';

function CalendarComponent({label}) {
    const [date, setDate] = useState(null)
  return (
    <div className={clsx(styles['calendar-component'],"flex items-center gap-6 bg-egray-500 rounded-xl p-4")}>
      <label className='text-md font-bold' >{label}</label>
      <Calendar value={date} onChange={(e) => setDate(e.value)}/>
    </div>
  )
}

export default CalendarComponent
