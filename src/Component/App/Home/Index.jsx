import React from 'react'
import Header from '../../Core/Header/Header'
import HomeBanner from './HomeBanner/HomeBanner'
import FeatureSection from './FeatureSection/FeatureSection'
import BackedBy from './BackedBy/BackedBy'
import OurPartners from './OurPartners/OurPartners'
import Faq from './Faq/Faq'
import AboutUs from './AboutUs/AboutUs'
import Roadmap from './Roadmap/Roadmap'
import HowItWorks from './HowItWorks/HowItWorks'
import Footer from '../../Core/Footer'





const HomeComponent = () => {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HomeBanner/>
      <FeatureSection/>
      <BackedBy/>
      <OurPartners/>
      <AboutUs/>
      <Roadmap/>
      <HowItWorks/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default HomeComponent
