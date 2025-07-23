# Weather App

A simple web app to check the weather for any city using the OpenWeatherMap API.

## Features

- Get weather by searching for a city name
- Get weather for your current location (with permission)
- Auto-suggestions for city names as you type

## Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/sudhanshu03-developer/Weather_App.git
   ```

2. **Install dependencies:**  
   No dependencies required; this is a pure HTML/CSS/JS project.

3. **Get your OpenWeatherMap API key:**  
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Create a `config.js` file in the project root:
     ```javascript
     // config.js
     const API_KEY = 'YOUR_API_KEY_HERE';
     ```

4. **Run the app:**  
   Open `index.html` in your browser.

## Usage

- Type a city name in the search box and select from suggestions.
- Click "Search" to view the weather.
- On page load, allow location access to see your local
