import React, { useState, useEffect, useCallback, useRef } from "react";
import { initializeTimes } from "./initializetimes";

export function BookingForm({
  updateTimes,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Utilisez useRef pour stocker availableTimes
  const availableTimesRef = useRef([]);

  useEffect(() => {
    availableTimesRef.current = initializeTimes(); // Initialisez availableTimes
  }, []);

  useEffect(() => {
    updateTimes(date);
  }, [date, updateTimes]);

  const validateForm = useCallback(() => {
    if (!date || !time || guests < 1 || guests > 10) {
      return false;
    }
    return true;
  }, [date, time, guests]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Veuillez remplir correctement tous les champs du formulaire.");
      return;
    }
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    submitForm(formData);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimesRef.current &&
          availableTimesRef.current.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        value={guests}
        min={"1"}
        max={"10"}
        type="number"
        placeholder="1"
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        name=""
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button aria-label="Réserver une table" onClick={handleSubmit}>
        Réserver
      </button>
    </form>
  );
}
