//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi={
    key:"b429ba854e4a2f3b2d52b582da5c2c4c",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById('input-Box');

searchInputBox.addEventListener('keypress', (event) =>{
    
    if(event.keyCode == 13){
    console.log(searchInputBox.value);
    getweatherReport(searchInputBox.value);
    }

});

function getweatherReport(city){
        fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
             }).then(showWeather); 
     }
function showWeather(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerHTML=`${weather.name},${weather.sys.country}`;

    let  temperature= document.getElementById('temp');
    temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let  minMaxTemp= document.getElementById('min-max');
    minMaxTemp.innerHTML =`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;
    

    if(weatherType.textContent =='Clear'){
       document.body.style.backgroundImage = "url('images/sunny2.jpg')";

    }else if(weatherType.textContent =='Clouds'){
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
 
     }else if(weatherType.textContent =='Rain'){
        document.body.style.backgroundImage = "url('images/rain.jpg')";
 
     }else if(weatherType.textContent =='Snow'){
        document.body.style.backgroundImage = "url('images/snow.jpg')";
 
     }else if(weatherType.textContent =='Haze'){
        document.body.style.backgroundImage = "url('images/clouds-shutterstock.jpg')";
 
     }else if(weatherType.textContent =='Smoke'){
        document.body.style.backgroundImage = "url('images/Smoke1.jpg')";
     }else if(weatherType.textContent =='Mist'){
        document.body.style.backgroundImage = "url('images/mist.jpg')";
     }
}
