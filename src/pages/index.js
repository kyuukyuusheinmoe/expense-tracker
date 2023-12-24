import {Button} from 'primereact/button'
import { months, currency } from '../constants/common'
import { TransactionCard } from '../components/Cards'
import { MainLayout } from '../containers/Layout'
import BottomNavBar from '../containers/Layout/BottomNavBar'
import Router from 'next/router'
import TransactionList from '../containers/Home/TransactionList';
import { fetcher } from '../services/axiosClient'
import BarChart from '../components/Charts/BarCharts'

const user_expense = {
  current: {
    balance: 100000,
    income: 50000,
    expense: 500000
  },
  init : {
    balance: 1000000
  },
  today: {
    totalExpense: 20000,
    trxns: [{
      amount: 100000,
      type: 'Debit',
      category: 'Bills',
      payment: "Cash"
    },{
      amount: 100000,
      type: 'Credit',
      category: 'Bills',
      payment: "Bank"
    },{
      amount: 100000,
      type: 'Credit',
      category: 'Bills',
      payment: "Bank"
    }],
  }
  
}

export default function Home({categories}) {
  console.log ('xxx categories ', categories)
  const currentDate = new Date()
  const currentMonth = months[currentDate.getMonth()]
  const {current, init, today} = user_expense;

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
        <p className='font-bold text-md'> Balance: <span className='font-normal'>{init?.balance && `${Intl.NumberFormat().format(init.balance)} ${currency}`} </span></p>
        <p className='font-bold text-2xl text-error'> Total Expense: </p>
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

export const getServerSideProps = (async () => {
  const res = await fetcher('/analytic/top-categories?limit=5')
  return { props: { categories: res.data } }
})
