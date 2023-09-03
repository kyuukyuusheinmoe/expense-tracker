import React from 'react'
import { useRouter } from 'next/router'

function BottomNavBar() {
  const router = useRouter()
  const plusUrl = router.pathname === '/' ? '/transaction/create' : '/'
  return (
    <div className='absolute w-full max-w-[1024px] mx-auto bottom-0' onClick={()=> router.push(plusUrl)}>
        <div className=' flex justify-center -mb-8'>
            <div className='bg-main w-14 aspect-square rounded-full text-center'>
            <i className='pi pi-plus text-white mt-3 !text-2xl'/>
            </div>
        </div>
        <div className='border shadow-md flex justify-between p-6'>
            <i className='pi pi-home !text-2xl'/>
            <i className='pi pi-wallet !text-2xl'/>
        </div>
    </div>
  )
}

export default BottomNavBar
