import React from 'react'
import { Button } from 'primereact/button'

function RadioList() {
  return (
    <div className='flex gap-4'>
        {
            userPaymentTypes?.map ((payment, index) => (<Button key={index} type='button' icon={PaymentIconColorMapper(payment.title)?.icon || ''} className={clsx(PaymentIconColorMapper(payment.title)?.color, "!rounded-full !px-2 !py-1")}><span className='ml-1 mt-1'>{payment.title}</span></Button>))
        }
        <Button type='button' icon="pi pi-plus" label='Add' className='!rounded-full !px-2 !py-1'/>
    </div>
  )
}

export default RadioList
