import {api_key, base_url, WeatherInfo} from "../utils/constants";
import {clear, error, pending} from "../slices/messageSlice";
import {putWeather} from "../slices/weatherSlice";


export const fetchWeather = (city: string)  => {
    return async (dispatch: (arg0: { payload: any; type: "message/pending" | "weather/putWeather" | "message/clear" | "message/error"; }) => void) => {
        dispatch(pending())
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            const weatherInfo: WeatherInfo = {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            };
            dispatch(putWeather(weatherInfo));
            dispatch(clear());
        } catch (e) {
            console.log(e);
            dispatch(error());
        }
    }
}