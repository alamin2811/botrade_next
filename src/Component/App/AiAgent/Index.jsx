import React from 'react'
import Breadcumbs from '../../Core/Breadcumbs'
import Header from '../../Core/Header/Header'
import Footer from '../../Core/Footer'
import ContainerWrapper from '../../Core/ContainerWrapper'
import ChatCard from './ChatCard'

const AiAgent = () => {
  return (
    <div className="overflow-x-hidden">
        <Header/>
        <Breadcumbs pageTitle="AI Agent" pageSubtitle="Interact with our AI agent to get insights and assistance with your trading strategies" display="hidden"/>
        <ContainerWrapper>
            <ChatCard/>
        </ContainerWrapper>
        <Footer/>
    </div>
  )
}

export default AiAgent