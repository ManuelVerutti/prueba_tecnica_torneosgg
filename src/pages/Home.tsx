import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './Home.css';
//import Menu from '../components/Menu';
import Card from '../components/Card';
import { weatherApi } from '../Api/WeatherMapApi';



function Home(props: any) {

    const [cityName, setCityName] = useState("")
    const { data, isFetching } = weatherApi.endpoints.getCityByName.useQuery(cityName);
    const searchInput = useRef<HTMLInputElement>(null);

    function handleSearch() {
        if (searchInput.current != null) {
            setCityName(searchInput.current.value);
        }
    }

    

    return (

        <div >
            {/*Header*/}
            <div className='header'>
                <div><img className="logo" src="https://img.freepik.com/vector-premium/icono-clima-dibujo-nube-su-expresion_583131-106.jpg?w=2000   " alt="" /></div>
                <form className="search-form">
                <h1 className="titleH">Busca tu ciudad</h1>

                    <input type="text" placeholder="Ciudad, Estado, País..." value={cityName} ref={searchInput} onChange={handleSearch} />
                </form>
            </div>


            <div className='body'>
                {/*Fondos de pantalla del clima*/}
                {data?.weather[0]?.main == "Clouds" &&
                    <img className='backG' src="https://media.istockphoto.com/id/1084416182/vector/sky-and-clouds-background-sky-and-cloud-with-blue-color-cartoon-cloudy-background-vector.jpg?s=612x612&w=0&k=20&c=2VDrTkMPDrOa6_CVFVqhnmLrspT91hqWbkfuEkqJnjM=" alt="" />
                }
                {data?.weather[0]?.main == "Clear" &&
                    <img className='backG' src="https://static.vecteezy.com/system/resources/previews/001/849/560/original/clear-blue-sky-background-free-vector.jpg" alt="" />
                }
                {data?.weather[0]?.main == "Rain" &&
                    <img className='backG' src="https://img.freepik.com/free-vector/cloud-with-falling-rain-drops-papercur-style-background_1017-32359.jpg?w=2000" alt="" />
                }
                {data?.weather[0]?.main == "Drizzle"&&
                    <img className='backG' src="https://img.freepik.com/free-vector/cloud-with-falling-rain-drops-papercur-style-background_1017-32359.jpg?w=2000" alt="" />
                }
                {data?.weather[0]?.main == "Snow" &&
                    <img className='backG' src="https://img.freepik.com/free-vector/unfocused-winter-landscape-with-snowflakes_1393-210.jpg?w=2000" alt="" />
                }
                {data?.weather[0]?.main == "Sun" &&
                    <img className='backG' src="https://img.freepik.com/free-vector/spring-relaxing-landscape-with-trees-sunny-day_23-2148444815.jpg?w=2000" alt="" />
                }
                {data?.weather[0]?.main == "Fog" &&
                    <img className='backG' src="https://images.freeimages.com/clg/istock/previews/1069/106912789-vector-mountains-landscape-with-fog-seamless-background.jpg" alt="" />
                }
                {data?.weather[0]?.main == "Mist" &&
                    <img className='backG' src="https://images.freeimages.com/clg/istock/previews/1069/106912789-vector-mountains-landscape-with-fog-seamless-background.jpg" alt="" />
                }
                {data?.weather[0]?.main == null &&
                    <img className='backG' src="https://wallpaperaccess.com/full/449903.jpg" alt="" />
                }
                

                {/*TContenedor de las tarjetas a mostras*/}
                <div className='cards-container'>
                    {isFetching &&
                        <div className="loader"></div>
                    }
                    {!isFetching &&
                    
                        //Tarjeta
                        <Card
                            ciudad={data?.name}
                            pais= {data?.sys?.country}
                            estado={data?.weather[0]?.main}
                            hora={data?.dt}
                            timezone={data?.timezone}
                            temperatura={data?.main?.temp}
                            humedad={data?.main?.humidity}
                            windSpeed={data?.wind?.speed}

                        />
                    }
                </div>


            </div>


        </div>
    );
}

export default (Home);