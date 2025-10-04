import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const AccountInfo = () => {
    return (
        <div className="bg-[rgba(255,255,255,0.05)] rounded-[15px] overflow-hidden p-[30px] mb-[30px]">
            <div className="flex items-center justify-start gap-[10px]">
                <div className="h-[50px] w-[50px] rounded-[15px] flex items-center justify-center text-[#FFF] bg-[rgba(255,255,255,0.10)]">
                    <Icon icon="iconoir:user-star" width="24" height="24" />
                </div>
                <div className="relative">
                    <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Account Information</h4>
                    <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>Your account details and linked services</p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-[10px] bg-[rgba(56,255,63,0.08)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#38FF3F]">
                        <Icon icon="uil:envelope" width="24" height="24" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Account Information</h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>Your account details and linked services</p>
                    </div>
                </div>
                <Link href="#" className="flex items-center justify-center h-[27px] px-[10px] text-[#38FF3F] text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,255,255,0.05)] rounded-[8px] border-[rgba(56,255,63,0.30)]">
                    Linked
                </Link>
            </div>

            <div className="flex items-center justify-between gap-[10px] bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#FFFFFF]">
                        <Icon icon="meteor-icons:telegram" width="24" height="24" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Account Information</h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>Your account details and linked services</p>
                    </div>
                </div>
                <Link href="#" className="flex items-center justify-center h-[27px] px-[10px] text-[rgba(255,255,255,0.50)] text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,255,255,0.05)] rounded-[8px] border-[rgba(255,255,255,0.20)]">
                    Link Telegram
                </Link>
            </div>

            <div className="flex items-center justify-between gap-[10px] bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#FFFFFF]">
                        <Icon icon="prime:twitter" width="20" height="20" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Account Information</h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>Your account details and linked services</p>
                    </div>
                </div>
                <Link href="#" className="flex items-center justify-center h-[27px] px-[10px] text-[rgba(255,255,255,0.50)] text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,255,255,0.05)] rounded-[8px] border-[rgba(255,255,255,0.20)]">
                    Link Twitter
                </Link>
            </div>
        </div>
    )
}

export default AccountInfo