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

var interval = setInterval(clock, 1000);

function createCityClock(value){
    console.log(value)
    
    // Define your OpenWeatherMap API key and the base URL of the API
    const API_KEY = "be66b4035e8f83af5b80982c259c116a";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    // Define a function that takes a city name and returns a Promise that resolves to a JSON object
    function getWeather(cityName) {
        // Build the URL for the API request
        const url = `${API_URL}?q=${cityName}&appid=${API_KEY}`;

        // Fetch the data from the API and return it as JSON
        return fetch(url)
            .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data: ${response.status}`);
            }
            return response.json();
            })
            .catch(error => {
            console.error(error);
            });
    }

    // Example usage
    getWeather(value).then(data => {
    console.log(data);
    });

}

function seLivrar(){
    alert("adios")
}

// var inputElement = document.getElementById("myInput");

// inputElement.addEventListener("keypress", function(event) {
//     if (event.keyCode === 13) {
//         // Call your function here
//         myFunction();
//     }
// });
