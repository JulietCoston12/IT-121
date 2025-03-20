const weatherForm =document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "9afza5vpuemopj82ffu65gt9sh9v8n9s";

weatherForm.addEventListener("submit",  async event => {

  event.preventDefault();

  const city = cityInput.value;
  const url ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';
  if(city){
    try{
      const weatherData = await getweatherData(cityWeather);
      displayWeatherInfo(weathercurrentData);
    }
    catch{
      console.log("error")
      displayError("Error")
    }
    
  }
  else{
    displayError("please enter a city");
  }
});

async function getWeatherData(city){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';
  const responce = await fetch(apiurl);
  console.log(responce);
}

function displayWeatherInfo(data){

  const {name: city, main: {temp, feels_like, humidity}, weather:[{descripotion, id}]} = data;
  card.comtent ="";
  card.computedStyle.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const Display = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = 'Temp: ${((temp - 275.15) * (9/5) + 32).toFixed(1)}°F';
  humidityDisplay.textContent = 'Humidity: ${humidity}%';
  descDisplay.textContent = description;
  weatherEmoji.textContent = getweatherEmoji(id);
  

  cityDisplay. classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");
  
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}
 
function getweatherEmoji(weatherId){

  switch(true){
    case (weatherId >= 200 && weatherId < 300):
      return "thurderstorm";
    case (weatherId >= 300 && weatherId < 400):
      return "rainny";
    case (weatherId >= 500 && weatherId < 600):
      return "rainny";
    case (weatherId >= 600 && weatherId < 700):
      return "snowy";
    case (weatherId >=700 && weatherId < 800):
      return "sunny";
      case (weatherId === 800):
      return "clarity";
      case (weatherId >= 801 && weatherId < 810):
      return "cloudy";
    default:
      return "Data not found";
  }
}

function displayError(message){
  
}
 
