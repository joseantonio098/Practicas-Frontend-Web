// -------------- Variables 
const productosAlmacenados = document.querySelector('.productos-almacenados');
const contenedorProductos = document.querySelector('.cont-select-producto');
const productoSeleccionado = document.querySelector('.cont-prod');
const btnLimpiar = document.querySelector('#limpiar');

// -------------- Eventos
activadorEventos();

function activadorEventos(){
    document.addEventListener('DOMContentLoaded', conservarProductos);

    productosAlmacenados.addEventListener('click', mostrarAviso);
    contenedorProductos.addEventListener('click', cerrarAviso);
    productoSeleccionado.addEventListener('click', eliminarProducto);
    btnLimpiar.addEventListener('click', limpiarTotal);
}

// -------------- Funciones

// Muestra el aviso de compra
function mostrarAviso(e){
    e.preventDefault();

    if(e.target.classList.contains('btn-comprar') && !e.target.classList.contains('activado')){

        //añade al boton la clase --> activado
        //e.target.classList.add('activado');
        
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
    e.preventDefault();

    if(e.target.classList.contains('cont-select-producto')){
        contenedorProductos.style.display = 'none';
    }
}

// Guarda las características del producto en un objeto
function guardarProducto(e){    
    e.preventDefault();

    // Accedemos al producto elegido
    const productoElegido = e.target.parentElement.parentElement.parentElement;
    const producto = {
        cantidad : 0,
        imagen : productoElegido.children[0].children[0].getAttribute('src'),
        titulo : productoElegido.children[1].children[0].children[0].textContent,
        precio : Number(productoElegido.children[2].children[0].children[0].textContent)
    }
    agregarProducto(producto);
    guardarProdLocalStorage(productoElegido);
}

// Agrega el producto en el aviso
function agregarProducto(producto){

    // Se crea el contenedor del producto
    const contProdElegido = document.createElement('div');
    contProdElegido.classList.add('prod-elegidos'); 


    crearCantidad(producto,contProdElegido); // Insertamos la cantidad
    crearImagen(producto,contProdElegido); // Insertamos la imagen
    crearTitulo(producto,contProdElegido); // Insertamos el título
    crearPrecio(producto,contProdElegido); // Insertamos el precio
    crearBtnCerrar(contProdElegido); // Insertamos el botón cerrar

    calcularPrecioTotal(); // Calculamos el precio total
}   

// Crea la cantidad del producto
function crearCantidad(producto,contProdElegido){

    const prodContCant = document.createElement('div');
    prodContCant.classList.add('cant');
    prodContCant.textContent += producto.cantidad +1;

    contProdElegido.appendChild(prodContCant);
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
    prodContPrecio.textContent =  producto.precio;

    // Se inserta el precio
    contProdElegido.appendChild(prodContPrecio);
}

// Crea el boton para eliminar cada producto
function crearBtnCerrar(contProdElegido){

    // Se crea el botón de cerrar
    const btnCerrar = document.createElement('p');
    btnCerrar.classList.add('cerrar');
    btnCerrar.innerHTML = 'X';

    // Se inserta el boton de cerrar
    contProdElegido.appendChild(btnCerrar);
}


// Permite sumar todo los precios
function calcularPrecioTotal(){
    
    // Accedemos a cada precio del producto
    const precioProducto = document.querySelectorAll('.cont-prod .prec');
    let sumaTotal = 0;

    // Iteramos a cada precio y lo almacenamos en sumaTotal
    precioProducto.forEach( function(e){
        sumaTotal += Number(e.textContent);
    });

    // Mostramos el precio total en pantalla
    const precioTotal = document.querySelector('.prec-total');
    precioTotal.textContent = 'S/. ' + sumaTotal;
}

// Permite eliminar cada produto al precionar el btn cerrar
function eliminarProducto(e){
    
    if(e.target.classList.contains('cerrar')){
        e.target.parentElement.children[3].textContent = 0;
        e.target.parentElement.style.display = 'none';
    }
    calcularPrecioTotal() // Solicitamos actualizar el precio total
}

// Permite eliminar todo los produtos al precionar el btn limpiar
function limpiarTotal(){
    const productosTotales = document.querySelectorAll('.cont-prod .prod-elegidos');
    
    productosTotales.forEach( function(e){

        // Borramos todo los productos seleccionados
        e.style.display = 'none';
        e.children[3].textContent = 0;
    })
    calcularPrecioTotal() // Solicitamos actualizar el precio total
}

// Permite conservar todo los productos al recargar la página
function conservarProductos(){

}


function guardarProdLocalStorage(productoElegido){
    localStorage.setItem('')
}

