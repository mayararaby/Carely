import React, { useState } from 'react';
import { specialties } from '../../../__mocks__/doctors';
import './index.css'
export const SpecialtyCheckboxes = ({ selectedSpecialties, setSelectedSpecialties }) => {
    const handleChange = (event) => {
        const { value, checked } = event.target;
        setSelectedSpecialties(prev =>
            checked ? [...prev, value] : prev.filter(specialty => specialty !== value)
        );
    };

    return (
        <fieldset className='specialty-container' aria-labelledby="specialty-label">
            <legend id="specialty-label" className='header-item'>Specialties</legend>
            {specialties.map((specialty, index) => (
                <label key={index} className="specialty-checkbox">
                    <input
                        type="checkbox"
                        value={specialty}
                        checked={selectedSpecialties.includes(specialty)}
                        onChange={handleChange}
                        aria-checked={selectedSpecialties.includes(specialty)}
                        aria-label={`Filter by ${specialty}`}
                    />
                    {specialty}
                </label>
            ))}
        </fieldset>
    );
};
