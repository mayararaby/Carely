import React, { useMemo, useState } from 'react';
import { Pages } from '../../containers/pages';
import { CardInfo } from '../../component/card/card';
import "./index.css";
import { Avaiablility } from '../../component/avaiablility/avaiablility';
import { useSelector } from 'react-redux';
import { SpecialtyCheckboxes } from '../../component/specialtyCheckboxe/specialtyCheckboxes';
export const Doctors = () => {
    const [selectedSpecialties, setSelectedSpecialties] = useState([]);
    const [selectedAvailability, setDoctorAvailibilty] = useState([]);
    const availabledoctors = useSelector((state) => state.doctors);

    const filteredDoctors = useMemo(() => {
        return availabledoctors?.filter(doctor => {
          const matchSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(doctor.specialty);
          const matchAvailability = selectedAvailability.length === 0 || selectedAvailability.includes(doctor.availability);
          return matchSpecialty && matchAvailability;
        });
    }, [selectedSpecialties, selectedAvailability]);

    return (
        <Pages>
            <div className='doctors-container'>
                <main className='main-doctors-section' aria-label="Doctors page main content">
                    <section className='filter-section' aria-label="Doctor filters">
                        <SpecialtyCheckboxes
                            selectedSpecialties={selectedSpecialties}
                            setSelectedSpecialties={setSelectedSpecialties}
                        />
                        <Avaiablility
                            selectedAvailability={selectedAvailability}
                            setDoctorAvailibilty={setDoctorAvailibilty}
                        />
                    </section>

                    <section className='cards-container' aria-label="Filtered doctor results">
                        {
                            filteredDoctors.map((doctoreInfo, index) => (
                                <CardInfo key={index} {...doctoreInfo} />
                            ))
                        }
                    </section>
                </main>
            </div>
        </Pages>
    );
};
