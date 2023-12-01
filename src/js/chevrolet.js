
 
const chevrolet = [
    {
         nombre : "Chevrolet Camaro 2.0",
         modelo : "2023",
         img : "camaro.jfif" 
    },
    { 
        nombre : "Chevrolet Captiva 1.6",
        modelo : "2023",
        img : "captiva.jfif" 
    },
    { 
        nombre : "Chevrolet Corsa 1.6",
        modelo : "2021",
        img : "corsa.jfif" 
    },
    { 
        nombre : "Chevrolet Cruze 1.8",
        modelo : "2022",
        img : "cruze.jfif" 
    },
    { 
        nombre : "Chevrolet Spin 1.8",
        modelo : "2023",
        img : "spin.jfif" 
    },
    { 
        nombre : "Chevrolet Onix 1.4",
        modelo : "2020",
        img : "onix.jfif" 
    }
];

const click_chevrolet = document.querySelector('#chevrolet');
click_chevrolet.addEventListener( 'click', ()=>{
    let chevrolet_view = document.querySelector('#chevrolet-view');
    if(chevrolet_view.innerHTML === '' ){
        chevrolet_view.classList.remove('ocultar');

        let titulo_stock = document.createElement('H2');
        let contenido_titulo = document.createTextNode('Chevrolet');
        titulo_stock.classList.add('titulo-stock')
        titulo_stock.appendChild(contenido_titulo);
        chevrolet_view.appendChild(titulo_stock);
        
        let cards_container = document.createElement('DIV');
        cards_container.classList.add('cards-container');

        chevrolet.filter( (item =>{
            cards_container.innerHTML += `
            <div class="card-item">
                <img src="src/img/vehiculos/chevrolet/${item.img}" alt="" class="img-card">
                <h4 class="title-card">${item.nombre} ${item.modelo}</h4>
                <p class="p-card">En Stock</p>
            </div>
            `;
            chevrolet_view.appendChild(cards_container);

        }));
    }else{
        chevrolet_view.classList.add('ocultar');
        chevrolet_view.innerHTML = '';

    }

});


