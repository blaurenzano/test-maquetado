/**
 * Listview Sorter
 * @author Pablo Mendoza
 */


class ListviewSort {
	constructor(context) {
		this.selector = context.querySelector('.listing__container--sort-selector')
		if (this.selector) {
			this.items = []
			this.reset()
			this.bindings()
		}
	}

	reset() {
		this.selector.selectedIndex = 0
		document.querySelectorAll(`#${this.selector.dataset.target} .listing__container--item`).forEach(item => {
			this.items.push({
				item,
				value: item.dataset.price
			}) 
		})
	}

	bindings() {
		this.selector.addEventListener('change', (e) => {
			e.preventDefault()
			
			this.sort(e.target.value)
		})
	}

	// TODO: optimizar esto
	sort(by) {
		if (by === '*') {
			this.items.forEach((item, index) => {
				item['item'].style.removeProperty('order')
			})
		} else {
			if (by === '+') {
				this.items.sort((b, a) => a.value.localeCompare(b.value))
			} else if (by === '-') {
				this.items.sort((a, b) => a.value.localeCompare(b.value))
			}

			this.items.forEach((item, index) => {
				item['item'].style.order = index
			})
		} 
	}
}

export {ListviewSort}