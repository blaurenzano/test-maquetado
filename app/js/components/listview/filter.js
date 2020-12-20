/**
 * Listview Filter
 * @author Pablo Mendoza
 */

const DEFAULT_FILTER = {}
class ListviewFilter {
	constructor(context, options) {
		this.listView = context.querySelector('.listing__container')
		this.items = this.listView.querySelectorAll('.listing__container--item')
		this.controls = options.controls

		// filtros activos
		this.activeFilters = options.initialFilter || DEFAULT_FILTER
		this.onFilter = options.onFilter

		this.bindings()
		this.filter()
	}

	bindings() {
		this.controls.forEach((control) => {
			control.addEventListener('click', () => {
				if (!this.activeFilters[control.dataset.type]) {
					this.activeFilters[control.dataset.type] = {}
				}
				this.activeFilters[control.dataset.type][control.value] = control.checked
				this.filter()
			})
		})
	}
	
	filter() {
		const curFilter = this.normalizedFilter(this.activeFilters) // usamos la version normalizada del filtro
		let passedItems = []
		
		this.items.forEach(item => {
			// chequeo que se cumplan todas las condiciones
			let passed = Object.keys(curFilter).every(filter => {
				// con que algun item cumpla esta condicion aceptarlo
				return item.dataset[filter].split(",").some(current => {
					return curFilter[filter][current]
				})
			})
			if (passed) {
				item.classList.remove('hidden')
				passedItems.push(item) // lo agregamos para devolverlo de la funcion
			} else {
				item.classList.add('hidden')
			}
		})

		typeof this.onFilter === "function" && this.onFilter({items: passedItems})
	}

	// chequea si todos los filtros estan desactivados entonces es como si fueran todos activos y devuelve el filtro normalizado para esto
	normalizedFilter(originalFilter) {
		let normalizedFilter = JSON.parse(JSON.stringify(originalFilter))

		Object.keys(normalizedFilter).forEach( level => {
			// chequeo si todos los filtros de la categoria estan desactivados
			let allDeactivated = Object.keys(normalizedFilter[level]).every( filter => {
				return !normalizedFilter[level][filter]
			})
			
			if (allDeactivated) {
				// si estan todos desactivados los invierto y los pongo en true para mandarlo a la func filtro
				Object.keys(normalizedFilter[level]).forEach( filter => {
					normalizedFilter[level][filter] = true
				})
			}
		})
		
		return normalizedFilter
	}
}

export {ListviewFilter}
