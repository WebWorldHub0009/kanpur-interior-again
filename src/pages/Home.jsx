import React from 'react'
import HeroSection from "../components/HeroSection"
import WhatWeDo from '../components/WhatWeDo'
import OurStory from '../components/OurStory'
import PremiumMarquee from '../components/PremiumMarquee'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductSliderKanpur from '../components/ServiceSection'
import StatsSection from '../components/StatsCounter'

const Home = () => {
  return (
 <>
 <HeroSection/>
 <OurStory/>
 <PremiumMarquee/>
 <WhatWeDo/>
 <WhyChooseUs/>
 <PremiumMarquee/>
 <ProductSliderKanpur/>
 <StatsSection/>
 </>
  )
}

export default Home