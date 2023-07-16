const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.34&units=imperial&appid=d3f26c82d27e551d049d6a0e6795f5de";

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.34&units=imperial&appid=d3f26c82d27e551d049d6a0e6795f5de";

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const city = document.querySelector("#city");




async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// Function to fetch the forecast data
async function fetchForecastData() {
  try {
    const response = await fetch(forecastURL);
    const forecastData = await response.json();
    //console.log(forecastData)
    return forecastData;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    return null;
  }
}

function extractForecastData(data) {
  const forecast = [];
  const currentDate = new Date();
  const displayFormat = {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
  };

  for (const item of data.list) {
    const itemDate = new Date(item.dt * 1000);

    if (
      itemDate.getDate() === currentDate.getDate() + 1 ||
      itemDate.getDate() === currentDate.getDate() + 2 ||
      itemDate.getDate() === currentDate.getDate() + 3
    ) {
      const dateTimeString = `${itemDate.toLocaleDateString(undefined, displayFormat)}`;


      forecast.push({
        date: dateTimeString,
        temperature: Math.round(item.main.temp),
        icon: item.weather[0].icon
      });
    }
  }

  return forecast;
}



function renderForecast(forecast) {
  const forecastContainer = document.getElementById('forecast');
  let html = '';


  for (const item of forecast) {
    html += `<div id='weather-info'> 
                <div>
                  <img src="https://openweathermap.org/img/wn/${item.icon}.png" alt="Weather Icon">
                </div>
                <div>
                  <p>${item.date}</p>
                  <p>${item.temperature} °</p>
                </div>
             </div>`;
  }


  forecastContainer.innerHTML = html;
}


window.onload = async () => {
  const forecastData = await fetchForecastData();
  if (forecastData) {
    const forecast = extractForecastData(forecastData);
    renderForecast(forecast);
  }
};


function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = capitalizeFirstLetter(desc);

  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  city.textContent = `${weatherData.name}, CA`;
}

function capitalizeFirstLetter(str) {
  return str.replace(/^(.)|\s+(.)/g, function (match) {
    return match.toUpperCase();
  });
}