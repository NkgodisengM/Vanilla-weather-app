function displayTemperature(response) {
  console.log(apiUrl);
  console.log(response);

  let temparatureElement = document.querySelector("#temperature-value");
  temparatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".header");
  cityElement.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let speed = document.querySelector("#speed");
  speed.innerHTML = response.data.wind.speed;
}
let apiKey = "05c98b0bebf349dd65cfftbab836o4c9";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=New York&key=05c98b0bebf349dd65cfftbab836o4c9&units=metric";
axios.get(apiUrl).then(displayTemperature);
