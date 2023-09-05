

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BookingForm, initializeTimes, updateTimes } from './BookingForm'; // Assurez-vous d'importer correctement les fonctions depuis votre composant
import { BookingPage } from './booking';
import React from 'react';
// Mockez la fonction fetchAPI pour qu'elle renvoie des données simulées
import { fetchAPI } from './api';

jest.mock('./api');

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct initial times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00']);
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

  render(<BookingPage />);

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

  render(<BookingPage />);

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

describe('BookingForm', () => {
  it('vérifie que la validation HTML5 est appliquée', () => {
    render(<BookingForm />);
    
    // Test de la validation du champ de date
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-09-01' } });
    expect(dateInput.checkValidity()).toBe(true);

    // Test de la validation du champ de l'heure
    const timeSelect = screen.getByLabelText('Choose time');
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    expect(timeSelect.checkValidity()).toBe(true);

    // Test de la validation du champ des invités
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.checkValidity()).toBe(true);

    // Test de la validation du champ de l'occasion
    const occasionSelect = screen.getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    expect(occasionSelect.checkValidity()).toBe(true);
  });

  it('vérifie les fonctions de validation JavaScript', () => {
    // Testez la validation d'une date valide
    const isValidDate = BookingForm.validateDate('2023-09-01');
    expect(isValidDate).toBe(true);

    // Testez la validation d'une date invalide
    const isInvalidDate = BookingForm.validateDate('invalid-date');
    expect(isInvalidDate).toBe(false);

    // Testez la validation d'une heure valide
    const isValidTime = BookingForm.validateTime('17:00');
    expect(isValidTime).toBe(true);

    // Testez la validation d'une heure invalide
    const isInvalidTime = BookingForm.validateTime('invalid-time');
    expect(isInvalidTime).toBe(false);

    // Testez la validation du nombre d'invités valide
    const isValidGuests = BookingForm.validateGuests(5);
    expect(isValidGuests).toBe(true);

    // Testez la validation du nombre d'invités invalide
    const isInvalidGuests = BookingForm.validateGuests(0);
    expect(isInvalidGuests).toBe(false);

    // Testez la validation de l'occasion valide
    const isValidOccasion = BookingForm.validateOccasion('Birthday');
    expect(isValidOccasion).toBe(true);

    // Testez la validation de l'occasion invalide
    const isInvalidOccasion = BookingForm.validateOccasion('InvalidOccasion');
    expect(isInvalidOccasion).toBe(false);
  });

});