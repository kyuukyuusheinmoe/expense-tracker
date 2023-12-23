import React from 'react'
import { Button } from 'primereact/button'
import clsx from 'clsx'
import { IconColorMapper } from '../../utils/common'
import { currency } from '../../constants/common'

function TransactionCard({item}) {
  return (
        <div className={clsx(IconColorMapper(item.type)?.color, 'py-4 px-2 text-center items-center rounded-lg')}>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <Button icon={IconColorMapper(item.category)?.icon} className={clsx(IconColorMapper(item.category)?.color, "!rounded-full !px-2 !py-1")} ><span className='ml-1 mt-1'>{item.category}</span></Button>
                <Button icon={IconColorMapper(item.payment)?.icon || ''} className={clsx(IconColorMapper(item.payment)?.color, "!rounded-full !px-2 !py-1")}><span className='ml-1 mt-1'>{item.payment}</span></Button>
              </div>
              <p className='text-enavy-700 font-bold'><span className={clsx(item.type === 'debit' ? 'pi pi-minus text-error': 'pi pi-plus text-success', 'mr-2')}></span>{item?.amount && `${Intl.NumberFormat().format(item.amount)} ${currency}`} </p>
            </div>
        </div>
  )
}

export default TransactionCard
