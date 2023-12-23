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
                <Button icon={IconColorMapper(item.category.label)?.icon} className={clsx(IconColorMapper(item.category.label)?.color, "!rounded-full !px-2 !py-1")} ><span className='ml-1 mt-1'>{item.category.label}</span></Button>
                <Button icon={IconColorMapper(item.account.accountType)?.icon || ''} className={clsx(IconColorMapper(item.account.accountType)?.color, "!rounded-full !px-2 !py-1")}><span className='ml-1 mt-1'>{item.account.accountType}</span></Button>
              </div>
              <p className='text-enavy-700 font-bold'><span className={clsx(item.spentType === 'out' ? 'pi pi-minus text-error': 'pi pi-plus text-success', 'mr-2')}></span>{item?.amount && `${Intl.NumberFormat().format(item.amount)} ${currency}`} </p>
            </div>
        </div>
  )
}

export default TransactionCard
