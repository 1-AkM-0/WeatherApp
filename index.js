// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
// [location]/[date1]/[date2]?key=YOUR_API_KEY

let city = "farias brito";
const API_KEY = "77KPVW6YEATQHYYDNAR4NMFBB";
async function getData() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}

async function processData() {
  weatherData = await getData();
  const resolvedAddress = weatherData.resolvedAddress;
  const temperatureC = weatherData.currentConditions.temp;
  const temperatureF = temperatureC * 1.8 + 32;
  const feelsLikeC = weatherData.currentConditions.feelslike;
  const feelsLikeF = feelsLikeC * 1.8 + 32;
  const dateTime = new Date();
  const conditions = weatherData.currentConditions.conditions;

  console.log(
    resolvedAddress,
    temperatureC,
    temperatureF,
    feelsLikeC,
    feelsLikeF,
    dateTime,
    conditions
  );

  return {
    resolvedAddress,
    temperatureC,
    temperatureF,
    feelsLikeC,
    feelsLikeF,
    dateTime,
    conditions,
  };
}

async function displayInfo() {
  const data = await processData();

  const location = document.querySelector(".location");
  const temperature = document.querySelector(".degree");
  const feel = document.querySelector(".feelslike");
  const conditions = document.querySelector(".condition ");
  location.textContent = data.resolvedAddress;
  temperature.textContent = data.temperatureC;
  feel.textContent = data.feelsLikeC;
  conditions.textContent = data.conditions;
}

displayInfo();
