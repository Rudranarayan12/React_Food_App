import React from 'react'
import HeroSection from "../Component/HeroSection";
import ImproveSkills from "../Component/ImproveSkills";
import QuoteSection from "../Component/QuoteSection";
import ChiefSection from "../Component/ChiefSection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
        <ImproveSkills/>
        <QuoteSection/>
        <ChiefSection/>
    </div>
  )
}

export default Home
