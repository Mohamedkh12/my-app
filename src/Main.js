import React,{useState} from "react";
import { BookingForm } from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";

export function Main(){
    const [availableTimes,  setavailableTimes] = useState([]);
    const navigate=useNavigate()
    function submitForm(formData) {
      submitAPI(formData)
        .then((result) => {
          if (result) {
            navigate('/Confirmation'); // Naviguez vers la page de confirmation si la soumission réussit
          }
        })
        .catch((error) => {
          // Gérez les erreurs liées à la soumission si nécessaire
          console.error("Erreur lors de la soumission du formulaire : ", error);
        });
    }

    const updateTimes=(newDate)=>{
        setavailableTimes("['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']")
    }

    return (
        <div>
          <h1>Little Lemon Table Reservation</h1>
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
        </div>
      );
}