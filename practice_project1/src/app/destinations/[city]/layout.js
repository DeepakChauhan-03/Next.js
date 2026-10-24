import React from 'react'

function layout({children,info}) {
  return (
    <div className='flex'>
      {children}
      {info}
    </div>
  )
}

export default layout
