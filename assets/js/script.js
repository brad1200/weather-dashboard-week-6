var searchHistoryList = document.getElementById('searchHistoryList');
var searchBtn = document.getElementById('searchBtn');
var currentWeather = document.getElementById('currentWeather');

fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${WEATHER_API_KEY}&q=${city}&limit=1', {})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });