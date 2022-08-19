const questionSelector = document.querySelector('.main_question')
const firstAnswerSelector = document.querySelector('.first_answer')
const secondAnswerSelector = document.querySelector('.second_answer')
const thirdAnswerSelector = document.querySelector('.third_answer')
const fourthAnswerSelector = document.querySelector('.fourth_answer')
const nextQueBtnSelector = document.querySelector('.next_question-button')
const mainSelector = document.querySelector('.main')
const allCheckboxSelector = document.querySelectorAll('.option')

const data = [
	{
		id: 1,
		question: 'Who lives pineapple under the sea ?',
		answer1: 'Wolf',
		answer2: 'Bear',
		answer3: 'Fork',
		answer4: 'Spongebobu'
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
		answer4: 'Dick'
	}
]

let number = 0
let answer = ''
const answersArray = []

function init() {
	questionSelector.innerText = data[0].question
	firstAnswerSelector.innerText = data[0].answer1
	secondAnswerSelector.innerText = data[0].answer2
	thirdAnswerSelector.innerText = data[0].answer3
	fourthAnswerSelector.innerText = data[0].answer4
}

function nextQueBtn() {
	number += 1
	questionSelector.innerText = data[number].question
	firstAnswerSelector.innerText = data[number].answer1
	secondAnswerSelector.innerText = data[number].answer2
	thirdAnswerSelector.innerText = data[number].answer3
	fourthAnswerSelector.innerText = data[number].answer4
	answersArray.push(answer)
}

function pickAnswer(event) {
	const target = event.target
	for (let i = 0; i < allCheckboxSelector.length; i++) {
		allCheckboxSelector[i].checked = false
	}
	if (target.tagName === 'INPUT') {
		target.checked = true
		answer = target.labels[0].innerText
	}
}

mainSelector.addEventListener('click', (event) => pickAnswer(event))
nextQueBtnSelector.addEventListener('click', nextQueBtn)

init()
