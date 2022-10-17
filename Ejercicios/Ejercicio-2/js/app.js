// ----------------------Variables
const carrito = document.querySelector('#carrito');
const cursos = document.querySelector('#lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


// ----------------------Eventos
cargarEventListeners();

function cargarEventListeners(){
    // Dispara cuando se presiona "Agregar carrito"
    cursos.addEventListener('click', comprarCurso);

    // Cuando se elminina el curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar el documento mostrar el LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

// ----------------------Funciones

// Función que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();

    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')){

        const curso = e.target.parentElement.parentElement;

        // Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

// Lee los datos del curso
function leerDatosCurso(curso){

    // Objeto que trae los datos del curso seleccionado
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> <img src="${curso.imagen}" width="130"/> </td>
        <td> ${curso.titulo} </td>
        <td> ${curso.precio} </td>
        <td> <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a> </td>
    `;
    
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);

}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();

    let curso, cursoID;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();

        // Accedemos al ID del curso por eliminar
        curso =  e.target.parentElement.parentElement;
        cursoID = curso.querySelector('a').getAttribute('data-id');
    }

    eliminarCursoLocalStorage(cursoID);

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito(){
    // Forma lenta 
    // listaCursos.innerHTML = '';

    // Forma rápida (recomendada)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }

    // Vaciar LocalStorage
    vaciarLocalStorage();

    return false;
}

// Almacena cursos en el carrito a LocalStorage
function guardarCursoLocalStorage(curso){
    let cursos;

    // Toma el valor de un arreglo con datos de LS o vacio
    cursos = obtenerCursosLocalStorage();

    // El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));

}


// Comprueba que haya elementos en LocalStorage  IMPORTANTE!
function obtenerCursosLocalStorage(){
    let cursosLs;

    // Comprobamos si hay algo en LocalStorage
    if(localStorage.getItem('cursos') === null){
        cursosLs = [];
    }else{
        cursosLs = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLs;
}

// Imprime los cursos de LocalStorage en el carrito (Recargar Página)
function leerLocalStorage(){

    let cursosLs;
    cursosLs = obtenerCursosLocalStorage();

    cursosLs.forEach(function(curso) {

        // Construimos el template
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${curso.imagen}" width="130"/> </td>
            <td> ${curso.titulo} </td>
            <td> ${curso.precio} </td>
            <td> <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a> </td>
        `;
        listaCursos.appendChild(row);
    });
}


// Elimina el curso por el ID en LocalStorage
function eliminarCursoLocalStorage(cursoID){ 
    let cursosLS;
    cursosLS = obtenerCursosLocalStorage(); 


    // Iteramos comparando el ID del curso borrado con los de LS
    cursosLS.forEach(function(curso, index){
        if(curso.id === cursoID){ 
            cursosLS.splice(index, 1); // Elimina el índice seleccionado
        }
    });

    // Añadimos el arreglo actual a Storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

// Elimina todo los cursos de LocalStorage
function vaciarLocalStorage(){
    localStorage.clear();
}


