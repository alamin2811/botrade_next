import Link from 'next/link'
import React from 'react'

const ReadyToJoin = () => {
    return (
        <div className="relative flex items-center justify-center py-[120px] z-0">
            <img src="./assets/images/shape/mesh-pink.png" alt="" className='absolute z-0 top-[-40%] w-[90%] mx-auto' />
            <div className="relative z-10">
                <h3 className='mb-[40px] text-[40px] space-grotesk uppercase font-[700] text-center mx-auto max-w-[538px] text-[#FFF] leading-[120%]'>Ready to Join the Future of Trading?</h3>
                <p className='mb-[40px] text-[18px] font-[500] text-center mx-auto max-w-[752px]  text-[rgba(255,255,255,0.90)] leading-[150%]'>Experience autonomous AI trading with proven results. Join thousands of investors earning consistent returns with our advanced algorithms.</p>
                <ul className='text-center flex justify-center items-start gap-[50px] text-white font-[700] text-[18px] space-grotesk mb-[40px]'>
                    <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Fully Independently audited by Nethermind</li>
                    <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />AI-powered strategies</li>
                    <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Real-time performance tracking</li>
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

        </div>
    )
}

export default ReadyToJoin