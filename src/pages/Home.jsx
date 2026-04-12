import React from 'react'
import AnnouncementBar from '../components/home/AnnouncementBar'
import HeroSection from '../components/home/HeroSection'
import BrowseByIntent from '../components/home/BrowseByIntent'
import TrendingEdit from '../components/home/TrendingEdit'

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <BrowseByIntent />
      <TrendingEdit />
    </>
  )
}

export default Home