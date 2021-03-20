var productos = document.querySelector('#productos')

  function traer(){
      fetch('../assets/data/info.json')
      .then(res => res.json() )
      .then (datos =>{
          console.log(datos)
          tabla(datos)
      })
  }

 //Fotos con Descripcion
  function tabla(datos){
    //console.log(datos.length)
    productos.innerHTML = ''

    for(let valor of datos){
        //console.log(valor.id)
        
        productos.innerHTML += `

        <div class="item col-lg-4 col-md-4 col-12 col-sm filter ${valor.id}">
              <img class="" src="${valor.imagen}" alt="">
            <p class="nombre-producto">${valor.nombre}</p>
            <p class="precio-producto">${valor.precio}</p>
          </div>
        `

    }


    //Filtro de imagenes



    $(document).ready(function(){
      
      $(".categoryItem").click(function(){
          var value = $(this).attr('data-filter');
          console.log(value)

          if(value == "todos"){
              $('.filter').show('1000');
          }else{
              $('.filter').not('.'+value).hide('3000');
              $('.filter').filter('.'+value).show('3000');
          }
      });
    
    });

  
}


