function showTemp(response) {
  let apiKey = "05c98b0bebf349dd65cfftbab836o4c9";
  let city = "Polokwane";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=Polokwane&key=05c98b0bebf349dd65cfftbab836o4c9&units=metric";
  axios.get(apiUrl).then(showTemp);
}
console.log(apiUrl);
