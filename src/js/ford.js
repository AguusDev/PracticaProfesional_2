
 
const ford = [
    {
         nombre : "Ford EcoSport 2.0",
         modelo : "2023",
         img : "ecosport.jfif" 
    },
    { 
        nombre : "Ford Fiesta 1.6",
        modelo : "2023",
        img : "fiesta.jfif" 
    },
    { 
        nombre : "Ford Focus 1.6",
        modelo : "2021",
        img : "focus.jfif" 
    },
    { 
        nombre : "Ford GT 2.0",
        modelo : "2022",
        img : "gt.jpg" 
    },
    { 
        nombre : "Ford Ka 1.6",
        modelo : "2023",
        img : "ka.jfif" 
    },
    { 
        nombre : "Ford Mustang 2.0",
        modelo : "2020",
        img : "mustang.jfif" 
    },
    { 
        nombre : "Ford Ranger 2.0",
        modelo : "2020",
        img : "ranger.jfif" 
    },
    { 
        nombre : "Ford Raptor 2.0",
        modelo : "2020",
        img : "raptor.jfif" 
    }
];

const click_ford = document.querySelector('#ford');
click_ford.addEventListener( 'click', ()=>{
    let ford_view = document.querySelector('#ford-view');
    if(ford_view.innerHTML === '' ){
        ford_view.classList.remove('ocultar');

        let titulo_stock = document.createElement('H2');
        let contenido_titulo = document.createTextNode('Ford');
        titulo_stock.classList.add('titulo-stock')
        titulo_stock.appendChild(contenido_titulo);
        ford_view.appendChild(titulo_stock);

        let cards_container = document.createElement('DIV');
        cards_container.classList.add('cards-container');
 
        ford.filter( (item =>{
            cards_container.innerHTML += `
            <div class="card-item">
                <img src="src/img/vehiculos/ford/${item.img}" alt="" class="img-card">
                <h4 class="title-card">${item.nombre} ${item.modelo}</h4>
                <p class="p-card">En Stock</p>
            </div>
            `;
            ford_view.appendChild(cards_container);
            
        }));
    }else{
        ford_view.classList.add('ocultar');
        ford_view.innerHTML = '';

    }

});