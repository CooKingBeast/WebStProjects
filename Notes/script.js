const controlButtonSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

let deleteBtnID = 0
let editBtnID = 1000

const handleAddNote = (textareaValue = '') => {
	const newItem = document.createElement('div')
	newItem.className = 'item'
	deleteBtnID += 1
	editBtnID += 1
	newItem.insertAdjacentHTML(
		'afterbegin',
		`<div class="disable">
							<label for="item_textarea">
										<textarea class="textarea" id="item_textarea">${textareaValue}</textarea>
							</label>
					</div>
					<div class="buttons_panel">
								<button class="edit" id="${editBtnID}">Edit</button>
								<button class="delete" id="${deleteBtnID}">Delete</button>
					</div>`
	)
	contentSelector.append(newItem)
}

const handleDeleteItem = (targetParent) => {
	targetParent.remove()
	refreshLocalStorage()
}

const handleEditItem = (textareaPath) => {
	if (textareaPath.classList.contains('disable')) {
		textareaPath.classList.remove('disable')
	} else {
		textareaPath.classList.add('disable')
		refreshLocalStorage()
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
const refreshLocalStorage = () => {
	const textareaSelector = document.querySelectorAll('.textarea')
	const arrOfItems = []
	textareaSelector.forEach((textarea) => {
		if (textarea.value) {
			arrOfItems.push(textarea.value)
		}
	})
	setToLocalStorage(arrOfItems)
}

const setToLocalStorage = (arrOfItems) => {
	localStorage.setItem('items', JSON.stringify(arrOfItems))
}

controlButtonSelector.addEventListener('click', () => handleAddNote())
contentSelector.addEventListener('click', (event) => {
	const target = event.target
	handleItemActions(target)
})

const init = () => {
	const parsedItems = JSON.parse(localStorage.getItem('items'))

	if (parsedItems) {
		parsedItems.map((value) => {
			handleAddNote(value)
		})
	}
}

init()
