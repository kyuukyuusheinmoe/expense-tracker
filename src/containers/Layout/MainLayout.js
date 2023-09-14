import React from 'react'

function MainLayout({children}) {
  return (
    <div className='max-w-[1024px] m-auto'>
      {children}
    </div>
  )
}

export default MainLayout
