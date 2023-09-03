import React from 'react'
import BottomNavBar from './BottomNavBar'

function MainLayout({children}) {
  return (
    <div className='max-w-[1024px] m-auto'>
      {children}
      <BottomNavBar/>
    </div>
  )
}

export default MainLayout
