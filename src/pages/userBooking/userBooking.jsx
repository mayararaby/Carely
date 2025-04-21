import React from 'react'
import { Pages } from '../../containers/pages'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import "./index.css"
import { userLocation } from '../../helpers';
import { CiLocationOn } from 'react-icons/ci';
export const UserBooking = () => {
    const userAppointment = JSON.parse(localStorage.getItem("userAppointment")) || [];
    const navigate = useNavigate();
    if (userAppointment?.length) navigate(`/`)


    return (
        <div className='user-booking-container'>
            <Pages>
                <div className='user-booking-info'>
                    <Card sx={{ width: { xs: '100%', md: '50%' }, maxWidth: '100%' }}>
                        <Box>
                            <CardContent>
                                <Typography>
                                    <span className='user-booking-card'>Your appointment</span>
                                </Typography>
                                <hr />

                                {userAppointment?.length ? userAppointment.map((dateInfo, index) => (
                                    <Stack
                                        key={index}
                                        direction="row"
                                        spacing={2}
                                        sx={{ justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Typography>
                                            <span className='user-booking-card'>
                                                {dateInfo?.specialty} - {dateInfo?.doctor}
                                            </span>
                                        </Typography>

                                        <Typography>
                                            <span className='user-booking-card'>
                                                {new Date(dateInfo?.date)?.toDateString()}
                                            </span>
                                        </Typography>
                                        <Typography>
                                            <CiLocationOn size={24} color={'#007cfe'} className={'cursor'}
                                                onClick={() => (userLocation(`https://www.google.com/maps?q=${dateInfo.location.lat},${dateInfo.location.lng}`))}
                                            />

                                        </Typography>
                                    </Stack>
                                )) : <div className='user-empty-booking'>No Available Booking</div>}
                            </CardContent>
                        </Box>
                    </Card>
                </div>
            </Pages>
        </div>

    )
}
