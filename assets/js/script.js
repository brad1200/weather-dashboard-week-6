// function getCoordinates(city) {
//     var coordinates = {
//         lon: '',
//         lat: ''
//     }


//     fetch('https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=&appid=c00b8fe28f49f639215e37d6e88f2630')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         });
// };

// // making the search bar active w the click
// document.getElementById('searchBtn').addEventListener('click', function () {
//     event.preventDefault();
//     var cityName = $('#cityInput');
//     returnCurrentWeather(cityName);
//     returnWeatherForecast(cityName);
// });

// function returnCurrentWeather(cityName) {
//     var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + key;
//     console.log(queryURL);
//     fetch(queryURL)
//         .then(function (response) {
//             console.log(response);
//             cityName = response.city;
//             weatherIcon = (response.weather.icon);
//             weatherIcon = 'https://api.openweathermap.org/img/wn/' + weatherIcon + '@3x.png';
//             temp = (response.main.temp);
//             wind = (response.wind.speed);
//             humidity = (response.main.humidity);
//             uv = (response.main.uv);
//             lon = (response.coordinates.lon);
//             lat = (response.coordinates.lat);

//         })
// };

// function returnWeatherForecast(cityName) {
//     var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=&lon=&appid=' + key;
//     console.log(queryURL);
// };

// var storedWeather = JSON.parse(localStorage.getItem('weather'));
// var weatherSearch = [];

var key = 'c00b8fe28f49f639215e37d6e88f2630';

function getApi() {
    var input = $('#search');
    var cityName = encodeURIComponent(input);
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + key
    if (input === '') { }
    else {
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                var mainCity = data.name
                city.append(mainCity);

                var mainTemp = data.main.temp;
                temp.append(mainTemp);


            })
    }
}