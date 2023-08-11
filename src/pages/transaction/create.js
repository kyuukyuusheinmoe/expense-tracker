import React from 'react'
import { Button } from 'primereact/button'
import InputComponent from '../../components/TransactionCard/Form/Input'

function TransactionCreatePage() {
  return (
    <div>
      {/* <div className='flex flex-row-reverse'>
          <Button label={currentMonth} icon="pi pi-calendar pr-1" className='!bg-main !text-white !p-2 !rounded-full'/>
      </div> */}
      <InputComponent/>
    </div>
  )
}

export default TransactionCreatePage
