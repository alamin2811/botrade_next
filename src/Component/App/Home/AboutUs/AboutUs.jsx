import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import React from 'react'
import HomeSectionTitle from '../HomeSectionTitle'

const AboutUs = () => {
    return (
        <div className='relative pt-[64px] xl:pt-[40px] lg:pt-[0px] pb-[590px] lg:pb-[570px] md:pb-[550px] sm:pb-[530px] bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url(/assets/images/bg/about-bg.png)' }}>
            <ContainerWrapper>
                <div className="flex items-start justify-start flex-wrap mx-[-15px]">
                    <div className="w-1/2 lg:w-full px-[15px]">
                        <HomeSectionTitle title="About Us" />
                        <div className="mt-[30px] md:mt-[15px] max-w-[520px] lg:max-w-full">
                            <p className='text-[16px] md:text-[14px] font-[500] text-[rgba(255,255,255,0.90)] mb-[20px]'>Knidos is an autonomous trading agent managing three algorithmic investment pools. It executes delta-neutral strategies with a focus on risk-adjusted performance, powered by machine learning models trained on historical trades, market data, and on-chain signals.</p>
                            <p className='text-[16px] md:text-[14px] font-[500] text-[rgba(255,255,255,0.90)] mb-[20px]'>Our system continuously analyzes news, wallet flows, and social sentiment to identify shifts in market dynamics. Actionable insights are published through our Insight Manager — and users can interact with the agent directly for detailed explanations behind trades, trends, and signals.</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-full px-[15px]">
                        <div className="flex items-start justify-start mx-[-20px] lg:mx-[-15px] sm:ms-[-10px]">
                            <div className="w-1/2 px-[20px] lg:px-[15px] sm:px-[10px]">
                                <div className="px-[30px] sm:px-[15px] py-[40px] sm:py-[30px] rounded-[15px] mb-[30px] sm:mb-[20px]" style={{ background: 'linear-gradient(131deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
                                    <img src="./assets/images/icons/trading.svg" alt="icon" />
                                    <p className='mt-[22px] mb-0 max-w-[183px] w-full text-[#FFF] font-[700] text-[18px] md:text-[16px] sm:text-[15px] space-grotesk'>Top Performance for Fast Trading</p>
                                </div>
                                <div className="px-[30px] sm:px-[15px] py-[40px] sm:py-[30px] rounded-[15px] mb-[30px] sm:mb-[20px]" style={{ background: 'linear-gradient(131deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
                                    <img src="./assets/images/icons/liquidity.svg" alt="icon" />
                                    <p className='mt-[22px] mb-0 max-w-[183px] w-full text-[#FFF] font-[700] text-[18px] md:text-[16px] sm:text-[15px] space-grotesk'>Deep Liquidity & Tight Spread</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-[20px] lg:px-[15px] sm:px-[10px]">
                                <div className="px-[30px] sm:px-[15px] py-[40px] sm:py-[30px] rounded-[15px] mb-[30px] sm:mb-[20px]" style={{ background: 'linear-gradient(131deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
                                    <img src="./assets/images/icons/secure.svg" alt="icon" />
                                    <p className='mt-[22px] mb-0 max-w-[183px] w-full text-[#FFF] font-[700] text-[18px] md:text-[16px] sm:text-[15px] space-grotesk'>Secure and Stable</p>
                                </div>
                                <div className="px-[30px] sm:px-[15px] py-[40px] sm:py-[30px] rounded-[15px] mb-[30px] sm:mb-[20px]" style={{ background: 'linear-gradient(131deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)' }}>
                                    <img src="./assets/images/icons/security.svg" alt="icon" />
                                    <p className='mt-[22px] mb-0 max-w-[183px] w-full text-[#FFF] font-[700] text-[18px] md:text-[16px] sm:text-[15px] space-grotesk'>High Security for Your Assets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    )
}

export default AboutUs