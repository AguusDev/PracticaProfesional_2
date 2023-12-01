

const citroen = [
    {
         nombre : "Citroen 3cv 1.8",
         modelo : "1985",
         img : "3cv-carrera.jfif" 
    },
    { 
        nombre : "Citroen Aircross 1.6",
        modelo : "2023",
        img : "aircross.jfif" 
    },
    { 
        nombre : "Citroen Berlingo 1.6",
        modelo : "2021",
        img : "berlingo.jfif" 
    },
    { 
        nombre : "Citroen C3 1.9",
        modelo : "2022",
        img : "c3.jfif" 
    },
    { 
        nombre : "Citroen C4 1.6",
        modelo : "2023",
        img : "c4.jfif" 
    },
    { 
        nombre : "Citroen Oli 1.9",
        modelo : "2020",
        img : "oli.jfif" 
    },
    { 
        nombre : "Citroen Xsara 1.8 16v",
        modelo : "2000",
        img : "xsara.jfif" 
    }
];

const click_citroen = document.querySelector('#citroen');
click_citroen.addEventListener( 'click', ()=>{
    let citroen_view = document.querySelector('#citroen-view');
    if(citroen_view.innerHTML === '' ){
        citroen_view.classList.remove('ocultar');

        let titulo_stock = document.createElement('H2');
        let contenido_titulo = document.createTextNode('Citroen');
        titulo_stock.classList.add('titulo-stock')
        titulo_stock.appendChild(contenido_titulo);
        citroen_view.appendChild(titulo_stock);
        
        let cards_container = document.createElement('DIV');
        cards_container.classList.add('cards-container');

        citroen.filter( (item =>{
            cards_container.innerHTML += `
            <div class="card-item">
                <img src="src/img/vehiculos/citroen/${item.img}" alt="" class="img-card">
                <h4 class="title-card">${item.nombre} ${item.modelo}</h4>
                <p class="p-card">En Stock</p>
            </div>
            `;
            citroen_view.appendChild(cards_container);

        }));
    }else{
        citroen_view.classList.add('ocultar');
        citroen_view.innerHTML = '';

    }

});