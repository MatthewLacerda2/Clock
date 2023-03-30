function clock(utc, index){
    
    date = new Date()+utc;

    var h=date;
    var m=date;
    var s=date;

    console.log(h)
    console.log(document.getElementById("container"+index).querySelectorAll("hours"))

    var hours=document.getElementById("container"+index).querySelectorAll("hours").textContent=h;
    var minutes=document.getElementById("container"+index).querySelectorAll("minutes").textContent=m;
    var seconds=document.getElementById("container"+index).querySelectorAll("seconds").textContent=s;    

    var d  =date;
    var mes=date;
    var a  =date;

    document.getElementById("container"+index).querySelectorAll("day").textContent=d;
    document.getElementById("container"+index).querySelectorAll("month").textContent=mes;
    document.getElementById("container"+index).querySelectorAll("year").textContent=a;

    
}

async function createCityClock(value){    
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

    var base, country, timezone;
    var resultado;
    
    // Example usage
    try {
        const result = await getWeather(value);
        
        resultado=result;
        base=result.name;
        country=result.sys.country;
        timezone=result.timezone/3600;
    } catch (error) {
        console.log(error);
    }

    console.log(base)
    console.log(country)
    console.log(timezone)
    makeNewClock(resultado);
}

function makeNewClock(result){
    console.log("container"+num)
    const sectionToDuplicate = document.getElementById("container"+num);
    const clonedSection = sectionToDuplicate.cloneNode(true);
    document.body.appendChild(clonedSection);
    num++;
    clonedSection.id="container"+num;
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

var num=0;
var interval = setInterval(clock(0, num), 1000);
