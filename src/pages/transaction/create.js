import React from 'react'
import { InputComponent, CalendarComponent, RadioList } from '../../components/TransactionCard/Form'
import { userPaymentTypes, necessityTypes } from '../../constants/ComponentData'
import { Button } from 'primereact/button'
import { Controller, useForm} from 'react-hook-form'

function TransactionCreatePage() {
  const {getValues, control, handleSubmit} = useForm()
  const onSubmit = () => {
    console.log ('xxx getValues ', getValues())
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-2 grid gap-5'>
            <Controller
              name="title"
              control={control}
              render={({ field, fieldState }) => (
                      <InputComponent label="Title" {...field}/>
              )}/>
            <Controller
              name="amount"
              control={control}
              render={({ field, fieldState }) => (
                      <InputComponent label="Amount" {...field}/>
              )}/>
            <Controller
              name="date"
              control={control}
              render={({ field, fieldState }) => (
                <CalendarComponent label="Date" {...field}/>
              )}/>
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                      <InputComponent label="Description" {...field}/>
              )}/>
            <Controller
              name="payment"
              control={control}
              render={({ field, fieldState }) => ( 
                <>
                  <p className='text-md font-bold'> Pay with </p>
                  <div className='flex flex-nowrap overflow-x-scroll relative'>
                    <RadioList items={userPaymentTypes} {...field} />
                  </div>
                </>
               )}/>
            <Controller
              name="necessity"
              control={control}
              render={({ field, fieldState }) => ( 
                <>
                  <p className='text-md font-bold'> Necessity </p>
                  <div className='flex flex-nowrap overflow-x-scroll relative'>
                    <RadioList items={necessityTypes} {...field} />
                  </div>
                </>
              )}/>
        </div>
        <div className='flex flex-row-reverse p-4'>
          <Button label='Save' className='!py-2 absolute bottom-8 '/>
        </div>
      </form>
    </>
  )
}

export default TransactionCreatePage
