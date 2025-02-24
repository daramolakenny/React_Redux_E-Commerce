import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
// import Categories from './pages/Categories'
import Cart from './pages/Cart'
import FilteredProducts from './components/FilteredProducts';
import SingleProducts from './components/SingleProducts';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='*' element={<div>Page not found</div>} />
        <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
        <Route path='/filteredProducts/:type/:id' element={<SingleProducts />} />
      </Routes>
    </div>
  )
}

export default App