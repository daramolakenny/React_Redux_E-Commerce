import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
// import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Product from './pages/Product'
import Cart from './pages/Cart'
import FilteredProducts from './components/FilteredProducts';
import SingleProducts from './components/SingleProducts';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Product' element={<Product />} />
        {/* <Route path='Categories' element={<Categories />} /> */}
        {/* <Route path='*' element={<div>Page not found</div>} /> */}

        <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
        <Route path='/filteredProducts/:type/:id' element={<SingleProducts />} />
      </Routes>
      {/* <Carticon /> */}
    </div>
  )
}

export default App
