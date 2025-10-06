import ContainerWrapper from '@/src/Component/Core/ContainerWrapper'
import Link from 'next/link'
import React from 'react'

const HomeBanner = ({ account, connectWallet }) => {
  return (
    <div
      className='bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: 'url(/assets/images/bg/home-banner-bg.png)' }}
    >
      <div
        className="overlay pt-[275px] xl:pt-[200px] lg:pt-[150px] md:pt-[120px] pb-[225px] md:pb-[200px]"
        style={{ background: 'linear-gradient(0deg, #0D1014 0%, rgba(13, 16, 20, 0.50) 100%)' }}
      >
        <ContainerWrapper>
          <div className="max-w-[868px] md:max-w-[600px] mx-[auto]">
            <h1 className='text-[70px] xl:text-[60px] lg:text-[50px] md:text-[40px] xsm:text-[36px] font-[700] uppercase text-white space-grotesk leading-[130%] text-center mb-[25px] xl:mb-[15px]'>
              Smarter Crypto Trades with Automation
            </h1>
            <h3 className='text-[36px] xl:text-[32px] lg:text-[28px] md:text-[24px] xsm:text-[22px] font-[700] uppercase text-white space-grotesk leading-[130%] text-center mb-[35px] xl:mb-[25px] lg:mb-[15px]'>
              AI Based Investment Pools
            </h3>
            <p className='text-[18px] xl:text-[16px] ld:text-[15px] md:text-[14px] font-[500] text-[rgba(255,255,255,0.90)] text-center mb-[50px] xl:mb-[40px] lg:mb-[30px] md:mb-[20px]'>
              Experience the future of DeFi with our AI-based investment pools. Advanced algorithms, autonomous strategies, and real returns—all on-chain and decentralized.
            </p>
            <ul className='text-center flex justify-center items-start gap-x-[50px] md:gap-x-[30px] gap-y-[10px] text-white font-[700] text-[18px] md:text-[16px] sm:text-[14px] space-grotesk'>
              <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Secure</li>
              <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Transparent</li>
              <li className='flex items-center justify-start gap-[8px]'><img src="./assets/images/icons/check-circle.svg" alt="icon" />Decentralized</li>
            </ul>

            {/* ✅ Show button only if wallet NOT connected */}
            {!account && (
              <button
                onClick={connectWallet}
                className="buy-btn hov-btn no-border group bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[60px] w-[200px] mx-auto px-[15px] flex items-center justify-center gap-[10px] text-[#111] capitalize text-center font-[600] text-[16px] sm:text-[14px] space-grotesk mt-[50px] lg:mt-[30px]"
              >
                <img src="./assets/images/icons/wallet.svg" alt='icon' className='brightness-0' />
                <span className="btn-hov-text">
                  <span className="btn-text">Join Waitlist</span>
                  <span className="btn-text">Join Waitlist</span>
                </span>
              </button>
            )}

          </div>
        </ContainerWrapper>
      </div>
    </div>
  )
}

export default HomeBanner;
