// -------------- Variables 
const productosAlmacenados = document.querySelector('.productos-almacenados');
const contenedorProductos = document.querySelector('.cont-select-producto');
const productoSeleccionado = document.querySelector('.cont-prod');

// -------------- Eventos
activadorEventos();

function activadorEventos(){
    productosAlmacenados.addEventListener('click', mostrarAviso);
    contenedorProductos.addEventListener('click', cerrarAviso);
}

// -------------- Funciones

// Muestra el aviso de compra
function mostrarAviso(e){
    if(e.target.classList.contains('btn-comprar')){

        // Mostrar Spinner
        document.querySelector('.cont-spinner').style.display = 'flex';
        
        setTimeout(function(){

            // Ocultar Spinner
            document.querySelector('.cont-spinner').style.display = 'none';
            contenedorProductos.style.display = 'flex';
        },2000)

        guardarProducto(e);
    } 
}

// Cierra el aviso de compra
function cerrarAviso(e){
    if(e.target.classList.contains('cont-select-producto')){
        contenedorProductos.style.display = 'none';
    }
}

// Guarda las características del producto en un objeto
function guardarProducto(e){

    // Accedemos al producto elegido
    const productoElegido = e.target.parentElement.parentElement.parentElement;
    const producto = {
        imagen : productoElegido.children[0].children[0].getAttribute('src'),
        titulo : productoElegido.children[1].children[0].children[0].textContent,
        precio : productoElegido.children[2].children[0].children[0].textContent
    }
    agregarProducto(producto)
}

// Agrega el producto en el aviso
function agregarProducto(producto){

    // Se crea el contenedor del producto
    const contProdElegido = document.createElement('div');
    contProdElegido.classList.add('prod-elegidos'); 

    crearImagen(producto,contProdElegido); // Insertamos la imagen
    crearTitulo(producto,contProdElegido); // Insertamos el título
    crearPrecio(producto,contProdElegido); // Insertamos el precio
}   


// Crea la imagen del producto
function crearImagen(producto,contProdElegido){
    // Se crea el contenedor de la imagen
    const prodContImg = document.createElement('div');
    prodContImg.classList.add('imagen');

    // Se crea la imagen
    const prodImg = document.createElement('img');
    prodImg.setAttribute('src', producto.imagen);

    // Se inserta la imagen
    prodContImg.appendChild(prodImg);
    contProdElegido.appendChild(prodContImg);
    productoSeleccionado.appendChild(contProdElegido);
}

// Crea el título del producto
function  crearTitulo(producto,contProdElegido){

    // Se crea el título
    const prodContTitulo = document.createElement('div');
    prodContTitulo.classList.add('prod');
    prodContTitulo.textContent = producto.titulo;

    // Se inserta el título
    contProdElegido.appendChild(prodContTitulo);
}

// Crea el precio del producto
function  crearPrecio(producto,contProdElegido){

    // Se crea el precio
    const prodContPrecio = document.createElement('div');
    prodContPrecio.classList.add('prec');
    prodContPrecio.textContent = producto.precio;

    // Se inserta el precio
    contProdElegido.appendChild(prodContPrecio);
}

