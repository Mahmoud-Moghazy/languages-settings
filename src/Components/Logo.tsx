import React from 'react'

const Logo: React.FC = () => {  
  return (
    <div className='h-10 lg:h-14 lg:p-2 lg:bg-PeacockBlue-900'>
      <img src="/images/logo-light-wide.svg" alt="logo" className='w-full h-full lg:w-min lg:object-left'/>
    </div>
  )
}

export default Logo