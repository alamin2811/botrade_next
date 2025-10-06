import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useState } from 'react'

const WalletInfo = () => {
    // Full wallet address (you can replace this dynamically)
    const walletAddress = "0x4781cA93bE7D22f32";

    // Show only first 6 and last 4 characters
    const shortAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

    // Copy state
    const [copied, setCopied] = useState(false);

    // Copy function
    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // revert after 3s
    };

    return (
        <div className="bg-[rgba(255,255,255,0.05)] rounded-[15px] overflow-hidden p-[30px] md:p-[15px] mb-[30px] md:mb-[20px]">
            {/* Header */}
            <div className="flex items-center justify-start gap-[10px]">
                <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[15px] flex items-center justify-center text-[#FFF] bg-[rgba(255,255,255,0.10)]">
                    <Icon icon="tabler:wallet" width="24" height="24" />
                </div>
                <div className="relative">
                    <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>
                        Wallet Information
                    </h4>
                    <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>
                        Your connected wallet details
                    </p>
                </div>
            </div>

            {/* External Wallet */}
            <div className="flex items-center justify-between sm:flex-col sm:justify-start sm:items-start gap-[10px] bg-[rgba(56,255,63,0.08)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#38FF3F]">
                        <Icon icon="uil:envelope" width="24" height="24" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>
                            External Wallet
                        </h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>
                            {shortAddress}
                        </p>
                    </div>
                    <div className="flex items-center justify-center sm:mt-[-20px] h-[27px] px-[10px] text-[#38FF3F] text-[16px] font-[700] space-grotesk border-0 bg-[rgba(56,255,63,0.10)] rounded-[8px]">
                        Connected
                    </div>
                </div>

                {/* Copy / Copied Button */}
                <button
                    onClick={handleCopy}
                    className={`flex items-center justify-center ml-[45px] h-[27px] px-[10px] gap-[5px] text-[16px] font-[700] space-grotesk border-[1px] rounded-[8px] transition-all duration-300
                        ${copied
                            ? 'text-[#38FF3F] bg-[rgba(56,255,63,0.10)] border-[rgba(56,255,63,0.30)]'
                            : 'text-[#38FF3F] bg-[rgba(255,255,255,0.05)] border-[rgba(56,255,63,0.30)]'
                        }`}
                >
                    {copied ? (
                        <>
                            <Icon icon="mdi:check-bold" width="16" height="16" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Icon icon="tabler:copy" width="16" height="16" />
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Network Info */}
            <div className="flex items-center justify-between sm:flex-col sm:justify-start sm:items-start gap-[10px] bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#FFFFFF]">
                        <Icon icon="hugeicons:cellular-network" width="24" height="24" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>
                            Network
                        </h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>
                            Avalanche
                        </p>
                    </div>
                </div>
                <Link
                    href="#"
                    className="flex items-center ml-[45px] justify-center h-[27px] px-[10px] text-[rgba(255,255,255,0.50)] text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,255,255,0.05)] rounded-[8px] border-[rgba(255,255,255,0.20)]"
                >
                    Connected
                </Link>
            </div>
        </div>
    )
}

export default WalletInfo
