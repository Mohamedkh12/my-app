
import React,{ useEffect,  useState } from "react";



export function BookingForm({ availableTimes, updateTimes, initializeTimes,submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');


  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  useEffect(() => {
    updateTimes(date);
  }, [date, updateTimes]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créez un objet formData avec les données du formulaire
    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // Appelez la fonction submitForm pour soumettre les données du formulaire
    submitForm(formData);
  };
  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
        {availableTimes && availableTimes.map(timeOption => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        value={guests}
        min={'1'}
        max={'10'}
        type="number"
        placeholder="1"
        onChange={e => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select name="" id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
