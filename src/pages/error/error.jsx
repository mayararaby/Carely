import React from 'react'
import "./index.css"
import doctorImage from "../../assets/homeIcon.png"
import { Pages } from "../../containers/pages"
export const Error = () => {

    return (
        <div className='main-screen'>
            <Pages>
                <div className='main-container-info'>
                    <h1 className='main-head-title'>Error</h1>
                </div>
                <div className='image-container'>

                    <img src={doctorImage} alt='doctor-image' className='image-home' />
                </div>
            </Pages>
        </div>

    )
}
