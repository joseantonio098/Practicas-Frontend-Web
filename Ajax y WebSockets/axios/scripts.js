const btn = document.getElementById('btn');
const content = document.getElementById('myContent');

btn.addEventListener('click', ()=>{
    // axios.get('data.json')

    axios({
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
        }); 
});