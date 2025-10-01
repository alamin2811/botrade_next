import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import React from 'react'
import HomeSectionTitle from '../HomeSectionTitle'

const HowItWorks = () => {
  return (
    <div className='relative py-[120px] flex items-center justify-center z-0'>
    <img src="./assets/images/shape/mesh-pink.png" alt="" className='absolute z-0 top-[-10%] w-[80%] mx-auto' />
      <div className="relative z-10">
        <ContainerWrapper>
          <HomeSectionTitle title="How It Works" titleMargin="auto" titleMaxW="510px" alignment="text-center"/>
          <div className="w-full mt-[50px]">
            <img src="./assets/images/img/how-work-img.png" alt="img" className='w-full' />
          </div>
        </ContainerWrapper>
      </div>
    </div>
  )
}

export default HowItWorks