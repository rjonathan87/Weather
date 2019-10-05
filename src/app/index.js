const { Weather } = require('./Weather');
const { UI } = require('./UI');

const weather = new Weather('London', 'uk');
const ui = new UI();

require('./index.css');


async function fetchWeather(){
    const data = await weather.getWeather();
    //console.log(data);
    ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    e.preventDefault();
    let city = document.getElementById('city').value;
    let countryCode = document.getElementById('countryCode').value;

    weather.changeLocation(city, countryCode);
    fetchWeather(); 

    console.log(city, countryCode);
    
});