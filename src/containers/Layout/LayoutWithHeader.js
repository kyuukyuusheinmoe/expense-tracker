import React from 'react'
import Header from './Header'

function LayoutWithHeader({title, children}) {
  return (
    <>
      <Header title={title}/>
        <div className='mt-20'>
            {children}
        </div>
    </>
  )
}

export default LayoutWithHeader
