import React from 'react';
import {useSelector} from "react-redux";
import {WeatherInfo} from "../utils/constants";
import {useAppSelector} from "../app/hooks";

const Weather = () => {
    const info = useAppSelector<WeatherInfo>(state => state.weatherInfo);
    const message = useAppSelector<string>(state => state.message);

    return (
        <div className='infoWeath'>
            {!message &&
                <div>
                    <p>Location: {info.country}, {info.city}</p>
                    <p>Temp: {info.temp}</p>
                    <p>Pressure: {info.pressure}</p>
                    <p>Sunset: {new Date(info.sunset as number * 1000).toLocaleTimeString()}</p>
                </div>}
            <p>{message}</p>
        </div>
    );


};

export default Weather;