export const base_url = 'https://api.openweathermap.org/data/2.5/weather'
export const api_key = 'a8c35a023dcef2533ffbfbe385919688';

export interface WeatherInfo {
    country: string,
    city: string,
    temp: string,
    pressure: string,
    sunset: string | number
}