import React from 'react'

function AccountCard({type, balance, inAmount, outAmount}) {
  return (
    <div>
      <div className="p-6 bg-blue-50 rounded-t-lg">
        <p className='text-center font-bold text-xl'> {type} </p>
        <p className='text-end font-bold text-xl'> {balance ? Intl.NumberFormat().format(balance): 0 } MMK</p>
      </div>
      <div className='grid grid-cols-6 '>
        <div className='col-span-3 bg-eblue-50 text-center rounded-l-lg rounded-t-none'>
            <span className='pi pi-plus text-success' />
            <p className='text-lg'> {inAmount} </p>
        </div>
        <div className='col-span-3 bg-egray-100 text-center rounded-r-lg rounded-t-none'>
            <span className='pi pi-minus text-error' />
            <p className='text-lg'> {outAmount} </p>
        </div>
      </div>
    </div>)
}

export default AccountCard