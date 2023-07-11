import React, {useState} from 'react';
import {useAppDispatch} from "../app/hooks";
import {fetchWeather} from "../actions/weatherAction";

const FormControled = () => {

    const [city, setCity] = useState('');
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(fetchWeather(city));
        setCity('')
    }

    return (
        <div>
            <input onChange={e => setCity(e.target.value)} type='text' value={city} placeholder='City'/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    )
}

export default FormControled;