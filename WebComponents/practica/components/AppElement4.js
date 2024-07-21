import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.1.2/+esm";
const template = html /* html */`
    <div class="containter">
        <p>Forma 4 de insertar componentes (Librería)</p>
    </div>
`
class AppElement4 extends HTMLElement{
    constructor() {
        super();
        render(template, this);
    }
}

customElements.define("app-element4", AppElement4);