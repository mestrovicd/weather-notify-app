export function fetchWeather(lat, lon) {
    var currentTime = Math.floor(Date.now() / 1000);
    var weatherApiUrl = "/weather/".concat(lat, "/").concat(lon, "/").concat(currentTime);
    return fetch(weatherApiUrl)
        .then(function (response) {
        if (!response.ok) {
            throw new Error("An error occurred: ".concat(response.statusText));
        }
        return response.json();
    })
        .catch(function (error) {
        console.error("Error fetching weather:", error);
        throw error;
    });
}
//# sourceMappingURL=WeatherService.js.map