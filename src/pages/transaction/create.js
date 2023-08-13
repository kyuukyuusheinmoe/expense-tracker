import React from 'react'
import { InputComponent, CalendarComponent } from '../../components/TransactionCard/Form'
import { userPaymentTypes, necessityTypes } from '../../constants/ComponentData'
import { IconColorMapper } from '../../utils/common'
import { Button } from 'primereact/button'
import clsx from 'clsx'
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
            <p className='text-md font-bold'> Pay with </p>
            <div className='flex flex-nowrap overflow-x-scroll relative'>
              <div className='flex gap-4'>
                {
                  userPaymentTypes?.map ((payment, index) => (<Button key={index} type='button' icon={IconColorMapper(payment.title)?.icon || ''} className={clsx(IconColorMapper(payment.title)?.color, "!rounded-full !px-2 !py-1")}><span className='ml-1 mt-1'>{payment.title}</span></Button>))
                }
                <Button type='button' icon="pi pi-plus" label='Add' className='!rounded-full !px-2 !py-1'/>
              </div>
            </div>
            <p className='text-md font-bold'> Necessity </p>
            <div className='flex gap-4'>
                {
                  necessityTypes?.map ((necessity, index) => (<Button key={index} type='button' className={clsx(IconColorMapper(necessity)?.color, "!rounded-full !px-4 !py-1")}><span className='ml-1 mt-1'>{necessity}</span></Button>))
                }
            </div>
        </div>
        <div className='flex flex-row-reverse p-4'>
          <Button label='Save' className='!py-2 absolute bottom-8 '/>
        </div>
      </form>
    </>
  )
}

export default TransactionCreatePage
