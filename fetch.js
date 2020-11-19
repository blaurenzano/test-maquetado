
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    var mainContainer = document.getElementById("products");
    for (var i = 0; i < data.length; i++) {
        var article = document.createElement("article");
        var a = document.createElement("a");
        var img = document.createElement('img');
        var p = document.createElement('p')
        var p2 = document.createElement('p')
        p.innerHTML = data[i].nombre
        p2.innerHTML = data[i].precio
        img.src = data[i].imagen
        img.alt = data[i].nombre

        article.className = "col-12 col-md-4 article-container"
        a.className = "--text-decoration-none"
        img.className = "article-img"
        p.className = "article-text"
        p2.className = "article-text --bold"
        a.appendChild(img)
        a.appendChild(p)
        a.appendChild(p2)
        article.appendChild(a);
        mainContainer.appendChild(article);
    }
}