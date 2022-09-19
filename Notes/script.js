const controlButtonSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

let id = 0

const handleAddNote = () => {
	const newItem = document.createElement('div')
	newItem.className = 'item'
	id += 1
	newItem.id = id.toString()
	newItem.insertAdjacentHTML(
		'afterbegin',
		`<div class="item_text_block">
							<label for="item_textarea1">
										<textarea id="item_textarea1">*Lorem ipsum dolor sit amet</textarea>
							</label>
					</div>
					<div class="buttons_panel">
								<button class="edit">Edit</button>
								<button class="delete">Delete</button>
					</div>`
	)
	contentSelector.append(newItem)

	const deleteButtonSelector = document.querySelector('.delete')
	const deleteElementSelector = document.querySelector('.item')

	deleteButtonSelector.addEventListener('click', () => {
		handleDeleteItem(deleteElementSelector)
	})
}

const handleDeleteItem = (deleteElementSelector) => {
	deleteElementSelector.remove()
}

controlButtonSelector.addEventListener('click', handleAddNote)
