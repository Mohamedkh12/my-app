import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm'; 
import  initializeTimes from "./BookingForm"
import updateTimes from "./BookingForm"
import { BookingPage } from './booking';
// Mockez la fonction fetchAPI pour qu'elle renvoie des données
const fetchAPI = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct initial times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes function returns the same value as provided in state', () => {
  const setValue = ['17:00', '18:00', '19:00'];
  const date = "2023-09-15";
  const updatedTimes = updateTimes(setValue, date);
  expect(updatedTimes).toEqual(setValue);
});

it('should initialize availableTimes with data from fetchAPI', async () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockResolvedValueOnce(mockAvailableTimes);
  
    render(<BookingPage fetchAPI={fetchAPI} />);
  
    // Attendez que les données de fetchAPI soient chargées pour chaque élément séparément
    await waitFor(() => {
      expect(screen.getByText('17:00')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('18:00')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('19:00')).toBeInTheDocument();
    });
  });
  
  it('should update availableTimes when date is selected', async () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockResolvedValueOnce(mockAvailableTimes);
  
    render(<BookingPage fetchAPI={fetchAPI} />);
  
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-09-15' } });
  
    // Attendez que les données de fetchAPI soient chargées pour chaque élément séparément
    await waitFor(() => {
      expect(screen.getByText('17:00')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('18:00')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('19:00')).toBeInTheDocument();
    });
  });
  