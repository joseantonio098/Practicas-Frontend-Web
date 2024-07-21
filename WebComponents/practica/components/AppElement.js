class AppElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = /* html */`
            <p> Forma 1 de insertar componentes (string) </p>
        `
    }
}

customElements.define('app-element', AppElement);