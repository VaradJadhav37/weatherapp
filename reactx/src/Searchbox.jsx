import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./Search.css"
export default function Searchbox({updateInfo}) {
    const APIURL="https://api.openweathermap.org/data/2.5/weather"
    const APIKEY="dab6f33c901d8343aefd19ac9c32ed52"
    let getWeather=async()=>{
        let response=await fetch(`${APIURL}?q=${city}&appid=${APIKEY}&units=metric`);
        let jsonres=await response.json();
        let result={
            city:city,
            feelslike:jsonres.main.feels_like,
            temp:jsonres.main.temp,
            temp_max:jsonres.main.temp_min,
            temp_min: jsonres.main.temp_max,
            humidity:jsonres.main.humidity,
    
       }
       console.log(result)
       return result
    }
  let [city,setCity]=useState("");
   async function handleSubmit(event){
   event.preventDefault(); 
   let newInfo=await getWeather();
    updateInfo(newInfo)
    setCity("");
   }
   function handleChange(event){
    setCity(event.target.value)
   }

  return (
    <div className='search'>
      <h2>Search for Weather</h2>
      <form onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="City" value={city} variant="outlined" onChange={handleChange} required/>
      <br></br>
      <br></br>
      <Button type='submit' variant="contained">Search</Button>
      </form>
    </div>
  )
}