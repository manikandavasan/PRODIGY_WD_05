const apiKey = 'c98f77f81b50a9d7d294b0bbd58edf65'; // Replace 'YOUR_API_KEY' with your actual API key

async function fetchWeather() {
    const location = document.getElementById('location').value;
    const weatherContainer = document.getElementById('weather-info');

    if (!location) {
        weatherContainer.innerHTML = 'Please enter a location.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            weatherContainer.innerHTML = 'Location not found.';
        }
    } catch (error) {
        weatherContainer.innerHTML = 'Error fetching weather data.';
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-info');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherContainer.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}