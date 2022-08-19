import React from 'react'
import Home from './Home';
import {Route, Routes} from 'react-router-dom';
import Cuisine from './Cuisine';
import NotFound from '../components/NotFound'
import Searched from './Searched'
import Recipe from './Recipe';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}/>
      <Route path="/recipe/:name" element={<Recipe />}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default Pages
