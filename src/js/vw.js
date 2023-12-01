/*
{ "nombre" : "VolksWagen Vento" , "imagen" : "vento.jfif"}
*/
const vw = [
    {
         nombre : "VolksWagen Amarok 1.8",
         modelo : "2020",
         img : "amarok.jfif" 
    },
    { 
        nombre : "VolksWagen Bora 1.6",
        modelo : "2023",
        img : "bora.jfif" 
    },
    { 
        nombre : "VolksWagen Gol 1.6",
        modelo : "2021",
        img : "gol.jfif" 
    },
    { 
        nombre : "VolksWagen Golf 1.8",
        modelo : "2022",
        img : "golf.jfif" 
    },
    { 
        nombre : "VolksWagen Nivus 2.0",
        modelo : "2023",
        img : "nivus.jfif" 
    },
    { 
        nombre : "VolksWagen Passat 1.8",
        modelo : "2020",
        img : "passat.jfif" 
    },
    { 
        nombre : "VolksWagen Sirocco 2.0 ",
        modelo : "2022",
        img : "sirocco.jfif" 
    },
    { 
        nombre : "VolksWagen suran 1.9 ",
        modelo : "2019",
        img : "suran.jfif" 
    },
    { 
        nombre : "VolksWagen vento 2.0 ",
        modelo : "2021",
        img : "vento.jfif" 
    }
];

const click_vw = document.querySelector('#vw');
click_vw.addEventListener( 'click', ()=>{
    let vw_view = document.querySelector('#vw-view');
    if(vw_view.innerHTML === '' ){
        vw_view.classList.remove('ocultar');

        let titulo_stock = document.createElement('H2');
        let contenido_titulo = document.createTextNode('VolksWagen');
        titulo_stock.classList.add('titulo-stock')
        titulo_stock.appendChild(contenido_titulo);
        vw_view.appendChild(titulo_stock);
        
        let cards_container = document.createElement('DIV');
        cards_container.classList.add('cards-container');

        vw.filter( (item =>{
            cards_container.innerHTML += `
            <div class="card-item">
                <img src="src/img/vehiculos/vw/${item.img}" alt="" class="img-card">
                <h4 class="title-card">${item.nombre} ${item.modelo}</h4>
                <p class="p-card">En Stock</p>
            </div>
            `;
            vw_view.appendChild(cards_container);

        }));
    }else{
        vw_view.classList.add('ocultar');
        vw_view.innerHTML = '';

    }

});