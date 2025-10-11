import React from 'react'
import AboutHero from '../components/HeroAbout'
import VisionMission from '../components/VissionMission'
import HowItWork from "../components/HowItWork"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/Faq"
import OurTeam from '../components/OurTeam'
import SecondAbout from '../components/SecondAbout'

const About = () => {
  return (
    <>
    <AboutHero/>
    <SecondAbout/>
    <HowItWork/>
    <VisionMission/>
    <Testimonials/>
    <OurTeam/>
    <FAQ/>
    </>
  )
}

export default About