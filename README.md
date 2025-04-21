# Doctor Booking UI Module

This project implements a responsive and accessible Doctor Booking UI for a healthcare platform. The task focuses purely on front-end development, using mock data and basic flow.

## Live Demo
*Note: This project is frontend-only. https://carely-lyart.vercel.app/*

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for fast and optimized builds.
- **Material-UI**: UI component library for building responsive and accessible interfaces.
- **React Router**: Library for handling routing in React applications.
- **React Redux**: State management for managing global state in the application.
- **React Rating**: Used for star rating functionality in doctor cards.
- **React Icons**: Provides a collection of icons for React.
- **React Calendar**: Calendar component used for scheduling.


## Requirements
- Node 16+
- npm or yarn

## How To Run

### Install dependencies
In the project root, run the following command:

$ npm install

### Run the project with Vite
Run the following command to start the development server:

$ npm run dev

The application will be available at [http://localhost:3000](http://localhost:3000).

## Features
1. **Doctor Directory View**
   - Displays a list of doctors with name, photo, specialty, and availability.
   - Includes a "Book Appointment" button on each doctor's card.
   - Allows filtering by specialty and availability.

2. **Booking Modal**
   - Opens when the user clicks "Book Appointment."
   - Displays the doctor's name and available time slots (mocked).
   - Users can select a time slot and click "Confirm" to book an appointment.

3. **Appointments Summary View**
   - Allows users to view their booked appointments.
   - Displays doctor name, date/time, specialty, and location.

## Accessibility
- **Keyboard Navigation**: All elements are navigable by keyboard.
- **ARIA Attributes**: Proper use of `aria-label`, `aria-describedby`, and `role` attributes.
- **Screen Reader Support**: The app is designed to work with screen readers for improved accessibility.

## Future Features
- **Backend Integration**: Implement a backend to handle real data, user authentication, and appointment management.
- **Real-time Booking**: Integrate with a real-time system to display live availability and prevent double-booking.
- **Advanced Filtering**: Add additional filters like location, rating, and consultation type (in-person/online).
- **User Profile**: Allow users to manage their personal details and appointment history.

## Known Limitations
- This is a frontend-only implementation with mocked data.
- The application does not currently integrate with a backend system for real-time data or user management.

## How AI Tools Were Used

- **ChatGPT**: was used to:

- Mock the data.
- Write a clean README.
- Optimize accessibility features in the app.
- Unit testing environment

## Setup Instructions
1. Clone the repository:
$ git clone https://github.com/mayararaby/Carely.git
2. Navigate to the project directory:
$ cd doctor-booking-ui
3. Install the dependencies:
$ npm install
4. Start the development server:
$ npm run dev

The application will be accessible at `http://localhost:3000`.

