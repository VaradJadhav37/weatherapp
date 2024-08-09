//import './App.css'
import Searchbox from './Searchbox'
import Info from './Info'
import { useState } from 'react'
export default function Weather(){
    let [inf,setInf]=useState({
        city:"",
        feelslike:"",
        humidity:"",
        temp:"",
        temp_max:"",
        temp_min: ""
     })
     function updateInfo(newInfo){
        setInf(newInfo);
       console.log(inf)
     }

  return(
    <div>
      <Searchbox updateInfo={updateInfo}/>
      <Info weatherInfo={inf} />
    </div>
  )
}


