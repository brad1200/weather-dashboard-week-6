var searchHistoryList = document.getElementById('searchHistoryList');
var searchBtn = document.getElementById('searchBtn');
var currentWeather = document.getElementById('currentWeather');
var forecast = document.getElementById('forecast');

var key = 'c00b8fe28f49f639215e37d6e88f2630';

function getCoordinates(city) {
    var coordinates = {
        lon: '',
        lat: ''
    }


    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=&appid=c00b8fe28f49f639215e37d6e88f2630')
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
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + key;
    console.log(queryURL);
    fetch(queryURL)
        .then(function (response) {
            console.log(response);
            cityName = response.city;
            weatherIcon = 
        })
};

function returnWeatherForecast(cityName) {
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=&lon=&appid=' + key;
    console.log(queryURL);
};

var storedWeather = JSON.parse(localStorage.getItem('weather'));
var weatherSearch = [];