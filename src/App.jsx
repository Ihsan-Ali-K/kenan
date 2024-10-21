import React from 'react'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Statistics from './components/statistics/Statistics'
import HorizonatalLine from './components/horizontalLine/HorizonatalLine'
import LogoSlider from './components/logoslider/LogoSlider'
import InfoCardsSection from './components/infoCardsSection/InfoCardsSection'
import TextWithCard from './components/textWith-image/TextWithImage'
import FeatureCard from './components/featureCards/FeatureCard'
import ContentCard from './components/content-card/ContentCard'
import Footer from './components/footer/Footer'
import BackToTopButton from './components/back-to-top-btn/BackToTopButton'

function App() {

  return (
    <div className=''>
    <Navbar />
    <Hero />
    <Statistics />
    <HorizonatalLine start="Tərəfdaşlar" end="Hamısını gör" />
    <LogoSlider />
    <HorizonatalLine  start="Xidmətlər" end="Hamısını gör" />
    <InfoCardsSection />
    <TextWithCard />
    <HorizonatalLine start="Xəbərlər" end="Hamısını gör"/>
    <FeatureCard />
    <ContentCard />
    <Footer />
    <BackToTopButton />
    </div>
  )
}

export default App
