import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import React from 'react'

const BackedBy = () => {
    return (
        <div className='py-[80px] xl:py-[60px] lg:py-[40px] relative flex items-center justify-center z-0'>
            <img src="./assets/images/shape/mesh-green.png" alt="img" className='absolute z-0 max-w-[55%] md:max-w-[100%] m-auto' />
            <ContainerWrapper>
                <div className="relative z-10">
                    <h3 className='text-center font-[700] mb-[30px] text-white space-grotesk text-[24px]'>Backed By</h3>
                    <img src="./assets/images/logo/avalanche-logo.png" alt="icon" className='nax-w-[380px] text-center mx-auto mb-[40px] lg:mb-[30px] lg:max-w-[300px]' />
                    <p className='text-[18px] font-[500] text-[rgba(255,255,255,0.90)] mb-[50px] xl:mb-[40px] lg:mb-[30px] md:mb-[20px] text-center leading-[150%]'>More strategies launching soon. Join our community for updates.</p>
                    <ul className='text-center flex justify-center items-start gap-x-[50px] xl:gap-x-[30px] gap-y-[10px] flex-wrap text-white font-[700] text-[18px] lg:tect-[16px] md:text-[14px] space-grotesk mb-[40px]'>
                        <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/shield.svg" alt="icon" />Independently audited by Nethermind</li>
                        <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/clock.svg" alt="icon" />24/7 Monitoring</li>
                    </ul>
                </div>

            </ContainerWrapper>
        </div>
    )
}

export default BackedBy