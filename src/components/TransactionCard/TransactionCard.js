import React from 'react'
import { Button } from 'primereact/button'
import clsx from 'clsx'
import { PaymentIconColorMapper, transactionColorMapper, currency, CategoryIconColorMapper } from '../../constants/common'

function TransactionCard({item}) {
  return (
    <div className='relative items-stretch text-sm'>
        <div className={clsx(transactionColorMapper[item.type], 'flex flex-col gap-4 py-4 px-10 text-center items-start rounded-lg')}>
            <div className='flex gap-2'>
                <Button icon={CategoryIconColorMapper(item.category)?.icon} className={clsx(CategoryIconColorMapper(item.category)?.color, "!rounded-full !px-2 !py-1")} ><span className='ml-1 mt-1'>{item.category}</span></Button>
                <Button icon={PaymentIconColorMapper(item.payment)?.icon || ''} className={clsx(PaymentIconColorMapper(item.payment)?.color, "!rounded-full !px-2 !py-1")}><span className='ml-1 mt-1'>{item.payment}</span></Button>
            </div>
            <p className='text-enavy-700 font-bold'><span className={clsx(item.type === 'debit' ? 'pi pi-minus text-error': 'pi pi-plus text-success', 'mr-2')}></span>{item?.amount && `${Intl.NumberFormat().format(item.amount)} ${currency}`} </p>
        </div>
    </div>
  )
}

export default TransactionCard
