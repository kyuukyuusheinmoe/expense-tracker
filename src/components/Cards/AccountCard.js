import React from 'react'
import {Button} from 'primereact/button'
import { IconColorMapper } from '../../utils/common'
import clsx from 'clsx'

function AccountCard({accountType, name, balance, debitBalance, creditBalance}) {
  return (
    <div>
      <div className="p-6 bg-blue-50 rounded-t-lg">
        <div className="flex justify-between">
          <p className='text-center font-medium text-lg'> {name} </p>
          <Button icon={IconColorMapper(accountType)?.icon} className={clsx(IconColorMapper(accountType)?.color, " !flex !items-center !rounded-full !px-2 !py-1 !text-sm overflow-hidden")} ><span className='ml-1'>{accountType}</span></Button>
        </div>
        <p className='text-end font-bold text-xl mt-2'> {balance ? Intl.NumberFormat().format(balance): 0 } MMK</p>
      </div>
      <div className='grid grid-cols-6 '>
        <div className='col-span-3 bg-eblue-50 text-center rounded-l-lg rounded-t-none'>
            <span className='pi pi-plus text-success' />
            <p className='text-lg'> {creditBalance} </p>
        </div>
        <div className='col-span-3 bg-egray-100 text-center rounded-r-lg rounded-t-none'>
            <span className='pi pi-minus text-error' />
            <p className='text-lg'> {debitBalance} </p>
        </div>
      </div>
    </div>)
}

export default AccountCard