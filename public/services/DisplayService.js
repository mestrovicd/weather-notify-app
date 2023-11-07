import { kelvinToCelsius } from "../utils";
export function displayWeather(data) {
    var weatherDiv = document.getElementById("weather-result");
    weatherDiv.innerHTML = "";
    var table = document.createElement("table");
    table.classList.add("weather-table");
    var thead = table.createTHead();
    var headerRow = thead.insertRow();
    var headers = [
        "Date",
        "Description",
        "Temperature",
        "Feels Like",
        "Pressure",
        "Humidity",
        "Wind Speed",
        "Clouds",
        "Sunrise",
        "Sunset",
    ];
    headers.forEach(function (headerText) {
        var header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    var tbody = table.createTBody();
    data.data.forEach(function (weatherEntry) {
        var row = tbody.insertRow();
        var date = new Date(weatherEntry.dt * 1000);
        var sunrise = new Date(weatherEntry.sunrise * 1000);
        var sunset = new Date(weatherEntry.sunset * 1000);
        row.insertCell().textContent = date.toLocaleString();
        row.insertCell().textContent = weatherEntry.weather[0].description;
        row.insertCell().textContent = "".concat(kelvinToCelsius(weatherEntry.temp), "\u00B0C");
        row.insertCell().textContent = "".concat(kelvinToCelsius(weatherEntry.feels_like), "\u00B0C");
        row.insertCell().textContent = weatherEntry.pressure.toString();
        row.insertCell().textContent = "".concat(weatherEntry.humidity, "%");
        row.insertCell().textContent = "".concat(weatherEntry.wind_speed.toFixed(1), " m/s");
        row.insertCell().textContent = "".concat(weatherEntry.clouds, "%");
        row.insertCell().textContent = sunrise.toLocaleTimeString();
        row.insertCell().textContent = sunset.toLocaleTimeString();
    });
    weatherDiv.appendChild(table);
}
//# sourceMappingURL=DisplayService.js.map