import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Breadcumbs = ({ children, pageTitle, pageSubtitle }) => {
    return (
        <div className='bg-no-repeat pt-[144px] pb-[435px] relative z-0' style={{ background: 'url(./assets/images/bg/breadcumbs-banner-bg.png)', backgroundSize: 'cover' }}>
            <ContainerWrapper>
                <Link href="#" className='text-white flex items-center justify-center gap-[6px] text-[16px] font-[700] space-grotesk rounded-[12px] bg-[rgba(255,255,255,0.10)] w-[100px] h-[40px]'><Icon icon="mynaui:arrow-left" width="20" height="20" /> Back</Link>
                <div className="max-w-[819px] text-center mx-auto text-white">
                    <h2 className='uppercase text-[50px] font-[700] space-grotesk leading-[120%] mb-[33px]'>{pageTitle}</h2>
                    <h2 className='text-[36px] font-[700] space-grotesk leading-[125%] mb-[35px]'>{pageSubtitle}</h2>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default Breadcumbs