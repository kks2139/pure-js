import style from './Component.module.scss';

class Loading {
    Root = null;

    constructor({targ}){
        this.Root = document.createElement('div');
        this.Root.className = style.Loading;
        targ.appendChild(this.Root);

        this.render();
    }

    hide = ()=>{
        this.Root.parentNode.removeChild(this.Root);
    }

    render = ()=>{
        this.Root.innerHTML = `
            <div class='modal'></div>
            <div class='dots'>
                <div class='d1'></div>
                <div class='d2'></div>
                <div class='d3'></div>
                <div class='d4'></div>
                <div class='d5'></div>
                <div class='d6'></div>
                <div class='d7'></div>
                <div class='d8'></div>
            </div>
        `;
    }
}

export default Loading;