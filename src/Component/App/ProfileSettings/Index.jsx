import React from 'react'
import Header from '../../Core/Header/Header'
import ContainerWrapper from '../../Core/ContainerWrapper'
import Footer from '../../Core/Footer'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import AccountInfo from './AccountInfo'
import DeleteAccount from './deleteAccount'
import WalletInfo from './WalletInfo'
import InvestingEligibility from './InvestingEligibility'

const ProfileSettings = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <div className="pt-[225px] pb-[120px]">
                <ContainerWrapper>
                    <div className="max-w-[850px] mx-auto w-full">
                        <h2 className='text-[50px] font-[700] uppercase text-white space-grotesk mb-[20px] leading-[120%]'>Profile Settings</h2>
                        <h6 className='text-[18px] font-[600] text-white mb-[40px]'>Manage your account and preferences</h6>
                        <AccountInfo/>
                        <WalletInfo/>
                        <InvestingEligibility/>
                        <DeleteAccount/>
                    </div>
                </ContainerWrapper>
            </div>
            <Footer />
        </div>
    )
}

export default ProfileSettings