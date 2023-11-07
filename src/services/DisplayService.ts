import { WeatherResponse } from "../types/WeatherTypes";
import { kelvinToCelsius } from "../utils";

export function displayWeather(data: WeatherResponse): void {
    const weatherDiv: HTMLElement = document.getElementById("weather-result")!;
    weatherDiv.innerHTML = "";
    weatherDiv.className = "weather-grid";

    data.data.forEach((weatherEntry) => {
        const weatherItem = document.createElement("div");
        weatherItem.className = "weather-item";

        const date = new Date(weatherEntry.dt * 1000);
        const sunrise = new Date(weatherEntry.sunrise * 1000);
        const sunset = new Date(weatherEntry.sunset * 1000);

        weatherItem.innerHTML = `
            <h3>${date.toLocaleDateString()}</h3>
            <p><strong>Description:</strong> ${
                weatherEntry.weather[0].description
            }</p>
            <p><strong>Temperature:</strong> ${kelvinToCelsius(
                weatherEntry.temp
            )}°C</p>
            <p><strong>Feels Like:</strong> ${kelvinToCelsius(
                weatherEntry.feels_like
            )}°C</p>
            <p><strong>Pressure:</strong> ${weatherEntry.pressure} hPa</p>
            <p><strong>Humidity:</strong> ${weatherEntry.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${weatherEntry.wind_speed.toFixed(
                1
            )} m/s</p>
            <p><strong>Clouds:</strong> ${weatherEntry.clouds}%</p>
            <p><strong>Sunrise:</strong> ${sunrise.toLocaleTimeString()}</p>
            <p><strong>Sunset:</strong> ${sunset.toLocaleTimeString()}</p>
        `;

        weatherDiv.appendChild(weatherItem);
    });
}
