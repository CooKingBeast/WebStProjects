const controlButtonSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

let deleteBtnID = 0
let editBtnID = 1000

const handleAddNote = () => {
	const newItem = document.createElement('div')
	newItem.className = 'item'
	deleteBtnID += 1
	editBtnID += 1
	newItem.insertAdjacentHTML(
		'afterbegin',
		`<div class="disable">
							<label for="item_textarea">
										<textarea id="item_textarea1">*Lorem ipsum dolor sit amet</textarea>
							</label>
					</div>
					<div class="buttons_panel">
								<button class="edit" id="${editBtnID}">Edit</button>
								<button class="delete" id="${deleteBtnID}">Delete</button>
					</div>`
	)
	contentSelector.append(newItem)
}

const handleDeleteItem = (itemPath) => {
	itemPath.remove()
}

const handleEditItem = (textareaPath) => {
	if (textareaPath.classList.contains('disable')) {
		textareaPath.classList.remove('disable')
	} else {
		textareaPath.classList.add('disable')
	}
}

controlButtonSelector.addEventListener('click', handleAddNote)

contentSelector.addEventListener('click', (event) => {
	const itemPath = event.target.closest('.item')
	const textareaPath = event.target.parentNode.parentNode.children[0]
	if (event.target.id > 0 && event.target.id < 999) {
		handleDeleteItem(itemPath)
	} else if (event.target.id > 1000 && event.target.id < 1999) {
		handleEditItem(textareaPath)
	}
})
