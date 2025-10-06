import React from 'react'
import Header from '../../Core/Header/Header'
import ContainerWrapper from '../../Core/ContainerWrapper'
import Footer from '../../Core/Footer'
import AccountInfo from './AccountInfo'
import WalletInfo from './WalletInfo'
import InvestingEligibility from './InvestingEligibility'
import DeleteAccount from './DeleteAccount'

const ProfileSettings = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <div className="pt-[215px] lg:pt-[120px] md:pt-[100px] pb-[120px] lg:pb-[80px] md:pb-[60px]">
                <ContainerWrapper>
                    <div className="max-w-[850px] mx-auto w-full">
                        <h2 className='text-[50px] lg:text-[40px] md:text-[32px] font-[700] uppercase text-white space-grotesk mb-[20px] lg:mb-[10px] leading-[120%]'>Profile Settings</h2>
                        <h6 className='text-[18px] lg:text-[16px] md:text-[14px] font-[600] text-white mb-[40px] lg:mb-[30px] md:mb-[20px]'>Manage your account and preferences</h6>
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