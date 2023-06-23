const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=39.87&lon=-83.08&units=imperial&appid=d3f26c82d27e551d049d6a0e6795f5de";

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const windSpeed = document.querySelector("#windSpeed");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = capitalizeFirstLetter(desc);

  windSpeed.textContent = weatherData.wind.speed.toFixed(0);
}

function capitalizeFirstLetter(str) {
  return str.replace(/^(.)|\s+(.)/g, function (match) {
    return match.toUpperCase();
  });
}

function calculateWindChill() {
  var temperatureElement = document.querySelector("#current-temp");
  var windSpeedElement = document.querySelector("#windSpeed");
  var windChillElement = document.querySelector("#windChill");

  // Extract the numerical values from the temperature and wind speed
  var temperature = parseFloat(temperatureElement.textContent);
  var windSpeed = parseFloat(windSpeedElement.textContent);

  if (temperature <= 50 && windSpeed > 3.0) {
    // Calculate the wind chill using the provided formula
    var windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);

    // Update the wind chill element with the calculated value
    windChillElement.textContent = windChill.toFixed(2) + " °F";
  } else {
    windChillElement.textContent = "N/A";
  }
}

calculateWindChill();
