import React from 'react'

const ContainerWrapper = ({children}) => {
  return (
    <div className='px-[20px] md:px-[14px] max-w-[1290px] mx-auto lg:max-w-[720px]'>
        {children}
    </div>
  )
}

export default ContainerWrapper