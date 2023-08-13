import React from 'react'
import { Button } from 'primereact/button'
import { InputComponent, CalendarComponent } from '../../components/TransactionCard/Form'

function TransactionCreatePage() {
  return (
    <div>
      <div className='p-2'>
        <InputComponent label="Title"/>
        <CalendarComponent label="Date"/>
      </div>
    </div>
  )
}

export default TransactionCreatePage
