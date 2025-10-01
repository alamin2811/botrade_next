import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeMobileMenu from './HomeMobileMenu'
import { useRouter } from "next/router";
import ContainerWrapper from '@/src/Component/Core/ContainerWrapper';

const Header = () => {
  const router = useRouter();

  const buttons = [
    {
      href: "/launch-app",
      icon: "/assets/images/icons/ai-agent.svg",
      label: "Launch App"
    },
    {
      href: "/launch-app",
      icon: "/assets/images/icons/terminal.svg",
      label: "Terminal"
    },
    {
      href: "/launch-app",
      icon: "/assets/images/icons/wallet.svg",
      label: "Join Waitlist"
    },
  ];

  return (
    <div className='main-header absolute z-[9999] top-0 left-0 w-full'>
      <ContainerWrapper>
        <div className="flex items-center justify-between gap-[30px] py-[9px]">
          {/* Logo */}
          <div className="left">
            <Link href="/" className='logo'>
              <Image
                src="/assets/images/logo/logo.svg"
                alt="logo"
                height="80"
                width="190"
                className="h-[80px] w-[190px] xl:w-[130px] md:h-[65px] md:w-[150px]"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="right">
            <div className="flex items-center justify-end gap-[16px]">
              <ul className='flex items-center justify-end gap-[16px]'>
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
              <div className="bg-[rgba(255,255,255,0.10)] p-[7px] rounded-[12px] flex items-end justify-end">
                {buttons.map((btn, i) => (
                  <Link
                    key={i}
                    href={btn.href}
                    className="buy-btn hov-btn no-border bg-transparent group hover:bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[36px] px-[15px] flex items-center justify-center gap-[10px] text-white hover:text-[#111111] capitalize text-center font-[600] text-[16px] sm:text[14px] space-grotesk lg:hidden"
                  >
                    <img src={btn.icon} alt={btn.label} className='brightness-[100] group-hover:brightness-0' />
                    <span className="btn-hov-text">
                      <span className="btn-text">{btn.label}</span>
                      <span className="btn-text">{btn.label}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="hidden lg:block mr-[16px]">
                <HomeMobileMenu />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  )
}

export default Header
