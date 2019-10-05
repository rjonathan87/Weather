export class UI {
    constructor(){
        this.weather_location      = document.getElementById('weather-location');
        this.weather_description   = document.getElementById('weather-description');
        this.weather_string        = document.getElementById('weather-string');
        this.weather_humidity      = document.getElementById('weather-humidity');
        this.weather_wind          = document.getElementById('weather-wind');
    }

    render(weather)
    {
        this.weather_location.textContent = `${weather.name} / ${weather.sys.country}`;
        this.weather_description.textContent = `${weather.weather[0]['description']}`;
        this.weather_string.textContent = `${weather.main.temp} ªC`;
        this.weather_humidity.textContent = `Humidity: ${weather.main.humidity} %`;
        this.weather_wind.textContent = `Wind: ${weather.wind.speed} m/s`;
    }
}
//**** */