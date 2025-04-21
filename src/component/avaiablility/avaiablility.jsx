import React from 'react';
import './index.css';

export const Avaiablility = ({ selectedAvailability, setDoctorAvailibilty }) => {
    const handleChange = (event) => {
        const { value, checked } = event.target;
        const parsedValue = value === 'true';
        setDoctorAvailibilty(prev =>
            checked ? [...prev, parsedValue] : prev.filter(item => item !== parsedValue)
        );
    };

    const availabilityOptions = [
        { label: 'Available', value: true },
        { label: 'Unavailable', value: false }
    ];

    return (
        <fieldset className='specialty-container' aria-labelledby="availability-label">
            <legend id="availability-label" className='header-item'>Availability</legend>
            {availabilityOptions.map((option, index) => (
                <label key={index} className="specialty-checkbox">
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedAvailability.includes(option.value)}
                        onChange={handleChange}
                        aria-checked={selectedAvailability.includes(option.value)}
                        aria-label={`Show ${option.label} doctors`}
                    />
                    {option.label}
                </label>
            ))}
        </fieldset>
    );
};
