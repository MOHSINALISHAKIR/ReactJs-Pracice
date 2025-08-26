import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
  let init_url =
    "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdGl5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
  return (
    <div className="flex flex-col items-center gap-5">
      {/* <h1 className="text-[30px] font-bold mt-5">WeatherInfo - {info.weather}</h1> */}
      <Card sx={{ maxWidth: 345 }} className=" shadow-green-700 mt-5">
        <CardMedia sx={{ height: 140 }} image={init_url} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = <span className="font-bold"> {info.temp}&deg;C</span></p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as {info.weather} and feels like{""}{" "}
              {info.feelsLike}&deg;
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
