const apiKey = "4ea41fd9b797d5d67efbc3e8499218c3";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDiv = document.getElementById("weather");

  if (!city) {
    weatherDiv.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const { name, main, weather } = data;
      weatherDiv.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡 Temp: ${main.temp}°C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
      `;
    })
    .catch((error) => {
      weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}