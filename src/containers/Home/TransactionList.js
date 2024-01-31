import React from 'react'
import useSWRInfinite from "swr/infinite";
import { fetcher } from '../../services/axiosClient'
import { TransactionCard } from '../../components/Cards'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

const INITIAL_SIZE = 2;
const PAGE_SIZE = 2;

const TransactionList = () => {
    const swrTransactions = useSWRInfinite(
      (index) => `/transaction/list?page=${index}&pageSize=${PAGE_SIZE}`,
      fetcher,
      {
        initialSize: INITIAL_SIZE,
      }
    );

  return (
    <>
      <InfiniteScroll
					swr={swrTransactions}
					dataWrapper={({ children }) => (
						<div className='h-[1000px] max-h-screen overflow-scroll'>
              <div className='grid gap-2 '>
                {children}
              </div>
            </div>
					)}
					initialSize={INITIAL_SIZE}
					isAutoInfinite={true}
					pageSize={PAGE_SIZE}
					isReachingEnd={(swr) =>
						swr.data?.[0]?.data.length === 0 ||
						(swr.data?.[swr.data?.length - 1]?.data || []).length < PAGE_SIZE
					}
				>
					{(item) =>  (
						item && <TransactionCard key={item.id} item={item}/>
					)}
				</InfiniteScroll>
      </>
  )
}

export default TransactionList
