import React, { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';

export const AppointmentCalendar = ({ bookedSlots, onBookDate }) => {
    const slotsDates = useMemo(() => {
        return bookedSlots.map(date => new Date(date));
    }, [bookedSlots]);

    const [value, setValue] = useState(null);
    const [confirmedBooking, setConfirmedBooking] = useState(null);

    const today = new Date();

    const isSameDay = (date1, date2) =>
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();

    const isPastDate = (date) => date < new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const isBooked = (date) => slotsDates.some((d) => isSameDay(d, date));

    const handleChange = (date) => {
        if (!isPastDate(date) && !isBooked(date)) {
            setValue(date);
            setConfirmedBooking(date);
            onBookDate(date);
        }
    };

    const tileDisabled = ({ date }) => {
        return isPastDate(date) || isBooked(date);
    };

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            if (isBooked(date)) {
                return <div className="booked-label red" aria-hidden="true">Booked</div>;
            }
            if (confirmedBooking && isSameDay(date, confirmedBooking)) {
                return <div className="booked-label green" aria-hidden="true">Booked</div>;
            }
        }
        return null;
    };

    return (
        <div className="calendar-wrapper" role="region" aria-label="Appointment calendar">
            <Calendar
                onChange={handleChange}
                value={value}
                tileDisabled={tileDisabled}
                tileContent={tileContent}
                showNavigation={false}
                activeStartDate={today}
                minDate={today}
                maxDate={new Date(today.getFullYear(), today.getMonth() + 1, 0)}
                showNeighboringMonth={false}
            />

            {confirmedBooking && (
                <div className="booking-success" role="status" aria-live="polite">
                    ✅ Booking confirmed for: <strong>{confirmedBooking.toDateString()}</strong>
                </div>
            )}
        </div>
    );
};

