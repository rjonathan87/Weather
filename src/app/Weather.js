//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b557f38eb1aa447e175598e1ad7945b8
export class Weather{
    constructor(city, countryCode){
        this.apikey = 'b557f38eb1aa447e175598e1ad7945b8';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather()
    {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode; 
    }
}