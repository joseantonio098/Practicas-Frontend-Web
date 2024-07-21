const template = document.createElement('template');
template.innerHTML = /* html */ `
    <div class="containter">
        <p>Forma 3 de insertar componentes (Template)</p>
    </div>
`

class AppElement3 extends HTMLElement{
    connectedCallback(){
        const html = template.content.cloneNode(true);
        this.append(html)
    }
}

customElements.define('app-element3', AppElement3);