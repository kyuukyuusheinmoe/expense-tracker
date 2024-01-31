import React from 'react'
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import DynamicFormElement from '../../components/Form/DynamicFormElement';
import { LoginForm as components } from '../../constants/Auth';
import { Button } from 'primereact/button';
import { axiosClient } from '../../services/axiosClient';


const Login = () => {
    const methods = useForm()
    const router = useRouter()

    const {handleSubmit, control} = methods;

    const onSubmit = async (data) => {
       const result = await axiosClient.post('/auth/login' , {
            ...data
        })
        if (result.status === 200) {
            router.push('/')
        }
    }
  return (
       <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='h-[100vh] flex flex-col gap-4 justify-center items-center m-auto'>
                {components?.map ((component, index) => <DynamicFormElement key={index} componentType={component.formProps.type} {...component} control={control} />)}
                <Button type='submit' label='Login'/>
            </form>
       </FormProvider>
  )
}

export default Login
