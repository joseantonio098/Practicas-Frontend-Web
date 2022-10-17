// -------------Constructor para seguro
function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// -------------Todo lo que se muestra
function Interfaz() {}


// -------------Eventlistener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    //Leer la marca seleccionada del <select>
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del <select>
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear instancia de interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no estén vacíos 
    if(marcaSeleccionada === '' ||  anioSeleccionado === '' ||  tipo === ''){
        //Interfaz imprimiendo un error
        console.log('Error');
    }else{
        //Instanciar seguro y mostrar interfaz
        console.log('Correcto');
    }
});

// -------------Definimos las opciones para el año
const max = new Date().getFullYear(); //Año actual
const min = max - 20;

const selectAnios = document.getElementById('anio');

for(let i=max; i>=min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}

