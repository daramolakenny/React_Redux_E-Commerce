import React from 'react'
import Slider from '../components/Slider';
import NavigateButtons from '../components/NavigatButtons';
import Footer from '../components/Footer';
import Productsection from '../components/Productsection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <Productsection />
      <Footer />
    </>
  )
}

export default Home