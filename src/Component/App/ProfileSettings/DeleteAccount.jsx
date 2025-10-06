import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const DeleteAccount = () => {
    return (
        <div className="bg-[rgba(255,255,255,0.05)] rounded-[15px] overflow-hidden p-[30px] md:p-[15px]">
            <div className="flex items-center justify-start gap-[10px]">
                <div className="min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px] rounded-[15px] flex items-center justify-center text-[#FF1F1F] bg-[rgba(255,255,255,0.10)]">
                    <Icon icon="mage:home-cross" width="24" height="24" />
                </div>
                <div className="relative">
                    <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Delete Account</h4>
                    <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>Permanently delete your account and all associated data. This action cannot be undone.</p>
                </div>
            </div>

            <div className="flex items-center justify-between sm:flex-col sm:justify-start sm:items-start gap-[10px] bg-[rgba(255,255,255,0.05)] px-[15px] py-[10px] rounded-[15px] mt-[20px]">
                <div className="flex items-center justify-start gap-[20px]">
                    <div className="text-[#FF1F1F]">
                        <Icon icon="mage:user-cross" width="24" height="24" />
                    </div>
                    <div className="relative">
                        <h4 className='text-[#FFF] text-[18px] font-[700] space-grotesk leading-[120%]'>Delete Account</h4>
                        <p className='text-[14px] font-[500] mb-0 text-[rgba(255,255,255,0.90)]'>This will permanently delete your account and all data. This action cannot be undone</p>
                    </div>
                </div>
                <Link href="#" className="flex items-center justify-center sm:ml-[45px] h-[27px] px-[10px] text-[#FF1F1F] text-[16px] font-[700] space-grotesk border-[1px] bg-[rgba(255,31,31,0.05)] rounded-[8px] border-[rgba(255,31,31,0.30)]">
                    Delete
                </Link>
            </div>
        </div>
    )
}

export default DeleteAccount