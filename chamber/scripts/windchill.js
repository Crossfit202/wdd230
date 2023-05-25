function calculateWindChill() {
  var temperatureElement = document.querySelector(".temperature");
  var windSpeedElement = document.querySelector(".windSpeed");
  var windChillElement = document.querySelector(".windChill");

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
