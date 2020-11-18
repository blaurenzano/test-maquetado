var jsonFile = "data.json"

$(document).ready(function(){
  $.ajax({
    url: jsonFile,
    dataType: 'json',
      error: function(){
        console.log('JSON FAILED for data');
      },
    success:function(results){
  
      var cartItemsList = document.getElementById("products");

      results.list.productList.forEach(function(element) {
        console.log(element);
        cartItemsList.insertAdjacentHTML( 'beforeend',"<div class='item' id=" + element.product.id + ">" + "<img src=" + element.product.image + " >" + "<hr>"+"<p>"+element.product.name+"<br>"+ "<price>"+element.product.price+"</price>"+"</p>" +"</div>");
      
      }); // end of forEach
    }  // end of success fn
   }) // end of Ajax call
 }) // end of $(document).ready() function