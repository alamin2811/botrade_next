import React from 'react'
import Header from './Header/Header'
import HomeBanner from './HomeBanner/HomeBanner'
import FeatureSection from './FeatureSection/FeatureSection'
import BackedBy from './BackedBy/BackedBy'
import OurPartners from './OurPartners/OurPartners'
import Faq from './Faq/Faq'
import HomeFooter from '../../Core/HomeFooter/HomeFooter'
import AboutUs from './AboutUs/AboutUs'
import HowItWorks from './HowItWorks/HowItWorks'



const HomeComponent = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HomeBanner/>
      <FeatureSection/>
      <BackedBy/>
      <OurPartners/>
      <AboutUs/>
      
      <HowItWorks/>
      <Faq/>
      {/* 
      <Faq/>
      <HomeFooter/> */}
    </div>
  )
}

export default HomeComponent
