import React from 'react'
import { AccountCard } from '../../components/Cards'
import LayoutWithHeader from '../../containers/Layout/LayoutWithHeader';
import BottomNavBar from '../../containers/Layout/BottomNavBar';
import Router from 'next/router';

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


AccountListPage.getLayout = function getLayout(page) {
  return <LayoutWithHeader title="Accounts">
    {page}
    <BottomNavBar onClickPlus={()=> Router.push('/account/create')}/>
  </LayoutWithHeader>
}

export default AccountListPage
