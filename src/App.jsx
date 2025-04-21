import './App.css'
import { Home } from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Doctors } from './pages/doctors/doctors';
import { Appointment } from './pages/appointment/appointment';
import { useEffect } from 'react';
import { UserBooking } from './pages/userBooking/userBooking';
import { Error } from './pages/error/error';

function App() {
  useEffect(()=>{
    localStorage.setItem("userAppointment",JSON.stringify([]))
  },[])

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Doctors />} />
          <Route path="/appointment/:id" element={<Appointment />} />
          <Route path="/userBooking" element={<UserBooking />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App