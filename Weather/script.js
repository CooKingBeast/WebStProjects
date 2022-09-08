const degreesSelector = document.querySelector('.degrees')
const citySelector = document.querySelector('.city')
const searchIconSelector = document.querySelector('.input_search_icon')
const inputSelector = document.querySelector('.form_input')
const formSelector = document.querySelector('.content-form')
const pressureSelector = document.querySelector('.pressure')
const humiditySelector = document.querySelector('.humidity')
const windSelector = document.querySelector('.wind')
const weatherIconSelector = document.querySelector('.weather_icon')

const apiKey = '4ada66ddf05802af358c8b69ed55adaf'

const init = () => {
	const defaultCity = 'Moscow'
	getWeather(defaultCity).then((data) => createWeatherContent(data))
}

const getWeather = async (city) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
	)
	const data = await response.json()
	return data
}

const createWeatherContent = (data) => {
	degreesSelector.innerText = Math.round(data.main.temp)
	citySelector.innerText = data.name
	weatherIconSelector.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
	pressureSelector.innerText = data.main.pressure
	humiditySelector.innerText = data.main.humidity
	windSelector.innerText = Math.round(data.wind.speed)
}

searchIconSelector.addEventListener('click', () => {
	const city = inputSelector.value
	getWeather(city).then((data) => createWeatherContent(data))
})

formSelector.addEventListener('submit', (event) => {
	event.preventDefault()
	const city = inputSelector.value
	getWeather(city).then((data) => createWeatherContent(data))
})

init()
