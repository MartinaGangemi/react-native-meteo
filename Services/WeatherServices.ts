import {DateTime} from 'luxon';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'f76531c607ada2a619e33269a7bf007f';

const getWeatherData = (q: string) => {
  const url = `${BASE_URL}/weather?q=${q}&appid=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log('Fetch problem' + err.message));
};

const deconstrouctWeatherData = (data: {coord: {lat: number; lon: number}}) => {
  const {
    coord: {lat, lon},
    // main: {temp, feels_like, temp_min, temp_max, humidity},
    // name,
    // dt,
    // sys: {country, sunrise, sunset},
    // weather,
    // wind: {speed},
  } = data;

  // const {main: description, icon} = weather[0];
  return {
    lat,
    lon,
  };
};

const getFormattedWeatherData = async (q: string) => {
  const formattedCurrentWeather = await getWeatherData(q).then(
    deconstrouctWeatherData,
  );

  const {lat, lon} = formattedCurrentWeather;

  const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .then(formatForecastWeather)
    .catch(err => console.log('Fetch problem' + err.message));
};

type Data = {
  list: any[];
  dt: number;
  title: string;
  description: string;
  icon: string;
  temp: number;
};
const formatForecastWeather = (data: Data) => {
  return data.list
    .map(d => {
      return {
        title: formatToLocalTime(d.dt, 'ccc'),
        weather: d.weather[0].description,
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    })
    .filter(
      (value, i, self) =>
        i === self.findIndex(day => day.title === value.title),
    )
    .slice(0, 6);
};

const formatToLocalTime = (secs: number, format = 'ccc') =>
  DateTime.fromSeconds(secs).toFormat(format);

export default getFormattedWeatherData;
