const tabs = Array.from(document.querySelectorAll('.tabs .tab'))
const startTab = tabs[0]
const calenderTab = tabs[1]
const openingTab = tabs[2]

const tabContentList = Array.from(document.querySelectorAll('.tab-content .tab-content-container'))

// startTab.addEventListener('click', () =>{
// 	tabContentList[0].classList.remove('hidden')
// 	tabContentList[1].classList.add('hidden')
// 	calenderTab.classList.remove('active')
// 	startTab.classList.add('active')
	

// })

// calenderTab.addEventListener('click', () =>{
// 	tabContentList[1].classList.remove('hidden')
// 	calenderTab.classList.add('active')
// 	startTab.classList.remove('active')

//

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		// Toggla synlighet, toggla markering på fliken
		hideAllContent() //TODO gör denna
		tabContentList[index].classList.remove('hidden')
		deselectTabs()
		tab.classList.add('active')

	})
})
//Skapat funktionen hideAllContent
function hideAllContent(){
	tabContentList.forEach(content => {
		content.classList.add('hidden')
	})
}
//Skapat funktionen deselectTabs
function deselectTabs(){
	tabs.forEach(tab => {
		tab.classList.remove('active')
	})
}