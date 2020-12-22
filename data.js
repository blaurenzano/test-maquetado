export default function ProductsService(){

    let elem = [];

    function fetchJSONFile(path, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var data = JSON.parse(httpRequest.responseText);
                    if (callback) callback(data);
                }
            }
        };
        httpRequest.open('GET', path);
        httpRequest.send(); 
    }

    fetchJSONFile('./data/data.json', function(data){
        elem = data;
        var output = '';
        for (var i=0, l=elem.length; i<l ; i++) {
            output += `
                <div class="product-item ${elem[i].category} ${elem[i].size} ${elem[i].color}">
                    <img src="${elem[i].image.src}" class="img-fluid" alt="${elem[i].image.alt}">
                    <p class="texto product-name">${elem[i].name}</p>
                    <p class="texto product-price"><strong>$${elem[i].price}</strong></p>
                </div> 
            `; 
        }
        document.getElementById('products').innerHTML = output;
    });

    return { getData : function() {
        if (elem) {

            var prods = $('#products');
            // layout Isotope after each image loads
            prods.imagesLoaded( function() {
                setTimeout(() => {
                    prods.isotope();
                }, 100);           
            });
            prods.animate({
                opacity: 1,
                bottom: "+=50"
              }, 500
            );

            return elem;

        }
        else return false;
    }};

}