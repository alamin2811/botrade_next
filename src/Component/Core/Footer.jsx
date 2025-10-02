import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-no-repeat bg-center py-[80px] rounded-t-[50px]' style={{ background: 'url(./assets/images/bg/footer-bg.png)', backgroundSize: 'cover' }}>
      <ContainerWrapper>
        <Link href="#" className='mb-[45px] flex'><img src="./assets/images/logo/logo.svg" alt="logo" className='max-w-[215px] w-full' /></Link>
        <div className="flex items-start justify-start mx-[-15px]">
          <div className="w-1/2 px-[15px]">
            <ul className='flex items-center justify-start gap-[30px] text-[#FFF] font-[500] text-[16px] space-grotesk mb-[20px]'>
              <li><Link href="#">Legal</Link></li>
              <li><Link href="#">Terms of use</Link></li>
              <li><Link href="#">Cookies</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
            </ul>
            <p className='text-[14px] font-[500] text-[rgba(255,255,255,0.70)] mb-[30px]'><span className='text-white'>* Disclaimer :</span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing </p>
            <p className='text-[16px] font-[500] text-[rgba(255,255,255,0.70)]'>© 2025 <Link href="#" className='hover:text-white'>Botrade Labs AG.</Link> All rights reserved.</p>
          </div>
          <div className="w-1/2 px-[15px]">
            <div className="max-w-[300px] ml-auto">
              <p className="text-white font-bold text-[18px] space-grotesk">
                Say hello to :{" "}
                <Link href="mailto:support@mail.com" className="bg-gradient-to-r from-[#38FF3F] to-[#00BD94] bg-clip-text text-transparent">
                  support@mail.com
                </Link>
              </p>
              <div className="relative">
                <p className="text-white font-bold text-[18px] space-grotesk my-[25px]">
                  Follow us :
                </p>
                <ul className='flex items-center justify-start gap-[16px]'>
                  <li className="social-icon-btn">
                    <Link
                      href="#"
                      className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[24px] mt-[-3px]">
                        <span className="btn-icon mt-[0px]">
                          <img src="./assets/images/icons/book.svg" alt="icon" className="w-[22px] mb-[5px]" />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img src="./assets/images/icons/book.svg" alt="icon" className="w-[22px]" />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="social-icon-btn">
                    <Link
                      href="#"
                      className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[24px]">
                        <span className="btn-icon mb-[0px] mt-[-3px]">
                          <img
                            src="./assets/images/icons/tg.svg"
                            alt="icon"
                            className="w-[20px] mb-[3px]"
                          />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/tg.svg"
                            alt="icon"
                            className="w-[20px]"
                          />
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="social-icon-btn">
                    <Link
                      href="#"
                      className="flex btn-has-shape items-center justify-center rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[5px] h-[50px] w-[50px] sm:h-[50px] sm:w-[50px]"
                    >
                      <span className="btn-icons !h-[24px]">
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/x.svg"
                            alt="icon"
                            className="w-[16px]"
                          />
                        </span>
                        <span className="btn-icon my-[0px]">
                          <img
                            src="./assets/images/icons/x.svg"
                            alt="icon"
                            className="w-[16px]"
                          />
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  )
}

export default Footer