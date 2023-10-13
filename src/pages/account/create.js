import React, { useState, useEffect } from 'react'
import { InputComponent, CalendarComponent, RadioList, DropDownComponent } from '../../components/Form'
import { userPaymentTypes, necessityTypes } from '../../constants/ComponentData'
import { Button } from 'primereact/button'
import { Controller, useForm, useWatch} from 'react-hook-form'
import axios from 'axios'
import {Dialog} from 'primereact/dialog'
import { useRouter } from 'next/router'
import LayoutWithHeader from '../../containers/Layout/LayoutWithHeader'
import clsx from 'clsx'
import { CreateAccountForm as components } from '../../constants/CreateAccountForm'
import DynamicFormElement from '../../components/Form/DynamicFormElement/index';

function AccountCreatePage() {
  const {getValues, control, handleSubmit, reset, register, unregister} = useForm({defaultValues: {}})
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [apiData, setApiData] = useState({})
  const router = useRouter()
  const typeCheck = useWatch({control, name: "type"})

  useEffect(() => {
    if (typeCheck === "in") {
      unregister("necessity");
    } else {
      register("necessity");
    }
  }, [register, unregister, typeCheck]);

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
        <div className='p-4 grid gap-5'>
            {components?.map ((component, index) => <DynamicFormElement key={index} {...component} />)}
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
                  : <div className='flex flex-col gap-4'>
                    <p> Something went wrong.</p>
                      <Button icon="pi pi-refresh" label='Try Again' type="button"  onClick={()=> setConfirmVisible(false)}/>
                    </div>
                }
      </Dialog>         
    </>
  )
}

export default AccountCreatePage

AccountCreatePage.getLayout =  function getLayout  (page) {return <LayoutWithHeader title="Create Account">{page}</LayoutWithHeader>} ;
