// -------------------PETICION-DE-DATOS-JSON--------------------
function traerDatos() {
  const xhttp = new XMLHttpRequest()
  //   Realizamos peticion al archivo json
  xhttp.open('GET', '../json/productos.json', true)
  xhttp.send()
  //   Cuando los cambios estan listos utilizamos los datos que contiene el json
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText)

      let res = document.querySelector('#grid-product')

      datos.forEach((producto) => {
        res.innerHTML += `
          <article class="card">
          <figure class="card__figure">
              <img src="${producto.img}" alt="producto" class="card__image">
          </figure>
          <div class="card__body">
              <div class="card__title">${producto.title}</div>
              <div class="card__price">${producto.price}</div>
          </div>
          </article>
          `
      })
    }
  }
}
// -------------------END-PETICION-DE-DATOS-JSON----------------
