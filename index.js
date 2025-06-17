// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
// [location]/[date1]/[date2]?key=YOUR_API_KEY

async function getData() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sao%20Paulo/today?unitGroup=metric&include=current&key=77KPVW6YEATQHYYDNAR4NMFBB&contentType=json",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}

async function processData() {
  weatherData = await getData();
  const resolvedAddress = weatherData.resolvedAddress;
  const temperatureF = weatherData.currentConditions.temp;
  const temperatureC = (5 / 9) * (temperatureF - 32);
  const feelsLikeF = weatherData.currentConditions.feelslike;
  const feelsLikeC = (5 / 9) * (feelsLikeF - 32);
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
    temperatureC,
    feelsLikeC,
    feelsLikeF,
    dateTime,
    conditions,
  };
}

teste = processData();
