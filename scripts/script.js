function clock(){
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();

    var hours=document.getElementById("hours").textContent=h;
    var minutes=document.getElementById("minutes").textContent=m;
    var seconds=document.getElementById("seconds").textContent=s;    

    var d  =new Date().getDate();
    var mes=new Date().getMonth();
    var a  =new Date().getFullYear();    

    document.getElementById("day").textContent=d;
    document.getElementById("month").textContent=mes;
    document.getElementById("year").textContent=a;
}

async function createCityClock(value){
    console.log(value)
    
    // Define your OpenWeatherMap API key and the base URL of the API
    const API_KEY = "be66b4035e8f83af5b80982c259c116a";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    // Define a function that takes a city name and returns a Promise that resolves to a JSON object
    async function getWeather(cityName) {
        const url = `${API_URL}?q=${cityName}&appid=${API_KEY}`;

        // Fetch the data from the API and return it as JSON
        const response = await fetch(url);
        return response.json();
    }


    // Example usage
    try {
        var result = await getWeather(value);
        console.log(result.base,", ",result.sys.country,", ",result.timezone/3600);
    } catch (error) {
        console.log(error);
    }
}

function getUTC(json){
    return json.timezone/3600;
}

function getClimate(json){
    return json.weather[0].description;
}

function getCountry(json){
    return json.sys.country;
}

function getName(json){
    return json.name;
}

function seLivrar(){
    alert("adios")
}

var interval = setInterval(clock, 1000);