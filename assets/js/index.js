
let productos = '';
let producto = [];
let lista_categoria = '';
let lista_talle = '';
let lista_color = '';

$(document).ready(function () {

    $(function () {
        fetch('https://api.jsonbin.io/b/5fe372aa4b8f7e61dfd231d9/5')

            .then(response => response.json())
            .then(json => {

                const producto = json;
                json.sort(() => .5 - Math.random());

                for (let i = 0; i < json.length; i++) {

                    productos = productos + `
                    <div class="col ${producto[i].categoria} ${producto[i].color} ${producto[i].talle}" id="col-${i}">
                        <div class="card custom-card">
                            <img src="${producto[i].imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto[i].nombre}</h5>
                                <p class="card-text">${producto[i].precio}</p>
                            </div>
                        </div>
                    </div>
                    `;

                    $(`#products-section_list`).html(productos);

                }

                // Filtros

                var filtros_cat = [];

                for (let i = 0; i <= 5; i++) {
                    $(`#cat-${i}`).click(function () {

                        if ($(`#cat-${i}`).is(':checked')) {

                            $('.col').remove();
                            filtros_cat.push(`#cat-${i}`);
                            

                            categoria = json.filter(categoria => categoria.categoria == `cat-${i}`);
                            

                            for (z = 0; z < categoria.length;z++) {
                                
                                lista_categoria = lista_categoria + `
                                
                                    <div class="col ${categoria[z].categoria} ${categoria[z].color} ${categoria[z].talle}" id="col-${z}">
                                        <div class="card custom-card">
                                            <img src="${categoria[z].imagen}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${categoria[z].nombre}</h5>
                                                <p class="card-text">${categoria[z].precio}</p>
                                            </div>
                                        </div>
                                    </div>    
                                `;                                
                                $(`#products-section_list`).html(lista_categoria);
                            }
                            
                        } else {
                            
                            $('.col').remove();
                            filtros_cat = filtros_cat.filter(filtros_cat => (
                                filtros_cat !== `#cat-${i}`
                            ))

                            $(`#products-section_list`).html(productos);
                            filtros_cat = [];
                            lista_categoria = [];
                        }
                    })
                }

                var filtros_talle = [];

                for (let i = 0; i <= 5; i++) {
                    $(`#talle-${i}`).click(function () {

                        if ($(`#talle-${i}`).is(':checked')) {

                            $('.col').remove();
                            filtros_talle.push(`#talle-${i}`);
                            

                            talle = json.filter(talle => talle.talle == `talle-${i}`);
                            

                            for (z = 0; z < talle.length;z++) {
                                
                                lista_talle = lista_talle + `
                                
                                    <div class="col ${talle[z].categoria} ${talle[z].color} ${talle[z].talle}" id="col-${z}">
                                        <div class="card custom-card">
                                            <img src="${talle[z].imagen}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${talle[z].nombre}</h5>
                                                <p class="card-text">${talle[z].precio}</p>
                                            </div>
                                        </div>
                                    </div>    
                                `;                                
                                $(`#products-section_list`).html(lista_talle);
                            }
                            
                        } else {
                            
                            $('.col').remove();
                            filtros_talle = filtros_talle.filter(filtros_talle => (
                                filtros_talle !== `#cat-${i}`
                            ))

                            $(`#products-section_list`).html(productos);
                            filtros_talle = [];
                            lista_talle = [];
                        }
                    })
                }


                var filtros_color = [];

                for (let i = 0; i <= 5; i++) {
                    $(`#color-${i}`).click(function () {

                        if ($(`#color-${i}`).is(':checked')) {

                            $('.col').remove();
                            filtros_color.push(`#color-${i}`);
                            

                            color = json.filter(color => color.color == `color-${i}`);
                            

                            for (z = 0; z < color.length;z++) {
                                
                                lista_color = lista_color + `
                                
                                    <div class="col ${color[z].categoria} ${color[z].color} ${color[z].talle}" id="col-${z}">
                                        <div class="card custom-card">
                                            <img src="${color[z].imagen}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${color[z].nombre}</h5>
                                                <p class="card-text">${color[z].precio}</p>
                                            </div>
                                        </div>
                                    </div>    
                                `;                                
                                $(`#products-section_list`).html(lista_color);
                            }
                            
                        } else {
                            
                            $('.col').remove();
                            filtros_color = filtros_color.filter(filtros_color => (
                                filtros_color !== `#color-${i}`
                            ))
                                                        

                            $(`#products-section_list`).html(productos);
                            filtros_color = [];
                            lista_color = [];
                        }
                    })
                }

            })
    })



    //    Selector de columnas

    $('#columnas-2').click(function () {
        $("#products-section_list").removeClass("row-cols-md-3 row-cols-md-4").addClass("row-cols-md-2");

    });

    $('#columnas-3').click(function () {
        $("#products-section_list").removeClass("row-cols-md-2 row-cols-md-4").addClass("row-cols-md-3");

    });

    $('#columnas-4').click(function () {
        $("#products-section_list").removeClass("row-cols-md-2 row-cols-md-3").addClass("row-cols-md-4");

    });

    $('#columnas-mobile__1').click(function () {
        $("#products-section_list").removeClass("row-cols-2 row-cols-md-2 row-cols-md-3 row-cols-md-4").addClass("row-cols-1");

    });

    $('#columnas-mobile__2').click(function () {
        $("#products-section_list").removeClass("row-cols-1 row-cols-md-3 row-cols-md-3 row-cols-md-4").addClass("row-cols-2");

    });
})