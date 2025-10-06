import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'

const Breadcumbs = ({ pageTitle, pageSubtitle, display }) => {
  const router = useRouter()

  return (
    <div
      className='bg-no-repeat pt-[210px] xl:pt-[150px] lg:pt-[100px] pb-[435px] relative z-0'
      style={{
        background: 'url(./assets/images/bg/breadcumbs-banner-bg.png)',
        backgroundSize: 'cover',
      }}
    >
      <ContainerWrapper>
        <div className='relative'>
          <button
            onClick={() => router.back()}
            className={`text-white ${display} items-center justify-center absolute top-[-50px] lg:top-[0px] lg:relative lg:mb-[20px] left-0 gap-[6px] text-[16px] lg:text-[14px] font-[700] space-grotesk rounded-[12px] bg-[rgba(255,255,255,0.10)] w-[100px] lg:w-[80px] h-[40px] lg:h-[34px] flex`}
          >
            <Icon icon='mynaui:arrow-left' width='20' height='20' /> Back
          </button>

          <div className='max-w-[819px] lg:max-w-[700px] md:max-w-[500px] text-center mx-auto text-white'>
            <h2 className='uppercase text-[50px] lg:text-[40px] md:text-[32px] font-[700] space-grotesk leading-[120%] mb-[33px] xl:mb-[25px] lg:mb-[20px] md:mb-[10px]'>
              {pageTitle}
            </h2>
            <h2 className='text-[36px] lg:text-[28px] md:text-[20px] sm:text-[18px] font-[700] space-grotesk leading-[125%] mb-[35px] xl:mb-[25px]'>
              {pageSubtitle}
            </h2>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  )
}

export default Breadcumbs
