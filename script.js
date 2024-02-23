const apiKey = 'd9ab9a6e09e160be4bf7ed68c7a61daf'
let cityInput = document.querySelector('.city_input')
const apUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function checkWeather(city) {
    const response = await fetch(apUrl + city + `&appid=${apiKey}`)
        .catch(document.querySelector(".temp").innerHTML = '404')
    let data = await response.json()
    document.querySelector('.temp').innerHTML = data.main.temp
    document.querySelector(".city").innerHTML = data.name
    console.log(data);
}

document.querySelector('.searchBtn').addEventListener('click', ()=> {
    checkWeather(cityInput.value)
})


