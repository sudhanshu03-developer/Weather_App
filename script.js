const weatherResult = document.getElementById("weatherResult");
const cityInput = document.getElementById("cityInput");



// Get weather based on user's current location
window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      await fetchWeather(`lat=${latitude}&lon=${longitude}`);
    }, () => {
      weatherResult.innerHTML = "<p>Location permission denied. Please search manually.</p>";
    });
  }
};

// Get weather by city search
async function getWeatherByCity() {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name.");
  await fetchWeather(`q=${city}`);
}

// Fetch weather from OpenWeatherMap API
async function fetchWeather(query) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      weatherResult.innerHTML = `<p>${data.message}</p>`;
      return;
    }

    const html = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" />
      <p><strong>${data.main.temp}°C</strong> - ${data.weather[0].description}</p>
      <p>💧 Humidity: <strong>${data.main.humidity}%</strong></p>
      <p>💨 Wind Speed: <strong>${(data.wind.speed * 3.6).toFixed(1)} km/h</strong></p>
    `;
    weatherResult.innerHTML = html;
  } catch (err) {
    weatherResult.innerHTML = `<p>Error fetching weather. Try again later.</p>`;
  }
}
