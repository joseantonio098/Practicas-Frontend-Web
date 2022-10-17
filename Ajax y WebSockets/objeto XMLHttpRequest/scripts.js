const btnLoad = document.getElementById('btnLoad');
const content = document.getElementById('myContent');

const btnLoad2 = document.getElementById('btnLoad2');
const content2 = document.getElementById('myContent2');

/* AJAX -> HTML */
btnLoad.addEventListener('click', i =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.html',true);

    xhr.addEventListener('load', e =>{
        if(e.target.status == 200 && e.target.readyState == 4){
            content.innerHTML = e.target.responseText;
        }else{
            content.innerHTML = `Error al cargar datos`;
        }
    });
    xhr.send();
});

/* AJAX -> JSON */
btnLoad2.addEventListener('click', i =>{
    xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true)

    xhr.addEventListener('load', e =>{
        switch (e.target.status) {
            case 200:
                dataJson = JSON.parse(e.target.responseText);
                dataJson.forEach( x => {
                    content2.innerHTML += `${x.id} - ${x.index} - ${x.adress} <br>`;
                });
                break;
            case 400:
                    content2.innerHTML += `No estás autorizado para realizar esta acción`;
                break;
            case 404:
                    content2.innerHTML += `No existe información... ERROR 404`;
                break;
            case 500:
                    content2.innerHTML += `Hubo un error en el servidor`;
                break;
        }
    });
    xhr.send();
});