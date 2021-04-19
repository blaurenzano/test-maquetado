var app = new Vue({
    el: '#app',
    data: {
        data :{},
        items: "items-hide",
        state:{
            category: true,
            size: true,
            color: true
        }
    },
    beforeMount(){
        this.getData();
    },
    methods: {
        async getData(){
            const res = await fetch('data/data.json');
            let data = {};
            if(res.statusText === 'OK'){
                data = await res.json();
                setTimeout(function(){
                    document.querySelector('.main').classList.remove('items-hide');
                    let listItem = document.querySelectorAll(".item");
                    for (var i = 0; i < listItem.length; ++i) {
                        listItem[i].classList.add('fade');
                    }
                }, 1000);

            }else{
                console.log('No se puede cargar los datos en este momento');
            }
            this.data = data;
        },

        accordion: function (name) {
            if(name === 'category'){
                this.state.category = !this.state.category;
                console.log(this.state.category);
            }
            if(name === 'size'){
                this.state.size = !this.state.size;
                console.log(this.state.size);
            }
            if(name === 'color'){
                this.state.color = !this.state.color;
                console.log(this.state.color);
            }
        },

        openNav:function(){
            document.querySelector('.nav').classList.add('open-nav');
        },
        closeNav:function(){
            document.querySelector('.nav').classList.remove('open-nav');
        },
    }


})
