/**
 * Sale View
 * @author Pablo Mendoza
 */

import {
    DEBUG,
    HTML, LANG,
} from '../config/constants'

import {Menu} from '../components/menu/menu'
import {ListviewGrid} from '../components/listview/grid'
import {ListviewFilter} from '../components/listview/filter'
import {ListviewSort} from '../components/listview/sort'

class PageView {
	constructor(context) {
		this.context = context
		this.menu()
		this.layoutChoser()
		this.sortChoser()
		this.sidebarFilters()
	}

	menu() {
		new Menu(this.context)
	}

	layoutChoser() {
		new ListviewGrid(this.context)
	}
	
	sortChoser() {
		new ListviewSort(this.context)
	}

	sidebarFilters() {
		const controls = this.context.querySelectorAll('.sidebar__filter--item')
		let initialFilter = {category: {}, size: {}, color: {}}

		controls.forEach(control => {
			initialFilter[control.dataset.type][control.value] = control.checked
		})

		new ListviewFilter(this.context, {controls, initialFilter, onFilter: (data) => {
			document.querySelector('#listing-filter-count').textContent = data.items.length
			
		}})
	}
}

export {PageView};