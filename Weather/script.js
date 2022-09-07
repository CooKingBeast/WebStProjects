const degreesSelector = document.querySelector('.degrees')
const citySelector = document.querySelector('.city')
const searchIconSelector = document.querySelector('.input_search_icon')
const inputSelector = document.querySelector('.form_input')
const formSelector = document.querySelector('.content-form')
const pressureSelector = document.querySelector('.pressure')
const humiditySelector = document.querySelector('.humidity')
const windSelector = document.querySelector('.wind')
const weatherIconSelector = document.querySelector('.weather_icon')
const btnSelector = document.querySelector('.btn')

// let inputValue = 'Ekaterinburg'
const apiKey = '4ada66ddf05802af358c8b69ed55adaf'
let temp = 2
//
// const fnc = (res) => {
// 	temp = 4
// 	const data = {
// 		id: 1
// 	}
// 	console.log('fnc', temp)
// 	return data//
// }
//
// console.log('glob', temp)
// const handleClick = () => {
//
// 	const result = fnc()
// 	console.log('handleClick', result)
// }

const init = () => {
	const defaultCity = 'Moscow'
	getWeather(defaultCity).then((data) => createWeatherContent(data))
	// getWeather(defaultCity)
}

const getWeather = async (defaultCity) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${apiKey}`
	)
	const data = await response.json()

	return data
	// const res = {}
	// fetch(
	// 	`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${apiKey}`
	// )
	// 	.then((resp) => resp.json())
	// 	.then((data) => createWeatherContent(data))
		// .finally((data)=> createWeatherContent(data))
}
const createWeatherContent = (data) => {
	console.log('data', data)
	// degreesSelector.innerText = Math.round(data.main.temp)
	// citySelector.innerText = data.name
	// weatherIconSelector.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png `
	// pressureSelector.innerText = data.main.pressure
	// humiditySelector.innerText = data.main.humidity
	// windSelector.innerText = Math.round(data.wind.speed)
}

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

btnSelector.addEventListener('click', () => {})

init()
