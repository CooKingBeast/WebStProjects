const daysSelector = document.querySelector('.timer_days')
const hoursSelector = document.querySelector('.timer_hours')
const minutesSelector = document.querySelector('.timer_minutes')
const secondsSelector = document.querySelector('.timer_seconds')

function countDownTimer() {
	const currentTime = new Date()
	const countDownDate = new Date(2023, 0, 1)
	const timeToYearEnd = countDownDate - currentTime
	const secToYearEnd = Math.floor((timeToYearEnd % (1000 * 60)) / 1000)
	const minToYearEnd = Math.floor(
		(timeToYearEnd % (1000 * 60 * 60)) / (1000 * 60)
	)
	const hoursToYearEnd = Math.floor(
		(timeToYearEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	)
	const daysToYearEnd = Math.floor(timeToYearEnd / (1000 * 60 * 60 * 24))

	secondsSelector.innerHTML = checkDigit(secToYearEnd.toString())
	minutesSelector.innerHTML = checkDigit(minToYearEnd.toString())
	hoursSelector.innerHTML = checkDigit(hoursToYearEnd.toString())
	daysSelector.innerHTML = daysToYearEnd.toString()
}

function checkDigit(timeFix) {
	return timeFix <= 9 ? `0${timeFix}` : timeFix
}

setInterval(countDownTimer, 1000)
