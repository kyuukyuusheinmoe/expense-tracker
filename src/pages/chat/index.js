import {useEffect, useRef, useState} from 'react'
import { io } from "socket.io-client";
import { Controller, useForm, useWatch } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import clsx from 'clsx';

function ChatPage() {
    const {getValues, handleSubmit, control, reset, formState} = useForm()
    const [messages, setMessages] = useState([])
    const message = useWatch({
        control,
        name: "message", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
      })
    
    let socketRef = useRef(null);

    useEffect(() => { 
        const socketInitializer = async () => {
        await fetch('/api/socket')
            socketRef.current = io()
            socketRef?.current?.on('connect', () => {
                console.log('connected')
            })
            socketRef?.current?.on('chat message', function(msg) {
                console.log ('Receiving message ', msg)
                setMessages([...messages, msg])
            })
      };
      socketInitializer()
    }, [])

  useEffect(()=> {
    if (formState.isSubmitSuccessful) {
        reset({ message: "" })
      }
  }, [formState, reset])

  const onSubmit = () => {
    const values = getValues()
    socketRef?.current?.emit('chat message', {message: values.message, type: 'self'});
  }

  console.log ('xxx messages ', messages)

  return (
    <div className=''>
        <div className="grid gap-3 place-items-end p-4">
            {
                messages?.map ((msg, index)=> <div key={index} className={clsx(msg.type === 'self' ? "bg-blue-200": "bg-gray-50", 'rounded-xl bg-slate-200 p-2')}><p className='gray-500'>{msg?.message || "."}</p>  </div>)
            }
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-2 absolute left-0 bottom-0">
        <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <span className="p-input-icon-right w-full">
                    <i className={clsx(message?.length  ? "pi pi-send" : "hidden")} />
                    <InputText label="Title" {...field} className='w-full !bg-white !border-[1px] !border-gray-300' placeholder='Send a Message'/>
                </span>
        )}/>
      </form>
    </div>
  )
}

export default ChatPage
