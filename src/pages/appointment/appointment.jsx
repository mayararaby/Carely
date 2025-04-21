import React, { useCallback, useEffect, useState } from 'react'
import { Pages } from '../../containers/pages'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import "./index.css"
import Button from '@mui/material/Button';
import { AppointmentCalendar } from '../../component/calender/calender';
import { useDispatch, useSelector } from 'react-redux';
import { setDoctorsInfo } from '../../redux/actions/actions';
export const Appointment = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    if (!id) navigate(`/`);

    const [BookDate, onBookDate] = useState();
    const { state } = useLocation();
    const { name, specialty, bookedSlots, location } = state;
    const doctorsInfo = useSelector((state) => state.doctors);
    const dispatch = useDispatch();

    const saveAppointment = useCallback(() => {
        const userAppointment = JSON.parse(localStorage.getItem("userAppointment")) || [];
        userAppointment.push({
            date: BookDate,
            doctor: name,
            specialty: specialty,
            location
        });
        localStorage.setItem("userAppointment", JSON.stringify(userAppointment));

        const updatDoctorSlots = doctorsInfo?.map(doctor => {
            if (doctor.id == id) {
                return {
                    ...doctor,
                    bookedSlots: [...doctor.bookedSlots, BookDate.toString()]
                };
            }
            return doctor;
        });
        dispatch(setDoctorsInfo(updatDoctorSlots));
        navigate("/userBooking", { replace: true });
    }, [BookDate, name, specialty]);

    return (
        <div className='appointment-container'>
            <Pages>
                <main className='appointment-main' aria-label="Appointment booking page">
                    <section className='preview-Information' aria-label="Doctor booking details">
                        <Card
                            sx={{ width: { xs: '100%', md: '50%' }, maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            aria-labelledby="doctor-info-heading"
                            role="region"
                        >
                            <Box>
                                <CardContent>
                                    <Typography id="doctor-info-heading">
                                        <span className='appointment-card-info'>{specialty} -  {name}</span>
                                    </Typography>
                                    <hr />
                                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <AppointmentCalendar bookedSlots={bookedSlots} onBookDate={onBookDate} />
                                    </Stack>
                                    <div className='confirm-button-container'>
                                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Button
                                                disabled={!BookDate}
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                onClick={saveAppointment}
                                                aria-label={`Confirm booking with Dr. ${name} in ${specialty}`}
                                            >
                                                Confirm Booking
                                            </Button>
                                        </Stack>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </section>
                </main>
            </Pages>
        </div>
    );
};