import React, { useState, useMemo } from 'react'
import { Button } from 'primereact/button'
import { useForm, FormProvider} from 'react-hook-form'
import {Dialog} from 'primereact/dialog'
import { useRouter } from 'next/router'
import LayoutWithHeader from '../../containers/Layout/LayoutWithHeader'
import { CreateTransactionForm as components} from '../../constants/CreateTransactionForm'
import DynamicFormElement from '../../components/Form/DynamicFormElement'
import { createTransction } from '../../services/TransactionController'

function TransactionCreatePage() {
  const methods = useForm({defaultValues: useMemo(() => {
    let arrToObject = {}
    components.reduce((acc={}, compo)=> {
        arrToObject[compo.name] = compo.defaultValue
      return arrToObject;
    });
    return arrToObject
  }, []), shouldUnregister: true})
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [apiData, setApiData] = useState({})
  const router = useRouter()
  const {control, handleSubmit, reset} = methods;

  const onSubmit =async (data) => {
    console.log ('xxx submit ', data)
    const requestData  = {...data, necessity: data.necessity.value}
    const result = await createTransction(requestData)
    if (result.status === 200 ) {
      router.push ('/transactions')
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='p-4 grid gap-5'>
              {
                components?.map ((field, index) => {
                return (
                <DynamicFormElement control={control} key={index} componentType={field.formProps.type} {...field} defaultValue={field.defaultValue} />)
              })
                }
              <div className='flex flex-row-reverse p-4'>
                <Button type='submit' label='Save' className='!py-2 fixed bottom-2' />
              </div>
            </div>
        </form>
      </FormProvider>
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

export default TransactionCreatePage

TransactionCreatePage.getLayout =  function getLayout  (page) {return <LayoutWithHeader title="Create Transaction">{page}</LayoutWithHeader>} ;
