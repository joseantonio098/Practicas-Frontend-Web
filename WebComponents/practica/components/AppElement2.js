class AppElement2 extends HTMLElement{
    constructor(){
        super();

        const container = document.createElement('div');
        container.classList.add('container');
        this.append(container);

        const texto = document.createElement('p');
        texto.textContent = 'Forma 2 de insertar componentes (DOM)';
        container.append(texto);
    }
}

customElements.define('app-element2', AppElement2);