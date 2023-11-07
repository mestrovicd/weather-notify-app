import { WeatherResponse } from "../types/WeatherTypes";
import { getAccessoryMessage } from "./AccessoryService";
import { kelvinToCelsius } from "../utils";

export function sendWeatherNotification(weatherData: WeatherResponse): void {
    const currentWeather = weatherData.data[0];
    const tempCelsius = kelvinToCelsius(currentWeather.temp);
    const weatherCondition = currentWeather.weather[0].main.toLowerCase();

    const accessoryMessage = getAccessoryMessage(weatherCondition);

    const windSpeed = `Wind: ${currentWeather.wind_speed.toFixed(1)}m/s`;
    const clouds = `Clouds: ${currentWeather.clouds}%`;
    const sunrise = new Date(
        currentWeather.sunrise * 1000
    ).toLocaleTimeString();
    const sunset = new Date(currentWeather.sunset * 1000).toLocaleTimeString();
    const summary = `${tempCelsius}°C, ${accessoryMessage}, ${windSpeed}, ${clouds}, Sunrise: ${sunrise}, Sunset: ${sunset}`;

    // Ensure the message is not longer than 100 characters
    const notificationMessage =
        summary.length > 100 ? summary.substring(0, 97) + "..." : summary;

    fetch("https://ntfy.sh/mestrotestweather", {
        method: "POST",
        body: notificationMessage,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Notification error: ${response.statusText}`);
            }
            console.log("Notification sent successfully.");
        })
        .catch((error) => {
            console.error("Error sending notification:", error);
        });
}
