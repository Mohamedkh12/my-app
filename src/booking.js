import React, { useEffect, useState } from "react";
import { BookingForm } from "./BookingForm";
import { fetchAPI } from "./api";
import { useCallback } from "react";

export function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(""); // Ajoutez un état pour stocker la date sélectionnée

  // Fonction pour initialiser les horaires (peut rester la même)
  function initializeTimes() {
    const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    setAvailableTimes(mockAvailableTimes);
  }

  // Utilisez useEffect pour appeler initializeTimes lors du montage du composant
  useEffect(() => {
    initializeTimes();
  }, []);

  const updateTimes = useCallback(() => {
    // Appelez la fonction fetchAPI avec la date sélectionnée et mettez à jour les horaires disponibles
    fetchAPI(selectedDate)
      .then((data) => {
        setAvailableTimes(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des horaires disponibles : ", error);
      });
  }, [selectedDate]);
  
  useEffect(() => {
    if (selectedDate) {
      updateTimes();
    }
  }, [selectedDate, updateTimes]);
  

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        setSelectedDate={setSelectedDate} // Passez la fonction pour mettre à jour la date sélectionnée
        initializeTimes={initializeTimes}
      />
    </div>
  );
}
