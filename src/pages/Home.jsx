import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Heroicons from '../components/Heroicons';
// import Categorieslist from '../components/categorieslist';
import Slider from '../components/Slider';
import NavigateButtons from '../components/NavigatButtons';

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      {/* <Hero /> */}
      {/* <Heroicons /> */}
      <NavigateButtons />
      {/* <Categorieslist /> */}
    </>
  )
}

export default Home