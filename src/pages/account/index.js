import React from 'react'
import { AccountCard } from '../../components/Cards'
import LayoutWithHeader from '../../containers/Layout/LayoutWithHeader';

const accounts = [{
    type: "Cash",
    balance: 300000,
    inAmount: 100000,
    outAmount: 200000
}, {
    type: "Bank",
    balance: 300000,
    inAmount: 100000,
    outAmount: 200000
}, 
{
    type: "Pay",
    balance: 300000,
    inAmount: 100000,
    outAmount: 200000
}]

function AccountListPage() {
  return (
    <div className='grid gap-2 p-4'>
      {
        accounts.map ((account, index) => <AccountCard key={index} {...account} />)
      }
    </div>
  )
}

export default AccountListPage

AccountListPage.getLayout = function getLayout(page) {
  return <LayoutWithHeader title="Accounts">
    {page}
  </LayoutWithHeader>
}
