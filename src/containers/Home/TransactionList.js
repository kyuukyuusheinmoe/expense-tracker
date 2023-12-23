import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../services/axiosClient'
import { TransactionCard } from '../../components/Cards'

const TransactionList = () => {
    const {data} = useSWR('/transaction/list', fetcher)

  return (
    <div className='grid gap-2 mt-4'>
          {
            data?.data?.map ((trxn, index)=> (
              <TransactionCard key={index} item={trxn}/>
            ))
          }
    </div>
  )
}

export default TransactionList
