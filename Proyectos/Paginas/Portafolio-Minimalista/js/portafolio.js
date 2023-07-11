 //----> Inicializar: Permite trabajar la Sección grid con su algoritmo Muuri¡¡
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

//----> cuando la página cargue ejecutame la sgte función 
window.addEventListener('load', () =>{
    grid.refreshItems().layout(); //---> Permite que las img se adapten al tamaño de la pag, (responsive) Muuri

    document.getElementById('grid').classList.add('imagenes-cargadas');

//-----> para iterar con los enlaces al hacer click ----------------------------
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach( (elemento) => {

        elemento.addEventListener('click', (e) =>{
            e.preventDefault();
            enlaces.forEach( (enlace) => enlace.classList.remove('activo'));
            e.target.classList.add('activo');        
            
            //-----> para filtrar los enlaces ----> Muuri
            const categoria = e.target.innerHTML.toLowerCase();

            if(categoria === 'todos'){
                grid.filter('[data-categoria]');
            }else{
                grid.filter(`[data-categoria="${categoria}"]`); 
            }

        });
    });

//-----> para Acceder a la barra de búsqueda  ----------------------------
    document.querySelector('#barra-busqueda').addEventListener('input', (e) =>{
        const busqueda = e.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

//-----> para Acceder a las imágenes  ----------------------------
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {

        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');  // Para obtener la ruta de las imagenes
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion; // Para obtener la descripcion (texto)

            overlay.classList.add('activo');
            document.querySelector('#overlay .contenedor-img img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        });
    });
    //---------> Para cerrar las imágenes del overlay
    let btnCerrar = document.getElementById('btn-cerrar-popup');
    btnCerrar.addEventListener('click', () => overlay.classList.remove('activo'));

    //---------> Evento del overlay
    overlay.addEventListener('click', (e) => {    
        e.target.id === 'overlay' ? overlay.classList.remove('activo') : ''; // ----> Condicional ternario
    })
})
