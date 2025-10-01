import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
  return (
    <div className='bg-cover bg-no-repeat bg-center' style={{ backgroundImage: 'url(/assets/images/bg/home-banner-bg.png)' }}>
      <div className="overlay pt-[275px] pb-[225px]" style={{ background: 'linear-gradient(0deg, #0D1014 0%, rgba(13, 16, 20, 0.50) 100%)' }}>
        <ContainerWrapper>
          <div className="max-w-[868px] mx-[auto]">
            <h1 className='text-[70px] font-[700] uppercase text-white space-grotesk leading-[130%] text-center mb-[25px]'>Smarter Crypto Trades with Automation</h1>
            <h3 className='text-[36px] font-[700] uppercase text-white space-grotesk leading-[130%] text-center mb-[35px]'>AI Based Investment Pools</h3>
            <p className='text-[18px] font-[500] text-[rgba(255,255,255,0.90)] text-center mb-[50px]'>Experience the future of DeFi with our AI-based investment pools. Advanced algorithms, autonomous strategies, and real returns—all on-chain and decentralized.</p>
            <ul className='text-center flex justify-center items-start gap-[50px] text-white font-[700] text-[18px] space-grotesk mb-[50px]'>
              <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Secure</li>
              <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Transparent</li>
              <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Decentralized</li>
            </ul>
            <Link
              href='#'
              className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[60px] w-[200px] mx-auto px-[15px] flex items-center justify-center gap-[10px] text-[#111] capitalize text-center font-[600] text-[16px] sm:text[14px] space-grotesk lg:hidden"
            >
              <img src="./assets/images/icons/wallet.svg" alt='icon' className='brightness-0' />
              <span className="btn-hov-text">
                <span className="btn-text">Join Waitlist</span>
                <span className="btn-text">Join Waitlist</span>
              </span>
            </Link>
          </div>
        </ContainerWrapper>
      </div>
    </div>
  )
}

export default HomeBanner