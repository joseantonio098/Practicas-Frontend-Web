const btn = document.getElementById('btn');
const content = document.getElementById('myContent');

btn.addEventListener('click', ()=>{

    fetch('data.json')
        .then(response => {
            switch (response.status) {
                case 200:
                    console.log(`Status %c ${response.status}`,"color:green; font-size:20px;") //style console
                    return response.json();
                case 500:
                    console.log('Error de servidor');
                    break;
                default:
                    break;
            }
        })
        .then(response => {
            response.forEach(e => {
                content.innerHTML += `${e.id} - ${e.registered} - ${e.tags[0]} <br>`;
            });
        });


    /* axios({
        method: 'get',
        url: 'data.json',
        responseType: 'json'
    })
        .then(function (response) {
            const arrDatos = response.data;
            arrDatos.forEach(e => {
                content.innerHTML += `${e.id} - ${e.address} <br>`;
            });
        })
        .catch(function (error) {
            content.innerHTML = `${error.message}`;
        })
        .finally(function (){
            alert('Cargando Info...');
        });  */
});