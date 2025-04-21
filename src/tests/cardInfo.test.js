import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardInfo } from '../component/card/card';
import '@testing-library/jest-dom';

test('displays correct rating on the card', () => {
  const mockData = {
    name: 'Dr. John Doe',
    photo: 'test-photo.jpg',
    specialty: 'Cardiologist',
    availability: true,
    location: 'New York',
    id: '123',
    bookedSlots: [],
    rating: 4.5,
  };

  render(
    <MemoryRouter>
      <CardInfo {...mockData} />
    </MemoryRouter>
  );

  expect(screen.getByText(/Dr. John Doe/i)).toBeInTheDocument();
});
