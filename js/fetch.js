window.onload = function(){
    let mostrar = document.getElementById('productos');
    let url = "./productos.json";
    fetch(url)
    .then(res => res.ok? res.json():Promise.reject(res))
    .then(datos=> {
        datos.forEach(el => {
            let nuevoProducto = document.createElement('article');
            nuevoProducto.setAttribute('class', '-nuevoproducto');
            nuevoProducto.setAttribute('name', 'producto');
            let textoProducto = document.createElement('p');
            textoProducto.innerText = `${el.categoria} ${el.modelo}`;
            textoProducto.setAttribute('class', '-textoproducto')
            let img = document.createElement('img');
            img.setAttribute('src', `assets/productos/${el.imagen}`);
            img.setAttribute('class', '-imgproducto');
            let precio = document.createElement('p');
            precio.innerText =  `$${el.precio}`;
            precio.setAttribute('class', '-precioproducto')
            mostrar.appendChild(nuevoProducto);
            nuevoProducto.append(img,textoProducto, precio);
        });
    })
    .catch(err => {
        console.log(err);
        let mensaje = err.statusText || "Ocurrio un error";
    });
}

