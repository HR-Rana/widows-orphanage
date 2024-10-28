


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import HeroSection from '../pages/dashboard/heroSection'
import About from '../pages/dashboard/about'
import Programme from '../pages/dashboard/programme'
import Sponsor from '../pages/dashboard/sponsor'
import Gallary from '../pages/gallary'
import Mission from '../pages/dashboard/mission'
import Success from '../pages/dashboard/success'
import Contact from '../pages/contact'

export default function routing() {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/Hero' element={<HeroSection />} />
        <Route path='/dashboard/about' element={<About />} />
        <Route path='/dashboard/programme' element={<Programme />} />
        <Route path='/dashboard/sponsor' element={<Sponsor />} />
        <Route path='/dashboard/gallary' element={<Gallary />} />
        <Route path='/dashboard/mission' element={<Mission />} />
        <Route path='/dashboard/success' element={<Success />} />
        <Route path='/dashboard/contact' element={<Contact />} />
    </Routes>
  )
}
