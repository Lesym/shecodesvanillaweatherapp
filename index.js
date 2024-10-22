function refreshweather(response) {
  let temperatureElement = document.querySelector("#temperature");
  //temperatureElement.innerHTML = response.data.temperature.current;
  //console.log(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "511a91f0ccob731b14bda3bt51303cd4";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshweather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");
  //let cityElement = document.querySelector("#weather-app-city");
  //cityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
