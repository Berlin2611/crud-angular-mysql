import { r as registerInstance, h } from './index-987d4632.js';

const myComponentCss = ":host{display:block}button{outline:none;border:none;padding:10px 25px;margin-bottom:15px;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba( 0, 0, 0, 0.12);border-radius:6px;font-size:1em;text-transform:uppercase;transition:all 0.4s;cursor:pointer;background-color:white}button.primary{background-color:#f50057;color:white}button:hover{box-shadow:0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba( 0, 0, 0, 0.15)}button:active{opacity:0.8}button:disabled{opacity:0.3}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.primary = true;
        this.disabled = false;
    }
    handleClick() {
        this.disabled = true;
        setTimeout(() => this.disabled = false, 3000);
    }
    render() {
        return (h("button", { class: this.primary ? 'primary' : '', disabled: this.disabled }, this.value));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
