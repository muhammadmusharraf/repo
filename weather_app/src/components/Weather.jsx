import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'ecf0033ca1df151ed3fec65a5c111b95'

  const getWeather = async (city) => {
    try {
      setError('');
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('City not found, please try again');
      setWeatherData(null);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (city) {
      getWeather(city);
    }
  };

  return (
    <>
      <div className='min-h-screen flex bg-gray-100 justify-center pt-12'>
        <div className='bg-blue-500 w-80 h-96 flex flex-col justify-center rounded-md p-4'>
          <div className='pt-6 flex justify-center text-white text-lg font-bold'>
            Weather App
          </div>
          <div className='flex justify-center space-x-1 mt-4'>
            <input
              type="text"
              value={city}
              onChange={handleInputChange}
              placeholder='Search'
              className='rounded-sm pl-2 w-full'
            />
            <button
              onClick={handleSearch}
              className='bg-white text-black w-10 h-10 flex items-center justify-center rounded-sm'
            >
              <FaSearch className='items-center justify-center' size={14} />
            </button>
          </div>
          {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
          {weatherData && (
            <div className="mt-4 p-4 bg-blue-400 rounded-sm text-white">
              <h2 className='flex justify-center font-bold'>{weatherData.name}</h2>
              <p className='text-gray-300 font-thin flex justify-center pt-2'>{new Date().toLocaleDateString()}</p>
              <p className='text-gray-300 font-thin flex justify-center pt-2'>Temp: {weatherData.main.temp}°C</p>
              <p className='text-gray-300 font-thin flex justify-center pt-2'>Humidity: {weatherData.main.humidity}%</p>
              <p className='text-gray-300 font-thin flex justify-center pt-2'>Weather: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
