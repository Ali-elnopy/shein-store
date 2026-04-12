import React from 'react'
import AnnouncementBar from '../components/home/AnnouncementBar'
import HeroSection from '../components/home/HeroSection'
import BrowseByIntent from '../components/home/BrowseByIntent'
import TrendingEdit from '../components/home/TrendingEdit'
import NewsletterSection from '../components/home/NewsletterSection'

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <BrowseByIntent />
      <TrendingEdit />
      <NewsletterSection/>
    </>
  )
}

export default Home