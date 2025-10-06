import React from 'react'
import Header from '../../Core/Header/Header'
import Breadcumbs from '../../Core/Breadcumbs'
import Footer from '../../Core/Footer'
import Link from 'next/link'
import PerformanceDashboard from './PerformanceDashboard'
import ContainerWrapper from '../../Core/ContainerWrapper'
import PerformanceSummary from './PerformanceSummary'
import AITradingPositions from './AITradingPositions'
import ReadyToJoin from './ReadyToJoin'

const Details = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <Breadcumbs pageTitle="AI Trading Pool" pageSubtitle="AI-powered trading strategies with machine learning algorithms" display="flex" />
            <ContainerWrapper>
                <div className="max-w-[1070px] mx-auto text-center mt-[-430px] mb-[50px]">
                    <p className='text-[rgba(255,255,255,0.90)] text-[18px] font-[500] text-center mb-[30px]'>An AI-driven strategy executing trades across the top 100 crypto assets. Signal-based, high-frequency. Autonomous AI Strategies. Real Returns. Decentralized Execution. Knidos is your on-chain AI fund manager. Choose from three optimized pools and let our algorithm do the work—while you stay in control.</p>
                    <ul className='text-center flex justify-center items-start gap-[50px] text-white font-[700] text-[18px] space-grotesk mb-[40px]'>
                        <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Live Performance Dashboard</li>
                        <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Fully Independently audited by Nethermind</li>
                    </ul>
                    <Link
                        href='#'
                        className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[60px] w-[200px] mx-auto px-[15px] flex items-center justify-center gap-[10px] text-[#111] capitalize text-center font-[600] text-[16px] sm:text[14px] space-grotesk lg:hidden"
                    >
                        <img src="./assets/images/icons/chart.svg" alt='icon' className='brightness-0' />
                        <span className="btn-hov-text">
                            <span className="btn-text">Join Vault Now</span>
                            <span className="btn-text">Join Vault Now</span>
                        </span>
                    </Link>
                </div>
                <PerformanceDashboard />
                <PerformanceSummary/>
                <AITradingPositions/>
                <ReadyToJoin/>
                
            </ContainerWrapper>
            <Footer />
        </div>
    )
}

export default Details