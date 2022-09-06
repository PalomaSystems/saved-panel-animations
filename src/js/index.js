import { fadeIn, fadeOut } from 'fade-animations'

const panelCreation = () => {
	const panelContainer = document.createElement('div')
	panelContainer.classList.add('panelContainer', 'fadeOut', 'd-none')
	return panelContainer
}
const createSavedPanel = () => {
	const panelContainer = panelCreation()

	const elem = document.createElement('div')
	elem.classList.add('savedPanel', 'toastPanel')
	elem.id = 'savedPanel'
	elem.setAttribute('aria-labelledby', 'savedPanelLabel')
	elem.innerHTML = '<p class="panelText">Saved Successful!</p>'
	panelContainer.appendChild(elem)
	document.body.appendChild(panelContainer)
}
const createDeletedPanel = () => {
	const panelContainer = panelCreation()

	const elem = document.createElement('div')
	elem.classList.add('deletedPanel', 'toastPanel')
	elem.id = 'deletedPanel'
	elem.setAttribute('aria-labelledby', 'deletedPanelLabel')
	elem.innerHTML = '<p class="panelText">Deleted Successful!</p>'
	panelContainer.appendChild(elem)
	document.body.appendChild(panelContainer)
}
const showHidePanel = () => {
	const panelContainer = document.querySelector('.panelContainer')
	fadeIn(panelContainer)

	setTimeout(() => {
		fadeOut(panelContainer)
		setTimeout(() => {
			panelContainer.remove()
		}, 500)
	}, 2000)
}
export const savedPanel = () => {
	createSavedPanel()

	showHidePanel()
}
export const deletedPanel = () => {
	createDeletedPanel()

	showHidePanel()
}

window.savedPanel = () => {
	createSavedPanel()

	const savedPanelDiv = document.getElementById('savedPanel')
	fadeIn(savedPanelDiv)

	setTimeout(() => {
		fadeOut(savedPanelDiv)
	}, 1000)
}
