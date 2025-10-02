import React from 'react'
import { Icon } from '@iconify/react'
import Header from '../../Core/Header/Header'
import Footer from '../../Core/Footer'
import Breadcumbs from '../../Core/Breadcumbs'
import Link from 'next/link'
import InvestContent from './InvestContent/InvestContent'


const Invest = () => {
  return (
    <div className="overflow-x-hidden">
        <Header/>
        <Breadcumbs pageTitle="AI Trading Pool" pageSubtitle="AI-powered trading strategies with machine learning algorithms"/>
        <InvestContent/>
        
        
        <Footer/>
    </div>
  )
}

export default Invest