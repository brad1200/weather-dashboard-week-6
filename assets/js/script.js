var searchHistoryList = document.getElementById('searchHistoryList');
var searchBtn = document.getElementById('searchBtn');
var currentWeather = document.getElementById('currentWeather');
var forecast = document.getElementById('forecast');

var WEATHER_API_KEY = 'c00b8fe28f49f639215e37d6e88f2630';

function getCoordinates(city) {
    var coordinates = {
        lon: '',
        lat: ''
    }


    fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={c00b8fe28f49f639215e37d6e88f2630}')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

// making the search bar active w the click
document.getElementById('searchBtn').addEventListener('click', function () {
    event.preventDefault();
    var cityName = $('#cityInput');
    returnCurrentWeather(cityName);
    returnWeatherForecast(cityName);
});

function returnCurrentWeather(cityName) {
    let queryURL = ''
}

function returnWeatherForecast(cityName) {
    let queryURL = ''
}