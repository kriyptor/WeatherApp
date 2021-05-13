
let weather = {
    "apiKey": "7ca605c171197328f8c455408eb3f8db",
    fetchWeather : function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    .catch(err => aler("Kindly enter a valid city name!"));
    },
    displayWeather : function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log( name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText =  temp+"°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity:" + humidity +"%";
        document.querySelector(".wind").innerText = "Wind Speed:"+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

const searchVl = document.querySelector(".search-bar").value

const searchBtn = document.querySelector('.search button');
const searchBar = document.querySelector('.search-bar');

searchBtn.addEventListener('click', function(){
    weather.search();
})

searchBar.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

