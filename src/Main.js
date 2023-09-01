import React,{useState} from "react";
import { BookingForm } from "./BookinForm";

export function Main(){
    const [availableTimes,setavailableTimes]=useState("['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']");
    const updateTimes=(newDate)=>{
        setavailableTimes("['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']")
    }

    return (
        <div>
          <h1>Little Lemon Table Reservation</h1>
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </div>
      );
}