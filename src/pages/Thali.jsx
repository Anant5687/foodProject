import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Chappati from "../components/Varities/Chappati/Chappati"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewCard from '../components/CheckOut/NewCard';


const Thali = () => {
  return (
    <> <Router>
      <Navbar />
      
        <Routes>
        <Route path="/" element={<Chappati/>} />
        <Route path="/card" element={<NewCard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Thali
