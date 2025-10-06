import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Breadcumbs = ({ pageTitle, pageSubtitle, display }) => {
    return (
        <div className='bg-no-repeat pt-[210px] xl:pt-[150px] lg:pt-[100px] pb-[435px] relative z-0' style={{ background: 'url(./assets/images/bg/breadcumbs-banner-bg.png)', backgroundSize: 'cover' }}>
            <ContainerWrapper>
                <div className="relative">
                    <Link href="#" className={`text-white ${display} items-center justify-center absolute top-[-50px] left-0 gap-[6px] text-[16px] font-[700] space-grotesk rounded-[12px] bg-[rgba(255,255,255,0.10)] w-[100px] h-[40px]`}><Icon icon="mynaui:arrow-left" width="20" height="20" /> Back</Link>
                    <div className="max-w-[819px] lg:max-w-[700px] md:max-w-[500px] text-center mx-auto text-white">
                        <h2 className='uppercase text-[50px] lg:text-[40px] md:text-[32px] font-[700] space-grotesk leading-[120%] mb-[33px] xl:mb-[25px] lg:mb-[20px] md:mb-[10px]'>{pageTitle}</h2>
                        <h2 className='text-[36px] lg:text-[28px] md:text-[20px] sm:text-[18px] font-[700] space-grotesk leading-[125%] mb-[35px] xl:mb-[25px]'>{pageSubtitle}</h2>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default Breadcumbs