const controlButtonSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

const handleAddNote = () => {
	const newItem = document.createElement('div')
	newItem.className = 'item'
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
}

controlButtonSelector.addEventListener('click', handleAddNote)
