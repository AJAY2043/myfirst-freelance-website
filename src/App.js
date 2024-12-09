import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/Project/LandingPage'
import ContactUs from './Pages/ContactUs/ContactUs'
import Resources from './Pages/Resources/Resources'
import Credentials from './Pages/Credentials/Credentials'
import Company from './Pages/AboutUs/Company/Company'
import OurTeam from './Pages/AboutUs/OurTeam/OurTeam'
import News from './Pages/AboutUs/News/News'
import Markets from './Pages/AboutUs/Markets/Markets'
import Material from './Pages/AboutUs/Material/Material'
import Strengths from './Pages/AboutUs/Strengths/Strengths'
import RunFlatSystems from './Pages/OurServices/RunFlatSystems/RunFlatSystems'
import MilitaryRunFlatSystems from './Pages/OurServices/MilitaryRunFlatSystems/MilitaryRunFlatSystems'
import BeadLockSystems from './Pages/OurServices/BeadLockSystems/BeadLockSystems'
import HeavyDutyWheels from './Pages/OurServices/HeavyDutyWheels/HeavyDutyWheels'
import MilitaryWheels from './Pages/OurServices/MilitaryWheels/MilitaryWheels'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        
           <Route path='/company' element={<Company/>}/>
           <Route path='/ourteam' element={<OurTeam/>}/>
           <Route path='/news' element={<News/>}/>
           <Route path='/markets' element={<Markets/>}/>
           <Route path='/material' element={<Material/>}/>
           <Route path='/strengths' element={<Strengths/>}/>
       
          <Route path='/runflatsystems' element={<RunFlatSystems/>}/>
          <Route path='/militaryrunflatsystem' element={<MilitaryRunFlatSystems/>}/>
          <Route path='/beadlocksystem' element={<BeadLockSystems/>}/>
          <Route path='/heavydutywheels' element={<HeavyDutyWheels/>}/>
          <Route path='/militarywheels' element={<MilitaryWheels/>}/>

        <Route path='/credentials' element={<Credentials/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
