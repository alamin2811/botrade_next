import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const InvestingEligibility = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="bg-[rgba(255,255,255,0.05)] rounded-[15px] overflow-hidden p-[30px] md:p-[15px] mb-[30px] md:mb-[20px]">
            <div className="flex items-center justify-start gap-[10px]">
                <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[15px] flex items-center justify-center text-[#FFF] bg-[rgba(255,255,255,0.10)]">
                    <Icon icon="tabler:circle-dashed-check" width="24" height="24" />
                </div>
                <div className="relative">
                    <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Investing Eligibility</h4>
                    <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>Your investing eligibility status</p>
                </div>
            </div>

            <div className="flex items-center justify-between sm:flex-col sm:justify-start sm:items-start gap-[10px] bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#FFFFFF]">
                        <Icon icon="tabler:circle-dashed-check" width="22" height="22" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[16px] font-[700] space-grotesk leading-[120%]'>Eligible for Investing</h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>No</p>
                    </div>
                </div>
                <Link href="#" className="flex items-center justify-center sm:ml-[40px] h-[27px] px-[10px] text-[rgba(255,255,255,0.50)] text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,255,255,0.05)] rounded-[8px] border-[rgba(255,255,255,0.20)]">
                    ❌ Not Eligible
                </Link>
            </div>

            <div className="bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <h4 className='text-[#FFF] text-[16px] font-[700] space-grotesk leading-[120%] my-[10px]'>Enter Investing Eligibility Code</h4>
                <div className="rounded-[12px] overflow-hidden bg-[rgba(255,255,255,0.03)] border-[1px] border-[rgba(255,255,255,0.10)] p-[7px] flex items-center justify-between gap-[10px]">
                    <input type="text" placeholder='Enter code' className='text-[#FFF] text-[16px] font-[700] space-grotesk placeholder:text-[rgba(255,255,255,0.50)] bg-transparent overflow-hidden max-w-full w-full outline-none !border-none px-[10px]' />
                    <button className='text-[#38FF3F] bg-[rgba(56,255,63,0.10)] h-[31px] min-w-[92px] w-[92px] rounded-[8px] text-[16px] font-[700] space-grotesk'>Redeem</button>
                </div>
            </div>

            <div className="bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <h4 className='text-[#FFF] text-[16px] font-[700] space-grotesk leading-[120%] mt-[10px]'>My Codes</h4>
                <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>
                    Share these codes with friends so they can become eligible to invest. Each code is single-use.
                </p>

                <div className='text-[#38FF3F] my-[10px] border-[1px] border-[rgba(56,255,63,0.30)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(56,255,63,0.10)] h-[28px] min-w-[105px] w-[100px] flex items-center justify-center rounded-[8px] text-[16px] font-[700] space-grotesk gap-[8px]'>
                    DE85AD
                    <button onClick={() => handleCopy('DE85AD')}>
                        {!copied ? (
                            <Icon icon="tabler:copy" width="16" height="16" />
                        ) : (
                            <Icon icon="tabler:check" width="16" height="16" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InvestingEligibility
