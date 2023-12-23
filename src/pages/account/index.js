import React from 'react'
import { AccountCard } from '../../components/Cards'
import LayoutWithHeader from '../../containers/Layout/LayoutWithHeader';
import BottomNavBar from '../../containers/Layout/BottomNavBar';
import Router from 'next/router';
import useSWR from 'swr';
import {fetcher} from '../../services/axiosClient'

function AccountListPage() {
  const {data} = useSWR('/account/list', fetcher)

  return (
     <div className='grid gap-2 p-4'>
        {
          data?.data.map ((account, index) => <AccountCard key={index} {...account} />)
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
