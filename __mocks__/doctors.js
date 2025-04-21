const getRandomBookedDates = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); 
  const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate(); 
  const bookedDates = [];
  
  const numberOfBookedDates = Math.floor(Math.random() * 5) + 1; 
  
  for (let i = 0; i < numberOfBookedDates; i++) {
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
    const randomDate = new Date(currentDate.getFullYear(), currentMonth, randomDay);
    bookedDates.push(randomDate.toString());
  }
  
  return bookedDates;
};

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    specialty: "Cardiologist",
    availability: true,
    location: { lat: 30.0444, lng: 31.2357 },
    bookedSlots: getRandomBookedDates(),
    rating:5
  },
  {
    id: 2,
    name: "Dr. Omar Khaled",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    specialty: "Dermatologist",
    availability: false,
    location: { lat: 31.2001, lng: 29.9187 },
    bookedSlots: getRandomBookedDates(),
    rating:5

  },
  {
    id: 3,
    name: "Dr. Mariam Youssef",
    photo: "https://randomuser.me/api/portraits/women/78.jpg",
    specialty: "Pediatrician",
    availability: true,
    location: { lat: 30.0131, lng: 31.2089 },
    bookedSlots: getRandomBookedDates(),
    rating:4

  },
  {
    id: 4,
    name: "Dr. Hany Tawfik",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    specialty: "Orthopedic Surgeon",
    availability: false,
    location: { lat: 31.0364, lng: 31.3807 },
    bookedSlots: getRandomBookedDates(),
    rating:4

  },
  {
    id: 5,
    name: "Dr. Salma Hussein",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    specialty: "Psychiatrist",
    availability: true,
    location: { lat: 30.7865, lng: 31.0004 },
    bookedSlots: getRandomBookedDates(),
    rating:3

  },
  {
    id: 6,
    name: "Dr. Youssef Adel",
    photo: "https://randomuser.me/api/portraits/men/60.jpg",
    specialty: "General Practitioner",
    availability: true,
    location: { lat: 30.5877, lng: 31.502 },
    bookedSlots: getRandomBookedDates(),
    rating:3

  },
  {
    id: 7,
    name: "Dr. Laila Mostafa",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    specialty: "Gynecologist",
    availability: false,
    location: { lat: 24.0889, lng: 32.8998 },
    bookedSlots: getRandomBookedDates(),
    rating:1

  },
  {
    id: 8,
    name: "Dr. Ahmed Tarek",
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
    specialty: "Neurologist",
    availability: true,
    location: { lat: 30.5965, lng: 32.2715 },
    bookedSlots: getRandomBookedDates(),
    rating:1

  },
  {
    id: 9,
    name: "Dr. Dina Fathy",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    specialty: "Ophthalmologist",
    availability: true,
    location: { lat: 31.2653, lng: 32.3019 },
    bookedSlots: getRandomBookedDates(),
    rating:5

  },
  {
    id: 10,
    name: "Dr. Mostafa Nabil",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    specialty: "ENT Specialist",
    availability: false,
    location: { lat: 30.0444, lng: 31.2357 },
    bookedSlots: getRandomBookedDates(),
    rating:5

  },
  {
    id: 11,
    name: "Dr. Reham Kamal",
    photo: "https://randomuser.me/api/portraits/women/59.jpg",
    specialty: "Dentist",
    availability: true,
    location: { lat: 29.3084, lng: 30.8428 },
    bookedSlots: getRandomBookedDates(),
    rating:3.5

  },
  {
    id: 12,
    name: "Dr. Mahmoud Said",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    specialty: "Radiologist",
    availability: false,
    location: { lat: 30.0444, lng: 31.2357 },
    bookedSlots: getRandomBookedDates(),
    rating:4.3

  },
  {
    id: 13,
    name: "Dr. Rania Ezzat",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    specialty: "Nutritionist",
    availability: true,
    location: { lat: 25.6872, lng: 32.6396 },
    bookedSlots: getRandomBookedDates(),
    rating:4.4

  },
  {
    id: 14,
    name: "Dr. Khaled Zaki",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    specialty: "Urologist",
    availability: true,
    location: { lat: 28.1099, lng: 30.7503 },
    bookedSlots: getRandomBookedDates(),
    rating:4.1

  },
  {
    id: 15,
    name: "Dr. Amal Nassar",
    photo: "https://randomuser.me/api/portraits/women/85.jpg",
    specialty: "Oncologist",
    availability: false,
    location: { lat: 30.0444, lng: 31.2357 },
    bookedSlots: getRandomBookedDates(),
    rating:1

  }
];

export const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Psychiatrist",
  "General Practitioner",
  "Gynecologist",
  "Neurologist",
  "Ophthalmologist",
  "ENT Specialist",
  "Dentist",
  "Radiologist",
  "Nutritionist",
  "Urologist",
  "Oncologist",
  "Endocrinologist",
  "Hematologist",
  "Immunologist",
  "Nephrologist",
  "Pulmonologist",
  "Rheumatologist",
  "Allergist",
  "Infectious Disease Specialist",
  "Gastroenterologist",
  "Anesthesiologist",
  "Plastic Surgeon",
  "Pathologist",
  "Emergency Medicine Specialist",
  "Family Medicine Doctor",
  "Occupational Medicine Specialist"
];