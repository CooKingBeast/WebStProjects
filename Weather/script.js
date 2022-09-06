const degreesSelector = document.querySelector('.degrees')
const citySelector = document.querySelector('.city')
const searchIconSelector = document.querySelector('.input_search_icon')
const inputSelector = document.querySelector('.form_input')
const pressureSelector = document.querySelector('.pressure')
const humiditySelector = document.querySelector('.humidity')
const windSelector = document.querySelector('.wind')
const weatherIconSelector = document.querySelector('.weather_icon')

let inputValue = 'Ekaterinburg'

const getWeather = async () => {
	const url = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=4ada66ddf05802af358c8b69ed55adaf`
	)
	const data = await url.json()

	degreesSelector.innerText = Math.round(data.main.temp)
	citySelector.innerText = data.name
	weatherIconSelector.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png `
	pressureSelector.innerText = data.main.pressure
	humiditySelector.innerText = data.main.humidity
	windSelector.innerText = Math.round(data.wind.speed)
}

searchIconSelector.addEventListener('click', () => {
	inputValue = inputSelector.value
	getWeather()
})

inputSelector.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault()
		inputValue = inputSelector.value
		getWeather()
	}
})

getWeather()
