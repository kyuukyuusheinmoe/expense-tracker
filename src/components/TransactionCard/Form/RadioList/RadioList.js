import React from 'react'
import { Button } from 'primereact/button'
import { IconColorMapper } from '../../../../utils/common'
import clsx from 'clsx'
import { CheckCircleIcon } from '@heroicons/react/24/solid'



function RadioList({value, onChange, items}) {
  const handleOnClick = (item) => {
    onChange(item)
  }
  return (
    <div className='flex gap-4'>
      {items.map ((item, index) =>
      <div key={index} className="relative"> 
        {value?.value === item.value && <CheckCircleIcon className='w-4 h-4 absolute right-0 z-30 text-success' />}
        <Button  type='button' icon={IconColorMapper(item?.value)?.icon || ''} className={clsx(IconColorMapper(item?.value)?.color, "!rounded-full !px-2 !py-1")} onClick={()=> {handleOnClick(item)}}><span className='ml-1 mt-1'>{item?.label}</span>
        </Button>
      </div>)  }
    </div>
  )
}

export default RadioList
