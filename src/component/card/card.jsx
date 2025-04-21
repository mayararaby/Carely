import React from 'react'
import "./card.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { SlCalender } from "react-icons/sl";
import { padgeColor } from '../../constants/colors';
import { CiLocationOn } from "react-icons/ci";
import { userLocation } from '../../helpers';
import Rating from "react-rating";
import star from "../../assets/star.png";
import activeStar from "../../assets/star active.png";

const StyledBadge = styled(Badge, {
    shouldForwardProp: (prop) => prop !== 'availability'
})(({ theme, availability }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: availability ? '#44b700' : 'gray',
        color: availability ? '#44b700' : 'gray',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            content: '""',
        },
    }
}));


export const CardInfo = ({ name, photo, specialty, availability, location, id, bookedSlots, rating }) => {
    const navigate = useNavigate();
    const padgeCircleColor = padgeColor[Math.floor(Math.random() * padgeColor.length)]
    console.log("rating -->", rating)
    const handleCardClick = () => {
        navigate(`/appointment/${id}`, {
            state: { name, photo, specialty, availability, location, bookedSlots, rating },
            replace: true
        });
    };

    return (
        <Card sx={{ width: 300 }}>
            <CardHeader
                avatar={
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        availability={availability}
                    >
                        <Avatar sx={{ bgcolor: padgeCircleColor }} aria-label="recipe">
                            {name?.charAt(0)?.toUpperCase()}
                        </Avatar>
                    </StyledBadge>

                }
                title={<div>
                    <div>
                        {name}
                    </div>
                    <Rating
                        className="rating-Field"
                        value={rating}
                        initialRating={rating}
                        fractions={1}
                        readonly={true}
                        emptySymbol={<img src={star} alt="empty star" />}
                        fullSymbol={<img src={activeStar} alt="filled star" />}
                    />
                </div>}
                subheader={specialty}

            />
            <CardMedia
                component="img"
                height="194"
                image={photo}
                alt={name}
                sx={{ objectFit: 'contain' }}
            />

            <CardActions disableSpacing >
                <IconButton aria-label="Book appointment" disabled={!availability} role="button">
                    <SlCalender onClick={handleCardClick} size={24} color={availability ? '#007cfe' : "gray"} className={availability && 'cursor'} />
                </IconButton>
                <IconButton aria-label="Book appointment" role="button">
                    <CiLocationOn size={24} color={'#007cfe'} className={'cursor'}
                        onClick={() => (userLocation(`https://www.google.com/maps?q=${location.lat},${location.lng}`))}
                    />
                </IconButton>
            </CardActions>
        </Card>
    );
}
