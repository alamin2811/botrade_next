import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useRouter } from "next/router";

const HomeMobileMenu = () => {
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
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="rounded-none drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                    <Icon icon="famicons:menu" width="24" height="24" />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="max-w-[300px] w-full p-[30px] h-full !rounded-[0px]">
                    <Link href="/">
                        <Image src="/assets/images/logo/logo.svg" alt="logo" height="65" width="150" />
                    </Link>
                    <label htmlFor="my-drawer-4" className="drawer-button absolute top-[30px] right-[30px] z-10">
                        <Icon icon="mingcute:close-fill" width="24" height="24" />
                    </label>

                    <div className="mb-[20px] mt-[40px]">
                        {buttons.map((btn, i) => (
                            <Link
                                key={i}
                                href={btn.href}
                                className="buy-btn hov-btn no-border bg-[rgba(255,255,255,0.10)] group hover:bg-[linear-gradient(96deg,#38FF3F_6.86%,#00BD94_97.02%)] border-[none] outline-[none] box-shadow-[none] rounded-[10px] h-[50px] mb-[10px] px-[15px] flex items-center justify-center gap-[10px] text-white hover:text-[#111111] capitalize text-center font-[600] w-full text-[16px] sm:text[14px] space-grotesk"
                            >
                                <img src={btn.icon} alt={btn.label} className='brightness-[100] group-hover:brightness-0' />
                                <span className="btn-hov-text">
                                    <span className="btn-text">{btn.label}</span>
                                    <span className="btn-text">{btn.label}</span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    <ul className='flex items-center justify-center gap-[16px]'>
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
    )
}

export default HomeMobileMenu