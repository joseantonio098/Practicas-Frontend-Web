
//-----------------Variables
const listaTweets = document.getElementById('lista-tweets');

//-----------------Eventos

eventListener();
function eventListener(){

    //cuando se envíe el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //cuando se de click en el boton de borrar
    listaTweets.addEventListener('click', borrarTweet);

    //contenido cargado (recarga la página)
    document.addEventListener('DOMContentLoaded', localStorageListo);

}

//-----------------Funciones

//Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();

    //leer el valor ingresado en el textarea
    const tweet = document.getElementById('tweet').value; 

    //crear boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    //crear el elemento (li) y añadirlo al contenido de la lista
    const li = document.createElement('li');
    li.innerText = tweet ;
    li.appendChild(botonBorrar);

    listaTweets.appendChild(li); //Añadimos el elemento a la lista de tweets

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

//Elimina el Tweet del DOM 
function borrarTweet(e){
    e.preventDefault();

    //Si el elemento selccionado tiene clase 'borrar-tweet' entonces .......
    if(e.target.className === 'borrar-tweet'){  //---> delegation
        e.target.parentElement.remove(); // Remover al elemento (li)
        
        let tweet = e.target.parentElement.textContent;
        borrarTweetLocalStorage(tweet);
    }
}

//Añadir tweet a Local Storage 
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de String a arreglo para local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

//Comprobar que haya elementos en localStorageListo IMPORTANTE!!
//Devuelve un arreglo vacio ó un arreglo con los tweets
function obtenerTweetLocalStorage(){
    let tweets;

    // Revisamos los valores de Local Storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse( localStorage.getItem('tweets') );
    }
    return tweets;
}

//Mostrar datos de LocalStorage en la lista al recargar página
function localStorageListo(){
    let tweets;
    tweets = obtenerTweetLocalStorage();

    //Recorremos los tweets y los mostramos en la listaTweets
    tweets.forEach( function(tweet){

        //crear boton de eliminar 
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        //crear el elemento (li) y añadirlo al contenido de la lista
        const li = document.createElement('li');
        li.innerText = tweet ;
        li.appendChild(botonBorrar);

        listaTweets.appendChild(li); //Añadimos el elemento a la lista de tweets
    });
}

//Eliminar tweet de LocalStorage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    
    tweetBorrar = tweet.substring(0, tweet.length -1); //Permite eliminar la 'X' del texto

    tweets = obtenerTweetLocalStorage();
    tweets.forEach( function(tweet, index){
        if( tweetBorrar === tweet ){
            tweets.splice(index, 1);
        }
    });   
    localStorage.setItem('tweets', JSON.stringify(tweets));
}