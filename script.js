let weather = {
    "apiKey": "2a4fd6a58ec41168ce141cfe2137aa9b",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".temp").innerText = "Temperature:  " + temp + "°C";
        const str = description.charAt(0).toUpperCase() + description.slice(1);
        document.querySelector(".description").innerText = "Description:  " + str;
        document.querySelector(".humidity").innerText = "Humidity:  " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed:  " + speed + " km//h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name +"' )"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    } 
})

