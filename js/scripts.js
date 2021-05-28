"use strict";

const cityText = document.querySelector("#city");
const tempText = document.querySelector("#temp");
const tempMinText = document.querySelector("#tempMin");
const tempMaxText = document.querySelector("#tempMax");
const tempFLText = document.querySelector("#tempFL");
const humidityText = document.querySelector("#humidity");
const pressureText = document.querySelector("#pressure");
const weatherText = document.querySelector("#weather");
const weatherButton = document.querySelector("#getWeather");
const input = document.querySelector("#input");
weatherButton.addEventListener("click", function () {
    fetchTheWeather();
})

function fetchTheWeather()
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3c2facbbe498e0468ed6e5b436dcc588`
    ).then(function(response)
    {
        return response.json();
    }).then(function(data){
        updateTheWeather(data);
    })
}

function updateTheWeather(data)
{
    console.log(data);
    tempText.innerText = "Temperature: " + kToF(data.main.temp) + "°";
    cityText.innerText = data.name;
    tempMinText.innerText = "Min Temperature: " + kToF(data.main.temp_min) + "°";
    tempMaxText.innerText = "Max Temperature: " + kToF(data.main.temp_max) + "°";
    tempFLText.innerText = "Feels Like Temperature: " + kToF(data.main.feels_like) + "°";
    humidityText.innerText = "Humidity: " + data.main.humidity;
    pressureText.innerText = "Pressure: " + data.main.pressure;
    weatherText.innerText = "Weather: " + data.weather[0].main;

}

function kToF(k) {
    return ((k-273.15) * 9/5 + 32).toFixed(1);
}