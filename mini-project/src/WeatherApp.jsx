import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weather,setWeather]=useState({
    city: "Lahore",
    feelsLike: 28.04,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  })
  let updateInfo = (newInfo)=>{
    setWeather(newInfo)

  }
    return (
        <div className="text-center">
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weather}/>
        </div>
    )
}