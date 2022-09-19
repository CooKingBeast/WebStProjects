const controlButtonSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

let id = 0

const handleAddNote = () => {
	const newItem = document.createElement('div')
	newItem.className = 'item'
	id += 1
	newItem.insertAdjacentHTML(
		'afterbegin',
		`<div class="item_text_block">
							<label for="item_textarea1">
										<textarea id="item_textarea1">*Lorem ipsum dolor sit amet</textarea>
							</label>
					</div>
					<div class="buttons_panel">
								<button class="edit">Edit</button>
								<button class="delete" id="${id}">Delete</button>
					</div>`
	)
	contentSelector.append(newItem)
}

const handleDeleteItem = (deleteTarget) => {
	deleteTarget.remove()
}

controlButtonSelector.addEventListener('click', handleAddNote)
contentSelector.addEventListener('click', (event) => {
	const itemPath = event.target.closest('.item')
	if (event.target.id > 0 && event.target.id < 999) {
		handleDeleteItem(itemPath)
	}
})
