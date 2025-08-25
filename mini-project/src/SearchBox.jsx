import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const SearchBox = () => {
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  const limit = 1;
  let api ='https://api.openweathermap.org/data/2.5/weather';
  const apiKey="7dfe69ff71ca4bc7684f6e5ebf2fa55d";
  let getWeather = async () => {
    let response = await fetch(`${api}?q=${city}&appid=${apiKey}&units=metric`)

    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
    }
    console.log(result) 
    
  };
  let changeCity = (event) => {
    setCity(event.target.value);
  };
  let changeCountry = (event) => {
    setCountry(event.target.value);
  };
  let onSubmit = (event) => {
    event.preventDefault();
    setCity("");
    setCountry("");
    getWeather();
  };
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <h3>Search Box </h3>
      <form
        className="flex flex-col items-center w-[400px] gap-4"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          className="w-full"
          value={city}
          onChange={changeCity}
        />
        <TextField
          id="country"
          label="Country Name"
          variant="outlined"
          className="w-full"
          value={country}
          onChange={changeCountry}
        />
        <Button
          className="w-10 px-2 py-1 rounded-full"
          variant="contained"
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
