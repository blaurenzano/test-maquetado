/**
 * Sale View
 * @author Pablo Mendoza
 */

import {HTML} from '../../config/constants'

const OPEN_CLASS = 'menu-active'

class Menu {
	constructor(context) {
		this.triggers = context.querySelectorAll('.header__mobile-menu--toggle')
		this.isOpen = HTML.classList.contains(OPEN_CLASS)

		if (this.triggers) {
			this.bindings()
		}
	}

	bindings() {
		this.triggers.forEach((trigger) => {
			trigger.addEventListener('click', (e) => {
				e.preventDefault()
				this.isOpen ? this.close() : this.open()
			})
		}) 
	}

	open() {
		HTML.classList.add(OPEN_CLASS)
		this.isOpen = true
	}
	
	close() {
		HTML.classList.remove(OPEN_CLASS)
		this.isOpen = false
	}
}

export {Menu}