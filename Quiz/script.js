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
const rightAnswersSelector = document.querySelector('.right_answers_count')
const questionsTotalSelector = document.querySelector('.questions_total')
const tryAgainBtnSelector = document.querySelector('.try_again-button')

const data = [
	{
		id: 1,
		question: 'Who lives pineapple under the sea ?',
		answer1: 'Patrick',
		answer2: 'Squidward',
		answer3: 'Gary',
		answer4: 'SpongeBob',
		rightAnswer: 'SpongeBob'
	},
	{
		id: 2,
		question: 'Which of the following is the largest ?',
		answer1: 'A Peanut',
		answer2: 'The Moon',
		answer3: 'An Elephant',
		answer4: 'Your mom',
		rightAnswer: 'The Moon'
	},
	{
		id: 3,
		question: 'What is the worlds popular language ?',
		answer1: 'French',
		answer2: 'English',
		answer3: 'Spanish',
		answer4: 'JavaScript',
		rightAnswer: 'English'
	},
	{
		id: 4,
		question: 'If you choose an answer to this question at random, what is the chance that you will be correct ?',
		answer1: '25%',
		answer2: '0%',
		answer3: '50%',
		answer4: '25%',
		rightAnswer: '50%'
	}
]

let number = 0
let answer = ''
const answersArray = []
let rightAnswerCounter = 0

function init() {
	questionSelector.innerText = data[0].question
	firstAnswerSelector.innerText = data[0].answer1
	secondAnswerSelector.innerText = data[0].answer2
	thirdAnswerSelector.innerText = data[0].answer3
	fourthAnswerSelector.innerText = data[0].answer4
	nextQueBtnSelector.disabled = true
}

function nextQueBtn() {
	if (number === data.length - 1) {
		answersCounter()
		mainSelector.style.display = 'none'
		resultWrapperSelector.style.display = 'flex'
	} else {
		answersCounter()
		number += 1
		questionSelector.innerText = data[number].question
		firstAnswerSelector.innerText = data[number].answer1
		secondAnswerSelector.innerText = data[number].answer2
		thirdAnswerSelector.innerText = data[number].answer3
		fourthAnswerSelector.innerText = data[number].answer4
		answersArray.push(answer)
		nextQueBtnSelector.disabled = true
	}
	clearCheckboxes()
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
		answer = target.labels[0].innerText
		inputsCheck()
	}
}

function answersCounter() {
	if (answer === data[number].rightAnswer) {
		rightAnswerCounter += 1
		rightAnswersSelector.innerText = rightAnswerCounter
	}
	questionsTotalSelector.innerText = data.length
}

function inputsCheck() {
	for (let i = 0; i < allCheckboxSelector.length; i++) {
		if (allCheckboxSelector[i].checked === true) {
			nextQueBtnSelector.disabled = false
		}
	}
}

answersParentSelector.addEventListener('click', (event) => pickAnswer(event))
nextQueBtnSelector.addEventListener('click', nextQueBtn)
tryAgainBtnSelector.addEventListener('click', () => window.location.reload())

init()
