
let autos = document.querySelector('#autos');

const mercedes = [
    {
        nombre : 'Mercedes Benz A 1.9',
        modelo : '2022',
        img : 'a.jfif'
    },
    {
        nombre : 'Mercedes Benz GLA 2.0',
        modelo : '2023',
        img : 'gla.jfif'
    },
    {
       nombre : 'Mercedes Benz GLK 1.8',
        modelo : '2023',
        img : 'glk.jfif'
    },
    {
        nombre : 'Mercedes Benz Vito 1.9',
        modelo : '2023',
        img : 'vito.jfif'
    }
];

const click_mercedes = document.querySelector('#mercedes');
click_mercedes.addEventListener( 'click', ()=>{
    let mercedes_view = document.querySelector('#mercedes-view');
    if(mercedes_view.innerHTML === '' ){
        mercedes_view.classList.remove('ocultar');

        let titulo_stock = document.createElement('H2');
        let contenido_titulo = document.createTextNode('Mercedes Benz');
        titulo_stock.classList.add('titulo-stock')
        titulo_stock.appendChild(contenido_titulo);
        mercedes_view.appendChild(titulo_stock);

        let cards_container = document.createElement('DIV');
        cards_container.classList.add('cards-container');
 
        mercedes.filter( (item =>{
            cards_container.innerHTML += `
                <div class="card-item">
                    <img src="src/img/vehiculos/mercedes/${item.img}" alt="" class="img-card">
                    <h4 class="title-card">${item.nombre} ${item.modelo}</h4>
                    <p class="p-card">En Stock</p>
                </div>
            `;
            mercedes_view.appendChild(cards_container);

            
        }));
    }else{
        mercedes_view.classList.add('ocultar');
        mercedes_view.innerHTML = '';

    }

});






