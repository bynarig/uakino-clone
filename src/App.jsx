import { useState } from 'react'

import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./navbar/navbar.jsx";

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar />}>
          {/*<Route index element={<Home />} />*/}
          {/*<Route path="blogs" element={<Blogs />} />*/}
          {/*<Route path="contact" element={<Contact />} />*/}
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
