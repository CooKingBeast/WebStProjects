const degreesSelector = document.querySelector('.degrees')
const citySelector = document.querySelector('.city')
const searchIconSelector = document.querySelector('.input_search_icon')
const inputSelector = document.getElementById('label_form_input')
const pressureSelector = document.querySelector('.pressure')
const humiditySelector = document.querySelector('.humidity')
const windSelector = document.querySelector('.wind')

let inputValue = 'Ekaterinburg'

async function getWeather() {
	let url = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=4ada66ddf05802af358c8b69ed55adaf`
	)
	const data = await url.json()

	degreesSelector.innerText = Math.round(data.main.temp - 273)
	citySelector.innerText = data.name

	pressureSelector.innerText = data.main.pressure
	humiditySelector.innerText = data.main.humidity
	windSelector.innerText = Math.round(data.wind.speed)
}


function getInputValue(e) {
	if (e.key === 'Enter') {
		console.log('enter pressed')
	}
	// 	inputValue = inputSelector.value
	// 	getWeather()
	// } else inputValue = inputSelector.value
	// getWeather()
}

// searchIconSelector.addEventListener('click', getInputValue)
searchIconSelector.addEventListener('keypress', getInputValue)
// 	if (e.key === 'Enter') {
// 		inputValue = inputSelector.value
// 		console.log('Enterpress',inputValue)
// 	}
// })

getWeather()
