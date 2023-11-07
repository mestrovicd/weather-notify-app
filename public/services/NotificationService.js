import { getAccessoryMessage } from "./AccessoryService";
import { kelvinToCelsius } from "../utils";
export function sendWeatherNotification(weatherData) {
    var currentWeather = weatherData.data[0];
    var tempCelsius = kelvinToCelsius(currentWeather.temp);
    var weatherCondition = currentWeather.weather[0].main.toLowerCase();
    var accessoryMessage = getAccessoryMessage(weatherCondition);
    var windSpeed = "Wind: ".concat(currentWeather.wind_speed.toFixed(1), "m/s");
    var clouds = "Clouds: ".concat(currentWeather.clouds, "%");
    var sunrise = new Date(currentWeather.sunrise * 1000).toLocaleTimeString();
    var sunset = new Date(currentWeather.sunset * 1000).toLocaleTimeString();
    var summary = "".concat(tempCelsius, "\u00B0C, ").concat(accessoryMessage, ", ").concat(windSpeed, ", ").concat(clouds, ", Sunrise: ").concat(sunrise, ", Sunset: ").concat(sunset);
    // Ensure the message is not longer than 100 characters
    var notificationMessage = summary.length > 100 ? summary.substring(0, 97) + "..." : summary;
    fetch("https://ntfy.sh/mestrotestweather", {
        method: "POST",
        body: notificationMessage,
    })
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Notification error: ".concat(response.statusText));
        }
        console.log("Notification sent successfully.");
    })
        .catch(function (error) {
        console.error("Error sending notification:", error);
    });
}
//# sourceMappingURL=NotificationService.js.map