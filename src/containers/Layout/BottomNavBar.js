import React from 'react'

function BottomNavBar() {
  return (
    <div className='absolute bottom-0 left-0 w-full'>
        <div className=' flex justify-center -mb-8'>
            <div className='bg-main w-14 aspect-square rounded-full text-center'>
            <i className='pi pi-plus text-white mt-4 text-2xl'/>
            </div>
        </div>
        <div className='border shadow-md flex justify-between p-6'>
            <i className='pi pi-home text-2xl'/>
            <i className='pi pi-wallet text-2xl'/>
        </div>
    </div>
  )
}

export default BottomNavBar
