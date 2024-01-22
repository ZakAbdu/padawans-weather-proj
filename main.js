
const apiKey = '442ba5a1cc750966795e1eb0531eee4d'
const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
    let temp = data.main.temp;
    let farenheit = (temp - 273.15) * 1.8 + 32
    console.log(farenheit)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(farenheit) + '°F';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' mph';

    let tempCheck = document.querySelector('.temp').innerHTML
    let tempCheck2 = (tempCheck.slice(0, -2))

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'images/rainy.png'
    } 
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = 'images/snowflake.png'
    } 
    else if (data.weather[0].main == 'Clear') {
        if (tempCheck2 > 40) {
            weatherIcon.src = 'images/sunny-day.png'
        }
        else {
            weatherIcon.src = 'images/moon.png'
        }
    } 
    document.querySelector('.weather').style.display = 'block'
}

searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value)
})