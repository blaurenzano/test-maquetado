/*
Elegí hacerlo en HTML, CSS y JS porque, a mi parecer, 
es la mejor forma de demostrar las habilidades que uno tiene.
Si lo hubiese hecho en Angular, o con alguna librería
como Bootstrap, me hubiera llevado la mitad del tiempo, pero
tendría muchísimo código sin utilizar.



*/


d3.json("data.json").then(function(data_json) {
    let attach = document.getElementsByClassName('items')

    data_json.map(zapatilla => {
        attach[0].insertAdjacentHTML('beforeend',
        
            `
            <div style="display: inline-block; margin: 10px; width: 30% left: 60vh;">
                <img src=${zapatilla.picture} height='150px'>
                <hr>
                <p> ${zapatilla.title} </p>
                <h5> $${zapatilla.price} </h5>
            </div>
            `
        )
    })
})
