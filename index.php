<?php

$pageTitle = 'La preuve';

$productos = '[

  {"name":"Zapatilla 1-XFK","price":"5000", "img": "img/1.jpg"},
  {"name":"Zapatilla 2000-X","price":"9800", "img": "img/2.jpg"},
  {"name":"Zapatilla 3 Run","price":"6500", "img": "img/3.jpg"}
]';

$productos = json_decode($productos, true);




?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
<?php  require_once 'include/head.php'; ?>
<title> <?php echo $pageTitle; ?></title>
</head>

  <body>
    <div class="container-fluid p-0">
    <?php require_once 'include/nav.php'; ?>


      <div class="row">
        <div class="col-sm-12 col-md-4 d-flex justify-content-sm-start justify-content-md-end pt-sm-1 pt-md-5 pl-md-5 pl-sm-0">
          <div class="divFiltros mt-3">
            <p class="txtCategoria pl-2" >Zapatillas</p>
            <hr style="border-bottom: 1px solid;">

            <div class="divListFiltros pl-2">
              <p class="txtFiltros">Filtrar</p>

              <ul class="mt-1">
                <li class="Filtros">Categor&iacute;as</li>
                <li class="ItemsFiltros">Zapatillas</li>
                <li class="ItemsFiltros">Zapatos</li>
                <li class="ItemsFiltros">Botas</li>
                <li class="ItemsFiltros">Sandalias</li>
                <li class="ItemsFiltros">Pantuflas</li>
              </ul>


              <ul class="mt-1">
                <li class="Filtros">Talle</li>
                <li class="ItemsFiltros">36</li>
                <li class="ItemsFiltros">37</li>
                <li class="ItemsFiltros">38</li>
                <li class="ItemsFiltros">39</li>
                <li class="ItemsFiltros">40</li>
              </ul>


              <ul class="mt-1">
                <li class="Filtros">Color</li>
                <li class="ItemsFiltros">Amarillo</li>
                <li class="ItemsFiltros">Negro</li>
                <li class="ItemsFiltros">Verde</li>
                <li class="ItemsFiltros">Azul</li>
                <li class="ItemsFiltros">Blanco</li>
              </ul>


            </div>
          </div>
        </div>


        <div class="col-sm-12 col-md-8 pt-5">
          <div class="row" >
            <?php
            foreach ($productos as $value) { ?>
              <div class="col-md-4 col-sm-12">
                <img src="<?php echo $value['img'] ?>" alt="" width="100%">
                <hr style="border-bottom: 1px solid">
                <p class="txtProducto m-0"><?php echo $value['name'] ?></p>
                <p class="precio m-0">$ <?php echo $value['price'] ?></p>
              </div>
          <?php } ?>
        </div>
        <div class="row" >
          <?php
          foreach (array_reverse($productos) as $value) { ?>
            <div class="col-md-4 col-sm-12">
              <img src="<?php echo $value['img'] ?>" alt="" width="100%">
              <hr style="border-bottom: 1px solid">
              <p class="txtProducto m-0"><?php echo $value['name'] ?></p>
              <p class="precio m-0">$ <?php echo $value['price'] ?></p>
            </div>
        <?php } ?>
      </div>
      <div class="row" >
        <?php
        foreach ($productos as $value) { ?>
          <div class="col-md-4 col-sm-12">
            <img src="<?php echo $value['img'] ?>" alt="" width="100%">
            <hr style="border-bottom: 1px solid">
            <p class="txtProducto m-0"><?php echo $value['name'] ?></p>
            <p class="precio m-0">$ <?php echo $value['price'] ?></p>
          </div>
      <?php } ?>
      </div>


      </div>
    </div>

    <?php require_once 'include/footer.php' ?>
  </body>
</html>
