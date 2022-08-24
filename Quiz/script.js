const questionSelector = document.querySelector('.main_question')
const firstAnswerSelector = document.querySelector('.first_answer')
const secondAnswerSelector = document.querySelector('.second_answer')
const thirdAnswerSelector = document.querySelector('.third_answer')
const fourthAnswerSelector = document.querySelector('.fourth_answer')
const nextQueBtnSelector = document.querySelector('.next_question-button')
const answersParentSelector = document.querySelector('.answers_parent')
const allCheckboxSelector = document.querySelectorAll('.option')
const resultWrapperSelector = document.querySelector('.result_wrapper')
const mainSelector = document.querySelector('.main_selector')
const result = document.querySelector('.right_answers_count')
const questionsTotal = document.querySelector('.questions_total')

const data = [
	{
		id: 1,
		question: 'Who lives pineapple under the sea ?',
		answer1: 'Wolf',
		answer2: 'Bear',
		answer3: 'Fork',
		answer4: 'Spongebobu',
		rightAnswer: 'Spongebobu'
		// rightAnswer: 'r2'
	},
	{
		id: 2,
		question: 'che_kavo?',
		answer1: 'norm',
		answer2: 'ne norm',
		answer3: 'zaebis',
		answer4: 'dick'
	},
	{
		id: 3,
		question: 'kak zovut?',
		answer1: 'Petya',
		answer2: 'Dima',
		answer3: 'Vasya',
		answer4: 'Dick',
		rightAnswer: 'Dima'
	},
	{
		id: 4,
		question: 'asd?',
		answer1: 'Petya',
		answer2: 'Dima',
		answer3: 'Vasya',
		answer4: 'Dick',
		rightAnswer: 'Petya'
	}
]

let number = 0
let answer = ''
const answersArray = []
let rightAnswerCounter = 0
questionsTotal.innerText = data.length.toString()

function init() {
	questionSelector.innerText = data[0].question
	firstAnswerSelector.innerText = data[0].answer1
	secondAnswerSelector.innerText = data[0].answer2
	thirdAnswerSelector.innerText = data[0].answer3
	fourthAnswerSelector.innerText = data[0].answer4
}

function nextQueBtn() {
	if (number === data.length - 1) {
		mainSelector.style.display = 'none'
		resultWrapperSelector.style.display = 'flex'
	} else {
		number += 1
		questionSelector.innerText = data[number].question
		firstAnswerSelector.innerText = data[number].answer1
		secondAnswerSelector.innerText = data[number].answer2
		thirdAnswerSelector.innerText = data[number].answer3
		fourthAnswerSelector.innerText = data[number].answer4
		answersArray.push(answer)

	}
	clearCheckboxes()
	answersCounter()
}

function clearCheckboxes() {
	for (let i = 0; i < allCheckboxSelector.length; i++) {
		allCheckboxSelector[i].checked = false
	}
}

function pickAnswer(event) {
	const target = event.target
	if (target.tagName === 'INPUT') {
		clearCheckboxes()
		target.checked = true
		// answer = target.name
		answer = target.labels[0].innerText
	}
}

function answersCounter() {
	if (answer === data[number].rightAnswer) {
		rightAnswerCounter += 1
		console.log('pravilnih otvetov=', rightAnswerCounter)
	}
}

// function answersCounter() {
// 	if (answer === 'Wolf' || answer === 'norm') {
// 		rightAnswerCounter += 1
// 		result.innerHTML = rightAnswerCounter
// 	}
// }

// function inputsCheck(){
// 	if(allCheckboxSelector.checked === false){
// alert('viberi otvet pidor')
// 	}
// else
// 	alert('ok')
// }

answersParentSelector.addEventListener('click', (event) => pickAnswer(event))
nextQueBtnSelector.addEventListener('click', nextQueBtn)

init()
