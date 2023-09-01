import React, { useState } from 'react'
import { InputComponent, CalendarComponent, RadioList } from '../../components/TransactionCard/Form'
import { userPaymentTypes, necessityTypes } from '../../constants/ComponentData'
import { Button } from 'primereact/button'
import { Controller, useForm} from 'react-hook-form'
import axios from 'axios'
import {Dialog} from 'primereact/dialog'
import { useRouter } from 'next/router'
import LayoutWithHeader from '../../containers/Layout/LayoutWithHeader'

function TransactionCreatePage() {
  const {getValues, control, handleSubmit, reset} = useForm({defaultValues: {}})
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [apiData, setApiData] = useState({})
  const router = useRouter()

  const onSubmit = () => {
    axios.post('http://localhost:3005/transactions', {
          ...getValues()
      }).then(response => {
      console.log('transactions posted:', response.data);
      setApiData({status: 'success'})
      setConfirmVisible(true)
      }).catch(error => {
        setApiData({status: 'fail'})
        console.error('Error posting data:', error);
        setConfirmVisible(true)
      });
    }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='overflow-scroll'>
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
          <Button label='Save' className='!py-2 fixed bottom-2 '/>
        </div>
      </form>

      <Dialog header={apiData.status === 'success' ? "Success" : "Fail"} visible={confirmVisible} onHide={() => setConfirmVisible(false)}>
          {
            apiData.status === 'success' ? 
                <div>  
                  <p className="p-4"> Transaction has been created.</p>
                    <div className='flex flex-row-reverse gap-4'>
                      <Button icon="pi pi-plus" label='Create New' type="button"  onClick={()=>{ reset(); setConfirmVisible(false)}}/>
                      <Button icon="pi pi-home" label='Go Home' type="button" onClick={()=> router.push('/')}/>
                    </div>
                  </div>
                  : <>
                    <p> Something went wrong.</p>
                    <Button icon="pi pi-plus" label='Create New' type="button"  onClick={()=> reset()}/>
                    </>
                }
      </Dialog>         
    </>
  )
}

export default TransactionCreatePage

TransactionCreatePage.getLayout =  function getLayout  (page) {return <LayoutWithHeader title="Create Transaction">{page}</LayoutWithHeader>} ;
