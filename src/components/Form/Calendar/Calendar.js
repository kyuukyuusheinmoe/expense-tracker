import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';
import styles from './Calendar.module.scss'
import './Calendar.module.scss'
import clsx from 'clsx';

function CalendarComponent({label, ...rest}) {
    const [date, setDate] = useState(null)
  return (
    <div className={clsx(styles['calendar-component'],"flex items-center justify-between rounded-xl px-4")}>
      <label className='text-md font-bold' >{label}</label>
      <Calendar value={date} onChange={(e) => setDate(e.value)} {...rest} />
    </div>
  )
}

export default CalendarComponent
