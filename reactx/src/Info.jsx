import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import './Info.css'
export default function Info({weatherInfo}){
    const {city,feelslike,humidity,temp,temp_max,temp_min}=weatherInfo
    return(
        <div className="info">
            <h3>Weather Information</h3>
            <div className='card'>
            <Card className='card1' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <h3>Feels Like:&nbsp;{feelslike}<br></br></h3>
          <h3>Temperature:&nbsp;{temp}<br></br></h3>
          <h3>Min Temp:&nbsp;{temp_min}<br></br></h3>
          <h3>Max Temp:&nbsp;{temp_max}<br></br></h3>
          <h3>Humidity:&nbsp;{humidity}<br></br></h3>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}