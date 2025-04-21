import React from 'react'
import "./index.css"
import doctorImage from "../../assets/homeIcon.png"
import { Pages } from "../../containers/pages"
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='main-screen'>
            <Pages>
                <div className='main-container-info'>
                    <div className="main-container-title">
                        <span>Welcome to</span>
                        <h1 className='main-head-title'>Carely</h1>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={doctorImage} alt='A doctor with a stethoscope' className='image-home' />
                </div>
                <div>
                    <h2
                        className='main-head-title booking-title'
                        role="button"
                        tabIndex={0}
                        aria-label="Book an appointment now"
                        onClick={() => (navigate('book', { replace: true }))}
                        onKeyDown={(e) => e.key === 'Enter' && navigate('book', { replace: true })}
                    >
                        Book Now
                    </h2>
                </div>
            </Pages>
        </div>


    )
}
