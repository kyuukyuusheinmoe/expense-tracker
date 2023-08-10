import React from 'react'
import BottomNavBar from './BottomNavBar'

function MainLayout({children}) {
  return (
    <div className='max-w-[1024px] m-auto p-4'>
      {children}
      <BottomNavBar/>
    </div>
  )
}

export default MainLayout
