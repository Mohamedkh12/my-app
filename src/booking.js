import React, { useEffect, useState, useCallback } from "react";
import { BookingForm } from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

export function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);

   function initializeTimes() {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return mockAvailableTimes;
  }
  
  useEffect(() => {
    const mockAvailableTimes = initializeTimes(); // Utilisez la fonction pour initialiser les horaires disponibles
    setAvailableTimes(mockAvailableTimes);
  }, []);

  const updateTimes = useCallback((date) => {
    fetchAPI(date)
      .then((data) => {
        setAvailableTimes(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des horaires disponibles : ", error);
      });
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const response = await submitAPI(formData);

      if (response.success) {
        console.log("Formulaire soumis avec succès !");
      } else {
        console.error("Erreur lors de la soumission du formulaire.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={handleSubmit}
      />
    </div>
  );
}
