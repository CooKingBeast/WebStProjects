const daysSelector = document.querySelector('.timer_days')
const hoursSelector = document.querySelector('.timer_hours')
const minutesSelector = document.querySelector('.timer_minutes')
const secondsSelector = document.querySelector('.timer_seconds')

function countDownTimer() {
	const currentDate = new Date()
	console.log(currentDate)
	const countDownDate = new Date(2023, 0, 1)
	console.log(countDownDate)
	const timeToYearEnd = countDownDate - currentDate
	const secToYearEnd = Math.floor((timeToYearEnd % (1000 * 60)) / 1000)
	const minToYearEnd = Math.floor(
		(timeToYearEnd % (1000 * 60 * 60)) / (1000 * 60)
	)
	const hoursToYearEnd = Math.floor(
		(timeToYearEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	)
	const daysToYearEnd = Math.floor(timeToYearEnd / (1000 * 60 * 60 * 24))
	console.log(daysToYearEnd, hoursToYearEnd, minToYearEnd, secToYearEnd)

	secondsSelector.innerHTML = secToYearEnd.toString()
	minutesSelector.innerHTML = minToYearEnd.toString()
	hoursSelector.innerHTML = hoursToYearEnd.toString()
	daysSelector.innerHTML = daysToYearEnd.toString()
}
countDownTimer()
