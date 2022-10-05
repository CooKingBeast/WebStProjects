const controlButtonSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

let deleteBtnID = 0
let editBtnID = 1000
let textareaValue = ''
const arrOfItems = []

const handleAddNote = (textareaValue) => {
	const newItem = document.createElement('div')
	newItem.className = 'item'
	deleteBtnID += 1
	editBtnID += 1
	newItem.insertAdjacentHTML(
		'afterbegin',
		`<div class="disable">
							<label for="item_textarea">
										<textarea id="item_textarea">${textareaValue}</textarea>
							</label>
					</div>
					<div class="buttons_panel">
								<button class="edit" id="${editBtnID}">Edit</button>
								<button class="delete" id="${deleteBtnID}">Delete</button>
					</div>`
	)
	contentSelector.append(newItem)
	// handleLocalStorage(textareaValue.innerText)
}

const handleDeleteItem = (targetParent) => {
	targetParent.remove()
}

const handleEditItem = (textareaPath) => {
	//const textareaValueSelector = document.getElementById('item_textarea')
	//textareaPath.lastElementChild.lastElementChild.value
	if (textareaPath.classList.contains('disable')) {
		textareaPath.classList.remove('disable')
	} else {
		textareaPath.classList.add('disable')
		handleLocalStorage(textareaPath.lastElementChild.lastElementChild.value)
	}
}

const handleItemActions = (target) => {
	const targetParent = target.closest('.item')
	if (target.id > 0 && target.id < 999) {
		handleDeleteItem(targetParent)
	} else if (target.id > 1000 && target.id < 1999) {
		handleEditItem(targetParent.children[0])
	}
}

const handleLocalStorage = (textareaValue) => {
	arrOfItems.push(textareaValue)

	localStorage.setItem('item', JSON.stringify(arrOfItems))
	console.log('arrOfItems', arrOfItems)
}

controlButtonSelector.addEventListener('click', handleAddNote)
contentSelector.addEventListener('click', (event) => {
	const target = event.target
	handleItemActions(target)
})

const init = () => {
	const a = JSON.parse(localStorage.getItem('item'))
	console.log(a)
	// handleAddNote(localStorage.getItem('item'))
	a.map((el) => handleAddNote(el))
}

init()
