import {Button} from 'primereact/button'
import { months, currency } from '../constants/common'
import { TransactionCard } from '../components/Cards'
import { MainLayout } from '../containers/Layout'

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

export default function Home() {
  const currentDate = new Date()
  const currentMonth = months[currentDate.getMonth()]
  const {current, init, today} = user_expense;

  return (
    <>
      <div>
        <div className='flex flex-row-reverse'>
          <Button label={currentMonth} icon="pi pi-calendar pr-1" className='!bg-main !text-white !p-2 !rounded-full'/>
        </div>
        <p className='font-bold text-md'> Initial: <span className='font-normal'>{init?.balance && `${Intl.NumberFormat().format(init.balance)} ${currency}`} </span></p>
        <p className='font-bold text-2xl'> Balance: </p>
        <div className="flex gap-4 justify-center text-xl 2xs:text-lg mt-2">
          <div className='bg-eblue-50 flex flex-col gap-2 p-4 text-center items-center rounded-xl'>
            <span> <i className='pi pi-plus text-success mr-2'/> Income</span>
            <p className='text-enavy-700 font-bold'>{current?.income && `${Intl.NumberFormat().format(current.income)} ${currency}`} </p>
          </div>
          <div className='bg-egray-100 flex flex-col gap-2 p-4 text-center items-center rounded-lg'>
            <span> <i className='pi pi-minus text-error mr-2'/> Expense</span>
            <p className='text-enavy-700 font-bold'>{current?.expense && `${Intl.NumberFormat().format(current.expense)} ${currency}`} </p>
          </div>
        </div>
        <div className='grid gap-2 mt-4'>
          {
            today.trxns?.map ((trxn, index)=> (
              <TransactionCard key={index} item={trxn}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <MainLayout>{page}</MainLayout>
  )
}
