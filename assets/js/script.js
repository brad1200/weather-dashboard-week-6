function getCoordinates(city) {
    var coordinates = {
        lon: '',
        lat: ''
    }
};

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
};