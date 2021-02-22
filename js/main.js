
function lapreuve(id , name , type , price, size, color) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.price = price;
  this.size= size;
  this.color = color;
}



let totalProducts;

let buildContent = document.getElementById("products-grid");

window.addEventListener("DOMContentLoaded", ()=> {

function getProducts() {
  var url = `js/products.json`;
  $.ajax({
    method: "GET",
    dataType: "json",
    url: url,
  })
  .done(function (products) {
    totalProducts = products;
    totalProducts.forEach(allShoes => {
    buildContent.innerHTML += 
      `
      <div class="img-card ${allShoes.color}">
        <img src="assets/productos/zapatilla_${allShoes.id}.jpg">
        <h4>${allShoes.name}</h4>
        <span>$${allShoes.price}</span>
      </div>
        `
        }
      )
  })
  .fail(function (error) {
    console.log(error);
  });

}

getProducts();

});

document.querySelector("#filter-color-white").addEventListener("click", function(event) {
  $(".white").show();
  $(".black").hide();
  $(".blue").hide();
  $(".green").hide();
  $(".yellow").hide();
  event.preventDefault();
});

document.querySelector("#filter-color-black").addEventListener("click", function(event) {
  $(".black").show();
  $(".white").hide();
  $(".blue").hide();
  $(".green").hide();
  $(".yellow").hide();
  event.preventDefault();
});