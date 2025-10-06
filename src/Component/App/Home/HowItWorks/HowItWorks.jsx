import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import React from 'react'
import HomeSectionTitle from '../HomeSectionTitle'

const HowItWorks = () => {
  return (
    <div className='relative py-[120px] lg:pt-[100px] md:pt-[90px] lg:pb-[90px] md:pb-[50px] flex items-center justify-center z-0'>
      <img src="./assets/images/shape/mesh-pink.png" alt="" className='absolute z-0 top-[-10%] w-[70%] mx-auto' />
      <div className="relative z-10 mt-[-50px]">
        <ContainerWrapper>
          <HomeSectionTitle title="How It Works" titleMargin="mt-0 mx-auto" titleMaxW="510px" alignment="text-center"/>
          <div className="w-full mt-[50px] lg:mt-[30px]">
            <img src="./assets/images/img/how-work-img.png" alt="img" className='w-full' />
          </div>
        </ContainerWrapper>
      </div>
    </div>
  )
}

export default HowItWorks