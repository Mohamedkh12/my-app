import { useEffect, useReducer, useState } from "react";

export function BookingForm({availableTimes,updateTimes,initializateTime}){
    const [Date,setdate]=useState('');
    const[time,setTime]=useState('17:00');
    const[guests,setguests]=useState(1)
    const [occasion, setOccasion] = useState('Birthday');
    const [timeState,dispatch]=useReducer(timeReduce,availableTimes);
    useEffect(()=>{
        initializateTime()
    
    },[initializateTime]
    )

    useEffect(()=>{
    updateTimes(date)
    

},[date,updateTimes]
    )

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
        Date,
        time,
        guests,
        occasion);
    
  };
  return(
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" value={Date} onChange={e=>setdate(e.target.value)} />
         <label htmlFor="res-time">Choose time</label>
         <select id="res-time " value={time} onChange={e=>setTime(e.target.value)}>
            {availableTimes.map ((time)=>(
                <option key={time} value={time}>
                    {time}
                </option>
            ) ) }
         </select>
         <label htmlFor="guests">Number of guests</label>
         <input  id='guests' value={guests} min= {'1'} max={'10'} 
          type="number" placeholder="1"
          onChange={e=>setguests(e.target.value)}
          />
          <label htmlFor="occasion">Occasion</label>
          <select name="" id="occasion" value={occasion} onChange={(event)=>setOccasion ( event.target.value )}>
          <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
    </form>
    
    )


};
