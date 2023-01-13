import React, { useEffect } from 'react';
import logo from './logo.svg';
import './Card.css';

function Card(props: any) {

    const [checked, setChecked] = React.useState(false);
    const [grados, setGrados] = React.useState("°C");
    const [hora, setHora] = React.useState("");
    const [weatherIcon, setWeatherIcon] = React.useState("");


    const handleChange = () => {
        setChecked(!checked);
        if (!checked) {
            setGrados("°F")
        } else {
            setGrados("°C")
        }
    };

    useEffect(() => {
        const interval = setInterval(() => setHora(calcTime()), 1000);
        switch (props.estado) {
            case "Rain":
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/116/116251.png");
                break;
            case "Clear":
                setWeatherIcon("https://www.iconpacks.net/icons/2/free-sun-icon-3337-thumb.png");
                break;
            case "Snow":
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/638/638434.png");
                break;
            case "Fog":
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/2930/2930021.png");
                break;
            case "Drizzle":
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/116/116251.png");
                break;
            case "Sun":
                setWeatherIcon("https://www.iconpacks.net/icons/2/free-sun-icon-3337-thumb.png");
                break;
            case "Clouds":
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/14/14078.png");
                break;
            case "Mist":
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/2930/2930021.png");
                break;
            default:
                setWeatherIcon("https://cdn-icons-png.flaticon.com/512/1827/1827955.png");
                break;
        }
        return () => {
            clearInterval(interval);
        };
    }, []);

    function calcTime() {
        var d = new Date();
        var utc = d.getTime();
        console.log(d.getTimezoneOffset() + props.timezone / 60);
        var nd = new Date(((d.getTimezoneOffset() + props.timezone / 60) * 60000) + utc);
        setHora(nd.toLocaleTimeString())
        return nd.toLocaleString();
    }

    return (

        <div className="card">
            <label className="switch">
                <input type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <span className="slider round">
                    <span className="moving-letter">{grados}</span>
                </span>
                <img src={weatherIcon} alt="weathericon" className='wIcon'/>
            </label>

            <div className="title2">Ciudad: {props.ciudad}, {props.pais}</div>
            <div className="title">Clima: {props.estado}</div>
            <div className="title">Fecha: {hora}</div>
            {checked &&
                <div className="title">Temperatura: {((props.temperatura - 273.15) * 9 / 5 + 32).toFixed(1)}°F</div>
            }
            {!checked &&
                <div className="title">Temperatura: {((props.temperatura - 273.15)).toFixed(1)}°C</div>
            }

            <div className="title">Humedad: {props.humedad}%</div>
            <div className="title">Velocidad de viento: {props.windSpeed}m/s</div>

        </div>

    );
}

export default Card;