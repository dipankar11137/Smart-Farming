import { useState } from 'react';

// const apiKey = '590c48cf16a9eb0eeef44fb1bfcce64f';
const api = {
  key: 'eff203754a938fb62fddbcc19a7276c2',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const Weather = () => {
  const [search, setSearch] = useState('Dhaka');
  const [weather, setWeather] = useState({});
  const [weather1, setWeather1] = useState(false);

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  // const searchPressed = () => {
  const showWeather = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setWeather1(true);
      });
  };
  // };

  return (
    <div className="py-10 bg-lime-700 text-center rounded-b-lg">
      <div className=" p-3">
        <header className="">
          {/* HEADER  */}
          {weather1 ? (
            <h1 className="text-white">Weather Now</h1>
          ) : (
            <button onClick={showWeather} className="text-white ">
              Show Weather
            </button>
          )}

          {/* Search Box - Input + Button  */}
          {/* <div>
            <input
              className='text-black'
              type="text"
              placeholder="Enter city/town..."
              onChange={e => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
          </div> */}

          {/* If weather is not undefined display results from API */}
          {typeof weather.main !== 'undefined' ? (
            <div className="text-white">
              {/* Location  */}
              <p>{weather.name}</p>

              {/* Temperature Celsius  */}
              <p>{weather.main.temp}°C</p>

              {/* Condition (Sunny ) */}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (
            ''
          )}
        </header>
      </div>
    </div>
  );
};

export default Weather;
