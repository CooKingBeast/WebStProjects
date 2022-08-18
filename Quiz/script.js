const questionSelector = document.querySelector('.main_question')
const firstAnswerSelector = document.querySelector('.first_answer')
const secondAnswerSelector = document.querySelector('.second_answer')
const thirdAnswerSelector = document.querySelector('.third_answer')
const fourthAnswerSelector = document.querySelector('.fourth_answer')
const nextQueBtnSelector = document.querySelector('.next_question-button')

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
	}
]

function init() {
	questionSelector.innerText = data[0].question
	firstAnswerSelector.innerText = data[0].answer1
	secondAnswerSelector.innerText = data[0].answer2
	thirdAnswerSelector.innerText = data[0].answer3
	fourthAnswerSelector.innerText = data[0].answer4
}

function nextQueBtn() {
	questionSelector.innerText = data[1].question
	firstAnswerSelector.innerText = data[1].answer1
	secondAnswerSelector.innerText = data[1].answer2
	thirdAnswerSelector.innerText = data[1].answer3
	fourthAnswerSelector.innerText = data[1].answer4
}

nextQueBtnSelector.addEventListener('click', nextQueBtn)

init()
