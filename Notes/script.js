const controlBtnSelector = document.querySelector('.control-button')
const contentSelector = document.querySelector('.content')

const HandleAddNote = () => {
	console.log('click')

	const newItem = document.createElement('div')
	const itemTextContainer = document.createElement('div')
	const itemLabel = document.createElement('label')
	const itemTextarea = document.createElement('textarea')
	const itemButtonsPanel = document.createElement('div')
	const itemButtonEdit = document.createElement('button')
	const itemButtonDelete = document.createElement('button')

	newItem.className = 'item'
	itemTextContainer.className = 'item_text_block'
	itemButtonsPanel.className = 'buttons_panel'
	itemButtonEdit.className = 'edit'
	itemButtonEdit.innerText = 'Edit'
	itemButtonDelete.className = 'delete'
	itemButtonDelete.innerText = 'Delete'

	contentSelector.append(newItem)
	newItem.append(itemTextContainer)
	itemTextContainer.append(itemLabel)
	itemLabel.append(itemTextarea)
	newItem.append(itemButtonsPanel)
	itemButtonsPanel.append(itemButtonEdit, itemButtonDelete)
}

controlBtnSelector.addEventListener('click', HandleAddNote)
