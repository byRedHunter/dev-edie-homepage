const headerMenu = document.querySelector('.header-icon')
const headerIcon = document.querySelector('.header-icon .fa')
const headerNav = document.querySelector('.header-nav')

headerMenu.addEventListener('click', () => {
	toggleMenu()
})

const toggleMenu = () => {
	headerNav.classList.toggle('active')

	if (headerIcon.classList.contains('fa-bars')) {
		headerIcon.classList.remove('fa-bars')
		headerIcon.classList.add('fa-times')
	} else {
		headerIcon.classList.remove('fa-times')
		headerIcon.classList.add('fa-bars')
	}
}

const removeClasses = (e) => {
	if (window.innerWidth >= 900) {
		headerIcon.classList.remove('fa-times')
		headerIcon.classList.add('fa-bars')
		headerNav.classList.remove('active')
	}

	e.stopPropagation()
}

window.onresize = removeClasses
