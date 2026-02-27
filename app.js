const API_KEY = "YOUR_API_KEY";

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
        .then(function(response) {
            const data = response.data;
            displayWeather(data);
        })
        .catch(function(error) {
            console.log("Error:", error);
            alert("City not found or API error");
        });
}

function displayWeather(data) {
    document.getElementById("city").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp + "°C";
    document.getElementById("description").innerText = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("icon").src = iconUrl;
}

// Default city
getWeather("London");