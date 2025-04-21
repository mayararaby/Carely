import React from 'react'
import './index.css'
import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header-container" role="banner">
        <p 
          className='header-title cursor' 
          onClick={() => navigate('/')} 
          role="link" 
          tabIndex={0} 
          aria-label="Go to Home"
          onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
        >
          Carely
        </p>
        <nav className="header-nav-icons" aria-label="Main navigation">
          <IoMdHome 
            size={24} 
            color='#007cfe' 
            className='cursor'  
            onClick={() => navigate('/')} 
            role="link"
            tabIndex={0}
            aria-label="Home"
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
          />
          <SlCalender 
            size={24} 
            color='#007cfe' 
            className='cursor'  
            onClick={() => navigate('/book', { replace: true })} 
            role="link"
            tabIndex={0}
            aria-label="Book appointment"
            onKeyDown={(e) => e.key === 'Enter' && navigate('/book', { replace: true })}
          />
          <FaUserAlt 
            size={24} 
            color='#007cfe' 
            className='cursor'  
            onClick={() => navigate('/userBooking', { replace: true })} 
            role="link"
            tabIndex={0}
            aria-label="User appointment"
            onKeyDown={(e) => e.key === 'Enter' && navigate('/userBooking', { replace: true })}
          />
        </nav>
      </header>
      
    )
}
