import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PopularCategory from '../components/PopularCategory'
import SpecialDishes from '../components/SpecialDishes'
import Testimonial from '../components/Testimonial'
import OurStory from '../components/OurStorySection'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <PopularCategory />

    {/* right now special dishes not designed */}
    {/* <SpecialDishes /> */}
    <Testimonial />
    <OurStory />
    <Footer />
    </>
  )
}

export default Home