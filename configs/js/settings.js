$(function(){

    // Data Loader
    let objH = '';
    let objH2 = '';
    let objH3 = '';
    let objH4 = '';
    let json = data;     
    let filterStatus = false;
    // Data Loader
    
    json.data.forEach(data => {
        objH += `
        <div class="col-12 col-md-6 col-lg-4">

                <div class="card">
                <img class="card-img-top" src="${data.imagen}" alt="${data.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${data.nombre}</h5>
                    <p class="card-text">$${data.precio}</p>
                    <p class="smaller text-muted p-0 mt-0">Talles: ${data.talles}</p>
                    <p class="smaller text-muted p-0 mt-0">Colores: ${data.colores}</p>
                </div>
                </div>

        </div>`;
        console.log(data.nombre+' loaded!');
            $('#dataGen').html(objH);
    });
    // Individual Data Loader para Filtros
    for (let i = 0; i < json.categorias.length; i++) {
        objH2 = `<li class="filter">${json.categorias[i]}</li>`
        $('#catLoader').append(objH2);   
    }
    for (let i = 0; i < json.talles.length; i++) {
        objH3 = `<li class="filter">${json.talles[i]}</li>`
        $('#tallesLoader').append(objH3); 
    }
    for (let i = 0; i < json.colores.length; i++) {
        objH4 = `<li class="filter">${json.colores[i]}</li>`
        $('#colorLoader').append(objH4); 
    }
    // Individual Data Loader para Filtros
    

    // FILTERS

    $('.filter').on('click',function(e){
        e.preventDefault();
        var text = jQuery(this).text();
        json.categorias.filter(function(i,n){
            if(i===text){
                filterStatus = true;
            }
            return n===text;
        });
        console.log(text.trim());
    });


    // MENU TOGGLER
    $('#buttonMenu').on('click', function(){
        if($('#navPreuve').hasClass('d-none')){
            $('#openBar').toggleClass('d-none');
            $('#closeBar').toggleClass('d-none');
            $('#navPreuve').toggleClass('d-none');
            $('#collapseThis').collapse('show').fadeIn('slow');  
            console.log('opened menu');
        }else if(!$('#navPreuve').hasClass('d-none')){
            $('#collapseThis').collapse('hide').fadeOut('slow');  
            console.log('closed menu');
            setTimeout(() => {
                $('#navPreuve').toggleClass('d-none');
                $('#openBar').toggleClass('d-none');
                $('#closeBar').toggleClass('d-none');
            }, 350);
        }
    });

    // MENU TOGGLER
    // BTN Acordion Togglers and Icons

    $('#iconToggle1').on('click', function(){
    if($('#iconToggle1').hasClass('collapsed')){
            if($('#iToggle1').hasClass('fa-plus')){
             $('#iToggle1').removeClass('fa-plus');
             $('#iToggle1').addClass('fa-times');
             console.log('opened filter');
            }else if($('#iToggle1').hasClass('fa-times')){
             $('#iToggle1').addClass('fa-plus');
             $('#iToggle1').removeClass('fa-times');
             console.log('closed filter');
            }
     }else{
         if($('#iToggle1').hasClass('fa-plus')){
             $('#iToggle1').removeClass('fa-plus');
             $('#iToggle1').addClass('fa-times');
             console.log('opened filter');
            }else if($('#iToggle1').hasClass('fa-times')){
             $('#iToggle1').addClass('fa-plus');
             $('#iToggle1').removeClass('fa-times');
             console.log('closed filter');
            }
        }
     });
     $('#btnToggle1').on('click', function(){
    if($('#btnToggle1').hasClass('collapsed')){
             if($('#iToggle1').hasClass('fa-plus')){
              $('#iToggle1').removeClass('fa-plus');
              $('#iToggle1').addClass('fa-times');
              console.log('opened filter');
             }else if($('#iToggle1').hasClass('fa-times')){
              $('#iToggle1').addClass('fa-plus');
              $('#iToggle1').removeClass('fa-times');
              console.log('closed filter');
             }
      }else{
          if($('#iToggle1').hasClass('fa-plus')){
              $('#iToggle1').removeClass('fa-plus');
              $('#iToggle1').addClass('fa-times');
              console.log('opened filter');
             }else if($('#iToggle1').hasClass('fa-times')){
              $('#iToggle1').addClass('fa-plus');
              $('#iToggle1').removeClass('fa-times');
              console.log('closed filter');
             }
         }
      });

    $('#iconToggle2').on('click', function(){
    if($('#iconToggle2').hasClass('collapsed')){
            if($('#iToggle2').hasClass('fa-plus')){
             $('#iToggle2').removeClass('fa-plus');
             $('#iToggle2').addClass('fa-times');
             console.log('opened filter');
            }else if($('#iToggle2').hasClass('fa-times')){
             $('#iToggle2').addClass('fa-plus');
             $('#iToggle2').removeClass('fa-times');
             console.log('closed filter');
            }
     }else{
         if($('#iToggle2').hasClass('fa-plus')){
             $('#iToggle2').removeClass('fa-plus');
             $('#iToggle2').addClass('fa-times');
             console.log('opened filter');
            }else if($('#iToggle2').hasClass('fa-times')){
             $('#iToggle2').addClass('fa-plus');
             $('#iToggle2').removeClass('fa-times');
            }
        }
     });
     $('#btnToggle2').on('click', function(){
         if($('#btnToggle2').hasClass('collapsed')){
             if($('#iToggle2').hasClass('fa-plus')){
              $('#iToggle2').removeClass('fa-plus');
              $('#iToggle2').addClass('fa-times');
              console.log('opened filter');
             }else if($('#iToggle2').hasClass('fa-times')){
              $('#iToggle2').addClass('fa-plus');
              $('#iToggle2').removeClass('fa-times');
              console.log('closed filter');
             }
      }else{
          if($('#iToggle2').hasClass('fa-plus')){
              $('#iToggle2').removeClass('fa-plus');
              $('#iToggle2').addClass('fa-times');
              console.log('opened filter');
             }else if($('#iToggle2').hasClass('fa-times')){
              $('#iToggle2').addClass('fa-plus');
              $('#iToggle2').removeClass('fa-times');
              console.log('closed filter');
             }
         }
      });
    $('#iconToggle3').on('click', function(){
       if($('#iconToggle3').hasClass('collapsed')){
           if($('#iToggle3').hasClass('fa-plus')){
            $('#iToggle3').removeClass('fa-plus');
            $('#iToggle3').addClass('fa-times');
            console.log('opened filter');
           }else if($('#iToggle3').hasClass('fa-times')){
            $('#iToggle3').addClass('fa-plus');
            $('#iToggle3').removeClass('fa-times');
            console.log('closed filter');
           }
    }else{
        if($('#iToggle3').hasClass('fa-plus')){
            $('#iToggle3').removeClass('fa-plus');
            $('#iToggle3').addClass('fa-times');
            console.log('opened filter');
           }else if($('#iToggle3').hasClass('fa-times')){
            $('#iToggle3').addClass('fa-plus');
            $('#iToggle3').removeClass('fa-times');
            console.log('closed filter');
           }
       }
    });
    $('#btnToggle3').on('click', function(){
        if($('#btnToggle3').hasClass('collapsed')){
            if($('#iToggle3').hasClass('fa-plus')){
             $('#iToggle3').removeClass('fa-plus');
             $('#iToggle3').addClass('fa-times');
             console.log('opened filter');
            }else if($('#iToggle3').hasClass('fa-times')){
             $('#iToggle3').addClass('fa-plus');
             $('#iToggle3').removeClass('fa-times');
             console.log('closed filter');
            }
     }else{
         if($('#iToggle3').hasClass('fa-plus')){
             $('#iToggle3').removeClass('fa-plus');
             $('#iToggle3').addClass('fa-times');
             console.log('opened filter');
            }else if($('#iToggle3').hasClass('fa-times')){
             $('#iToggle3').addClass('fa-plus');
             $('#iToggle3').removeClass('fa-times');
             console.log('closed filter');
            }
        }
     });


     function filterObjects(e){
        console.log(e.target.value);
    }
});