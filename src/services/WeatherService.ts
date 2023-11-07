import { WeatherResponse } from "../types/WeatherTypes";

export function fetchWeather(
    lat: string,
    lon: string
): Promise<WeatherResponse> {
    const currentTime = Math.floor(Date.now() / 1000);

    const weatherApiUrl = `/weather/${lat}/${lon}/${currentTime}`;

    return fetch(weatherApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`An error occurred: ${response.statusText}`);
            }
            return response.json() as Promise<WeatherResponse>;
        })
        .catch((error) => {
            console.error("Error fetching weather:", error);
            throw error;
        });
}
