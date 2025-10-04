import React from 'react'
import Header from '../../Core/Header/Header'
import Breadcumbs from '../../Core/Breadcumbs'
import ContainerWrapper from '../../Core/ContainerWrapper'
import Footer from '../../Core/Footer'
import TerminalTable from './TerminalTable'

const Terminal = () => {
  return (
    <div className="overflow-x-hidden">
        <Header/>
        <Breadcumbs pageTitle="Terminal" pageSubtitle="Real-time trading analysis and social media insights from our AI systems" display="hidden"/>
        <ContainerWrapper>
            <TerminalTable/>
        </ContainerWrapper>
        <Footer/>
    </div>
  )
}

export default Terminal