import React from 'react'


import {Routes,Route} from 'react-router-dom'
import Home from './componants/Home'
import About from './componants/About'
import Services from './componants/Services'
import Footer1 from './Common/Footer1'




const App = () => {
  return (
   <>
  
  <div>
<Routes>

          <Route index path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
</Routes>

<Footer1/>
  </div>
   </>
  )
}
export default App