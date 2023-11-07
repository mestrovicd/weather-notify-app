import { fetchWeather } from "./services/WeatherService";
import { displayWeather } from "./services/DisplayService";
import { sendWeatherNotification } from "./services/NotificationService";

document.getElementById("fetch-weather")!.addEventListener("click", () => {
    const cityValue = (
        document.getElementById("city-select") as HTMLSelectElement
    ).value;

    if (cityValue) {
        const [lat, lon] = cityValue.split(",");

        fetchWeather(lat, lon)
            .then((weatherData) => {
                displayWeather(weatherData);
                sendWeatherNotification(weatherData);
            })
            .catch((error) => {
                console.error("Error fetching weather:", error);
                document.getElementById("weather-result")!.textContent =
                    error.toString();
            });
    } else {
        document.getElementById("weather-result")!.textContent =
            "Please select a city.";
    }
});
