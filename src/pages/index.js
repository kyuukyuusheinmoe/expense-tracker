import {Button} from 'primereact/button'
import { months, currency } from '../constants/common'
import { MainLayout } from '../containers/Layout'
import BottomNavBar from '../containers/Layout/BottomNavBar'
import Router from 'next/router'
import TransactionList from '../containers/Home/TransactionList';
import { fetcher } from '../services/axiosClient'
import BarChart from '../components/Charts/BarCharts'
import useSWR from 'swr'
import moment from 'moment'

export default function Home() {
  const currentDate = new Date()
  const currentMonth = months[currentDate.getMonth()]

  const {data} = useSWR('/analytic/top-categories?limit=5', fetcher)
  const {data: totalResult} = useSWR('/analytic/total-balance', fetcher)
  const {data: totalExpResult} = useSWR(`/analytic/total-expense?from=${moment([currentDate.getFullYear(), currentDate.getMonth()]).format('YYYY-MM-DD')}`, fetcher)

  const categories = data?.data;

  const formatChartData = {
    labels: categories?.map (cat => cat.categoryName),
    datasets: [
        {
            label: 'Amount',
            data: categories?.map (cat => cat.amount),
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgb(255, 159, 64)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1
        }
    ]
}
  return (
      <div className="p-4">
        <div className='flex flex-row-reverse'>
          <Button label={currentMonth} icon="pi pi-calendar pr-1" className='!bg-main !text-white !p-2 !rounded-full'/>
        </div>
        <p className='font-bold text-md'> Balance: <span className='font-normal'>{totalResult?.data?.total && `${Intl.NumberFormat().format(totalResult?.data?.total)} ${currency}`} </span></p>
        <p className='font-medium text-xl text-error'> Total Expense: {totalExpResult?.data?.total && `${Intl.NumberFormat().format(totalExpResult?.data?.total)} ${currency}`}</p>
        <BarChart chartData={formatChartData}/>
        
        <TransactionList/>
      </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <MainLayout>
        {page}
        <BottomNavBar onClickPlus={()=> Router.push('/transaction/create')}/>
      </MainLayout>
  )
}
