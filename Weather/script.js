const degreesSelector = document.querySelector('.degrees')
const citySelector = document.querySelector('.city')
const searchIconSelector = document.querySelector('.input_search_icon')
const inputSelector = document.querySelector('.form_input')
const formSelector = document.querySelector('.content-form')
const pressureSelector = document.querySelector('.pressure')
const humiditySelector = document.querySelector('.humidity')
const windSelector = document.querySelector('.wind')
const weatherIconSelector = document.querySelector('.weather_icon')

let inputValue = 'Ekaterinburg'
const apiKey = '4ada66ddf05802af358c8b69ed55adaf'

const getWeather = async () => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${apiKey}`
	)

	const data = await response.json()
}
// const tempName = () => {
// 	degreesSelector.innerText = Math.round(data.main.temp)
// 	citySelector.innerText = data.name
// 	weatherIconSelector.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png `
// 	pressureSelector.innerText = data.main.pressure
// 	humiditySelector.innerText = data.main.humidity
// 	windSelector.innerText = Math.round(data.wind.speed)
// }

searchIconSelector.addEventListener('click', () => {
	inputValue = inputSelector.value
	getWeather()
})

// inputSelector.addEventListener('keypress', (event) => {
// 	if (event.key === 'Enter') {
// 		event.preventDefault()
// 		inputValue = inputSelector.value
// 		getWeather()
// 	}
// })

formSelector.addEventListener('submit', (event) => {
	event.preventDefault()
	inputValue = inputSelector.value
	getWeather()
})

getWeather()
